<template>
  <section class="relative min-h-[70vh] lg:min-h-[85vh] flex items-start lg:items-center bg-[#FAF9F6] overflow-hidden">
    <!-- Decorative Background Elements -->
    <div
      class="absolute top-0 right-0 w-1/3 h-1/3 bg-[#9F6E45]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2">
    </div>
    <div
      class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#343434]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2">
    </div>

    <div class="relative w-full max-w-[1600px] mx-auto">
      <!-- SLIDER CONTAINER -->
      <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <!-- Each Slide -->
          <div v-for="(slide, index) in slides" :key="index" class="min-w-full lg:px-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-0 pb-12 lg:py-16">

              <!-- TEXT CONTENT -->
              <div class="order-2 lg:order-1 transition-all duration-700 ease-out px-6 lg:px-0"
                :class="currentIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'">
                <!-- TEXT CONTENT BOX -->
                <div class="flex flex-col justify-start">
                  <!-- Badge (fixed height to avoid jump) -->
                  <div class="h-12 flex items-start">
                    <div class="px-3 py-1 border border-[#9F6E45]/30 rounded-full bg-[#9F6E45]/5">
                      <span class="font-[Raleway] text-xs font-semibold uppercase tracking-[0.2em] text-[#9F6E45]">
                        L'Excellence Florencia
                      </span>
                    </div>
                  </div>

                  <!-- Title (Fixed height area for 2-3 lines) -->
                  <div class="min-h-[140px] md:min-h-[160px] lg:min-h-[200px] flex items-start">
                    <h1
                      class="font-[EBGaramond] text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-[#2D2D2D] whitespace-pre-line tracking-tight">
                      {{ slide.title }}
                    </h1>
                  </div>

                  <!-- Description (Fixed height area) -->
                  <div class="min-h-[80px] lg:min-h-[100px] mb-8 flex items-start">
                    <p class="font-[Raleway] text-base lg:text-lg text-[#5A5A5A] max-w-xl leading-relaxed font-light">
                      {{ slide.text }}
                    </p>
                  </div>

                  <!-- Buttons (Will now stay perfectly still) -->
                  <div class="flex flex-col sm:flex-row gap-4 lg:gap-6">
                    <NuxtLink to="/boutique"
                      class="group relative px-8 py-4 rounded-full bg-[#9F6E45] text-white font-[Raleway] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(159,110,69,0.5)] hover:-translate-y-0.5 text-center">
                      <span class="relative z-10">Découvrir la boutique</span>
                      <div
                        class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      </div>
                    </NuxtLink>

                    <NuxtLink to="/reservation"
                      class="px-8 py-4 rounded-full border-2 border-[#2D2D2D] text-[#2D2D2D] font-[Raleway] font-medium tracking-wide hover:bg-[#2D2D2D] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center text-nowrap">
                      Prendre rendez-vous
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- IMAGE CONTENT -->
              <div class="order-1 lg:order-2 relative transition-all duration-1000 delay-100 ease-out"
                :class="currentIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-0'">
                <!-- Decorative Elements back -->
                <div
                  class="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#9F6E45]/20 rounded-tr-[40px] hidden md:block">
                </div>
                <div
                  class="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#9F6E45]/20 rounded-bl-[40px] hidden md:block">
                </div>

                <!-- Main Image Container -->
                <div
                  class="relative z-10 lg:rounded-[40px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] group">
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>
                  <img :src="slide.image" :alt="slide.title"
                    class="w-full h-[350px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION CONTROLS -->
      <div class="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30">
        <!-- Dots -->
        <div class="flex gap-3">
          <button v-for="(_, index) in slides" :key="index" @click="setSlide(index)"
            class="group relative h-1 transition-all duration-300 overflow-hidden rounded-full"
            :class="currentIndex === index ? 'w-12 bg-[#9F6E45]' : 'w-4 bg-[#D1D1D1] hover:bg-[#9F6E45]/40'">
            <!-- Progress bar overlay for active dot -->
            <div v-if="currentIndex === index" class="absolute inset-0 bg-[#343434]/20 origin-left animate-progress"
              :style="{ animationDuration: '5000ms' }"></div>
          </button>
        </div>

        <!-- Arrow buttons (Optional, hidden on small screens) -->
        <div class="hidden lg:flex gap-2 ml-4">
          <button @click="prevSlide"
            class="p-2 border border-[#9F6E45]/20 rounded-full text-[#9F6E45] hover:bg-[#9F6E45] hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="nextSlide"
            class="p-2 border border-[#9F6E45]/20 rounded-full text-[#9F6E45] hover:bg-[#9F6E45] hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    title: 'Révélez votre\nélégance\nnaturelle',
    text: 'Perruques, mèches, cosmétiques et soins d’onglerie sélectionnés avec exigence. Offrez-vous une expérience beauté raffinée.',
    image: '/salon.jpg',
  },
  {
    title: 'Un moment de beauté\nrien que pour vous',
    text: 'Manucure, pédicure et soins esthétiques réalisés par des experts dans un cadre chic et apaisant.',
    image: '/images/perruque.jpg',
  },
  {
    title: 'Des soins premium\npour sublimer votre style',
    text: 'Chaque détail est pensé pour mettre en valeur votre beauté naturelle avec élégance et professionnalisme.',
    image: '/salon.jpg',
  },
  {
    title: 'Florencia Beauty,\nl’excellence au féminin',
    text: 'Réservez votre rendez-vous et vivez une expérience beauté unique, entre luxe, douceur et modernité.',
    image: '/salon.jpg',
  },
]

const currentIndex = ref(0)
let interval = null

const startAutoplay = () => {
  stopAutoplay()
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (interval) clearInterval(interval)
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const setSlide = (index) => {
  currentIndex.value = index
  startAutoplay() // Reset timer
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');

.font-\[EBGaramond\] {
  font-family: 'EB Garamond', serif;
}

.font-\[Raleway\] {
  font-family: 'Raleway', sans-serif;
}

@keyframes progress {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

.animate-progress {
  animation: progress linear forwards;
}

/* Smooth cubic bezier for slide transition */
.cubic-bezier {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
