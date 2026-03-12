<template>
  <footer class="bg-[#1A1A1A] text-gray-300 py-16 lg:py-20 font-[EBGaramond] border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

        <!-- Logo / Brand & Socials -->
        <div class="flex flex-col space-y-6">
          <NuxtLink to="/" class="inline-block">
            <img src="/logo/Florencia-logo.png" alt="Florencia Logo"
              class="h-10 w-auto object-contain brightness-0 invert opacity-90" />
          </NuxtLink>
          <p class="text-base leading-relaxed text-gray-400">
            Votre salon de beauté moderne. Révélez votre élégance avec nos perruques, mèches, produits cosmétiques, et
            services professionnels.
          </p>
          <!-- Social Icons -->
          <div class="flex items-center gap-4 pt-2">
            <a href="#" aria-label="Facebook"
              class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#9F6E45] hover:border-[#9F6E45] hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram"
              class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#9F6E45] hover:border-[#9F6E45] hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok"
              class="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#9F6E45] hover:border-[#9F6E45] hover:text-white transition-all duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="lg:pl-8">
          <h3 class="text-xl font-semibold text-white mb-6 relative inline-block">
            Navigation
            <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#9F6E45]"></span>
          </h3>
          <ul class="space-y-4 text-base">
            <li>
              <NuxtLink to="/" class="group flex items-center hover:text-[#9F6E45] transition-colors">
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">Accueil</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/a-propos" class="group flex items-center hover:text-[#9F6E45] transition-colors">
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">À propos</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/boutique" class="group flex items-center hover:text-[#9F6E45] transition-colors">
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">Boutique</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/reservation" class="group flex items-center hover:text-[#9F6E45] transition-colors">
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">Réservations</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="group flex items-center hover:text-[#9F6E45] transition-colors">
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">Contact</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-6 relative inline-block">
            Contacts
            <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#9F6E45]"></span>
          </h3>
          <ul class="space-y-4 text-base">
            <li class="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
              <svg class="w-6 h-6 text-[#9F6E45] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bè Kpota, Boulevard de l'Oti,<br>Immeuble ALUCAL, Lome</span>
            </li>
            <li class="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <svg class="w-6 h-6 text-[#9F6E45] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+228 79 19 33 22</span>
            </li>
            <li class="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <svg class="w-6 h-6 text-[#9F6E45] flex-shrink-0 group-hover:scale-110 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>citizen_3warm@icloud.com</span>
            </li>
          </ul>
        </div>

        <!-- Opening Hours -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-6 relative inline-block">
            Horaires
            <span class="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#9F6E45]"></span>
          </h3>
          <ul class="space-y-4 text-base">
            <li class="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>Lundi - Vendredi</span>
              <span class="text-white font-medium">09h00 - 19h00</span>
            </li>
            <li class="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>Samedi</span>
              <span class="text-white font-medium">09h00 - 20h00</span>
            </li>
            <li class="flex justify-between items-center border-b border-gray-700 pb-3">
              <span>Dimanche</span>
              <span class="text-[#9F6E45] font-medium">Fermé</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom -->
      <div
        class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {{ new Date().getFullYear() }} FLORENCIA — Tous droits réservés.</p>
        <div class="flex items-center gap-4 sm:gap-6">
          <NuxtLink to="/mentions-legales" class="hover:text-[#9F6E45] transition-colors">Mentions légales</NuxtLink>
          <span class="text-gray-700 hidden sm:inline">•</span>
          <NuxtLink to="/politique-de-confidentialite" class="hover:text-[#9F6E45] transition-colors">Confidentialité
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Composant Footer Nuxt 3
</script>

<style scoped>
/* Import de la police EB Garamond */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap');
</style>
