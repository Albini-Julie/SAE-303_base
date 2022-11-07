<template> 
    <div class="flex justify-end md:hidden">
    <div class=" flex flex-wrap justify-between">
<button class="relative z-50 mt-5 mx-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
:class="[menuOuvert ? 'hidden' : '',]">
  <Menu1 class="" />
      <span class="sr-only">Menu</span>
    </button>
    <button class="relative z-50 mt-5 mx-5" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert " 
:class="[menuOuvert ? '' : 'hidden',]">
  <Croix class="" />
      <span class="sr-only">Menu</span>
    </button>
    

    <div class="fixed inset-0 translate-x-full motion-safe:transition-transform motion-safe:duration-1000"
    :class="['bg-Rose_foncé  text-white', menuOuvert ? 'translate-x-0' : '',]">
    <div class="flex justify-center items-center">
      <ul class="sm:flex "  @click="menuOuvert = !menuOuvert ">
        <div class="flex items-center flex-col mt-10">
            
          <router-link to="/">
          <h2 class="font-bold text-2xl mb-5">Sup'analyse</h2>
        </router-link>
        
          <li class="mt-5" >
            <router-link class="" to="/etuaca">
                Répartition des étudiants par académie
            </router-link>
            <span class="sr-only">Répartition des étudiants par académie</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/genres">
                L’enseignement supérieur et les genres
            </router-link>
            <span class="sr-only">L’enseignement supérieur et les genres</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/typeseta">
                Les types d’établissement dans l’enseignement supérieur
            </router-link>
            <span class="sr-only">Les types d’établissement dans l’enseignement supérieur</span>
          </li>
          <li class="mt-5">
            <router-link class="" to="/temps">
                L’enseignement supérieur dans le temps
            </router-link>
            <span class="sr-only">L’enseignement supérieur dans le temps</span>
          </li>
               </div>
      </ul>
    </div>
  </div>
  </div>
  </div>

    <div class="hidden md:block">
        <div class="flex items-center m-5 justify-evenly  ">
        <RouterLink class="font-noto-sans text-center font-semibold text-Bleu_marine lg:text-[25px] md:text-[20px] xl:text-[30px]" to="/etuaca">Les académies</RouterLink>
        <span class="sr-only">Répartition des étudiants par académie</span>
        <router-link class="font-noto-sans text-center font-semibold text-Bleu_marine lg:text-[25px]md:text-[20px] xl:text-[30px]" to="/genres">
                Les genres
        </router-link>
        <span class="sr-only">Les genres</span>
        <router-link class="font-noto-sans text-center font-semibold text-Bleu_marine lg:text-[25px] md:text-[20px] xl:text-[30px]" to="/typeseta">
                Les types d’établissement
            </router-link>
            <span class="sr-only">Les types d’établissement dans l’enseignement supérieur</span>
        <router-link class="font-noto-sans text-center font-semibold text-Bleu_marine lg:text-[25px] md:text-[20px] xl:text-[30px]" to="/temps">
                Histoire
        </router-link>
        <span class="sr-only">L’enseignement supérieur dans le temps</span>
        </div>
    </div>


</template>

<script setup lang="ts">
import Menu1 from "./icons/menu.vue"
  import Croix from "./icons/croix.vue"

  import { ref } from "@vue/reactivity";

  let menuOuvert = ref()
  menuOuvert.value = false

</script>