<template>
    <div class="lg:mt-20">
        <div class="lg:flex items-center">
        <img class="lg:w-2/3 lg:h-2/3 lg:ml-5 my-5 m-auto" src="/bachelier.jpg" alt="image jet de Mortarboard ou chapeau de fin d'étude"/>
        <p class="lg:w-1/3 lg:text-center texte">Les écoles et l’enseignement supérieur sont les moteurs des régions et l’avenir de notre pays. Que vous cherchiez une école, des statistiques ou voulez ouvrir une école, ce site est fait pour vous !</p><br/>
        </div>

        <div class="flex items-center">
            <p class="w-2/3 texte lg:text-center">Sup’analyse vous propose diverses approches de l’enseignements supérieur, notamment sur les questions du genre, du type d’établissement ou encore la répartition des écoles par département !</p>
            <img class="w-1/3 h-1/3" src="/pomme.png" alt="dessin livre avec une pomme"/>
        </div>

        <h3 class="h2 my-5 text-Rose_foncé">Recherchez ici les écoles dans votre régions !</h3>
        <img class="w-full lg:mb-24" src="/map.jpg" alt="carte"/>

        <h3 class="h2 my-5 text-Rose_foncé">Recherchez ici les écoles dans votre département !</h3>
        <img class="w-full" src="/map.jpg" alt="carte"/>

        <routerlink to="/etuaca">
        <bouton class="my-10 mx-auto">Lire un article</bouton>
        <span class="sr-only">Lire un article</span>
        </routerlink>

        <Footer/>
    </div>

</template>

<script setup>
import bouton from "../components/Bouton.vue"
import Footer from "../components/Footer.vue"

</script>