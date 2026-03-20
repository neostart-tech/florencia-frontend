<template>
  <Breadcrumb
  title="À Propos"
  subtitle="Une équipe passionnée à votre service depuis plus de 10 ans"
  current-page="À Propos"
  bg-image="/images/cosmetique.jpg"
/>
<aPropos/>
<Galery/>
<NosValeur/>
 <Why/>
 <NosServices/>
 <Nosproduit/>

</template>

<script setup>
import Breadcrumb from '~/components/Breadcrumb.vue'
import Galery from '~/components/about/Galery.vue';
import NosServices from '~/components/about/NosServices.vue';
import NosValeur from '~/components/about/NosValeur.vue';
import Nosproduit from '~/components/about/Nosproduit.vue';
import Why from '~/components/about/Why.vue';
import aPropos from '~/components/about/a-propos.vue';

</script>
