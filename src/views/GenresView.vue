<template>
    <h3 class="h2 mb-5 xl:text-[45px] md:text-[35px] text-[25px] text-Bleu_marine font-bold">L’enseignement supérieur et les genres</h3>
    <p class="texte text-center">Le bac est une étape indispensable pour passer à l’enseignement supérieur. Cependant, nous savons que les genres ne sont pas égaux et autant présents dans les filières. Nous allons étudier ici la présence des filles. </p>

    <div class="xl:my-32">
    <h4 class="h2 mt-5 text-Bleu_clair text-center font-bold">Répartition des filles selon les types de bac entre 2010 et 2021</h4>
    <img class="mx-auto my-10" src="/Barchart.png" alt="graphique"/>
    </div>

    <p class="texte xl:mx-10">On peut lire sur ces graphiques que les femmes sont majoritaires dans les titulaires du bac général parmi ceux qui continuent les études supérieures. Elles sont 2 240 à avoir réussi ce bac et a continué les études, soit 25% de plus que les hommes dans ce même bac.</p>
    <p class="texte xl:mx-10">A l’inverse, elles sont minoritaires dans les bacs professionnels. En effet, elles sont 38% de moins que les hommes. Seul le bac technologique dispose d’une équité de présence des deux genres.</p>

    <div class="lg:flex items-center">
    <img class="lg:w-1/2 lg:h-1/2 mx-auto my-10" src="/balance.jpg" alt="balance"/>
     <div class="lg:w-1/2 lg:h-1/2 flex flex-col">
    <p class="texte">Pour donner une réponse à cette différence, nous pouvons utiliser le processus de Socialisation. Il s’agit de l’ensemble des mécanismes que l’individu va intérioriser tout au long de sa vie et qui vont lui permettre de s’intégrer dans la société. </p><br/>
    <p class="texte">Pour expliquer le fait que les filles sont davantage présentes parmi les bacheliers du bac général, nous devons prendre en compte la socialisation primaire, qui intervient avant l’âge adulte. Les parents qui sont l’un des acteurs les plus importants de cette phase de socialisation, vont être davantage durs et exigeants avec leur fille plutôt qu’avec leur fils. </p>
    </div>
    </div>

    <div class="lg:flex items-center ">
    <img class="lg:w-1/2 lg:h-1/2 mx-auto my-10" src="/fille_travaille.jpg" alt="fille qui travaille"/>
    <p class="lg:w-1/2 lg:h-1/2 texte">En effet, ils vont encourager la docilité des filles, les faire grandir dans un cadre dont elles ne devront pas sortir. Elles doivent davantage obéir et c’est pour cette raison qu’elles vont plus facilement intérioriser les règles et les devoirs de l’école. Les filles vont donc être élevé et éduqué dans une manière de penser qui vont leur permettre de s’adapter aux règles de l’école, ce qui va améliorer les chances de leurs réussites.</p><br/>
    </div>

    <div class="lg:flex items-center ">
    <p class="lg:w-1/2 lg:h-1/2 texte">La plupart du temps, dans les foyers, les garçons sont davantage mis en avant. D’ailleurs, leur confiance en eux est beaucoup plus valorisée que celle des filles. Ainsi, le fait que les filles soient plus nombreuses dans les bacs généraux, peut s’expliquer par le fait que l’école est un des moyens de monter leur confiance en elle, et de prouver leurs capacités.</p>
    <img class="mx-auto my-10 lg:w-1/2 lg:h-1/2" src="/amis.jpg" alt="amis"/>
    </div>

    <h4 class="h2 mt-5 text-Bleu_clair text-center font-bold">Répartition des garçons selon les types de bac entre 2010 et 2021</h4>
    <p class="texte mt-10 xl:mx-10">Si nous nous intéressons maintenant à la répartition des garçons selon le type de bac, on peut voir que les garçons bacheliers d’un bac général sont moins nombreux que les filles. Ils les dépassent cependant lorsqu’il s’agit du bac professionnel. Cette situation peut également trouver une réponse dans le processus de socialisation. </p>
    <p class="texte xl:mx-10" >A l’inverse des filles, les garçons sont encouragés à sortir du cadre et à s’exprimer, à se rebeller. C’est notamment ce que l’on peut observer lorsque les garçons sont encourager aux activités extérieurs où ils peuvent se défouler ou encore dans les jeux de guerre. </p>

    <div class="lg:flex items-center ">
        <img class="mx-auto my-10 lg:w-1/2 lg:h-1/2" src="/garcon_travaille.jpg" alt="garçon qui travaille"/>
        <div class="flex flex-col lg:w-1/2 lg:h-1/2">
            <p class="texte">Ainsi, ils auront davantage de mal à se plier aux attentes de l’école, ce qui peut expliquer qu’ils réussissent moins bien, et qu’ils préférent se diriger dans des filières professionnels moins “scolaires”.</p><br/>
            <p class="texte">Enfin, comme nous l’avons vu plutôt, les garçons sont élevés dans une éducation qui les encouragent à avoir confiance en eux. Ils vont donc être plus sûrs d’eux, moins travailler considérant qu’ils ont déjà les ressources nécessaires,... Ceci peut également expliquer leur réussite moins élevée.</p>
        </div>
    </div>

    <h4 class="h2 mt-5 text-Bleu_clair text-center font-bold">Ce que l’on peut en tirer...</h4>
    <p class="texte xl:mx-10 my-10">La présence des femmes en plus grand nombre parmi les bacheliers d’un bac général, et des hommes parmi les étudiants issus de bacs professionnels peut s’expliquer par différentes causes toutes reliées au procédé de socialisation.</p>

    <router-link to="/typeseta">
    <bouton class="my-10 mx-auto">Lire un autre article</bouton>
    </router-link>

    <Footer/>

</template>

<script setup>
import bouton from "../components/Bouton.vue"
import Footer from "../components/Footer.vue"
</script>