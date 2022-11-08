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
  height: { type: Number, default: 500 }, //Hauteur du graphique
  cssClasses: { type: String, default: "" }, //Classes ccs utilisées
  styles: { type: Object, default: () => {} }, //styles ccs utilisée
  plugins: { type: Object, default: () => {} }, //plugins utilisés
});

    
        const chartData = reactive({
            
            labels: [],
            datasets : [{
              label: "Répartition des bacheliers par académie",
            }]
        })

        
        const chartOptions = reactive ({
            responsive: true, 
            maintainAspectRatio: false
        })

        
        let listeEnseign = ref(null);

        let loading = ref()
        loading.value = false
        
       onMounted(async() => {
            await getEnseign()
        .then(response => {
            listeEnseign.value = response.records
            console.log("bob", response)
            //Titre du graphique
            
            chartData.labels = getLabels(listeEnseign.value, 'fields.aca_lib#1')
            //Comptage
            
        })         
    
                console.log("tri libellé : ", chartData.labels)

                let cptbach = []
            chartData.labels.forEach((lbl) =>{
              let i = 0
              listeEnseign.value.forEach((val) =>{
                if(val.fields.aca_lib == lbl){
                  i += val.fields.bacheliers
                }
              })
              
              cptbach.push(i)
            })
            console.log("cptbach", cptbach)
           

            
            console.log("cptbach", cptbach)
            chartData.datasets[0].data = cptbach
            console.log("data :", chartData.datasets)

               
                let bgColor=[];
                let bdColor = [];
                   
                    cptbach.forEach( function(val){
                        
                        let c1 = couleur(0, 255)
                        let c2 = couleur(0,255)
                        let c3 = couleur(0, 255)
                        let tr = 0.5
                       
                        let color = 'rgba(' + [c1, c2, c3, tr].join(',') +")"
                        bgColor.push(color)
                    })
                   
                    chartData.datasets[0].backgroundColor = bgColor;
                    chartData.datasets[0].borderColor = bdColor;
                    
        
        })
        const couleur = (min, max) => {
            return Math.floor(Math.random() * (max - min));
        }

                
</script>

<template>

    <div class="container">
        
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
    

</template>