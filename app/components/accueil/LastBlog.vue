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
      
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
            style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
          Derniers Articles
        </h2>
        <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto mt-6"></div>
      </div>
      
      <!-- Articles Grid - 3 columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        
        <!-- Loop through articles -->
        <NuxtLink 
          v-for="(article, index) in articles" 
          :key="article.id"
          :to="`/blog/${article.slug}`"
          class="article-card group cursor-pointer animate-slideUp"
          :class="{
            'animation-delay-0': index === 0,
            'animation-delay-1': index === 1,
            'animation-delay-2': index === 2
          }"
        >
          <!-- Image with rounded top corners only -->
          <div class="relative overflow-hidden shadow-xl">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
              style="border-radius: 60px 60px 0 0;"
            />
            
            <!-- Dark semi-transparent overlay on hover -->
            <div class="absolute inset-0 bg-[#262B14]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Read more overlay on hover -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="px-6 py-2 border-2 border-[#E8D4AD] text-[#E8D4AD] text-sm tracking-wider uppercase bg-[#262B14]/50 backdrop-blur-sm"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Lire l'article
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="pt-6 space-y-3">
            <!-- Date -->
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-[#E8D4AD]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-sm text-[#E8D4AD]/70"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                {{ article.date }}
              </span>
            </div>
            
            <!-- Article Title -->
            <h3 class="text-xl md:text-2xl font-light tracking-wide group-hover:text-[#E8D4AD] transition-colors duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
              {{ article.title }}
            </h3>
            
            <!-- Decorative divider -->
            <div class="w-12 h-px bg-[#E8D4AD]/30 group-hover:w-16 group-hover:bg-[#E8D4AD] transition-all duration-500"></div>
            
            <!-- Short description -->
            <p class="text-sm leading-relaxed text-[#E8D4AD]/70"
               style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; line-height: 1.5;">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
        
      </div>
      
      <!-- View All Articles Button -->
      <div class="text-center mt-12 lg:mt-16">
        <NuxtLink 
          to="/blog"
          class="group relative inline-flex items-center justify-center px-10 py-3 overflow-hidden transition-all duration-500"
        >
          <span class="absolute inset-0 border border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
          <span class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            Voir Tous les Articles
          </span>
          <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
// Articles data
interface Article {
  id: number;
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Les Tendances Capillaires du Printemps",
    slug: "tendances-capillaires-printemps",
    date: "15 Mars 2024",
    description: "Découvrez les couleurs et coupes qui feront sensation cette saison.",
    image: "/images/serum.jpg"
  },
  {
    id: 2,
    title: "Soins Naturels pour Cheveux Crépus",
    slug: "soins-naturels-cheveux-crepus",
    date: "8 Mars 2024",
    description: "Astuces et produits naturels pour sublimer vos cheveux crépus.",
    image: "/images/serum.jpg"
  },
  {
    id: 3,
    title: "Routines Capillaires pour l'Été",
    slug: "routines-capillaires-ete",
    date: "1 Mars 2024",
    description: "Protégez vos cheveux des agressions estivales avec nos conseils experts.",
    image: "/images/serum.jpg"
  }
];
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

/* Slide up animation */
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

/* Animation delays */
.animation-delay-0 {
  animation-delay: 0s;
}

.animation-delay-1 {
  animation-delay: 0.2s;
}

.animation-delay-2 {
  animation-delay: 0.4s;
}

/* Article card hover effects */
.article-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: block;
}

.article-card:hover {
  transform: translateY(-5px);
}

/* Image styling */
img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>