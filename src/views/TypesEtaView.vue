<template>
    <h3 class="h2 mb-5 xl:text-[45px] md:text-[35px] text-[25px] text-Bleu_marine font-bold">Les types d’établissement</h3>
    <p class="texte text-center">Sur cette page, vous allez pouvoir rechercher un nom d’école, une région,... et voir la répartition des types d’établissement selon vos critères.</p>

    <div class="flex flex-col mt-10 gap-5">
    <TabArea class="mx-5"/>
    </div>

    <p class="mt-5 texte xl:mx-10">Ce graphique permet d’avoir accès à la répartition des types d’établissement selon la région par exemple, et donc de savoir quel type d’établissement est le plus présent par région,... </p>
    <p class="texte xl:mx-10">Si vous êtes étudiant et que vous voulez spécifiquement vous diriger dans une Université, vous pouvez avoir accès à quelle Université est disponible dans quelle région !</p>
    <p class="texte xl:mx-10">Et ce n’est qu’un exemple parmi toutes les possibilités proposées ! </p>

    <router-link to="/genres">
    <bouton class="my-10 mx-auto">Lire un autre article</bouton>
    </router-link>

    <Footer/>
</template>

<script setup>
import bouton from "../components/Bouton.vue"
import Footer from "../components/Footer.vue"
import TabArea from "../components/TableauArea.vue"
</script>