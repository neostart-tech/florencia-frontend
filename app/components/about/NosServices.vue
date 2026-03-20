<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-[30%] h-[30%] bg-[#E8D4AD]/5 rounded-full filter blur-[100px]"></div>
      <div class="absolute bottom-0 left-0 w-[30%] h-[30%] bg-[#E8D4AD]/5 rounded-full filter blur-[100px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <span class="text-[11px] uppercase tracking-[5px] text-[#E8D4AD]/40 block mb-3 animate-fadeInUp"
              style="font-family: 'Playfair Display', 'Georgia', serif;">
          Formules sur mesure
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide animate-fadeInUp animation-delay-200"
            style="font-family: 'Playfair Display', 'Georgia', serif; color: #E8D4AD;">
          Nos Services & Packs
        </h2>
        <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto mt-6 animate-fadeInUp animation-delay-400"></div>
        <p class="text-[#E8D4AD]/50 text-sm max-w-2xl mx-auto mt-5 animate-fadeInUp animation-delay-600"
           style="font-family: 'Playfair Display', 'Georgia', serif;">
          Choisissez la formule qui vous correspond ou créez votre propre combinaison
        </p>
      </div>
      
      <!-- Packs combinés (Premium) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Pack Essentiel -->
        <div class="pack-card group bg-[#343A20]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2"
             :style="{ animationDelay: '0.1s' }">
          <div class="mb-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Pack Essentiel
                </h3>
                <p class="text-[#E8D4AD]/50 text-xs uppercase tracking-wider mt-1">Bien-être quotidien</p>
              </div>
              <div class="px-3 py-1 rounded-full bg-[#E8D4AD]/10 text-[#E8D4AD] text-xs">-10%</div>
            </div>
          </div>
          <div class="space-y-3 mb-6">
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Coupe + Brushing</span>
              <span class="text-[#E8D4AD] text-sm">25 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Soin Hydratant</span>
              <span class="text-[#E8D4AD] text-sm">15 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-[#E8D4AD]/70 text-sm">Manucure Express</span>
              <span class="text-[#E8D4AD] text-sm">8 000 FCFA</span>
            </div>
          </div>
          <div class="pt-4 border-t border-[#E8D4AD]/10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[#E8D4AD]/50 text-xs">Total sans pack</span>
              <span class="text-[#E8D4AD]/50 text-sm line-through">48 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#E8D4AD] text-sm font-light">Pack à partir de</span>
              <span class="text-2xl font-light text-[#E8D4AD]">43 200 FCFA</span>
            </div>
            <NuxtLink to="/reservation" 
              class="block text-center mt-6 py-2 border border-[#E8D4AD]/30 rounded-full text-[#E8D4AD] text-sm hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all duration-300">
              Choisir cette formule
            </NuxtLink>
          </div>
        </div>
        
        <!-- Pack Beauté Complète -->
        <div class="pack-card group bg-[#343A20]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2 relative"
             :style="{ animationDelay: '0.2s' }">
          <div class="absolute -top-3 -right-3">
            <span class="bg-[#E8D4AD] text-[#262B14] text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Populaire</span>
          </div>
          <div class="mb-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Pack Beauté Complète
                </h3>
                <p class="text-[#E8D4AD]/50 text-xs uppercase tracking-wider mt-1">Journée bien-être</p>
              </div>
              <div class="px-3 py-1 rounded-full bg-[#E8D4AD]/10 text-[#E8D4AD] text-xs">-15%</div>
            </div>
          </div>
          <div class="space-y-3 mb-6">
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Coupe + Brushing + Soin</span>
              <span class="text-[#E8D4AD] text-sm">35 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Manucure + Pédicure</span>
              <span class="text-[#E8D4AD] text-sm">20 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Soin du visage</span>
              <span class="text-[#E8D4AD] text-sm">18 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-[#E8D4AD]/70 text-sm">Massage relaxant (30 min)</span>
              <span class="text-[#E8D4AD] text-sm">15 000 FCFA</span>
            </div>
          </div>
          <div class="pt-4 border-t border-[#E8D4AD]/10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[#E8D4AD]/50 text-xs">Total sans pack</span>
              <span class="text-[#E8D4AD]/50 text-sm line-through">88 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#E8D4AD] text-sm font-light">Pack à partir de</span>
              <span class="text-2xl font-light text-[#E8D4AD]">74 800 FCFA</span>
            </div>
            <NuxtLink to="/reservation" 
              class="block text-center mt-6 py-2 bg-[#E8D4AD] text-[#262B14] rounded-full text-sm hover:bg-[#E8D4AD]/90 transition-all duration-300">
              Choisir cette formule
            </NuxtLink>
          </div>
        </div>
        
        <!-- Pack Prestige -->
        <div class="pack-card group bg-[#343A20]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2"
             :style="{ animationDelay: '0.3s' }">
          <div class="mb-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-2xl font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Pack Prestige
                </h3>
                <p class="text-[#E8D4AD]/50 text-xs uppercase tracking-wider mt-1">Expérience premium</p>
              </div>
              <div class="px-3 py-1 rounded-full bg-[#E8D4AD]/10 text-[#E8D4AD] text-xs">-20%</div>
            </div>
          </div>
          <div class="space-y-3 mb-6">
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Coloration + Coupe + Brushing</span>
              <span class="text-[#E8D4AD] text-sm">55 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Manucure + Pédicure Spa</span>
              <span class="text-[#E8D4AD] text-sm">28 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-[#E8D4AD]/10">
              <span class="text-[#E8D4AD]/70 text-sm">Soin du visage + Massage</span>
              <span class="text-[#E8D4AD] text-sm">35 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <span class="text-[#E8D4AD]/70 text-sm">Brushing + Styling</span>
              <span class="text-[#E8D4AD] text-sm">12 000 FCFA</span>
            </div>
          </div>
          <div class="pt-4 border-t border-[#E8D4AD]/10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[#E8D4AD]/50 text-xs">Total sans pack</span>
              <span class="text-[#E8D4AD]/50 text-sm line-through">130 000 FCFA</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#E8D4AD] text-sm font-light">Pack à partir de</span>
              <span class="text-2xl font-light text-[#E8D4AD]">104 000 FCFA</span>
            </div>
            <NuxtLink to="/reservation" 
              class="block text-center mt-6 py-2 border border-[#E8D4AD]/30 rounded-full text-[#E8D4AD] text-sm hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all duration-300">
              Choisir cette formule
            </NuxtLink>
          </div>
        </div>
        
      </div>
      
      <!-- Services individuels avec options (ex: Manucure ou Pédicure ou les deux) -->
      <div class="mt-12">
        <div class="text-center mb-10">
          <h3 class="text-2xl font-light text-[#E8D4AD] tracking-wide"
              style="font-family: 'Playfair Display', 'Georgia', serif;">
            Services à la carte
          </h3>
          <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto mt-3"></div>
          <p class="text-[#E8D4AD]/50 text-xs mt-3">Choisissez vos prestations individuellement</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Service avec options (Manucure / Pédicure) -->
          <div class="service-option-card bg-[#343A20]/40 backdrop-blur-sm rounded-xl p-6 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h4 class="text-lg font-light text-[#E8D4AD]">Soins des Mains & Pieds</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Manucure simple</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">8 000 FCFA</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Pédicure simple</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">12 000 FCFA</span>
              </div>
              <div class="flex items-center justify-between py-2 border-t border-[#E8D4AD]/10 pt-3">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-[#E8D4AD]"></div>
                  <span class="text-[#E8D4AD] text-sm">Combo Manucure + Pédicure</span>
                </div>
                <span class="text-[#E8D4AD] font-light">18 000 FCFA</span>
              </div>
            </div>
            <NuxtLink to="/reservation" class="block text-center mt-4 pt-3 border-t border-[#E8D4AD]/10 text-[#E8D4AD]/50 hover:text-[#E8D4AD] text-xs uppercase tracking-wider transition-colors">
              Réserver →
            </NuxtLink>
          </div>
          
          <!-- Service avec options (Soin Cheveux) -->
          <div class="service-option-card bg-[#343A20]/40 backdrop-blur-sm rounded-xl p-6 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 class="text-lg font-light text-[#E8D4AD]">Soins capillaires</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Soin hydratant</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">15 000 FCFA</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Soin réparateur</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">18 000 FCFA</span>
              </div>
              <div class="flex items-center justify-between py-2 border-t border-[#E8D4AD]/10 pt-3">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-[#E8D4AD]"></div>
                  <span class="text-[#E8D4AD] text-sm">Combo Hydratant + Réparateur</span>
                </div>
                <span class="text-[#E8D4AD] font-light">30 000 FCFA</span>
              </div>
            </div>
            <NuxtLink to="/reservation" class="block text-center mt-4 pt-3 border-t border-[#E8D4AD]/10 text-[#E8D4AD]/50 hover:text-[#E8D4AD] text-xs uppercase tracking-wider transition-colors">
              Réserver →
            </NuxtLink>
          </div>
          
          <!-- Service avec options (Coloration) -->
          <div class="service-option-card bg-[#343A20]/40 backdrop-blur-sm rounded-xl p-6 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 class="text-lg font-light text-[#E8D4AD]">Coloration</h4>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Racines</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">25 000 FCFA</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Coloration complète</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">45 000 FCFA</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full border border-[#E8D4AD]/30"></div>
                  <span class="text-[#E8D4AD]/70 text-sm">Balayage</span>
                </div>
                <span class="text-[#E8D4AD] text-sm">55 000 FCFA</span>
              </div>
            </div>
            <NuxtLink to="/reservation" class="block text-center mt-4 pt-3 border-t border-[#E8D4AD]/10 text-[#E8D4AD]/50 hover:text-[#E8D4AD] text-xs uppercase tracking-wider transition-colors">
              Réserver →
            </NuxtLink>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// Composant purement visuel
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.pack-card, .service-option-card {
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
}
</style>