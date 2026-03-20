<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background - plus subtil et animé -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-[40%] h-[40%] bg-[#E8D4AD]/5 rounded-full filter blur-[100px] animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#E8D4AD]/5 rounded-full filter blur-[100px] animate-float-slow animation-delay-2000"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Section Header - Animation au scroll -->
      <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20 reveal-on-scroll">
        <span class="text-xs uppercase tracking-[4px] text-[#E8D4AD]/50 mb-3 block opacity-0 animate-fadeInUp"
              style="font-family: 'Playfair Display', 'Georgia', serif; animation-delay: 0.1s;">
          Notre Philosophie
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide opacity-0 animate-fadeInUp"
            style="font-family: 'Playfair Display', 'Georgia', serif; color: #E8D4AD; animation-delay: 0.2s;">
          Ce qui nous anime
        </h2>
        <div class="w-12 h-px bg-[#E8D4AD]/30 mx-auto mt-6 opacity-0 animate-fadeInUp" style="animation-delay: 0.3s;"></div>
      </div>
      
      <!-- Valeurs - Grille avec animations en cascade -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8D4AD]/10">
        
        <!-- Valeur 1 -->
        <div class="value-item group bg-[#262B14] p-8 transition-all duration-500 hover:bg-[#2A2F18] cursor-pointer"
             :style="{ animationDelay: '0.1s' }">
          <div class="mb-6">
            <div class="w-10 h-px bg-[#E8D4AD]/40 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          </div>
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-0 bg-[#E8D4AD]/30 group-hover:h-12 transition-all duration-700"></div>
            <h3 class="text-2xl font-light mb-4 text-[#E8D4AD] tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
              Excellence
            </h3>
            <p class="text-[#E8D4AD]/60 text-sm leading-relaxed group-hover:text-[#E8D4AD]/80 transition-colors duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.6;">
              Une exigence constante dans chaque prestation pour vous offrir un résultat à la hauteur de vos attentes.
            </p>
          </div>
        </div>
        
        <!-- Valeur 2 -->
        <div class="value-item group bg-[#262B14] p-8 transition-all duration-500 hover:bg-[#2A2F18] cursor-pointer"
             :style="{ animationDelay: '0.2s' }">
          <div class="mb-6">
            <div class="w-10 h-px bg-[#E8D4AD]/40 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          </div>
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-0 bg-[#E8D4AD]/30 group-hover:h-12 transition-all duration-700"></div>
            <h3 class="text-2xl font-light mb-4 text-[#E8D4AD] tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
              Créativité
            </h3>
            <p class="text-[#E8D4AD]/60 text-sm leading-relaxed group-hover:text-[#E8D4AD]/80 transition-colors duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.6;">
              Des styles uniques imaginés pour révéler votre personnalité avec audace et élégance.
            </p>
          </div>
        </div>
        
        <!-- Valeur 3 -->
        <div class="value-item group bg-[#262B14] p-8 transition-all duration-500 hover:bg-[#2A2F18] cursor-pointer"
             :style="{ animationDelay: '0.3s' }">
          <div class="mb-6">
            <div class="w-10 h-px bg-[#E8D4AD]/40 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          </div>
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-0 bg-[#E8D4AD]/30 group-hover:h-12 transition-all duration-700"></div>
            <h3 class="text-2xl font-light mb-4 text-[#E8D4AD] tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
              Bien-être
            </h3>
            <p class="text-[#E8D4AD]/60 text-sm leading-relaxed group-hover:text-[#E8D4AD]/80 transition-colors duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.6;">
              Un moment de détente privilégié dans un cadre chaleureux et apaisant.
            </p>
          </div>
        </div>
        
        <!-- Valeur 4 -->
        <div class="value-item group bg-[#262B14] p-8 transition-all duration-500 hover:bg-[#2A2F18] cursor-pointer"
             :style="{ animationDelay: '0.4s' }">
          <div class="mb-6">
            <div class="w-10 h-px bg-[#E8D4AD]/40 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          </div>
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-0 bg-[#E8D4AD]/30 group-hover:h-12 transition-all duration-700"></div>
            <h3 class="text-2xl font-light mb-4 text-[#E8D4AD] tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
              Authenticité
            </h3>
            <p class="text-[#E8D4AD]/60 text-sm leading-relaxed group-hover:text-[#E8D4AD]/80 transition-colors duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.6;">
              Des conseils sincères et un accompagnement personnalisé sans artifice.
            </p>
          </div>
        </div>
        
        <!-- Valeur 5 -->
        <div class="value-item group bg-[#262B14] p-8 transition-all duration-500 hover:bg-[#2A2F18] cursor-pointer"
             :style="{ animationDelay: '0.5s' }">
          <div class="mb-6">
            <div class="w-10 h-px bg-[#E8D4AD]/40 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          </div>
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-0 bg-[#E8D4AD]/30 group-hover:h-12 transition-all duration-700"></div>
            <h3 class="text-2xl font-light mb-4 text-[#E8D4AD] tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
              Savoir-faire
            </h3>
            <p class="text-[#E8D4AD]/60 text-sm leading-relaxed group-hover:text-[#E8D4AD]/80 transition-colors duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.6;">
              Des techniques maîtrisées et une veille constante des dernières tendances.
            </p>
          </div>
        </div>
        
        <!-- Valeur 6 -->
        <div class="value-item group bg-[#262B14] p-8 transition-all duration-500 hover:bg-[#2A2F18] cursor-pointer"
             :style="{ animationDelay: '0.6s' }">
          <div class="mb-6">
            <div class="w-10 h-px bg-[#E8D4AD]/40 group-hover:w-12 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
          </div>
          <div class="relative">
            <div class="absolute -left-4 top-0 w-1 h-0 bg-[#E8D4AD]/30 group-hover:h-12 transition-all duration-700"></div>
            <h3 class="text-2xl font-light mb-4 text-[#E8D4AD] tracking-wide group-hover:translate-x-2 transition-transform duration-500"
                style="font-family: 'Playfair Display', 'Georgia', serif;">
              Écoute
            </h3>
            <p class="text-[#E8D4AD]/60 text-sm leading-relaxed group-hover:text-[#E8D4AD]/80 transition-colors duration-500"
               style="font-family: 'Playfair Display', 'Georgia', serif; line-height: 1.6;">
              Une attention particulière à vos envies pour un résultat qui vous ressemble.
            </p>
          </div>
        </div>
        
      </div>
      
      <!-- Ligne décorative finale animée -->
      <div class="flex justify-center mt-16">
        <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD]/30 to-transparent animate-pulse-gentle"></div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// Composant purement visuel avec animations
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

/* Animations d'apparition */
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

@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -20px) scale(1.05);
  }
}

@keyframes pulse-gentle {
  0%, 100% {
    opacity: 0.3;
    width: 48px;
  }
  50% {
    opacity: 0.8;
    width: 64px;
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-pulse-gentle {
  animation: pulse-gentle 3s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Animation en cascade pour les cartes */
.value-item {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
}

/* Effet de transition élégant */
.group {
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

/* Animation de la ligne verticale */
.group:hover .absolute {
  transition: height 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}
</style>