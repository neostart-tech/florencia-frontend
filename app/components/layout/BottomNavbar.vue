<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 h-[100px] pointer-events-none">
    <!-- Sophisticated Background with Deep Notch -->
    <div class="absolute bottom-0 left-0 w-full h-[65px] flex items-stretch pointer-events-auto">
      <!-- Left Side -->
      <div class="flex-1 bg-white border-t border-gray-100 shadow-[0_-8px_20px_rgba(0,0,0,0.04)]"></div>

      <!-- Deep SVG Notch -->
      <div class="relative w-[160px] h-full">
        <svg class="absolute top-[-35px] left-0 w-full h-[100px] filter drop-shadow-[0_-10px_15px_rgba(0,0,0,0.06)]"
          viewBox="0 0 160 100" preserveAspectRatio="none">
          <!-- Main White Background -->
          <path d="M0 35 L20 35 C45 35 50 98 80 98 C110 98 115 35 140 35 L160 35 V100 H0 V35 Z" fill="white" />
          <!-- Top Border (Fine Line) -->
          <path d="M0 35 L20 35 C45 35 50 98 80 98 C110 98 115 35 140 35 L160 35" stroke="#F3F4F6" stroke-width="1.2"
            fill="none" />
        </svg>
      </div>

      <!-- Right Side -->
      <div class="flex-1 bg-white border-t border-gray-100 shadow-[0_-8px_20px_rgba(0,0,0,0.04)]"></div>
    </div>

    <!-- Navigation Content -->
    <div class="relative z-10 max-w-lg mx-auto h-full flex justify-between items-end px-5 pb-3 pointer-events-auto">
      <!-- Accueil -->
      <NuxtLink to="/" class="flex flex-col items-center justify-center w-16 transition-all duration-300 mb-1"
        :class="isActive('/') ? 'text-[#9F6E45]' : 'text-gray-400'">
        <svg class="w-6 h-6" :class="{ 'fill-current': isActive('/') }" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-[10px] mt-1 font-bold tracking-tight">Accueil</span>
      </NuxtLink>

      <!-- Boutique -->
      <NuxtLink to="/boutique" class="flex flex-col items-center justify-center w-16 transition-all duration-300 mb-1"
        :class="isActive('/boutique') ? 'text-[#9F6E45]' : 'text-gray-400'">
        <svg class="w-6 h-6 " :class="{ 'fill-current': isActive('/boutique') }" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span class="text-[10px] mt-1 font-bold tracking-tight">Boutique</span>
      </NuxtLink>

      <!-- Panier - Deeply Nested in the Notch -->
      <div class="flex flex-col items-center justify-center w-24 relative -top-[5px]">
        <NuxtLink to="/panier"
          class="flex items-center justify-center w-16 h-16 bg-[#9F6E45] rounded-full shadow-[0_15px_35px_-8px_rgba(159,110,69,0.6)] border-[6px] border-white transition-all transform hover:scale-105 active:scale-95 duration-300 group">
          <div class="relative">
            <svg class="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" />
            </svg>
            <transition name="pop">
              <span v-if="cartCount > 0"
                class="absolute -top-3.5 -right-3.5 bg-red-600 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                {{ cartCount }}
              </span>
            </transition>
          </div>
        </NuxtLink>
      </div>

      <!-- Réservations -->
      <NuxtLink to="/reservation"
        class="flex flex-col items-center justify-center w-16 transition-all duration-300 mb-1"
        :class="isActive('/reservation') ? 'text-[#9F6E45]' : 'text-gray-400'">
        <svg class="w-6 h-6" :class="{ 'fill-current': isActive('/reservation') }" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="text-[10px] mt-1 font-bold tracking-tight">Réserver</span>
      </NuxtLink>

      <!-- Mon Compte -->
      <NuxtLink :to="isLoggedIn ? '/dashboard-client' : '/connexion'"
        class="flex flex-col items-center justify-center w-16 transition-all duration-300 mb-1"
        :class="isActive(isLoggedIn ? '/dashboard-client' : '/connexion') ? 'text-[#9F6E45]' : 'text-gray-400'">
        <svg class="w-6 h-6" :class="{ 'fill-current': isActive(isLoggedIn ? '/dashboard-client' : '/connexion') }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-[10px] mt-1 font-bold tracking-tight">Compte</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from "~~/stores/auth"
import { useCartStore } from "~~/stores/cart"

const route = useRoute()
const auth = useAuthStore()
const cartStore = useCartStore()

const isLoggedIn = computed(() => auth.isLogged)
const cartCount = computed(() => cartStore.items.length)

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
/* Micro-animations */
.pop-enter-active {
  animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.pop-leave-active {
  animation: pop-in 0.2s reverse ease-in;
}

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fill-current path {
  fill: currentColor;
}
</style>
