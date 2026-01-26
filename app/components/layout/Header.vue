<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-10 lg:px-16">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/">
            <img src="/logo/Florencia-logo2.jpg" alt="Florencia Logo" class="h-7 w-auto object-contain" />
          </NuxtLink>
        </div>
        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center space-x-10 font-[EBGaramond] text-lg text-black">
          <!-- Accueil -->
          <NuxtLink
            to="/"
            class="relative py-2"
            :class="{'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-black': route.path === '/'}"
          >
            Accueil
          </NuxtLink>
          
          <!-- Boutique Dropdown -->
          <div
            class="relative"
            ref="dropdownContainer"
            @mouseenter="showDropdown = true"
            @mouseleave="handleMouseLeave"
          >
            <!-- Bouton Boutique (non cliquable) -->
            <button
              class="relative py-2 flex items-center cursor-pointer"
              :class="{'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-black': route.path.startsWith('/boutique')}"
            >
              Boutique
              <svg class="w-4 h-4 ml-1 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4 4.7a.75.75 0 01-1.14 0l-4-4.7a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
              </svg>
            </button>
            
            <!-- Dropdown menu -->
            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="transform opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="transform opacity-0 -translate-y-2"
            >
              <div
                v-if="showDropdown"
                class="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 min-w-[180px] z-50 border border-gray-100"
                @mouseenter="keepDropdownOpen = true"
                @mouseleave="closeDropdown"
              >
                <!-- Lien vers la page Boutique générale -->
                <NuxtLink
                  to="/boutique"
                  class="block px-4 py-3 hover:bg-gray-50 transition text-gray-800"
                  @click="closeDropdownImmediately"
                >
                  Tous les produits
                </NuxtLink>
                
                <!-- Catégories -->
                <NuxtLink
                  v-for="cat in categories"
                  :key="cat.name"
                  :to="cat.link"
                  class="block px-4 py-3 hover:bg-gray-50 transition text-gray-800 border-t border-gray-100 first:border-t-0"
                  @click="closeDropdownImmediately"
                >
                  {{ cat.name }}
                </NuxtLink>
              </div>
            </transition>
          </div>
          
          <!-- Réservations -->
          <NuxtLink
            to="/reservation"
            class="relative py-2"
            :class="{'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-black': route.path === '/reservation'}"
          >
            Réservations
          </NuxtLink>
          
          <!-- À propos -->
          <NuxtLink
            to="/a-propos"
            class="relative py-2"
            :class="{'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-black': route.path === '/a-propos'}"
          >
            À propos
          </NuxtLink>
          
          <!-- Contact -->
          <NuxtLink
            to="/contact"
            class="relative py-2"
            :class="{'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-black': route.path === '/contact'}"
          >
            Contact
          </NuxtLink>
          
          <!-- Panier -->
          <NuxtLink to="/panier" class="relative hover:text-black transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800 hover:text-pink-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13M7 13H5.4M17 13h1.6" />
            </svg>
            <span class="absolute -top-2 -right-2 bg-[#9F6E45] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </NuxtLink>
        </nav>
        
        <!-- Bouton + Menu mobile -->
        <div class="flex items-center gap-6">
          <!-- Connexion -->
          <NuxtLink
            to="/connexion"
            class="font-[EBGaramond] px-6 py-2 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition"
          >
            Connexion
          </NuxtLink>
          
          <!-- Menu burger mobile -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Menu mobile -->
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <div class="flex flex-col space-y-3 font-[EBGaramond] text-lg text-gray-800">
            <NuxtLink 
              to="/" 
              class="hover:text-pink-600 hover:bg-gray-50 py-2 px-4 rounded-md transition"
              @click="mobileMenuOpen = false"
            >
              Accueil
            </NuxtLink>
           
            <!-- Mobile Boutique dropdown -->
            <div>
              <button 
                @click="mobileDropdown = !mobileDropdown" 
                class="w-full text-left flex justify-between items-center py-2 px-4 hover:bg-gray-50 rounded-md transition"
              >
                Boutique
                <span>{{ mobileDropdown ? '▲' : '▼' }}</span>
              </button>
              <div v-if="mobileDropdown" class="ml-4 mt-2 flex flex-col space-y-1">
                <!-- Lien vers la page Boutique générale -->
                <NuxtLink
                  to="/boutique"
                  class="py-2 px-2 hover:bg-gray-100 rounded-md transition"
                  @click="mobileMenuOpen = false"
                >
                  Tous les produits
                </NuxtLink>
                
                <!-- Catégories -->
                <NuxtLink
                  v-for="cat in categories"
                  :key="cat.name"
                  :to="cat.link"
                  class="py-2 px-2 hover:bg-gray-100 rounded-md transition"
                  @click="mobileMenuOpen = false"
                >
                  {{ cat.name }}
                </NuxtLink>
              </div>
            </div>
            
            <NuxtLink 
              to="/reservation" 
              class="hover:text-pink-600 hover:bg-gray-50 py-2 px-4 rounded-md transition"
              @click="mobileMenuOpen = false"
            >
              Réservations
            </NuxtLink>
            
            <NuxtLink 
              to="/apropos" 
              class="hover:text-pink-600 hover:bg-gray-50 py-2 px-4 rounded-md transition"
              @click="mobileMenuOpen = false"
            >
              À propos
            </NuxtLink>
            
            <NuxtLink 
              to="/contact" 
              class="hover:text-pink-600 hover:bg-gray-50 py-2 px-4 rounded-md transition"
              @click="mobileMenuOpen = false"
            >
              Contact
            </NuxtLink>
            
            <NuxtLink 
              to="/reservation" 
              class="bg-pink-600 text-white px-4 py-2 rounded-md text-center hover:bg-pink-700 transition"
              @click="mobileMenuOpen = false"
            >
              Prendre RDV
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
const showDropdown = ref(false)
const mobileDropdown = ref(false)
const keepDropdownOpen = ref(false)
const dropdownTimeout = ref(null)

const categories = [
  { name: 'Perruques', link: '/boutique/perruques' },
  { name: 'Mèches', link: '/boutique/meches' },
  { name: 'Cosmétiques', link: '/boutique/cosmetiques' },
  { name: 'Accessoires', link: '/boutique/accessoires' },
]

// Fonction pour fermer le dropdown avec un délai
const handleMouseLeave = () => {
  keepDropdownOpen.value = false
  // Petit délai pour permettre le clic sur les liens
  dropdownTimeout.value = setTimeout(() => {
    if (!keepDropdownOpen.value) {
      showDropdown.value = false
    }
  }, 150) // Délai court pour permettre le clic
}

// Fermer immédiatement au clic sur un lien
const closeDropdownImmediately = () => {
  showDropdown.value = false
  keepDropdownOpen.value = false
  if (dropdownTimeout.value) {
    clearTimeout(dropdownTimeout.value)
  }
}

// Fermer le dropdown
const closeDropdown = () => {
  keepDropdownOpen.value = false
  dropdownTimeout.value = setTimeout(() => {
    if (!keepDropdownOpen.value) {
      showDropdown.value = false
    }
  }, 100)
}
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* EB Garamond font */
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap');

/* Style pour rendre le bouton Boutique semblable aux autres liens */
button.relative.py-2 {
  background: none;
  border: none;
  font-family: 'EB Garamond', serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

/* Animation pour les liens du dropdown */
a.block.px-4.py-3 {
  transition: background-color 0.2s ease, color 0.2s ease;
}

a.block.px-4.py-3:hover {
  background-color: #f9fafb;
}
</style>