<script setup>
//Import des éléments de vue
import {reactive, ref, onMounted} from 'vue';

    //Import d'un graphique typeLineChart
    import {Line} from 'vue-chartjs'

     import {getEcoles} from "../composables/serviceAjax"

     import {getLabels, countDatas} from "../composables/utilsApp"

    //Import des ojbets du graphique de la bibliothèque ChartJs
    //Voir documentation pour descriptof des éléments
    import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, LineController, CategoryScale, LinearScale, Filler} from 'chart.js'

    //Elements utilisés par notre graphique registration pour Vue-chart
    ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, LineController, CategoryScale, LinearScale, Filler)

    //Propriétés du graphique utilisés dans le template (props)
    //On définit pour chacune son type de données et sa valeur par défaut
    //On peut utiliser une grande variété de types, voire des objets
    const propChart = defineProps({
        chartId: {type: String,     default: 'line-chart'}, //Id du graphique
        datasetIdKey: {type: String, default: 'label'}, //id du dataSet
        width: {type: Number, default: 250},//Hauteur du graphe
        height: {type: Number, default: 175}, //Largeur du graphe
        cssClasses: {type:String, default:''},//Classes css utilisées
        styles: {type: Object, default: () => {}}, //Styles utilisés
        plugins: {type: Object, default: () => {}}, //plugins utilisés
    });
        //Données injectées dans le graphique
        let chartData = reactive({
            labels: [],
            datasets: [
                {
                    //Etiquette du jeu de doonnées à projeter
                    label : 'Ecoles',
                    //Valeurs des données (statiques pour l'exemple)
                    data: [40, 20, 12, 14, 24],
                    borderColor: 'rgba(255, 0, 0, 0.5)',
                    tension: 0.5,
                    fill: true,
                    //Points de la courbe
                    pointBackgroundColor: "#ED4D6E", //Couleur de fond du point
                    pointBorderColor: "#F56475", //Bordure entourant le point
                    pointHoverBackgroundColor: "#ED4D6E", //Couleur de fond du pointau passage de la souris
                    pointHoverBorderColor: "#F56475", //Bordure entourant le point au passage de la souris
                    pointRadius: 4, //Rayon du point
                    pointHoverRadius: 6, //Rayon du point au passage de la souris
                },
            ]
        });

        //Otpions du graphique
        //Les principales utilisées, ils en existe beaucoup d'autres
        //Voir documentation
        let chartOptions = reactive({
            //Aspect responsive du graphique
            responsive: true,
            //les plugins
            plugins:{
                //titre du graphique
                title: {
                    //Affichage
                    display: true,
                    //Libellé du graphique
                    text: "Nombre d'écoles créées par année entre 1431 et 2021 :",
                    // Police du texte
                    font: {
                        size: 16
                    }
                }
            }
        });

        
        let listeEcoles = ref(null);

        let loading = ref()
        loading.value = false
        
       onMounted(async() => {
            await getEcoles()
        .then(response => {
            listeEcoles.value = response.records
            
            //Titre du graphique
            
            chartData.labels = getLabels(listeEcoles.value, 'fields.date_creation#1')
            //Comptage
            chartData.datasets[0].data = countDatas(listeEcoles.value, chartData.labels, 'fields.date_creation#1')
        })

                console.log("tri libellé : ", chartData.labels)
                

                let cptecole = []
            chartData.labels.forEach((lbl) =>{
              let i = 0
              listeEcoles.value.forEach((val) =>{
                if(val.fields.date_creation == lbl){
                  i += 1
                }
              })
              
              cptecole.push(i)
            })

            chartData.datasets[0].data = cptecole
            console.log("data :", chartData.datasets)

               
                let bgColor=[];
                let bdColor = [];
                   
                    cptecole.forEach( function(val){
                        
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
        
        <Line
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :witdh="width"
            :height="height"
        />
    </div>
    

</template>