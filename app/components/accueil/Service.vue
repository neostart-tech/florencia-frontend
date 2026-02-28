<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-[#E7E7E7] to-white overflow-hidden">
    <!-- En-tête -->
    <div class="text-center mb-16">
      <span class="text-[#9F6E45] font-['Raleway'] text-sm tracking-[0.3em] uppercase mb-3 block">
        L'excellence à votre service
      </span>
      <h2 class="font-['EBGaramond'] text-4xl md:text-4xl text-[#343434] mb-4">
        Nos services
      </h2>
      <div class="w-24 h-0.5 bg-[#9F6E45]/40 mx-auto"></div>
    </div>

    <!-- Design circulaire -->
    <div class="relative max-w-5xl mx-auto">
      <!-- Cercle décoratif de fond -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="w-[600px] h-[600px] rounded-full border-2 border-[#9F6E45]/10 animate-spin-slow"></div>
      </div>
      
      <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <!-- Service 1 - Position circulaire -->
        <div class="md:translate-y-0 group">
          <div class="relative flex flex-col items-center">
            <!-- Cercle avec SVG -->
            <div class="relative mb-6">
              <div class="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <!-- SVG Manucure -->
                <svg class="w-20 h-20 text-[#9F6E45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M7 12L12 7L17 12L12 17L7 12Z" stroke-linejoin="round"/>
                  <path d="M12 7V3M12 21V17M17 12H21M3 12H7" stroke-linecap="round"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <!-- Numéro décoratif -->
              <span class="absolute -top-2 -right-2 w-8 h-8 bg-[#9F6E45] text-white rounded-full flex items-center justify-center font-['Raleway'] text-sm font-bold shadow-lg">01</span>
            </div>
            
            <h3 class="font-['EBGaramond'] text-2xl text-[#343434] mb-3 text-center">Manucure</h3>
            <p class="font-['Raleway'] text-[#5A5A5A] text-center max-w-xs mb-6">
              Soin complet des ongles et vernis professionnels. Pose de gel et nail art.
            </p>
          </div>
        </div>

        <!-- Service 2 - Position circulaire -->
        <div class="md:translate-y-12 group">
          <div class="relative flex flex-col items-center">
            <div class="relative mb-6">
              <div class="w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <!-- SVG Pédicure -->
                <svg class="w-20 h-20 text-[#9F6E45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 8C4 6 6 4 9 4C12 4 14 6 14 8C14 10 12 12 9 12C6 12 4 10 4 8Z" stroke-linejoin="round"/>
                  <path d="M18 20L16 16L14 20" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 20L18 16L16 20" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 12V20M7 20H11" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="absolute -top-2 -right-2 w-8 h-8 bg-[#9F6E45] text-white rounded-full flex items-center justify-center font-['Raleway'] text-sm font-bold shadow-lg">02</span>
            </div>
            
            <h3 class="font-['EBGaramond'] text-2xl text-[#343434] mb-3 text-center">Pédicure</h3>
            <p class="font-['Raleway'] text-[#5A5A5A] text-center max-w-xs mb-6">
              Soin des pieds et pose de vernis semi-permanent. Traitements hydratants.
            </p>
          
          </div>
        </div>

        <!-- Service 3 - Position circulaire -->
        <div class="md:translate-y-0 group">
          <div class="relative flex flex-col items-center">
            <div class="relative mb-6">
              <div class="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <!-- SVG Coiffure -->
                <svg class="w-20 h-20 text-[#9F6E45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 15C5 12 8 9 12 9C16 9 19 12 19 15" stroke-linejoin="round"/>
                  <path d="M12 9V5M12 5L14 7M12 5L10 7" stroke-linecap="round"/>
                  <path d="M7 15C7 15 9 17 12 17C15 17 17 15 17 15" stroke-linecap="round"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor" fill-opacity="0.3"/>
                </svg>
              </div>
              <span class="absolute -top-2 -right-2 w-8 h-8 bg-[#9F6E45] text-white rounded-full flex items-center justify-center font-['Raleway'] text-sm font-bold shadow-lg">03</span>
            </div>
            
            <h3 class="font-['EBGaramond'] text-2xl text-[#343434] mb-3 text-center">Coiffure</h3>
            <p class="font-['Raleway'] text-[#5A5A5A] text-center max-w-xs mb-6">
              Coupe, coiffure et extensions personnalisées. Soins capillaires sur mesure.
            </p>
          </div>
        </div>
      </div>

      <!-- Lignes courbes décoratives -->
      <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-20" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="200" fill="none" stroke="#9F6E45" stroke-width="1" stroke-dasharray="8 8"/>
        <circle cx="250" cy="250" r="150" fill="none" stroke="#9F6E45" stroke-width="1" stroke-dasharray="4 12"/>
      </svg>
    </div>

    <!-- Services complémentaires en cercle miniature -->
    <div class="mt-20">
      <p class="text-center font-['Raleway'] text-sm text-[#9F6E45] mb-6 tracking-widest">ÉGALEMENT DISPONIBLES</p>
      <div class="flex flex-wrap justify-center gap-6">
        <div v-for="(service, index) in servicesPlus" :key="index" class="group">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 mb-2">
              <!-- SVG selon le service -->
              <svg class="w-8 h-8 text-[#9F6E45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path v-if="index === 0" d="M12 6V4M12 6C10 6 8 8 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 8 14 6 12 6Z" stroke-linejoin="round"/>
                <path v-if="index === 1" d="M7 12L12 7L17 12L12 17L7 12Z" stroke-linejoin="round"/>
                <path v-if="index === 2" d="M4 12C4 9 8 6 12 6C16 6 20 9 20 12" stroke-linejoin="round"/>
                <path v-if="index === 3" d="M12 22C10 22 8 20 8 18C8 16 10 14 12 14C14 14 16 16 16 18C16 20 14 22 12 22Z" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="font-['Raleway'] text-xs text-[#343434]">{{ service.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-10 md:mt-12">
        <NuxtLink
          to="/reservation"
          class="inline-flex items-center gap-2 font-['Raleway'] text-sm text-[#9F6E45] border-b border-[#9F6E45]/30 pb-0.5 hover:border-[#9F6E45] transition-all duration-300 group"
        >
          <span>Faire une réservation</span>
          <span class="text-lg transform group-hover:translate-x-1 transition-transform">→</span>
        </NuxtLink>
      </div>

  </section>
</template>

<script setup>
const servicesPlus = [
  { name: 'Extensions' },
  { name: 'Coloration' },
  { name: 'Lissage' },
  { name: 'Soins' }
]
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>