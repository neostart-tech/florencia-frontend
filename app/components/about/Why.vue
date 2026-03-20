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
          Pourquoi nous choisir
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide animate-fadeInUp animation-delay-200"
            style="font-family: 'Playfair Display', 'Georgia', serif; color: #E8D4AD;">
          Notre Engagement
        </h2>
        <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto mt-6 animate-fadeInUp animation-delay-400"></div>
      </div>
      
      <!-- Statistiques -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div v-for="(stat, idx) in stats" :key="idx" 
             class="stat-card text-center group cursor-pointer"
             :style="{ animationDelay: `${0.1 * idx}s` }">
          <div class="text-4xl md:text-5xl font-light text-[#E8D4AD] mb-2 group-hover:scale-110 transition-transform duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif;">
            {{ stat.number }}
          </div>
          <div class="w-8 h-px bg-[#E8D4AD]/30 mx-auto my-3 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          <div class="text-xs uppercase tracking-[2px] text-[#E8D4AD]/50"
               style="font-family: 'Playfair Display', 'Georgia', serif;">
            {{ stat.label }}
          </div>
        </div>
      </div>
      
      <!-- Timeline / Frise chronologique -->
      <div class="relative">
        <!-- Ligne verticale décorative -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#E8D4AD]/20 to-transparent hidden lg:block"></div>
        
        <div class="space-y-12 lg:space-y-0">
          
          <!-- Étape 1 - à gauche -->
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div class="lg:w-1/2 lg:text-right order-2 lg:order-1">
              <div class="inline-block animate-slideInLeft" style="animation-delay: 0.1s">
                <span class="text-xs uppercase tracking-[3px] text-[#E8D4AD]/40 block mb-2">Étape 01</span>
                <h3 class="text-xl md:text-2xl font-light text-[#E8D4AD] mb-3"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Diagnostic Personnalisé
                </h3>
                <p class="text-[#E8D4AD]/60 text-sm leading-relaxed max-w-md ml-auto lg:mr-0"
                   style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Une analyse approfondie de vos cheveux et de vos besoins pour vous proposer la prestation la plus adaptée.
                </p>
              </div>
            </div>
            <div class="relative z-10 order-1 lg:order-2">
              <div class="w-12 h-12 rounded-full bg-[#343A20] border border-[#E8D4AD]/30 flex items-center justify-center group-hover:border-[#E8D4AD] transition-all duration-500">
                <span class="text-[#E8D4AD] text-sm font-light">01</span>
              </div>
            </div>
            <div class="lg:w-1/2 order-3"></div>
          </div>
          
          <!-- Étape 2 - à droite -->
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div class="lg:w-1/2 order-2"></div>
            <div class="relative z-10 order-1">
              <div class="w-12 h-12 rounded-full bg-[#343A20] border border-[#E8D4AD]/30 flex items-center justify-center group-hover:border-[#E8D4AD] transition-all duration-500">
                <span class="text-[#E8D4AD] text-sm font-light">02</span>
              </div>
            </div>
            <div class="lg:w-1/2 lg:text-left order-3">
              <div class="inline-block animate-slideInRight" style="animation-delay: 0.2s">
                <span class="text-xs uppercase tracking-[3px] text-[#E8D4AD]/40 block mb-2">Étape 02</span>
                <h3 class="text-xl md:text-2xl font-light text-[#E8D4AD] mb-3"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Conseil & Recommandations
                </h3>
                <p class="text-[#E8D4AD]/60 text-sm leading-relaxed max-w-md"
                   style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Nos experts vous conseillent sur les meilleures techniques et produits adaptés à votre type de cheveux.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Étape 3 - à gauche -->
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div class="lg:w-1/2 lg:text-right order-2 lg:order-1">
              <div class="inline-block animate-slideInLeft" style="animation-delay: 0.3s">
                <span class="text-xs uppercase tracking-[3px] text-[#E8D4AD]/40 block mb-2">Étape 03</span>
                <h3 class="text-xl md:text-2xl font-light text-[#E8D4AD] mb-3"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Réalisation Sur-Mesure
                </h3>
                <p class="text-[#E8D4AD]/60 text-sm leading-relaxed max-w-md ml-auto lg:mr-0"
                   style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Une prestation réalisée avec précision et créativité pour un résultat qui vous ressemble.
                </p>
              </div>
            </div>
            <div class="relative z-10 order-1 lg:order-2">
              <div class="w-12 h-12 rounded-full bg-[#343A20] border border-[#E8D4AD]/30 flex items-center justify-center group-hover:border-[#E8D4AD] transition-all duration-500">
                <span class="text-[#E8D4AD] text-sm font-light">03</span>
              </div>
            </div>
            <div class="lg:w-1/2 order-3"></div>
          </div>
          
          <!-- Étape 4 - à droite -->
          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div class="lg:w-1/2 order-2"></div>
            <div class="relative z-10 order-1">
              <div class="w-12 h-12 rounded-full bg-[#343A20] border border-[#E8D4AD]/30 flex items-center justify-center group-hover:border-[#E8D4AD] transition-all duration-500">
                <span class="text-[#E8D4AD] text-sm font-light">04</span>
              </div>
            </div>
            <div class="lg:w-1/2 lg:text-left order-3">
              <div class="inline-block animate-slideInRight" style="animation-delay: 0.4s">
                <span class="text-xs uppercase tracking-[3px] text-[#E8D4AD]/40 block mb-2">Étape 04</span>
                <h3 class="text-xl md:text-2xl font-light text-[#E8D4AD] mb-3"
                    style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Suivi & Conseils Post-Prestation
                </h3>
                <p class="text-[#E8D4AD]/60 text-sm leading-relaxed max-w-md"
                   style="font-family: 'Playfair Display', 'Georgia', serif;">
                  Des recommandations d'entretien pour prolonger la beauté de votre coiffure et préserver vos cheveux.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Bouton de réservation -->
      <div class="text-center mt-16">
        <NuxtLink 
          to="/reservation"
          class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden transition-all duration-500"
        >
          <span class="absolute inset-0 border border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
          <span class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
            Prendre Rendez-vous
          </span>
          <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '10+', label: "Années d'expérience" },
  { number: '5000+', label: 'Clients satisfaits' },
  { number: '100%', label: 'Produits naturels' },
  { number: '24/7', label: 'Support client' }
]
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
}

.animate-slideInLeft {
  animation: slideInLeft 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
}

.animate-slideInRight {
  animation: slideInRight 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.stat-card {
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
}
</style>