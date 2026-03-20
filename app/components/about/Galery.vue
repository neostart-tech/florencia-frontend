<template>
  <section class="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-[40%] h-[40%] bg-[#E8D4AD]/10 rounded-full filter blur-[120px]"></div>
      <div class="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#E8D4AD]/10 rounded-full filter blur-[120px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Header minimaliste -->
      <div class="text-center mb-14 lg:mb-18">
        <span class="text-[11px] uppercase tracking-[5px] text-[#E8D4AD]/40 block mb-3"
              style="font-family: 'Playfair Display', 'Georgia', serif;">
          Portfolio
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide"
            style="font-family: 'Playfair Display', 'Georgia', serif; color: #E8D4AD;">
          Notre Travail
        </h2>
        <div class="w-10 h-px bg-[#E8D4AD]/30 mx-auto mt-5"></div>
      </div>
      
      <!-- Galerie Masonry Style - Design professionnel -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        
        <div v-for="(image, idx) in galleryImages" :key="idx"
             class="group relative overflow-hidden rounded-xl cursor-pointer"
             :class="{ 'lg:row-span-2': idx % 5 === 0, 'lg:col-span-1': true }">
          
          <!-- Image -->
          <img :src="image.image" :alt="image.title"
               class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
               :class="idx % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]'">
          
          <!-- Overlay élégant au hover -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/90 via-[#262B14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div class="w-8 h-px bg-[#E8D4AD]/60 mb-3"></div>
              <h3 class="text-xl font-light text-[#E8D4AD] tracking-wide"
                  style="font-family: 'Playfair Display', 'Georgia', serif;">
                {{ image.title }}
              </h3>
              <p class="text-sm text-[#E8D4AD]/60 mt-1">{{ image.description }}</p>
            </div>
          </div>
          
          <!-- Badge catégorie (optionnel) -->
          <div class="absolute top-4 left-4 z-10">
            <span class="text-[10px] uppercase tracking-[2px] bg-[#262B14]/60 backdrop-blur-sm px-3 py-1 rounded-full text-[#E8D4AD]/70"
                  style="font-family: 'Playfair Display', 'Georgia', serif;">
              {{ image.category }}
            </span>
          </div>
        </div>
        
      </div>
      
      <!-- Voir plus - Bouton élégant -->
      <div class="text-center mt-12 lg:mt-16">
        <NuxtLink 
          to="/galerie"
          class="group inline-flex items-center gap-2 text-[#E8D4AD]/70 hover:text-[#E8D4AD] transition-colors duration-300 text-sm tracking-wide"
          style="font-family: 'Playfair Display', 'Georgia', serif;">
          <span>Découvrir toute la galerie</span>
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

<script setup>
const galleryImages = [
  {
    image: '/images/perruque.jpg',
    title: 'Coupe Élégante',
    description: 'Une coupe sur mesure qui révèle votre personnalité',
    category: 'Coupe'
  },
  {
    image: '/images/lunettes.jpg',
    title: 'Balayage Naturel',
    description: 'Des reflets subtils pour une chevelure lumineuse',
    category: 'Coloration'
  },
  {
    image: '/images/creme.jpg',
    title: 'Brushing Parfait',
    description: 'Volume et tenue exceptionnels',
    category: 'Coiffage'
  },
  {
    image: '/images/serum.jpg',
    title: 'Coloration Créative',
    description: 'Des couleurs vibrantes qui font sensation',
    category: 'Coloration'
  },
  {
    image: '/images/huile.jpg',
    title: 'Coiffure de Mariage',
    description: 'Un look de rêve pour votre grand jour',
    category: 'Mariage'
  },

]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

.group {
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}
</style>