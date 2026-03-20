<template>
  <section class="relative min-h-[70vh] lg:min-h-[85vh] bg-[#FAF9F6] overflow-hidden">
    <div class="relative w-full">
      <!-- THREE IMAGES SIDE BY SIDE - NO MARGINS -->
      <div class="relative w-full h-[70vh] lg:h-[85vh] flex">
        <!-- First Image - Comes from TOP -->
        <div
          class="relative flex-1 overflow-hidden cursor-pointer"
          :class="[isAnimating ? 'animate-from-top' : '']">
          <img 
            :src="currentImages[1]" 
            :alt="'Image 1 - ' + currentTitle"
            @error="handleImageError(0)"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/30"></div>
          <!-- Fallback if image fails to load -->
          <div v-if="imageErrors[0]" class="absolute inset-0 bg-gradient-to-br from-[#9F6E45] to-[#6B4E32] flex items-center justify-center">
            <span class="text-white text-lg font-[Raleway]">Beauté & Élégance</span>
          </div>
        </div>

        <!-- Second Image - Comes from BOTTOM -->
        <div
          class="relative flex-1 overflow-hidden cursor-pointer"
          :class="[isAnimating ? 'animate-from-bottom' : '']">
          <img 
            :src="currentImages[1]" 
            :alt="'Image 2 - ' + currentTitle"
            @error="handleImageError(1)"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/30"></div>
          <!-- Fallback if image fails to load -->
          <div v-if="imageErrors[1]" class="absolute inset-0 bg-gradient-to-br from-[#9F6E45] to-[#6B4E32] flex items-center justify-center">
            <span class="text-white text-lg font-[Raleway]">Soins & Bien-être</span>
          </div>
        </div>

        <!-- Third Image - Comes from TOP (again) -->
        <div
          class="relative flex-1 overflow-hidden cursor-pointer"
          :class="[isAnimating ? 'animate-from-top-delayed' : '']">
          <img 
            :src="currentImages[1]"
            :alt="'Image 3 - ' + currentTitle"
            @error="handleImageError(2)"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/30"></div>
          <!-- Fallback if image fails to load -->
          <div v-if="imageErrors[2]" class="absolute inset-0 bg-gradient-to-br from-[#9F6E45] to-[#6B4E32] flex items-center justify-center">
            <span class="text-white text-lg font-[Raleway]">Excellence & Raffinement</span>
          </div>
        </div>

        <!-- TEXT CONTENT - Centered on top of images -->
        <div class="absolute inset-0 z-20 flex items-center justify-center px-6 lg:px-20">
          <div class="max-w-4xl text-center transition-all duration-700 ease-out"
            :class="textAnimation ? 'animate-text-fade' : ''">
            
            <!-- Badge -->
            <div class="flex justify-center mb-6">
              <div class="px-3 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
                <span class="font-[Raleway] text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  L'Excellence Florencia
                </span>
              </div>
            </div>

            <!-- Title -->
            <h1
              class="font-[EBGaramond] text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white whitespace-pre-line tracking-tight mb-6">
              {{ currentTitle }}
            </h1>

            <!-- Description -->
            <p class="font-[Raleway] text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              {{ currentText }}
            </p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <NuxtLink to="/boutique"
                class="group relative px-8 py-4 rounded-full bg-[#9F6E45] text-white font-[Raleway] font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(159,110,69,0.5)] hover:-translate-y-0.5 text-center">
                <span class="relative z-10">Découvrir la boutique</span>
                <div
                  class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                </div>
              </NuxtLink>

              <NuxtLink to="/reservation"
                class="px-8 py-4 rounded-full border-2 border-white text-white font-[Raleway] font-medium tracking-wide hover:bg-white hover:text-[#2D2D2D] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-center">
                Prendre rendez-vous
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- INDICATORS -->
      <div class="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        <button 
          v-for="(_, index) in imageSets" 
          :key="index" 
          @click="changeImageSet(index)"
          class="transition-all duration-300 rounded-full"
          :class="activeSetIndex === index ? 'w-8 h-2 bg-[#9F6E45]' : 'w-2 h-2 bg-white/50 hover:bg-white/80'">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Different sets of images and their associated text - Images beauté, onglerie, manucure, soins visage
const imageSets = ref([
  {
    images: [
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=1200&fit=crop', // Manucure élégante
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1200&fit=crop', // Soin des ongles
      'https://images.unsplash.com/photo-1487412947147-5abfae160e0c?w=800&h=1200&fit=crop'  // Soin du visage
    ],
    title: 'Révélez votre\nélégance\nnaturelle',
    text: 'Perruques, mèches, cosmétiques et soins d\'onglerie sélectionnés avec exigence. Offrez-vous une expérience beauté raffinée.'
  },
  {
    images: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1200&fit=crop', // Pédicure soin des pieds
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1200&fit=crop', // Manucure professionnelle
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1200&fit=crop'  // Soin visage relaxant
    ],
    title: 'Un moment de beauté\nrien que pour vous',
    text: 'Manucure, pédicure et soins esthétiques réalisés par des experts dans un cadre chic et apaisant.'
  },
  {
    images: [
      'https://images.unsplash.com/photo-1594824476967-48c8b964270f?w=800&h=1200&fit=crop', // Soin onglerie luxe
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1200&fit=crop', // Coiffure élégante
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=1200&fit=crop'  // Soin du visage professionnel
    ],
    title: 'Des soins premium\npour sublimer votre style',
    text: 'Chaque détail est pensé pour mettre en valeur votre beauté naturelle avec élégance et professionnalisme.'
  },
  {
    images: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1200&fit=crop', // Onglerie artistique
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&h=1200&fit=crop', // Soin spa visage
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1200&fit=crop'  // Manucure et soin des mains
    ],
    title: 'Florencia Beauty,\nl’excellence au féminin',
    text: 'Réservez votre rendez-vous et vivez une expérience beauté unique, entre luxe, douceur et modernité.'
  }
])

const activeSetIndex = ref(0)
const isAnimating = ref(false)
const textAnimation = ref(false)
const imageErrors = ref({ 0: false, 1: false, 2: false })

// Current values
const currentImages = computed(() => imageSets.value[activeSetIndex.value].images)
const currentTitle = computed(() => imageSets.value[activeSetIndex.value].title)
const currentText = computed(() => imageSets.value[activeSetIndex.value].text)

// Handle image load error
const handleImageError = (index) => {
  console.error(`Failed to load image at index ${index}:`, currentImages.value[index])
  imageErrors.value[index] = true
}

// Reset errors when changing image set
const resetErrors = () => {
  imageErrors.value = { 0: false, 1: false, 2: false }
}

// Function to change the entire image set
const changeImageSet = async (index) => {
  if (index === activeSetIndex.value) return
  
  // Start animations
  isAnimating.value = true
  textAnimation.value = true
  
  // Wait for animation to complete
  await new Promise(resolve => setTimeout(resolve, 600))
  
  // Change the image set
  activeSetIndex.value = index
  resetErrors()
  
  // Wait a bit then remove animation classes
  setTimeout(() => {
    isAnimating.value = false
  }, 100)
  
  setTimeout(() => {
    textAnimation.value = false
  }, 200)
}

// Auto-rotate through image sets
let interval = null

const startAutoplay = () => {
  stopAutoplay()
  interval = setInterval(() => {
    const nextIndex = (activeSetIndex.value + 1) % imageSets.value.length
    changeImageSet(nextIndex)
  }, 6000)
}

const stopAutoplay = () => {
  if (interval) clearInterval(interval)
}

// Start animations on mount
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

/* Animations for images */
@keyframes fromTop {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fromBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textFade {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-from-top {
  animation: fromTop 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-from-bottom {
  animation: fromBottom 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-from-top-delayed {
  animation: fromTop 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-text-fade {
  animation: textFade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>