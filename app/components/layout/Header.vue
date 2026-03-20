<template>
  <header class="sticky top-0 z-50 bg-[#262B14] text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex justify-between items-center h-16 sm:h-20">

        <!-- LEFT SECTION: CONTACT US BUTTON -->
        <div class="hidden md:block">
          <button 
            @click="scrollToContact" 
            class="contact-btn px-5 lg:px-6 py-2 border border-white text-white hover:text-[#E7D3AC] transition-colors duration-300 text-sm lg:text-base relative overflow-hidden group"
          >
            <span class="inline-block transition-all duration-300 group-hover:animate-slideFromTop">CONTACT US</span>
          </button>
        </div>

        <!-- CENTER: NAVIGATION + LOGO -->
        <div class="hidden md:flex items-center space-x-8 lg:space-x-10 font-[EBGaramond] text-base lg:text-lg">
          <NuxtLink to="/" class="nav-link" :class="active('/')">
            Accueil
          </NuxtLink>

          <NuxtLink to="/a-propos" class="nav-link" :class="active('/a-propos')">
            À propos
          </NuxtLink>

          <!-- LOGO placed between À propos and Boutique -->
          <NuxtLink to="/" class="flex items-center">
            <img src="/logo/Florencia2.png" alt="Florencia Logo" class="h-5 sm:h-6 md:h-7 w-auto object-contain" />
          </NuxtLink>

          <NuxtLink to="/boutique" class="nav-link" :class="active('/boutique', true)">
            Boutique
          </NuxtLink>

          <NuxtLink to="/service" class="nav-link" :class="active('/service', true)">
            Services
          </NuxtLink>

          <NuxtLink to="/blog" class="nav-link" :class="active('/blog')">
            Blog
          </NuxtLink>
        </div>

        <!-- RIGHT SECTION: ICONS (Cart & Search) -->
        <div class="flex items-center gap-4">
          <!-- SEARCH BUTTON -->
          <div class="relative">
            <button 
              @click="toggleSearch" 
              class="p-2 hover:opacity-70 transition"
            >
              <svg class="w-5 h-5 text-[#E7D3AC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <!-- SEARCH INPUT DROPDOWN -->
            <transition name="slide-down">
              <div v-if="showSearch" class="absolute top-full right-0 mt-2 w-72 rounded-lg overflow-hidden" style="background-color: #5E6952;">
                <div class="flex items-center p-2">
                  <input 
                    type="text" 
                    v-model="searchQuery"
                    placeholder="Rechercher..."
                    class="flex-1 px-3 py-2 outline-none"
                    style="background-color: #5E6952; color: #E7D3AC;"
                    @keyup.enter="performSearch"
                  />
                  <button 
                    @click="performSearch"
                    class="px-3 py-2 rounded-md transition hover:opacity-80"
                    style="color: #E7D3AC;"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </transition>
          </div>

          <!-- CART BUTTON -->
          <NuxtLink to="/panier" class="relative p-2 hover:opacity-70 transition">
            <svg class="w-5 h-5 text-[#E7D3AC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" />
            </svg>
            <span v-if="cartCount > 0"
              class="absolute -top-1 -right-1 bg-[#E7D3AC] text-[#262B14] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {{ cartCount }}
            </span>
          </NuxtLink>

          <!-- HAMBURGER MENU BUTTON -->
          <button 
            @click.stop="toggleSidebar" 
            class="p-2 hover:opacity-70 transition"
            ref="hamburgerButton"
          >
            <svg v-if="!sidebarOpen" class="h-6 w-6 text-[#E7D3AC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6 text-[#E7D3AC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- SIDEBAR with blur effect on the left side -->
    <transition name="fade">
      <div v-if="sidebarOpen" class="fixed inset-0 z-50" @click.self="closeSidebar">
        <!-- Blur overlay on the left side -->
        <div class="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
        
        <!-- Sidebar content - floating on the right -->
        <div class="fixed top-0 right-0 h-full w-80 bg-[#262B14] shadow-2xl overflow-y-auto z-10" ref="sidebarRef">
          <div class="p-6">
            <!-- Close button -->
            <button @click="closeSidebar" class="absolute top-4 right-4 p-2 hover:opacity-70">
              <svg class="w-6 h-6 text-[#E7D3AC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Logo -->
            <div class="flex justify-center mb-8 mt-4">
              <NuxtLink to="/" @click="closeSidebar">
                <img src="/logo/Florencia2.png" alt="Florencia Logo" class="h-10 w-auto" />
              </NuxtLink>
            </div>

            <!-- Navigation Links -->
           

            <!-- Divider -->
            <div class="border-t border-white/20 my-6"></div>

            <!-- Contact Information -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold mb-3 text-[#E7D3AC]">Contact</h3>
              <div class="space-y-2 text-sm">
                <p>785 15th Street, Office 478<br>Berlin, De 81566</p>
                <p>P: + 000 111 456<br>E: info@example.com</p>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-white/20 my-6"></div>

            <!-- Social Follow -->
            <div>
              <h3 class="text-lg font-semibold mb-3 text-[#E7D3AC]">Follow</h3>
              <div class="flex gap-4">
                <a href="#" class="hover:opacity-70 transition text-[#E7D3AC]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" class="hover:opacity-70 transition text-[#E7D3AC]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" class="hover:opacity-70 transition text-[#E7D3AC]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="#" class="hover:opacity-70 transition text-[#E7D3AC]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Auth Section -->
            <div class="mt-8 pt-4 border-t border-white/20">
              <NuxtLink v-if="!isLoggedIn" to="/connexion" 
                class="block text-center py-3 border border-white hover:bg-white hover:text-[#262B14] transition"
                @click="closeSidebar">
                Connexion
              </NuxtLink>
              <div v-else class="space-y-3">
                <NuxtLink to="/dashboard-client"
                  class="block text-center py-3 border border-white hover:bg-white hover:text-[#262B14] transition"
                  @click="closeSidebar">
                  Mon Dashboard
                </NuxtLink>
                <button @click="handleLogout"
                  class="w-full bg-white text-[#262B14] py-3 hover:opacity-90 transition">
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
const sidebarOpen = ref(false)
const showSearch = ref(false)
const searchQuery = ref("")
const sidebarRef = ref<HTMLElement | null>(null)
const hamburgerButton = ref<HTMLElement | null>(null)

const active = (path: string, starts = false) => {
  const isActive = starts ? route.path.startsWith(path) : route.path === path
  return isActive ? 'active-link' : ''
}

const activeSidebar = (path: string, starts = false) => {
  const isActive = starts ? route.path.startsWith(path) : route.path === path
  return isActive ? 'active-sidebar-link' : ''
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const toggleSearch = () => {
  showSearch.value = !showSearch.value
  if (!showSearch.value) {
    searchQuery.value = ""
  }
}

const performSearch = () => {
  if (searchQuery.value.trim()) {
    // Handle search logic here
    console.log("Searching for:", searchQuery.value)
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleClickOutside = (event: MouseEvent) => {
  // Handle search dropdown click outside
  const searchContainer = document.querySelector('.relative')
  if (showSearch.value && searchContainer && !searchContainer.contains(event.target as Node)) {
    showSearch.value = false
  }
}

onMounted(() => {
  auth.init();
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const isLoggedIn = computed(() => auth.isLogged);
const cartCount = computed(() => cartStore.items.length);

const handleLogout = () => {
  auth.logout();
  closeSidebar();
};
</script>

<style scoped>
/* Style pour le bouton contact */
.contact-btn {
  background: transparent;
  border-radius: 0;
  position: relative;
  overflow: hidden;
}

.contact-btn:hover {
  background: transparent;
  color: #E7D3AC;
}

/* Animation du texte qui vient du haut vers le bas uniquement au hover */
@keyframes slideFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.contact-btn span {
  display: inline-block;
  animation: none;
}

.contact-btn:hover span {
  animation: slideFromTop 0.3s ease-out;
}

/* Style des liens de navigation */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  color: white;
}

.nav-link:hover {
  color: #E7D3AC;
}

/* Page active - seulement la couleur change */
.active-link {
  color: #E7D3AC !important;
}

/* Sidebar links */
.sidebar-link {
  padding: 0.75rem 1rem;
  border-radius: 0;
  transition: all 0.2s ease;
  color: white;
  display: block;
}

.sidebar-link:hover {
  color: #E7D3AC;
  background-color: rgba(231, 211, 172, 0.1);
}

.active-sidebar-link {
  color: #E7D3AC !important;
  background-color: rgba(231, 211, 172, 0.1);
}

/* Search input placeholder style */
input::placeholder {
  color: #E7D3AC;
  opacity: 0.7;
}

/* Search dropdown animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Sidebar animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation pour le sidebar qui glisse de la droite */
.fade-enter-active .fixed.top-0.right-0,
.fade-leave-active .fixed.top-0.right-0 {
  transition: transform 0.3s ease;
}

.fade-enter-from .fixed.top-0.right-0,
.fade-leave-to .fixed.top-0.right-0 {
  transform: translateX(100%);
}

.fade-enter-to .fixed.top-0.right-0,
.fade-leave-from .fixed.top-0.right-0 {
  transform: translateX(0);
}
</style>