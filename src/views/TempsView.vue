<template>
    <h3 class="h2 mb-5 xl:text-[45px] md:text-[35px] text-[25px] text-Rose_foncé font-bold">L’enseignement supérieur dans le temps</h3>

    <h3 class="h2 my-5 text-Rose_foncé">Recherchez ici les écoles dans votre département !</h3>
    <mapDep/>    

    <img class="mb-10 w-full" src="/graphique.jpg" alt="graphique"/>
    <p class="texte xl:mx-10">L’enseignement supérieur a beaucoup évolué au cours du temps. C’est ce qui se retranscrit très bien dans le graphique ci-dessus. En effet, on peut voir que la création des écoles a été mouvementé selon les années. </p>

    <div class="lg:flex items-center">
        <p class="lg:w-1/2 lg:h-1/2 texte">On peut observer 3 pics durant l’histoire de la création des écoles : le premier en 1971, qui est aussi le plus important. Cette année là, 24 universités ont été créées dont l’Université de Franche-Comté, celle de Bourgogne et l’Université de Limoges. Cette nette augmentation peut s’expliquer par l’entrée en vigueur de la loi Faure qui réforme les Universités, supprime les facultés et met en place un conseil d’Université (CPU)</p>
        <img class="m-auto lg:w-1/2 lg:h-1/2 my-5" src="/chapeau.jpg" alt="coiffe de fin d'étude"/>
    </div>

    <p class="texte mt-5 lg:mx-10">Le deuxième pic se trouve en 1991-1992. Sur ces deux années, 12 écoles ont été créées. C’est par exemple le cas de Université de Versailles Saint-Quentins-en-Yvelines, Sciences Po-Rennes ou encore l’école de biologie industrielle. </p>
    <p class="texte lg:mx-10">Enfin, le dernier pic date de l’année 2019 : cette année là, 9 écoles ont été créées. Université Paris Sciences et lettres ou l’Université Côte d’azur ont notamment vu le jour. Cette nouvelle augmentation vient s’inscrire dans une réforme de l’Université : parcours personnalisé, fixation de prérequis dans le choix des étudiants, Création de la plateforme Parcousup en 2018,...</p>
    <p class="texte lg:mx-10">Autant de changement qui ont accompagné et encouragé la création de ces nouvelles écoles. </p>

    <div class="lg:flex items-center ">
        <livre class="lg:w-1/5 lg:h-1/5 my-10 mx-auto"/>
        <div class="lg:w-3/5 lg:h-3/5 lg:flex lg:flex-col">
            <p class="texte">Cependant, la plus ancienne école créée d’après ce graphique, parmi celle dont les dates ont été renseignées, date d’une année beaucoup plus antérieure : en effet, l’Université de Poitier a été créé en 1431. Bien entendu il existe des universités encore plus anciennes que celle-ci, mais sur le jeu de données utilisé ici c’est la plus ancienne enregistrée.</p><br/>
            <p class="texte">Enfin, les Universités dernièrement créées en 2021 sont au nombre de 4 : l’Université de Montpellier, l’Université de Paris-Panthéon-Assas, Nantes Université et Université de Lille.</p>
        </div>
    </div>

    <router-link to="/typeseta">
    <bouton class="my-10 mx-auto">Lire un autre article</bouton>
    </router-link>

    <Footer/>
</template>

<script setup>
import livre from "../components/icons/livre.vue"
import bouton from "../components/Bouton.vue"
import Footer from "../components/Footer.vue"
import mapDep from "../components/MapDepart.vue"
</script>