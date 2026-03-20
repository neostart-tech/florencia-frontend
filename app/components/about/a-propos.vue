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
      
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        <!-- LEFT SIDE: Image with rounded top only -->
        <div class="w-full lg:w-1/3 flex justify-center group">
          <div class="relative max-w-sm w-full">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#E8D4AD]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative overflow-hidden shadow-2xl">
              <img 
                src="/images/perruque.jpg" 
                alt="Notre Salon"
                class="w-full h-auto object-cover transition-all duration-700"
                style="border-radius: 150px 150px 20px 20px; aspect-ratio: 4/5;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="absolute -top-6 -right-6 w-20 h-20 border border-[#E8D4AD]/30 rounded-full animate-float"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 border border-[#E8D4AD]/20 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </div>
        
        <!-- CENTER: Content -->
        <div class="w-full lg:w-1/3 space-y-6 text-center">
          
          <!-- Subtitle -->
          <div class="inline-block">
            <span class="text-sm uppercase tracking-[3px] text-[#E8D4AD]/60"
                  style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
              Bienvenue Chez
            </span>
          </div>
          
          <!-- Main Title -->
          <h2 class="text-4xl md:text-5xl font-light tracking-wide"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
            FLORENCIA
            <span class="block text-2xl md:text-3xl font-light mt-2 text-[#E8D4AD]/80">Salon de Beauté</span>
          </h2>
          
          <!-- Decorative divider -->
          <div class="w-16 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mx-auto"></div>
          
          <!-- Description -->
          <p class="text-base leading-relaxed text-[#E8D4AD]/80"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; line-height: 1.7;">
            Chez Florencia, nous croyons que vos cheveux méritent créativité et attention. 
            Notre équipe allie créativité et précision pour créer des styles qui subliment votre beauté naturelle. 
            Chaque visite est une expérience unique où votre bien-être est au cœur de nos préoccupations.
          </p>
          
          <!-- Stats or Features -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="text-center group cursor-pointer">
              <div class="text-2xl md:text-3xl font-light text-[#E8D4AD] mb-1 group-hover:scale-110 transition-transform duration-300"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                10+
              </div>
              <div class="text-xs text-[#E8D4AD]/60 uppercase tracking-wider"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Années d'expérience
              </div>
            </div>
            <div class="text-center group cursor-pointer">
              <div class="text-2xl md:text-3xl font-light text-[#E8D4AD] mb-1 group-hover:scale-110 transition-transform duration-300"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                5000+
              </div>
              <div class="text-xs text-[#E8D4AD]/60 uppercase tracking-wider"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Clients satisfaits
              </div>
            </div>
          </div>
          
          <!-- Button -->
          <!-- <div class="pt-4">
            <NuxtLink 
              to="/a-propos"
              class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden transition-all duration-500"
            >
              <span class="absolute inset-0 border border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
              <span class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Découvrir Notre Histoire
              </span>
              <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </NuxtLink>
          </div> -->
          
        </div>
        
        <!-- RIGHT SIDE: Image with pronounced rounded corners (top-left and bottom-right) -->
        <div class="w-full lg:w-1/3 flex justify-center group">
          <div class="relative max-w-sm w-full">
            <div class="absolute -inset-4 bg-gradient-to-l from-[#E8D4AD]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative overflow-hidden shadow-2xl">
              <img 
                src="/images/lunettes.jpg" 
                alt="Notre Équipe"
                class="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                style="border-radius: 200px 0px 200px 0px; aspect-ratio: 4/5;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="absolute -top-6 -left-6 w-20 h-20 border border-[#E8D4AD]/30 rounded-full animate-float"></div>
            <div class="absolute -bottom-6 -right-6 w-16 h-16 border border-[#E8D4AD]/20 rounded-full animate-float animation-delay-1000"></div>
          </div>
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

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>