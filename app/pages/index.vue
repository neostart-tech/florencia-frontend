<template>
  <div class="overflow-x-hidden">

    <HeroSection />
    <Categorie />
    <Service />
    <Apropos />

  </div>
</template>


<script setup>

import HeroSection from '~/components/accueil/HeroSection.vue';
import Categorie from '~/components/accueil/Categorie.vue';
import Service from '~/components/accueil/Service.vue';
import Apropos from '~/components/accueil/Apropos.vue';

</script>