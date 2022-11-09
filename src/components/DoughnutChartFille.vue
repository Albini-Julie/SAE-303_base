<script setup>
    
    import {ref, reactive, onMounted} from 'vue'
    
    import * as Leaflet from 'leaflet'
    
    //css leaflet
    import "leaflet/dist/leaflet.css"

    import {Doughnut} from 'vue-chartjs'

    import {getEnseign} from "../composables/serviceAjax"

import {getLabels, countDatas} from "../composables/utilsApp"

   
    import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale} from 'chart.js'

    
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

   
    const propChart = defineProps({
        chartId: {type: String, default: 'doughnut-chart'}, 
        datasetIdkey: {type: String, default: 'label'}, 
        width: {type: Number, default: 50}, 
        height: {type: Number, default: 50},
        cssClasses: {type: String, default: ''}, 
        styles : {type: Object, default: () => {}} 
    })

    
        const chartData = reactive({
            labels: [],
            datasets : [{}]
        })

        
        const chartOptions = reactive ({
            responsive: true, 
            maintainAspectRatio: false,
            legend: {
            position: 'right'
            }
        })

        
        let liste = ref(null);
    
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
            
            chartData.labels = getLabels(listeEnseign.value, 'fields.serie_du_bac#1')
            //Comptage
            chartData.datasets[0].data = countDatas(listeEnseign.value, chartData.labels, 'fields.serie_du_bac#1')
             
            
        })
            loading.value = true
            
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

    <div class="container">
        
        <Doughnut
            :chart-otpions="chartOptions"
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