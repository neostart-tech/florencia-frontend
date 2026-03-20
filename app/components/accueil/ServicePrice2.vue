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
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- LEFT SIDE: SERVICES LIST -->
        <div class="w-full lg:w-1/2 space-y-6">
          
          <!-- Section Title -->
          <div class="mb-8">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
              Vibrance
              <span class="block text-3xl md:text-4xl font-light mt-2">Hair Coloring</span>
            </h2>
            <div class="w-20 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mt-4"></div>
          </div>
          
          <!-- Service 1: Root Touch-Up -->
          <div class="service-item group p-4 transition-all duration-300 hover:translate-x-2"
               style="border-bottom: 1px solid rgba(232, 212, 173, 0.2);">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-light tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
                  Retouche Racines
                </h3>
                <p class="text-sm text-[#E8D4AD]/60 mt-1">10 mins session</p>
              </div>
              <div class="text-right">
                <span class="text-2xl md:text-3xl font-light"
                      style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
                  45 000 FCFA
                </span>
              </div>
            </div>
          </div>
          
          <!-- Service 2: Full Hair Color (with addon badge) -->
          <div class="service-item group p-4 transition-all duration-300 hover:translate-x-2 relative"
               style="border-bottom: 1px solid rgba(232, 212, 173, 0.2);">
            <div class="absolute -top-2 -left-2">
              <span class="text-[10px] uppercase tracking-wider bg-[#E8D4AD] text-[#262B14] px-2 py-0.5"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Addon
              </span>
            </div>
            <div class="flex items-center justify-between pt-2">
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-light tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
                  Coloration Complète
                </h3>
                <p class="text-sm text-[#E8D4AD]/60 mt-1">15 mins session</p>
              </div>
              <div class="text-right">
                <span class="text-2xl md:text-3xl font-light"
                      style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
                  10 000 FCFA
                </span>
              </div>
            </div>
          </div>
          
          <!-- Service 3: Balayage -->
          <div class="service-item group p-4 transition-all duration-300 hover:translate-x-2"
               style="border-bottom: 1px solid rgba(232, 212, 173, 0.2);">
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-light tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
                  Balayage
                </h3>
                <p class="text-sm text-[#E8D4AD]/60 mt-1">5 mins session</p>
              </div>
              <div class="text-right">
                <span class="text-2xl md:text-3xl font-light"
                      style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
                  18 000 FCFA
                </span>
              </div>
            </div>
          </div>
          
          <!-- Book An Appointment Button -->
          <div class="pt-8">
            <NuxtLink 
              to="/reservation"
              class="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden transition-all duration-500 w-full sm:w-auto"
            >
              <span class="absolute inset-0 border-2 border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
              <span class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Prendre Rendez-vous
              </span>
              <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </NuxtLink>
          </div>
          
        </div>

        <!-- RIGHT SIDE: IMAGE with rounded top corners only -->
        <div class="w-full lg:w-1/2 flex justify-center group">
          <div class="relative max-w-md w-full">
            <!-- Decorative frame -->
            <div class="absolute -inset-4 bg-gradient-to-l from-[#E8D4AD]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <!-- Main image with rounded top corners only -->
            <div class="relative overflow-hidden shadow-2xl">
              <img 
                src="/images/huile.jpg" 
                alt="Vibrance Hair Coloring"
                class="w-full h-auto object-cover transition-all duration-700"
                style="border-radius: 200px 200px 0 0;"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <!-- Floating decorative elements -->
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

/* Service items hover effect */
.service-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.service-item:hover {
  transform: translateX(8px);
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