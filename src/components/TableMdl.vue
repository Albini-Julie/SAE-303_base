<script setup>
//Import fonctions composables utilsTable.js
import {linearData, sortCol} from '@/composables/UtilsTable.js'
// Propriétés de la table
const propTable = defineProps({
    title: {title:String, default:""}, //Titre de la table
    fields: {type : Object, default: () => {}}, //Champs utilisés
    items: {type:Object, default: () => {}}, // Données utilisées
    color: {type: String, default: "color:black;"} // Couleur du texte
})

//Emission d'un message vers le composant parent
//Modification des données
const emit = defineEmits(['filterTab'])
const filterTab = (field) => {
    emit('tableFilter', field)
}

</script>

<template>
    <div class="container">
    <h1>{{title}}</h1>
            <table class="table table-bordered table-striped" :style="color">
            <thead>
                <tr>
                    <!-- Les différents colonnes-->
                    <th v-for="field in fields" :key='field'> 
                        <div class="input-group-text w-100 mb-2">
                            <span class="col-10">{{field.label}}</span>
                            <!--Picto de tri si la colonne est triable sortable = true-->
                            <span class="col-2">
                                <i v-if="field.sortable" class="fa fa-sort float-right" @click="sortCol(items,field)"></i>
                            </span>
                        </div>
                        <div class="input-group">
                            <!--Picto filtrage-->
                            <span class="input-group-text">
                                <i class="fa fa-filter fa-sm"></i>
                            </span>
                            <input class=" border-2 border-Rose_foncé rounded-lg" @input="filterTab(field)" v-model="field.filter"/>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!--Parcours des données-->
                <tr v-for="item in items" :key='item'>
                <!--Affichage des valeurs-->
                <td v-for="field in fields" :key='field'>
                <span>{{item[field.key]}}</span>
            </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
