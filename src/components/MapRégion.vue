<script setup>
    //import éléments de vue
    import {onMounted, ref, reactive} from 'vue'
    //import leaflet
    import * as Leaflet from 'leaflet'
    //css leaflet
    import "leaflet/dist/leaflet.css"

    //Canevas leaflet pour la carte
    let tileLayer = Leaflet.tileLayer
    //Initialisation de la carte sous forme de ref
    let map = ref()

    //Liste des départements
    let listeReg = ref()
    //Département sélectionné
    let regSelect = ref()

    //Liste des gars pour un département
    let listeEcoles = ref()

    //Lorsque le composant est monté dans la vue
    //On affiche la carte
    onMounted(async () => {
        //Caractéristiques visuelle de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });

        //Création de la carte sir la div ayant : id='map'
        map = Leaflet.map('map',
        {
            zoomControl: true,  //Controle du Zoom
            layers: [tileLayer],    //Canevas pour dessiner la carte
            maxZoom: 18,            // Zoom maxi autorisé
            minZoom: 6              // Zoom mini autorisé
        })
        //Porjetction de la carte avec centrage aux coordonées indiquées avec facteur d'agrandissement
        .setView([46, 1.7], 0)

        //Recherche des départements - geo api gouv
        await fetch ('https://geo.api.gouv.fr/regions')
        //Réponse demandée en json
        .then(response => response.json())
        //Récupération de la réponse 
        .then(response => {
            listeReg.value = response;
            //On vérifie dans la console l'obtention des résultats
            console.log("reponse", listeReg);
            //Valeur 0 par défaut : Sélectionner un département
            depSelect.value="0"
        })
        .catch(error => console.log('erreur Ajax'))
    })
    
    //Fonction de sélection du dpértement
    const selection = async (reg) =>{
        console.log("région sélectionnée", reg)
        //Requête Sncf
        let request = 'https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/'
        +'?dataset=fr-esr-cartographie_formations_parcoursup'
        +'&q=' + reg
        +'&rows=1000'
        +'&facet=annee'
        +'&facet=etab_uai'
        +'&facet=etab_nom'
        +'&facet=tc'
        +'&facet=tf'
        +'&facet=nm'
        +'&facet=fl'
        +'&facet=app'
        +'&facet=int'
        +'&facet=amg'
        +'&facet=aut'
        +'&facet=region'
        +'&facet=departement'
        +'&facet=commune'
        +'&facet=nmc'
        +'&facet=gta'
        +'&facet=gti'
        +'&facet=etablissement_id_paysage'
        +'&facet=composante_id_paysage'
        +'&facet=rnd'
        +'&facet=code_formation'
        console.log("request", request)
        //Recherche des départements - api gouv
        await fetch(request)
        //Réponse demandée en json
        .then(response => response.json())
        //Récupération de la réponse
        .then(response => {
            //Récupération de la liste des gars
            listeEcoles.value = response.records;
            //On vérifie dans la console l'obetention des résultats
            console.log("Liste des écoles", listeEcoles);
            //Instanciation des markers 
            //Calque featureGroup - groupe de calques (markers)
            let markers = Leaflet.featureGroup();
            //Création d'un icône, le même pour tous
            let myIcon = Leaflet.icon({iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png', iconSize: [25, 41],
    shadowSize: [25, 41], iconAnchor: [0, 0], shadowAnchor: [-10, -10], popupAnchor: [0, 0]});
    //Parcours des gares
    listeEcoles.value.forEach((ecole) =>{
        //Récupération
        let position = ecole.geometry.coordinates;
        //nom de la commune
        let libelle = ecole.fields.etab_nom;
        //Ajout d'un marqueur
        //Attention latitude/longitude inversées dans les données
        let marker = Leaflet.marker([position[1], position[0]], {icon: myIcon});
        //Ajout d'un infobulle
        marker.bindPopup(libelle);
        //ajout au tableau de markers
        markers.addLayer(marker);
    })
    //Ajout des markers à la carte
    map.addLayer(markers);
    //Positionnement sur l'ensemble des markers
    //la fonction fitbounds permet de repositionner la carte
    //sur lecentre d'un ensemble de latitude/longitude
    //la fonction getBounds permet de donner les deux points extrêmes
    //(rectangle) de l'ensemble des marqueurs
    map.fitBounds(markers.getBounds());
    
})
    .catch(error => console.log('erreur Ajax'))
    }
</script>

<template>
    <div>
        <div class="">
            <select class="border-2 border-Rose_foncé " v-model="regSelect" @change="selection(regSelect)">
                <option disabled value="0">Choississez une région</option>
                <option v-for="reg in listeReg" :key="reg.code" :value="reg.nom">
            {{reg.code}} - {{reg.nom}}
            </option>
            </select>
            <div id="map">
            </div>
        </div>
    </div>
</template>

<style scoped>
    #map {
        width:100%;
        height: 70vh;
    }

</style>