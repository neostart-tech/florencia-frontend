<template>
  <footer class="relative bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310] text-[#E8D4AD] pt-16 lg:pt-20 pb-6 overflow-hidden">
    
    <!-- Decorative animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8D4AD] rounded-full filter blur-[120px] opacity-5 animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8D4AD] rounded-full filter blur-[120px] opacity-5 animate-float-slow animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8D4AD] rounded-full filter blur-[150px] opacity-3 animate-pulse-slow"></div>
    </div>
    
    <!-- Elegant pattern overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <!-- Animated gradient border top -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent animate-shimmer"></div>
    
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
      
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-[#E8D4AD]/10">
        
        <!-- Logo / Brand & Socials -->
        <div class="flex flex-col space-y-6 group">
          <NuxtLink to="/" class="inline-block group">
            <img src="/logo/Florencia-logo.png" alt="Florencia Logo"
              class="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
          </NuxtLink>
          <p class="text-sm leading-relaxed text-[#E8D4AD]/70 group-hover:text-[#E8D4AD]/90 transition-all duration-500"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            Votre salon de beauté moderne. Révélez votre élégance avec nos perruques, mèches, produits cosmétiques, et
            services professionnels.
          </p>
          <!-- Social Icons -->
          <div class="flex items-center gap-4 pt-2">
            <a href="#" aria-label="Facebook"
              class="w-10 h-10 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:border-[#E8D4AD] hover:text-[#262B14] hover:scale-110 transition-all duration-300 group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram"
              class="w-10 h-10 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:border-[#E8D4AD] hover:text-[#262B14] hover:scale-110 transition-all duration-300 group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok"
              class="w-10 h-10 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:border-[#E8D4AD] hover:text-[#262B14] hover:scale-110 transition-all duration-300 group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Navigation -->
        <div>
          <h3 class="text-xl font-light tracking-wide mb-6 relative inline-block group"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
            Navigation
            <span class="absolute -bottom-2 left-0 w-8 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent group-hover:w-full transition-all duration-500"></span>
          </h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink :to="item.path" 
                class="group flex items-center text-[#E8D4AD]/70 hover:text-[#E8D4AD] transition-all duration-300 text-sm font-light relative"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">{{ item.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contacts -->
        <div>
          <h3 class="text-xl font-light tracking-wide mb-6 relative inline-block group"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
            Contacts
            <span class="absolute -bottom-2 left-0 w-8 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent group-hover:w-full transition-all duration-500"></span>
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 group cursor-pointer">
              <div class="relative">
                <svg class="w-5 h-5 text-[#E8D4AD]/50 group-hover:text-[#E8D4AD] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="absolute inset-0 bg-[#E8D4AD]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
              </div>
              <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors leading-relaxed"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                Bè Kpota, Boulevard de l'Oti,<br>Immeuble ALUCAL, Lomé
              </span>
            </li>
            <li class="flex items-center gap-3 group cursor-pointer">
              <div class="relative">
                <svg class="w-5 h-5 text-[#E8D4AD]/50 group-hover:text-[#E8D4AD] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div class="absolute inset-0 bg-[#E8D4AD]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
              </div>
              <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                +228 79 19 33 22
              </span>
            </li>
            <li class="flex items-center gap-3 group cursor-pointer">
              <div class="relative">
                <svg class="w-5 h-5 text-[#E8D4AD]/50 group-hover:text-[#E8D4AD] group-hover:scale-110 group-hover:translate-x-0.5 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div class="absolute inset-0 bg-[#E8D4AD]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
              </div>
              <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                citizen_3warm@icloud.com
              </span>
            </li>
          </ul>
        </div>
        
        <!-- Opening Hours -->
        <div>
          <h3 class="text-xl font-light tracking-wide mb-6 relative inline-block group"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
            Horaires
            <span class="absolute -bottom-2 left-0 w-8 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent group-hover:w-full transition-all duration-500"></span>
          </h3>
          <ul class="space-y-3">
            <li class="flex justify-between items-center pb-2 border-b border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-300">
              <span class="text-sm text-[#E8D4AD]/70" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">Lundi - Vendredi</span>
              <span class="text-sm text-[#E8D4AD] font-light" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">09h00 - 19h00</span>
            </li>
            <li class="flex justify-between items-center pb-2 border-b border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-300">
              <span class="text-sm text-[#E8D4AD]/70" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">Samedi</span>
              <span class="text-sm text-[#E8D4AD] font-light" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">09h00 - 20h00</span>
            </li>
            <li class="flex justify-between items-center pt-1">
              <span class="text-sm text-[#E8D4AD]/70" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">Dimanche</span>
              <span class="text-sm text-[#E8D4AD] font-light" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">Fermé</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <!-- NEWSLETTER SECTION - Integrated elegantly at the bottom -->
      <div class="py-8 border-b border-[#E8D4AD]/10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div class="text-center lg:text-left">
            <h4 class="text-lg font-light tracking-wide mb-1"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
              Restez Inspiré
            </h4>
            <p class="text-[#E8D4AD]/50 text-xs"
               style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
              Recevez nos conseils beauté et offres exclusives
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              class="flex-1 lg:w-72 px-5 py-2.5 bg-[#343A20]/50 border border-[#E8D4AD]/20 rounded-full text-[#E8D4AD] placeholder:text-[#E8D4AD]/40 outline-none focus:border-[#E8D4AD] transition-all duration-300 text-sm"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
            >
            <button class="group relative px-6 py-2.5 overflow-hidden rounded-full transition-all duration-500">
              <span class="absolute inset-0 border border-[#E8D4AD] rounded-full"></span>
              <span class="relative z-10 text-[#E8D4AD] text-sm tracking-wide group-hover:text-[#262B14] transition-colors duration-300"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                S'abonner
              </span>
              <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Bottom Credit Section -->
      <div class="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p class="text-[#E8D4AD]/50 text-xs tracking-wide group hover:text-[#E8D4AD]/70 transition-colors duration-300"
           style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
          © {{ new Date().getFullYear() }} FLORENCIA — Tous droits réservés.
        </p>
        <div class="flex items-center gap-2 group">
          <span class="text-[#E8D4AD]/40 text-xs tracking-wide"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            Développé par
          </span>
          <a 
            href="https://neostart.tech/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#E8D4AD] hover:text-[#E8D4AD]/90 transition-all duration-300 text-xs tracking-wide font-medium relative group/link"
            style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            Neo Start Technology
            <span class="absolute -bottom-1 left-0 w-0 h-px bg-[#E8D4AD] group-hover/link:w-full transition-all duration-500"></span>
            <svg class="inline-block w-3 h-3 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Decorative floating elements -->
      <div class="absolute bottom-0 left-0 w-32 h-32 pointer-events-none">
        <div class="absolute bottom-0 left-0 w-1 h-16 bg-gradient-to-t from-[#E8D4AD]/20 to-transparent"></div>
        <div class="absolute bottom-0 left-2 w-1 h-24 bg-gradient-to-t from-[#E8D4AD]/10 to-transparent"></div>
      </div>
      <div class="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
        <div class="absolute bottom-0 right-0 w-1 h-16 bg-gradient-to-t from-[#E8D4AD]/20 to-transparent"></div>
        <div class="absolute bottom-0 right-2 w-1 h-24 bg-gradient-to-t from-[#E8D4AD]/10 to-transparent"></div>
      </div>
      
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ref([
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Boutique', path: '/boutique' },
  { name: 'Réservations', path: '/reservation' },
  { name: 'Contact', path: '/contact' }
])
</script>

<style scoped>
/* Elegant fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

/* Elegant animations */
@keyframes float-slow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -20px) scale(1.05);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.03;
    transform: scale(1);
  }
  50% {
    opacity: 0.08;
    transform: scale(1.1);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 3s infinite;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>