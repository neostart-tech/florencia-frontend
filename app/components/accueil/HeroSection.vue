<template>
  <section class="bg-[#E7E7E7] overflow-hidden min-h-screen flex items-center">
    <div class="relative w-full">

      <!-- SLIDER -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <!-- Chaque slide -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="min-w-full"
        >
          <div
            class="max-w-7xl mx-auto px-10 lg:px-16 py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >

            <!-- TEXTE -->
            <div>
              <h1
                class="font-[EBGaramond] text-3xl lg:text-4xl leading-tight text-[#343434] mb-3"
              >
                {{ slide.title }}
              </h1>

              <p
                class="font-[Raleway] text-base lg:text-lg text-[#676767] max-w-xl mb-4 leading-relaxed"
              >
                {{ slide.text }}
              </p>

              <div class="flex gap-4">
                <NuxtLink
                  to="/boutique"
                  class="px-6 py-2.5 rounded-full border border-[#9F6E45] text-[#9F6E45] font-[Raleway] tracking-wide hover:bg-[#9F6E45] hover:text-white transition"
                >
                  Découvrir la boutique
                </NuxtLink>

                <NuxtLink
                  to="/reservation"
                  class="px-6 py-2.5 rounded-full border border-[#9F6E45] text-[#9F6E45] font-[Raleway] tracking-wide hover:bg-[#343434] hover:text-white transition"
                >
                  Prendre rendez-vous
                </NuxtLink>
              </div>
            </div>

            <!-- IMAGE -->
            <div class="relative">
              <!-- Cadre décoratif -->
              <div
                class="absolute -top-5 -left-5 w-full h-full border border-[#CFCFCF] rounded-3xl"
              ></div>

              <div class="relative overflow-hidden rounded-3xl bg-white shadow-xl">
                <img
                  :src="slide.image"
                  alt="Florencia"
                  class="w-full h-[300px] lg:h-[340px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- DOTS -->
      <div class="flex justify-center gap-3 pb-6">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentIndex = index"
          class="w-2.5 h-2.5 rounded-full transition"
          :class="currentIndex === index
            ? 'bg-[#9F6E45]'
            : 'bg-[#CFCFCF] hover:bg-[#9F6E45]/60'"
        ></button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    title: 'Révélez votre élégance,\ndes ongles aux cheveux',
    text: 'Perruques, mèches, cosmétiques et soins d’onglerie sélectionnés avec exigence. Offrez-vous une expérience beauté raffinée.',
    image: '/salon.jpg',
  },
  {
    title: 'Un moment de beauté\nrien que pour vous',
    text: 'Manucure, pédicure et soins esthétiques réalisés par des experts dans un cadre chic et apaisant.',
    image: '/salon1.jpg',
  },
  {
    title: 'Des soins premium\npour sublimer votre style',
    text: 'Chaque détail est pensé pour mettre en valeur votre beauté naturelle avec élégance et professionnalisme.',
    image: '/salon2.jpg',
  },
  {
    title: 'Florencia Beauty,\nl’excellence au féminin',
    text: 'Réservez votre rendez-vous et vivez une expérience beauté unique, entre luxe, douceur et modernité.',
    image: '/salon3.jpg',
  },
]

const currentIndex = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 5000) // changement toutes les 5s
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');

.font-[EBGaramond] {
  font-family: 'EB Garamond', serif;
}

.font-[Raleway] {
  font-family: 'Raleway', sans-serif;
}
</style>
