<template>
  <Breadcrumb :breadcrumb="breadcrumbItems" bgImage="/h.jpg" />
  <div class="bg-[#F4F4F4] text-[#2B2B2B]">

    <!-- PRESENTATION -->
    <section class="max-w-7xl mx-auto px-10 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- TEXTE -->
      <div>
        <h2 class="font-[EBGaramond] text-3xl mb-6">
          Notre histoire
        </h2>

        <p class="font-[Raleway] text-[#555] leading-relaxed mb-6">
          Florencia est née d’une passion profonde pour la beauté féminine sous toutes ses formes.
          Nous avons créé un espace où chaque femme peut prendre soin d’elle, se sentir valorisée
          et révéler toute sa confiance.
        </p>

        <p class="font-[Raleway] text-[#555] leading-relaxed">
          Perruques, mèches, onglerie, soins esthétiques…  
          Chaque prestation est réalisée avec rigueur, élégance et professionnalisme.
        </p>
      </div>

      <!-- IMAGE -->
      <div class="relative">
        <div class="absolute -top-4 -left-4 w-full h-full border border-[#9F6E45] rounded-3xl"></div>
        <img
          src="/h.jpg"
          alt="Florencia Salon"
          class="relative rounded-3xl shadow-xl w-full h-[420px] object-cover"
        />
      </div>

    </section>

    <!-- VALEURS -->
    <section class="bg-[#1F1F1F] text-white py-20">
      <div class="max-w-7xl mx-auto px-10 lg:px-16">

        <h2 class="font-[EBGaramond] text-3xl text-center mb-14">
          Nos valeurs
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div class="bg-[#2A2A2A] rounded-2xl p-8 text-center hover:scale-105 transition">
            <h3 class="font-[EBGaramond] text-xl mb-4 text-[#C89B6A]">
              Élégance
            </h3>
            <p class="font-[Raleway] text-white/70 text-sm leading-relaxed">
              Chaque détail compte pour sublimer votre image avec raffinement.
            </p>
          </div>

          <div class="bg-[#2A2A2A] rounded-2xl p-8 text-center hover:scale-105 transition">
            <h3 class="font-[EBGaramond] text-xl mb-4 text-[#C89B6A]">
              Expertise
            </h3>
            <p class="font-[Raleway] text-white/70 text-sm leading-relaxed">
              Des professionnelles qualifiées et passionnées à votre écoute.
            </p>
          </div>

          <div class="bg-[#2A2A2A] rounded-2xl p-8 text-center hover:scale-105 transition">
            <h3 class="font-[EBGaramond] text-xl mb-4 text-[#C89B6A]">
              Confiance
            </h3>
            <p class="font-[Raleway] text-white/70 text-sm leading-relaxed">
              Un cadre chaleureux où vous vous sentez belle et respectée.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-7xl mx-auto px-10 lg:px-16 py-20 text-center">
      <h2 class="font-[EBGaramond] text-3xl mb-6">
        Prête à vivre l’expérience Florencia ?
      </h2>

      <p class="font-[Raleway] text-[#666] max-w-xl mx-auto mb-10">
        Réservez votre moment beauté et laissez nos expertes prendre soin de vous.
      </p>

      <NuxtLink
        to="/reservation"
        class="inline-block px-8 py-3 rounded-full border border-[#9F6E45] text-[#9F6E45] font-[Raleway] tracking-wide hover:bg-[#9F6E45] hover:text-white transition"
      >
        Prendre rendez-vous
      </NuxtLink>
    </section>

  </div>
</template>

<script setup>
import Breadcrumb from '~/components/Breadcrumb.vue'
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos' }
]
</script>
