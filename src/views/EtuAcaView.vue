<template>
    <h3 class="h2 mb-5 xl:text-[45px] md:text-[35px] text-[25px] text-Rose_foncé font-bold">Répartition des étudiants par académie</h3>
    <div class="lg:flex items-center">
    <p class="texte text-center">Nous allons ici étudier la répartition des étudiants de l’enseignement supérieur selon les académies entre 2010 et 2021.</p>
    <img class="lg:w-1/2 lg:h-1/2 my-5" src="/pie.png" alt="graphique pie"/>
    </div>
    
    <p class="texte mt-10 xl:mx-10">Les académies ayant accueilli le plus d’étudiants dans le supérieur entre 2010 et 2021 sont Versailles avec 9% des éudiants parmi toute la France, Créteil (6,5%) et Lille (6,3%). Ces trois villes sont suivies de Nantes (5,8%), Rennes (5,3%) et Grenoble (5,1%). Ces grandes villes disposent de nombreuses écoles et sont attractives pour les étudiants de part leur dynamisme.  </p><br/>

    <p class="texte xl:mx-10">Ainsi, pour attirer les étudiants à venir étudier dans sa ville, il faut veiller à la rendre jeune et dynamique avec des activités qui pourront plaire aux étudiants dans leur temps libre.</p>

    <div class="lg:flex items-center">
        <img class="m-auto my-10" src="/rue.jpg" alt="image rue"/>
        <div class="flex flex-col">
        <p class="texte">Il faut également accompagner les jeunes dans leur vie étudiante et dans leur vie en tant qu’habitant : proposer des prix et des offres pour les étudiants, les aider dans les démarches, mettre en place des infrastructures d’écoute,...</p>
        <p class="texte">En effet, souvent, les étudiants ne disposent pas d’un revenu suffisant pour vivre, surtout dans les grandes villes où le revenu est élevé. Ils sont aussi seul à vivre leur quotidien qui est parfois pesant.</p>
        <br/>
        <p class="texte">Ainsi, le but est vraiment de mettre les étudiants au coeur de la démarche de développement de la ville pour qu’ils se sentent pris en compte et accompagnés.</p>
        </div>
    </div>

    <router-link to="/genres">
    <bouton class="my-10 mx-auto">Lire un autre article</bouton>
    </router-link>

    <Footer/>

    
</template>

<script setup>
import bouton from "../components/Bouton.vue"
import Footer from "../components/Footer.vue"

</script>