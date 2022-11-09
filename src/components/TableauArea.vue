<script setup>
//Import des éléments de vue
import {ref, reactive, onMounted} from 'vue';

//Import des fonctions de servicesAjax.js
import {getEcoles} from '@/composables/serviceAjax.js'

//Import des fonctions de utilsApp.js
import {getLabels, countDatas} from '@/composables/utilsApp.js'

//Import des fonctions de CommunChart.js
import {aleatoire, densite} from '@/composables/commonChart.js'

//import du composant TableMdl
import TableMdl from '@/components/TableMdl.vue'

//Import fonctions composables utilsTable.js
import {linearData, sortCol, filterColumn} from '@/composables/UtilsTable.js'

//Import d'un graphique type polar
import {PolarArea} from 'vue-chartjs'

//Import des objets du graphique de la bibliothèque ChartJs
    import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, RadialLinearScale} from 'chart.js'
 
    //Elements utilisées par notre graphique registration pour Vue-chart
    ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

    const propChart = defineProps({
        chartId: {type: String,     default: 'polar-chart'}, //Id du graphique
        datasetIdKey: {type: String, default: 'label'}, //id du dataSet
        width: {type: Number, default: 500},//Hauteur du graphe
        height: {type: Number, default: 500}, //Largeur du graphe
        cssClasses: {type:String, default:''},//Classes css utilisées
        styles: {type: Object, default: () => {}}, //Styles utilisés
        plugins: {type: Object, default: () => {}}, //plugins utilisés
    });

    //Initialiser au moins les structures principales
    let chartData = reactive({
        labels:[],
        datasets:[{}]
    })

    //Options de graphe
    const chartOptions = reactive({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title:{
                text:null,
                display: true
            }
        }
    })

//donnée sélectionnées
//On utilise une seule source de données
// que l'on sélectionne suivant le menu
let dataSelected = ref()

//Selection mode aleatoire/dégradé
// Pour la liste déroulante
let modeSelected = ref()
//Par défaut : false, mode dégradé
modeSelected.value = false
//Coloration de base du graphique
// passée aux fonctions
// de coloration des barres et bordures
let baseColor = ref()

//Initialisations
let fields = ref() //Champs du tableau
let title = ref() //Title du tableau
let color = ref() //Couleur du texte du tableau
let titleGraph = ref('') // Titre du graphe
let dataView = ref('') //valeurs de données sélectionnées pour la visualisation
let numDataset = 0 // Num des données dans le dataset

//Liste des données
let items = ref()
let itemsSvg = ref()

//Champs pour la table des écoles
let fieldsEcoles = ref()
fieldsEcoles.value = [
    {key: 'fields.uo_lib_officiel', label:"Nom de l'établissement", type: "string", sortable: true, sort: 1, filter:""},
    {key: 'fields.secteur_d_etablissement', label:"Secteur", type: "string", sortable: true, sort: 1, filter:""},
    {key: 'fields.com_nom', label:"Nom commune", type: "string", sortable: true, sort: 1, filter:""},
    {key: 'fields.dep_nom', label:"Nom département", type: "string", sortable: true, sort: 1, filter:""},
    {key: 'fields.reg_nom', label:"Nom région", type: "string", sortable: true, sort: 1, filter:""},
    {key: 'fields.aca_nom', label:"Nom académie", type: "string", sortable: true, sort: 1, filter:""},
]

//Fonction appelée lorsque le type de coloration a changé
    const selectMode = () => {
        let bgColor = null
        let bdColor = null

        if(modeSelected.value){
            //Couleurs aléatoires
            [bgColor, bdColor] = aleatoire(chartData.labels)
        }else{
            //Couleurs densité
            [bgColor, bdColor] = densite(baseColor.value, chartData.datasets[0].data)
        }

        //Mise à jour des couleurs du graphe
        chartData.datasets[0].backgroundColor = bgColor
        chartData.datasets[0].borderColor = bdColor
        chartData.datasets[0].borderWidth = 1
    }

    const selectData = async () => {
    await getEcoles()
            .then(response => {
                items.value = response.records
                titleGraph.value = "Types d'établissement"
                dataView.value = 'fields.type_d_etablissement#1'
                baseColor.value = 'rgba(0,0,255,#deg#)'
                numDataset = 0
                fields.value = fieldsEcoles.value
                color.value = "color:black;"
            })

    //Linearisation des données
    items.value = linearData(fields.value, items.value)
    //Sauvegarde data pour le filtrage
    itemsSvg.value = items.value
    //Mise en à jour graphique
    }
    

//Fonction de mise à jour du graphique
const updateGraph = (items) => {
    //Titre du graphique
        chartOptions.plugins.title.text = titleGraph
        //Recherche labels
        chartData.labels = getLabels(items.value, dataView.value)
        //Comptage
        chartData.datasets[numDataset].data = countDatas(items.value, chartData.labels,dataView.value)
        //Détermine le mode demandé
        selectMode()
        title.value = chartOptions.plugins.title.text
}

onMounted(async() => {
    //Par défaut : sélection villageois
    await selectData('ecoles')
    updateGraph(items)
})

// Fonctions de filtrage
// Déclenchée par le composant TableMdl 
const tableFilter = (field) => {
    //Appel fonction de filtrage
    items.value = filterColumn(field, itemsSvg.value)
    //Mise à jour graphe
    updateGraph(items)
}


 
</script>

<template>
    <div class="container-fluid">
    <br/>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <form class="navbar-nav ml-auto">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" v-model="modeSelected" @change="selectMode">
            <label class="custom-control-label" for="customSwitch1">dégradé/aléatoire</label>
            </div>
        </form>
    </nav>

    <div class="row">
        <div class="col-4">
    <PolarArea class=""
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
    <div class="col-8">
        <TableMdl class=""
        :title="title"
        :fields="fields"
        :items="items"
        :itemsSvg="itemsSvg"
        :color="color"
        @tableFilter="tableFilter"
        />
    </div>
    </div>
</div>
</template>


<style scoped>

.custom-control-label{
    color: #8a9da0;
}

</style>