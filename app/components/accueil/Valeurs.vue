<template>
  <section class="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
    </div>
    
    <!-- Elegant pattern overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Cards Grid - 3x2 layout with taller cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <!-- Card 1: Pro Equipment - Dark background -->
        <div class="card-dark group p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between animate-slideUp"
             style="background-color: #343A20; min-height: 380px;">
          <!-- Top row: Title left + Icon right -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white;">
              Équipement Pro
            </h3>
            <div class="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#E8D4AD]/20 transition-all duration-300">
              <svg class="w-7 h-7 text-[#E8D4AD] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h14M5 15h14M3 7h18M3 17h18M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
            </div>
          </div>
          <!-- Main title -->
          <h4 class="text-2xl md:text-3xl font-light mb-2 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white;">
            Outils de Salon
          </h4>
          <!-- Full width divider with glow effect - minimal margin -->
          <div class="w-full h-px bg-gradient-to-r from-[#E8D4AD]/20 via-[#E8D4AD]/60 to-[#E8D4AD]/20 mb-1 group-hover:via-[#E8D4AD] transition-all duration-500"></div>
          <!-- Description with no top margin -->
          <p class="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white; line-height: 1.5;">
            Des outils professionnels de dernière génération pour des résultats parfaits et un confort optimal.
          </p>
        </div>
        
        <!-- Card 2: Available Anytime - Light background -->
        <div class="card-light group p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between animate-slideUp animation-delay-1"
             style="background-color: #E8D4AD; min-height: 380px;">
          <!-- Top row: Title left + Icon right -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14;">
              Disponible à Tout Moment
            </h3>
            <div class="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#262B14]/10 transition-all duration-300">
              <svg class="w-7 h-7 text-[#262B14] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <!-- Main title -->
          <h4 class="text-2xl md:text-3xl font-light mb-2 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14;">
            Ouvert 24/7
          </h4>
          <!-- Full width divider with glow effect - minimal margin -->
          <div class="w-full h-px bg-gradient-to-r from-[#262B14]/20 via-[#262B14]/60 to-[#262B14]/20 mb-1 group-hover:via-[#262B14] transition-all duration-500"></div>
          <!-- Description -->
          <p class="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14; line-height: 1.5;">
            Service disponible à toute heure pour s'adapter à votre emploi du temps chargé.
          </p>
        </div>
        
        <!-- Card 3: Comfort Zone - Dark background -->
        <div class="card-dark group p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between animate-slideUp animation-delay-2"
             style="background-color: #343A20; min-height: 380px;">
          <!-- Top row: Title left + Icon right -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white;">
              Zone de Confort
            </h3>
            <div class="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#E8D4AD]/20 transition-all duration-300">
              <svg class="w-7 h-7 text-[#E8D4AD] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <!-- Main title -->
          <h4 class="text-2xl md:text-3xl font-light mb-2 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white;">
            Intérieur Élégant
          </h4>
          <!-- Full width divider - minimal margin -->
          <div class="w-full h-px bg-gradient-to-r from-[#E8D4AD]/20 via-[#E8D4AD]/60 to-[#E8D4AD]/20 mb-1 group-hover:via-[#E8D4AD] transition-all duration-500"></div>
          <!-- Description -->
          <p class="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white; line-height: 1.5;">
            Un cadre chaleureux et apaisant pour une expérience relaxante et agréable.
          </p>
        </div>
        
        <!-- Card 4: Styling Essentials - Light background -->
        <div class="card-light group p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between animate-slideUp"
             style="background-color: #E8D4AD; min-height: 380px;">
          <!-- Top row: Title left + Icon right -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14;">
              Essentiels du Coiffage
            </h3>
            <div class="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#262B14]/10 transition-all duration-300">
              <svg class="w-7 h-7 text-[#262B14] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
          </div>
          <!-- Main title -->
          <h4 class="text-2xl md:text-3xl font-light mb-2 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14;">
            Produits Pro
          </h4>
          <!-- Full width divider - minimal margin -->
          <div class="w-full h-px bg-gradient-to-r from-[#262B14]/20 via-[#262B14]/60 to-[#262B14]/20 mb-1 group-hover:via-[#262B14] transition-all duration-500"></div>
          <!-- Description -->
          <p class="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14; line-height: 1.5;">
            Des produits professionnels de qualité supérieure pour des soins et coiffures durables.
          </p>
        </div>
        
        <!-- Card 5: Fast Styling - Dark background -->
        <div class="card-dark group p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between animate-slideUp animation-delay-1"
             style="background-color: #343A20; min-height: 380px;">
          <!-- Top row: Title left + Icon right -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white;">
              Coiffage Rapide
            </h3>
            <div class="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#E8D4AD]/20 transition-all duration-300">
              <svg class="w-7 h-7 text-[#E8D4AD] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <!-- Main title -->
          <h4 class="text-2xl md:text-3xl font-light mb-2 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white;">
            Séchage Express
          </h4>
          <!-- Full width divider - minimal margin -->
          <div class="w-full h-px bg-gradient-to-r from-[#E8D4AD]/20 via-[#E8D4AD]/60 to-[#E8D4AD]/20 mb-1 group-hover:via-[#E8D4AD] transition-all duration-500"></div>
          <!-- Description -->
          <p class="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: white; line-height: 1.5;">
            Techniques et équipements performants pour un résultat impeccable en un temps record.
          </p>
        </div>
        
        <!-- Card 6: Certified - Light background -->
        <div class="card-light group p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl flex flex-col justify-between animate-slideUp animation-delay-2"
             style="background-color: #E8D4AD; min-height: 380px;">
          <!-- Top row: Title left + Icon right -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14;">
              Certifié
            </h3>
            <div class="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-[#262B14]/10 transition-all duration-300">
              <svg class="w-7 h-7 text-[#262B14] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <!-- Main title -->
          <h4 class="text-2xl md:text-3xl font-light mb-2 group-hover:scale-[1.02] transition-transform duration-300 origin-left"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14;">
            Experts Capillaires
          </h4>
          <!-- Full width divider - minimal margin -->
          <div class="w-full h-px bg-gradient-to-r from-[#262B14]/20 via-[#262B14]/60 to-[#262B14]/20 mb-1 group-hover:via-[#262B14] transition-all duration-500"></div>
          <!-- Description -->
          <p class="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #262B14; line-height: 1.5;">
            Une équipe de professionnels qualifiés et expérimentés à votre service.
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>

<style scoped>
/* Elegant fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

/* Elegant animations */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

/* Slide up animation with bounce effect */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideUp 0.8s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}

/* Animation delays for alternating cards */
.animation-delay-1 {
  animation-delay: 0.2s;
}

.animation-delay-2 {
  animation-delay: 0.4s;
}

/* Card hover effects */
.card-dark, .card-light {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 12px;
}

.card-dark:hover, .card-light:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 40px rgba(0, 0, 0, 0.3);
}

/* Animations */
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>