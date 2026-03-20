<template>
  <div class="overflow-x-hidden">

    <HeroSection />
      <Apropos />
      <ServicePrice/>
      <Valeurs/>
      <ServicePrice2/>
      <CTA/>
      <LastBlog/>
      <Contact/>
      <Membre/>
      <Temoignage/>
      <Faq/>
    <!-- <Categorie />
    <Service /> -->
  

  </div>
</template>


<script setup>

import HeroSection from '~/components/accueil/HeroSection.vue';
import Categorie from '~/components/accueil/Categorie.vue';
import Service from '~/components/accueil/Service.vue';
import Apropos from '~/components/accueil/Apropos.vue';
import ServicePrice from '~/components/accueil/ServicePrice.vue';
import Valeurs from '~/components/accueil/Valeurs.vue';
import ServicePrice2 from '~/components/accueil/ServicePrice2.vue';
import CTA from '~/components/accueil/CTA.vue';
import LastBlog from '~/components/accueil/LastBlog.vue';
import Contact from '~/components/accueil/Contact.vue';
import Membre from '~/components/accueil/Membre.vue';
import Temoignage from '~/components/accueil/Temoignage.vue';
import Faq from '~/components/accueil/Faq.vue';

</script>