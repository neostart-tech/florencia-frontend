<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 bg-gradient-to-b from-gray-50 to-white">
   
    
    <div class="mb-12 text-center relative">
      <div class="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
        <svg class="w-64 h-64 text-[#8C6239]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h1 class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8C6239] to-[#C49A6C] bg-clip-text text-transparent">
        Boutique Beauté
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Découvrez notre sélection de perruques, mèches, cosmétiques et produits d’onglerie
      </p>
      <div class="w-24 h-1 bg-gradient-to-r from-[#8C6239] to-[#C49A6C] mx-auto mt-4 rounded-full"></div>
    </div>
   
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <aside class="lg:col-span-1 h-fit lg:sticky lg:top-24">
        <div class="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8C6239] scrollbar-track-gray-100">
         
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-bold text-lg text-gray-800 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              Filtres
            </h2>
            <button @click="resetFilters" class="text-sm text-[#8C6239] hover:text-[#5C3E29] transition-colors flex items-center gap-1">
              <svg class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Réinitialiser
            </button>
          </div>

          <div class="relative mb-6">
            <input
              v-model="search"
              type="text"
              placeholder="Rechercher un produit..."
              class="w-full border border-gray-200 rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6239]/20 focus:border-[#8C6239] transition-all"
            />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <div class="mb-6">
            <h3 class="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
              <span class="w-1 h-4 bg-[#8C6239] rounded-full"></span>
              Catégories
            </h3>
            <div class="space-y-2">
              <label v-for="cat in categories" :key="cat" class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                <input type="checkbox" :value="cat" v-model="filters.categories" class="w-4 h-4 text-[#8C6239] border-gray-300 rounded focus:ring-[#8C6239]">
                <span class="text-sm text-gray-700 group-hover:text-[#8C6239] transition-colors">{{ cat }}</span>
              </label>
            </div>
          </div>

          <div class="mb-6">
            <h3 class="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
              <span class="w-1 h-4 bg-[#8C6239] rounded-full"></span>
              Prix (FCFA)
            </h3>
           
            <div class="flex justify-between mb-4">
              <div class="bg-gray-100 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700">
                {{ filters.minPrice.toLocaleString() }} FCFA
              </div>
              <div class="text-gray-400">—</div>
              <div class="bg-gray-100 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700">
                {{ filters.maxPrice.toLocaleString() }} FCFA
              </div>
            </div>
            <div class="relative py-4">
              <div class="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full"></div>
             
              <div class="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#8C6239] to-[#C49A6C] rounded-full"
                   :style="{ left: (filters.minPrice / priceRange.max) * 100 + '%', width: ((filters.maxPrice - filters.minPrice) / priceRange.max) * 100 + '%' }">
              </div>
              <input
                type="range"
                :min="priceRange.min"
                :max="priceRange.max"
                v-model.number="filters.minPrice"
                class="range-slider"
                :style="{ zIndex: filters.minPrice > priceRange.max / 2 ? 30 : 20 }"
              />
              <input
                type="range"
                :min="priceRange.min"
                :max="priceRange.max"
                v-model.number="filters.maxPrice"
                class="range-slider"
              />
            </div>
          </div>

          <div class="flex items-center justify-between p-3 bg-gradient-to-r from-[#8C6239]/5 to-transparent rounded-xl">
            <span class="text-sm font-medium text-gray-700 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
              </svg>
              En promotion
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="filters.promoOnly" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#8C6239]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8C6239]"></div>
            </label>
          </div>

          <div class="pt-4 mt-4 border-t border-gray-100">
            <div class="bg-[#8C6239]/5 rounded-lg p-3 text-center">
              <p class="text-sm text-gray-600">
                <span class="font-bold text-[#8C6239] text-lg">{{ filteredProduits.length }}</span> produit(s) trouvé(s)
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div class="lg:col-span-3">
        <!-- Barre de tri -->
        <div class="flex flex-col sm:flex-row justify-between sm:justify-end items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500">Trier par:</span>
            <select
              v-model="sortBy"
              class="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6239]/20 focus:border-[#8C6239] bg-white"
            >
              <option value="nom">Nom (A-Z)</option>
              <option value="prix">Prix croissant</option>
              <option value="prix-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        <div
          v-if="filteredProduits.length"
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          <div
            v-for="p in sortedProduits"
            :key="p.id"
            class="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
          >
            <!-- Badge promotion -->
            <div v-if="p.promotion" class="absolute top-1 left-1 z-10 bg-gradient-to-r from-gray-800 to-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg">
              -{{ p.promotion }}%
            </div>
           
           <!-- Image avec icônes qui viennent de l’extérieur -->
<div class="relative overflow-hidden aspect-square">
  <img
    :src="p.image"
    :alt="p.nom"
    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    @error="handleImageError"
  />

  <!-- Overlay sombre -->
  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  <!-- ICÔNES COMPLÈTEMENT EN DEHORS -->
  <div
    class="absolute top-1/2 -translate-y-1/2 flex flex-col gap-3
           -right-14 group-hover:right-2
           transition-all duration-400 ease-in-out"
  >
    <!-- Panier -->
    <button
      @click.stop="addToCart(p)"
      class="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center
             hover:bg-[#8C6239] hover:text-white transition-all duration-200 hover:scale-110"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    </button>

    <!-- Voir détails -->
    <button
      @click.stop="navigateToDetails(p.id)"
      class="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center
             hover:bg-[#8C6239] hover:text-white tfransition-all duration-200 hover:scale-110"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
      </svg>
    </button>

    <!-- Favoris -->
    <button
      @click.stop="toggleFavorite(p)"
      :class="[
        'w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110',
        p.isFavorite ? 'text-red-500' : 'hover:bg-[#8C6239] hover:text-white'
      ]"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    </button>
  </div>
</div>
           
            <div class="p-2">
              <h3 class="font-medium text-xs text-gray-800 group-hover:text-[#8C6239] transition-colors duration-200 line-clamp-2 min-h-[2rem]">
                {{ p.nom }}
              </h3>
             
              <div class="mt-1 flex items-center gap-1">
                <span class="text-sm font-bold text-[#8C6239]">{{ p.prix.toLocaleString() }} FCFA</span>
                <span v-if="p.ancienPrix" class="text-[10px] text-gray-400 line-through">{{ p.ancienPrix.toLocaleString() }} FCFA</span>
              </div>
             
              <div class="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                </svg>
                {{ p.categorie }}
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
          <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 class="text-xl font-semibold text-gray-400 mb-2">Aucun produit trouvé</h3>
          <p class="text-gray-500 text-sm">Essayez de modifier vos filtres de recherche</p>
          <button @click="resetFilters" class="mt-4 px-5 py-2 bg-[#8C6239] text-white rounded-lg hover:bg-[#5C3E29] transition-colors shadow-md text-sm">
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showToast" class="fixed bottom-4 right-4 bg-[#8C6239] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span class="text-sm font-medium">{{ toastMessage }}</span>
      </div>
    </Transition>
   
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showFavoriteToast" class="fixed bottom-4 right-4 bg-[#8C6239] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span class="text-sm font-medium">{{ favoriteToastMessage }}</span>
      </div>
    </Transition>
   
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const produits = ref([
  { id: 1, nom: 'Perruque lace front', prix: 25000, ancienPrix: 30000, categorie: 'Perruques', image: '/images/perruque.jpg', promotion: 15, isFavorite: false },
  { id: 2, nom: 'Mèches brésiliennes', prix: 15000, categorie: 'Mèches', image: '/images/perruque.jpg', promotion: 0, isFavorite: false },
  { id: 3, nom: 'Kit onglerie complet', prix: 8500, categorie: 'Produits d\'onglerie', image: '/images/cosmetique.jpg', promotion: 0, isFavorite: false },
  { id: 4, nom: 'Crème hydratante', prix: 5000, categorie: 'Cosmétiques', image: '/images/creme.jpg', promotion: 10, isFavorite: false },
  { id: 5, nom: 'Perruque bouclée', prix: 35000, categorie: 'Perruques', image: '/images/perruque.jpg', promotion: 0, isFavorite: false },
  { id: 6, nom: 'Vernis semi-permanent', prix: 3000, categorie: 'Produits d\'onglerie', image: '/images/cosmetique.jpg', promotion: 20, isFavorite: false },
  { id: 7, nom: 'Masque capillaire', prix: 4500, categorie: 'Cosmétiques', image: '/images/creme.jpg', promotion: 0, isFavorite: false },
  { id: 8, nom: 'Extensions cheveux', prix: 12000, categorie: 'Mèches', image: '/images/perruque.jpg', promotion: 5, isFavorite: false }
])

const search = ref('')
const sortBy = ref('nom')
const showToast = ref(false)
const toastMessage = ref('')
const showFavoriteToast = ref(false)
const favoriteToastMessage = ref('')

/* PLAGE PRIX */
const priceRange = {
  min: 0,
  max: 100000
}

/* FILTRES */
const filters = ref({
  categories: [],
  minPrice: priceRange.min,
  maxPrice: priceRange.max,
  promoOnly: false
})

const categories = [
  'Perruques',
  'Mèches',
  'Cosmétiques',
  'Produits d’onglerie'
]

/* RESET */
const resetFilters = () => {
  search.value = ''
  filters.value = {
    categories: [],
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
    promoOnly: false
  }
}

/* FILTRAGE */
const filteredProduits = computed(() => {
  return produits.value.filter(p => {
    const searchMatch = p.nom.toLowerCase().includes(search.value.toLowerCase())
    const categoryMatch = !filters.value.categories.length || filters.value.categories.includes(p.categorie)
    const minMatch = p.prix >= filters.value.minPrice
    const maxMatch = p.prix <= filters.value.maxPrice
    const promoMatch = !filters.value.promoOnly || p.promotion > 0
    return searchMatch && categoryMatch && minMatch && maxMatch && promoMatch
  })
})

/* TRI */
const sortedProduits = computed(() => {
  const list = [...filteredProduits.value]
  switch (sortBy.value) {
    case 'prix':
      return list.sort((a, b) => a.prix - b.prix)
    case 'prix-desc':
      return list.sort((a, b) => b.prix - a.prix)
    default:
      return list.sort((a, b) => a.nom.localeCompare(b.nom))
  }
})

/* GESTIONNAIRES */
const handleImageError = (e) => {
  e.target.src = '/images/placeholder.jpg'
}

const addToCart = (produit) => {
  toastMessage.value = `${produit.nom} ajouté au panier`
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
  
  console.log('Produit ajouté au panier:', produit)
}

const navigateToDetails = (productId) => {
  router.push(`/boutique/${productId}`)
}

const toggleFavorite = (produit) => {
  produit.isFavorite = !produit.isFavorite
  
  if (produit.isFavorite) {
    favoriteToastMessage.value = `${produit.nom} ajouté aux favoris`
  } else {
    favoriteToastMessage.value = `${produit.nom} retiré des favoris`
  }
  
  showFavoriteToast.value = true
  
  setTimeout(() => {
    showFavoriteToast.value = false
  }, 3000)
  
  console.log('Favori togglé:', produit.nom, produit.isFavorite)
}
</script>

<style scoped>
.range-slider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  appearance: none;
  background: none;
  height: 20px;
}

.range-slider::-webkit-slider-thumb {
  pointer-events: auto;
  appearance: none;
  height: 18px;
  width: 18px;
  background: white;
  border: 2px solid #8C6239;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.2s;
  margin-top: -7px;
}

.range-slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: #8C6239;
}

.range-slider::-webkit-slider-runnable-track {
  height: 4px;
  background: transparent;
}

/* Animation pour les cartes au chargement */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group {
  animation: fadeInUp 0.4s ease-out forwards;
}

/* Style pour le placeholder de l'image en cas d'erreur */
img {
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
}

img[src*="placeholder"] {
  object-fit: contain;
  padding: 0.5rem;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}

/* Toast animation */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(0.5rem);
}

/* Empêcher la propagation du clic sur les boutons */
button {
  position: relative;
  z-index: 20;
}

/* Style pour les tooltips des icônes */
.group\/btn {
  position: relative;
}

.group\/btn:hover::after {
  content: attr(title);
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 30;
}

/* Style personnalisé pour la scrollbar de la sidebar */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #8C6239;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #5C3E29;
}

/* Pour Firefox */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #8C6239 #f1f1f1;
}
</style>