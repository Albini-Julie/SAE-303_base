<template>
    <div class="bg-Bleu_marine p-5 flex justify-between  items-center">
    <p class="texte font-bold text-white">Mentions légales</p>
    <div class="flex gap-2 md:gap-5 lg:gap-10 ">
        <a href="https://www.instagram.com/?hl=fr">
            <instagram class="sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px]"/>
        </a>
        <a href="https://www.tiktok.com/fr/">
            <tiktok class="sm:w-[47px] sm:h-[40px] lg:w-[57px] lg:h-[50px]"/>
        </a>
        <a href="https://www.youtube.com/">
            <youtube class="sm:w-[47px] sm:h-[40px] lg:w-[57px] lg:h-[50px]"/>
        </a>
    </div>
    </div>
</template>

<script setup>
import instagram from "../components/icons/Instagram.vue"
import tiktok from "../components/icons/tiktok.vue"
import youtube from "../components/icons/youtube.vue"

</script>