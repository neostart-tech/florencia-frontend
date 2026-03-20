<template>
  <section class="relative py-32 lg:py-48 overflow-hidden">
    
    <!-- Background Image with overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/creme.jpg" 
        alt="Expert Stylists Background"
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay for better text visibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#262B14]/90 via-[#262B14]/70 to-[#262B14]/50"></div>
    </div>
    
    <!-- Decorative pattern overlay -->
    <div class="absolute inset-0 opacity-20 z-0" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
      
      <!-- Decorative element -->
      <div class="mb-6">
        <div class="w-12 h-px bg-[#E8D4AD] mx-auto"></div>
      </div>
      
      <!-- Main Title -->
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6"
          style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
        Coiffeurs Experts
      </h2>
      
      <!-- Subtitle -->
      <p class="text-xl md:text-2xl lg:text-3xl font-light mb-10 max-w-2xl mx-auto"
         style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD; opacity: 0.9;">
        Découvrez Votre Style Signature
      </p>
      
      <!-- Decorative element -->
      <div class="flex justify-center gap-3 mb-10">
        <div class="w-2 h-2 rounded-full bg-[#E8D4AD]"></div>
        <div class="w-2 h-2 rounded-full bg-[#E8D4AD]"></div>
        <div class="w-2 h-2 rounded-full bg-[#E8D4AD]"></div>
      </div>
      
      <!-- Button -->
      <NuxtLink 
        to="/reservation"
        class="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden transition-all duration-500"
      >
        <span class="absolute inset-0 border-2 border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
        <span class="relative z-10 text-[#E8D4AD] uppercase text-base tracking-[4px] font-light group-hover:text-[#262B14] transition-colors duration-300"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
          Réserver Maintenant
        </span>
        <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
      </NuxtLink>
      
      <!-- Decorative element at bottom -->
      <div class="mt-12">
        <div class="w-12 h-px bg-[#E8D4AD] mx-auto"></div>
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

/* Animation for the button */
.group:hover .group-hover\:translate-x-0 {
  transform: translateX(0);
}

.group .absolute {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth fade-in animation for content */
section .relative {
  animation: fadeInUp 0.8s ease-out;
}

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

/* Decorative dots animation */
.flex .w-2 {
  animation: pulse 2s ease-in-out infinite;
}

.flex .w-2:nth-child(1) {
  animation-delay: 0s;
}

.flex .w-2:nth-child(2) {
  animation-delay: 0.3s;
}

.flex .w-2:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>