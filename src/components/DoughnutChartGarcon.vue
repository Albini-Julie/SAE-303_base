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
            maintainAspectRatio: false
        })

        
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
            //chartOptions.plugins.title = "Lignes de l'enseignement supérieur"
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
                if(val.fields.serie_du_bac == lbl && val.fields.genre == "Masculin"){
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