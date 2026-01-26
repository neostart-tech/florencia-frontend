<template>
  <footer class="bg-[#343434] text-[#CECECE] py-16 font-[EBGaramond]">
    <div class="max-w-7xl mx-auto px-10 lg:px-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">

        <!-- Logo / Brand -->
        <div>
          <div class="flex items-center">
          <NuxtLink to="/">
            <img src="/logo/Florencia2.png" alt="Florencia Logo" class="h-10 w-auto object-contain" />
          </NuxtLink>
        </div>
          <p class="text-sm leading-relaxed">
            <br>Salon de beauté moderne : perruques, mèches, cosmétiques, manucure et services professionnels.
          </p>
        </div>

        <!-- Adresse -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Adresse</h3>
          <div class="space-y-2 text-sm">
            <p>3721 Single Street</p>
            <p>Quincy, MA 02169</p>
          </div>
        </div>

        <!-- Contacts -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Contacts</h3>
          <div class="space-y-2 text-sm">
            <p>+228 90 00 00 00</p>
            <p>support@florencia.com</p>
          </div>
        </div>

        <!-- Navigation & Bouton -->
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-white transition">Accueil</NuxtLink></li>
            <li><NuxtLink to="/apropos" class="hover:text-white transition">À propos</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition">Services</NuxtLink></li>
            <li><NuxtLink to="/boutique" class="hover:text-white transition">Boutique</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition">Contact</NuxtLink></li>
          </ul>
        </div>

      </div>

      <!-- Bottom -->
      <div class="mt-16 pt-8 border-t border-[#676767] text-center text-sm text-[#9B9B9B]">
        © {{ new Date().getFullYear() }} FLORENCIA — Tous droits réservés
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
