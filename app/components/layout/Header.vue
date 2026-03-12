<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex justify-between items-center h-16 sm:h-20">

        <!-- LOGO -->
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo/Florencia-logo2.jpg" alt="Florencia Logo" class="h-5 sm:h-6 md:h-7 w-auto object-contain" />
        </NuxtLink>

        <!-- NAV DESKTOP -->
        <nav
          class="hidden md:flex items-center space-x-8 lg:space-x-10 font-[EBGaramond] text-base lg:text-lg text-black">

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

          <!-- PANIER -->
          <NuxtLink to="/panier" class="relative ml-2 hidden md:block">
            <svg class="w-6 h-6 text-gray-800 hover:text-[#9F6E45] transition" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" />
            </svg>

            <!-- Badge -->
            <span v-if="cartCount > 0"
              class="absolute -top-2 -right-2 bg-[#9F6E45] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {{ cartCount }}
            </span>
          </NuxtLink>
        </nav>

        <!-- CONNEXION DESKTOP -->
        <NuxtLink v-if="!isLoggedIn" to="/connexion"
          class="hidden md:inline-block font-[EBGaramond] px-5 lg:px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition text-sm lg:text-base">
          Connexion
        </NuxtLink>

        <!-- Dashboard (desktop uniquement) -->
        <div v-else class="relative hidden md:block" ref="dropdownRef">
          <button
            class="flex items-center gap-2 font-[EBGaramond] px-5 lg:px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition text-sm lg:text-base cursor-pointer focus:outline-none"
            @click.stop="showDropdown = !showDropdown">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
            </svg>
            Mon compte
          </button>


          <div v-if="showDropdown" class="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-2 z-50">
            <NuxtLink to="/dashboard-client" class="flex items-center gap-2 px-4 py-2 text-[#9F6E45] hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="3" width="7" height="7" rx="2" />
                <rect x="14" y="14" width="7" height="7" rx="2" />
                <rect x="3" y="14" width="7" height="7" rx="2" />
              </svg>
              Mon Dashboard
            </NuxtLink>
            <button
              class="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 border-t border-gray-100 mt-1"
              @click="handleLogout">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
              </svg>
              Déconnexion
            </button>
          </div>
        </div>

        <!-- MENU MOBILE BUTTON -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md hover:bg-gray-100 transition">
          <svg v-if="!mobileMenuOpen" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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

            <NuxtLink v-if="!isLoggedIn" to="/connexion"
              class="mt-4 text-center py-3 rounded-md border border-black font-semibold hover:bg-black hover:text-white transition"
              @click="closeMobile">
              Connexion
            </NuxtLink>

            <!-- Utilisateur connecté -->
            <div v-else class="space-y-3">
              <NuxtLink to="/dashboard-client"
                class="block bg-white text-[#9F6E45] px-3 py-2 rounded-full font-medium text-center hover:bg-[#f5e6d3] transition-colors">
                Mon Dashboard
              </NuxtLink>

              <button @click="handleLogout"
                class="w-full bg-[#9F6E45] text-white px-3 py-2 rounded-full font-medium text-center hover:bg-[#7a5c33] transition-colors">
                Déconnexion
              </button>
            </div>

          </div>
        </div>
      </transition>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from 'vue-router'
import { useAuthStore } from "~~/stores/auth";
import { useCartStore } from "~~/stores/cart";

const auth = useAuthStore()
const cartStore = useCartStore()
const route = useRoute()
const mobileMenuOpen = ref(false)
const showDropdown = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    showDropdown.value = false;
  }
};

const active = (path: string, starts = false) => {
  return starts
    ? route.path.startsWith(path)
      ? 'border-b-2 border-black pb-1'
      : ''
    : route.path === path
      ? 'border-b-2 border-black pb-1'
      : ''
}

const closeMobile = () => {
  mobileMenuOpen.value = false
}

// Initialise le store depuis localStorage
onMounted(() => {
  auth.init();
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Computed réactif pour savoir si l’utilisateur est connecté
const isLoggedIn = computed(() => auth.isLogged);
const cartCount = computed(() => cartStore.items.length);

const handleLogout = () => {
  auth.logout();
  mobileMenuOpen.value = false;
};

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
