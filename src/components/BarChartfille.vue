<script setup>
//Import des éléments de vue
import { ref, reactive, onMounted } from "vue";

import {getEnseign} from "../composables/serviceAjax"

import {getLabels, countDatas} from "../composables/utilsApp"

//import d'un type de graphique de type barchart
import { Bar } from "vue-chartjs";

//Import des objets du graphique de la bibliothèque ChartJs
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

//Eléments utilisés par le graphique
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

//Propriétés du graphique utilisées dans le template
//On définit pour chacune son type de données et sa valeur par défaut
//On peut utiliser une grande variété de type, voire des objets
const propChart = defineProps({
  chartId: { type: String, default: "bar-chart" }, //id du graphique
  datasetIdKey: { type: String, default: "label" }, //id du dataSet
  width: { type: Number, default: 200}, //largeur du graphique
  height: { type: Number, default: 70 }, //Hauteur du graphique
  cssClasses: { type: String, default: "" }, //Classes ccs utilisées
  styles: { type: Object, default: () => {} }, //styles ccs utilisée
  plugins: { type: Object, default: () => {} }, //plugins utilisés
});

//Doonées injectées dans le graphique
let chartData = reactive({
  //Etiquette de l'axe
  labels: [],
  //Valeurs des données du graphique
  
  datasets: [
    {
      label: "Répartition des filles par bacs dans l'enseignement supérieur",
      //Valeurs des données
      data: [],
      // Couleur des barres en regard des valeurs
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(60, 170, 240, 0.2)",
      ],
      // Couleur de la bordure de chaque barre
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(60, 170, 240)",
      ],
      borderWidth: 1,
    },
  ],
})

//Options du graphique
//Les principales utilisées, il en existe d'autres
//Voir documentation
let chartOptions = reactive({
  //Aspect responsive du graphique
  responsive: true,
  //Maintien du ratio
  maintainAspectRation: false,

  //Type de projetction utilisée
  // x : verticale
  // y: horizontale
  indexAxis: "x",

  //Echelles du graphique
  scales: {
    //axe des ordonnées
    y: {
      // Valeur max des y
      suggestedMax: 100,
      ticks: {
        //Police
        font: {
          size: 16,
        },
      },
    },
    //axe des abscisses
    x: {
      // Valeur max des y
      ticks: {
        //Police
        font: {
          size: 16,
        },
      },
    },
  },

  //Les plugins
  plugins: {
    //Légende des données
    legend: {
      //label des données
      labels: {
        color: "black",
        font: {
          size: 16,
        },
      },
    },
  },
});

let liste = ref(null);
    //Liste des oui non
    //table nb de villageois par spécialité
    let lstNb = [];
    let listeEnseign = [];

    let loading = ref()
    loading.value = false

    //Au montage du composant
    onMounted(async() => {
            await getEnseign()
        .then(response => {
            listeEnseign.value = response.records
            console.log(response)
            //Titre du graphique
            chartOptions.plugins.title = "Lignes de l'enseignement supérieur"
            chartData.labels = getLabels(listeEnseign.value, 'fields.serie_du_bac#1')
            //Comptage
            chartData.datasets[0].data = countDatas(listeEnseign.value, chartData.labels, 'fields.serie_du_bac#1')
             //Coloration de base pour coloration dégradée (vert)
            // baseColor.value = 'rgba(0, 255, 0, #deg#)'
            // console.log("baseColor : ", baseColor)
            //Determine le mode demandé
            
        })
            loading.value = true

            // let setBacs = new Set()
            // let firstLine = true
            // listeEnseign.value.forEach( (el) => {
            //     if(!firstLine){ 
            //         setBacs.add(el[label]) 
            //     }
            //     firstLine = false
            // })


            let cptfille = []
            chartData.labels.forEach((lbl) =>{
              let i = 0
              listeEnseign.value.forEach((val) =>{
                if(val.fields.serie_du_bac == lbl && val.fields.genre == "Féminin"){
                  i += val.fields.bacheliers
                }
              })
              cptfille.push(i)
            })
            chartData.datasets[0].data = cptfille

            //Chargement des labels
            // chartData.labels = Array.from(setBacs)

            
            // // Comptage nb accidents par type de voie
            // // On créé un tableau de la taille de celui des labels
            // // Avec toutes les cellulles à zero (fill)
            // let cptfilles = new Array(chartData.labels.length).fill(0)
            // // Compteur pour comptage
            // let i=0
            // chartData.labels.forEach( (label) =>{
            //   firstLine = true
            //   liste.value.forEach( (val) => {
            //       if(!firstLine){                    
            //         if(val[fields.genre] == "Féminin"){
            //           cptfilles[i]++
            //         }
            //     }
            //     firstLine = false
            //   })
            //   i++
            // })

            // // Comptage total pour vérif.
            // let totalAcc = 0
            // cptRoutes.forEach( (route)=>{
            //   totalAcc += route
            // })
            // // Mise à jour labal avec nb accidents
            // chartData.datasets[0].label += " ("+totalAcc+" accidents)" 

        
            

            //Calcul des couleurs et bordures
                let bgColor=[];
                let bdColor = [];
                //Pour chaque valeur existante
                cptfille.forEach( function(val){
                    //On calcul la couleur du secteur
                    let c1 = couleur(0, 255)
                    let c2 = couleur(0,255)
                    let c3 = couleur(0, 255)
                    let tr = 0.5
                    //Couleur avec transparence
                    let color = 'rgba(' + [c1, c2, c3, tr].join(',') +")"
                    bgColor.push(color)
                })
                //Chargement des couleurs et des bordures
                chartData.datasets[0].backgroundColor = bgColor;
                chartData.datasets[0].borderColor = bdColor;
            })
            

    const couleur = (min, max) => {
        return Math.floor(Math.random() * (max - min));
    }
</script>

<template>
  <div v-if="loading">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
  <div v-else>
        
    </div>
</template>

<script scoped>
</script>