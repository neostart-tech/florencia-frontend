<template>
  <section class="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="bgImage" 
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Overlay for better text visibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#262B14]/80 via-[#262B14]/60 to-[#262B14]/70"></div>
    </div>
    
    <!-- Decorative pattern overlay -->
    <div class="absolute inset-0 opacity-20 z-0" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
      
      <!-- Breadcrumb Navigation -->
      <div class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#262B14]/50 backdrop-blur-sm border border-[#E8D4AD]/20">
        <NuxtLink 
          to="/" 
          class="text-[#E8D4AD]/60 hover:text-[#E8D4AD] transition-colors duration-300 text-sm"
          style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
          Accueil
        </NuxtLink>
        <svg class="w-4 h-4 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-[#E8D4AD] text-sm"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
          {{ currentPage }}
        </span>
      </div>
      
      <!-- Main Title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4"
          style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
        {{ title }}
      </h1>
      
      <!-- Subtitle / Description -->
      <p v-if="subtitle" class="text-base md:text-lg text-[#E8D4AD]/70 max-w-2xl mx-auto"
         style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
        {{ subtitle }}
      </p>
      
      <!-- Decorative line -->
      <div class="flex justify-center mt-6">
        <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent"></div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  bgImage?: string;
  currentPage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: '',
  bgImage: '/images/breadcrumb-bg.jpg',
  currentPage: ''
})
</script>

<style scoped>
/* Elegant fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
</style>