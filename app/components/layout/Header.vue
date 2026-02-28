<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex justify-between items-center h-16 sm:h-20">

        <!-- LOGO -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/logo/Florencia-logo2.jpg"
            alt="Florencia Logo"
            class="h-5 sm:h-6 md:h-7 w-auto object-contain"
          />
        </NuxtLink>

        <!-- NAV DESKTOP -->
        <nav class="hidden md:flex items-center space-x-8 lg:space-x-10 font-[EBGaramond] text-base lg:text-lg text-black">

          <NuxtLink to="/" class="nav-link" :class="active('/')">
            Accueil
          </NuxtLink>

          <NuxtLink to="/boutique" class="nav-link" :class="active('/boutique', true)">
            Boutique
          </NuxtLink>

          <NuxtLink to="/reservation" class="nav-link" :class="active('/reservation')">
            Réservations
          </NuxtLink>

          <NuxtLink to="/a-propos" class="nav-link" :class="active('/a-propos')">
            À propos
          </NuxtLink>

          <NuxtLink to="/contact" class="nav-link" :class="active('/contact')">
            Contact
          </NuxtLink>

          <!-- PANIER -->
          <NuxtLink to="/panier" class="relative ml-2">
            <svg class="w-6 h-6 text-gray-800 hover:text-[#9F6E45] transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" />
            </svg>

            <!-- Badge -->
            <span class="absolute -top-2 -right-2 bg-[#9F6E45] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </NuxtLink>
        </nav>

        <!-- CONNEXION DESKTOP -->
        <NuxtLink
          to="/connexion"
          class="hidden md:inline-block font-[EBGaramond] px-5 lg:px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition text-sm lg:text-base"
        >
          Connexion
        </NuxtLink>

        <!-- MENU MOBILE BUTTON -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          <svg v-if="!mobileMenuOpen" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      <!-- MOBILE MENU -->
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
          <div class="flex flex-col gap-2 font-[EBGaramond] text-lg">

            <NuxtLink to="/" class="mobile-link" @click="closeMobile">Accueil</NuxtLink>
            <NuxtLink to="/boutique" class="mobile-link" @click="closeMobile">Boutique</NuxtLink>
            <NuxtLink to="/reservation" class="mobile-link" @click="closeMobile">Réservations</NuxtLink>
            <NuxtLink to="/a-propos" class="mobile-link" @click="closeMobile">À propos</NuxtLink>
            <NuxtLink to="/contact" class="mobile-link" @click="closeMobile">Contact</NuxtLink>

            <NuxtLink
              to="/connexion"
              class="mt-4 text-center py-3 rounded-md border border-black font-semibold hover:bg-black hover:text-white transition"
              @click="closeMobile"
            >
              Connexion
            </NuxtLink>

          </div>
        </div>
      </transition>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const active = (path, starts = false) =>
  starts
    ? route.path.startsWith(path)
      ? 'border-b-2 border-black pb-1'
      : ''
    : route.path === path
      ? 'border-b-2 border-black pb-1'
      : ''

const closeMobile = () => {
  mobileMenuOpen.value = false
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-link {
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: #9F6E45;
}

.mobile-link {
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  transition: background 0.2s ease;
}
.mobile-link:hover {
  background-color: #f9fafb;
}
</style>
