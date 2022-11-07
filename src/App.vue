<template>
  <div class="mb-20">
  <Header/>
  <div class="flex justify-center">
  <router-link to="/">
  <h1 class="font-albert-sans text-Rose_foncé text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] xl:mt-5 font-bold">Sup'analyse</h1>
  </router-link>
  </div>
  <div class="flex justify-center">
    <h2 class="font-albert-sans text-center text-Bleu_marine font-semibold h2">L’enseignement supérieur en chiffres</h2>
  </div>
  </div>

   <Suspense>
    <router-view class="" />
  </Suspense>
</template>

<script setup>
import Header from "./components/Header.vue"

</script>
