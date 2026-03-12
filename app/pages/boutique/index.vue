<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 bg-gradient-to-b from-gray-50 to-white">


    <div class="mb-12 text-center relative">
      <div class="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
        <svg class="w-64 h-64 text-[#8C6239]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <h1
        class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#8C6239] to-[#C49A6C] bg-clip-text text-transparent">
        Boutique Beauté
      </h1>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Découvrez notre sélection de perruques, mèches, cosmétiques et produits d’onglerie
      </p>
      <div class="w-24 h-1 bg-gradient-to-r from-[#8C6239] to-[#C49A6C] mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <aside class="lg:col-span-1 h-fit lg:sticky lg:top-24">
        <!-- Mobile Toggle Button -->
        <div class="lg:hidden mb-4">
          <button @click="showMobileFilters = !showMobileFilters"
            class="w-full bg-white border border-gray-200 rounded-2xl p-4 flex justify-between items-center shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8C6239]/20 transition-all">
            <span class="font-bold flex items-center gap-2">
              <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Filtres
            </span>
            <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': showMobileFilters }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div :class="{ 'hidden lg:block': !showMobileFilters, 'block': showMobileFilters }"
          class="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8C6239] scrollbar-track-gray-100 mb-8 lg:mb-0">

          <div class="flex justify-between items-center mb-6">
            <h2 class="font-bold text-lg text-gray-800 flex items-center gap-2">
              <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Filtres
            </h2>
            <button @click="resetFilters"
              class="text-sm text-[#8C6239] hover:text-[#5C3E29] transition-colors flex items-center gap-1">
              <svg class="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Réinitialiser
            </button>
          </div>

          <div class="relative mb-6">
            <input v-model="search" type="text" placeholder="Rechercher un produit..."
              class="w-full border border-gray-200 rounded-xl px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6239]/20 focus:border-[#8C6239] transition-all" />
            <svg class="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div class="mb-6">
            <h3 class="font-semibold text-sm text-gray-700 mb-3 flex items-center gap-2">
              <span class="w-1 h-4 bg-[#8C6239] rounded-full"></span>
              Catégories
            </h3>
            <div class="space-y-3">
              <div v-for="cat in categoriesTree" :key="cat.name" class="border-b border-gray-50 pb-2 last:border-0">
                <label
                  class="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                  <input type="checkbox" :value="cat.name" v-model="filters.categories"
                    @change="handleCategoryChange(cat.name)"
                    class="w-4 h-4 text-[#8C6239] border-gray-300 rounded focus:ring-[#8C6239]">
                  <span class="text-sm font-medium text-gray-700 group-hover:text-[#8C6239] transition-colors">{{
                    cat.name }}</span>
                </label>
                <div v-if="filters.categories.includes(cat.name)" class="ml-6 mt-1 space-y-1">
                  <label v-for="sub in cat.subCategories" :key="sub"
                    class="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                    <input type="checkbox" :value="sub" v-model="filters.subCategories"
                      class="w-3.5 h-3.5 text-[#8C6239] border-gray-300 rounded focus:ring-[#8C6239]">
                    <span class="text-xs text-gray-600 group-hover:text-[#8C6239] transition-colors">{{ sub }}</span>
                  </label>
                </div>
              </div>
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

              <div
                class="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#8C6239] to-[#C49A6C] rounded-full"
                :style="{ left: (filters.minPrice / priceRange.max) * 100 + '%', width: ((filters.maxPrice - filters.minPrice) / priceRange.max) * 100 + '%' }">
              </div>
              <input type="range" :min="priceRange.min" :max="priceRange.max" v-model.number="filters.minPrice"
                class="range-slider" :style="{ zIndex: filters.minPrice > priceRange.max / 2 ? 30 : 20 }" />
              <input type="range" :min="priceRange.min" :max="priceRange.max" v-model.number="filters.maxPrice"
                class="range-slider" />
            </div>
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
        <div
          class="flex flex-col sm:flex-row justify-between sm:justify-end items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-500">Trier par:</span>
            <select v-model="sortBy"
              class="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6239]/20 focus:border-[#8C6239] bg-white">
              <option value="nom">Nom (A-Z)</option>
              <option value="prix">Prix croissant</option>
              <option value="prix-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        <div v-if="filteredProduits.length" class="flex flex-col w-full">
          <!-- Grille de produits -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            <div v-for="p in paginatedProduits" :key="p.id" @click="toggleActiveProduct(p.id)"
              :class="{ 'shadow-lg -translate-y-0.5 ring-2 ring-[#8C6239]/20': activeProductId === p.id }"
              class="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col h-full">

              <div class="relative overflow-hidden aspect-[4/5] sm:aspect-square">
                <img :src="p.image" :alt="p.nom" :class="{ 'scale-110': activeProductId === p.id }"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  @error="handleImageError" />
                <div :class="{ 'opacity-100': activeProductId === p.id }"
                  class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>

                <!-- Actions -->
                <div :class="{ 'right-3 opacity-100': activeProductId === p.id }"
                  class="absolute top-1/2 -translate-y-1/2 flex flex-col gap-3 -right-16 opacity-0 group-hover:right-3 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                  <button @click.stop="addToCart(p)"
                    class="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#8C6239] hover:text-white transition-all duration-200 hover:scale-110 active:scale-95">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                  <button @click.stop="navigateToDetails(p.id)"
                    class="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#8C6239] hover:text-white transition-all duration-200 hover:scale-110 active:scale-95">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="p-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 :class="{ 'text-[#8C6239]': activeProductId === p.id }"
                    class="font-semibold text-sm text-gray-800 group-hover:text-[#8C6239] transition-colors duration-200 line-clamp-2 leading-tight">
                    {{ p.nom }}
                  </h3>
                  <div
                    class="mt-1 flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                    {{ p.categorie }}
                  </div>
                </div>
                <div class="mt-3 flex items-baseline justify-between">
                  <span class="text-sm font-bold text-[#8C6239] whitespace-nowrap">{{ p.prix.toLocaleString() }}
                    FCFA</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination (Toujours en bas) -->
          <div v-if="totalPages > 1" class="mt-16 mb-8 w-full flex flex-col items-center gap-6">
            <div class="h-px w-24 bg-gray-200"></div>
            <div class="flex flex-wrap justify-center items-center gap-3">
              <button @click="currentPage--" :disabled="currentPage === 1"
                class="p-2 sm:p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-90">
                <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div class="flex flex-wrap justify-center gap-2">
                <template v-for="(page, idx) in displayedPages" :key="idx">
                  <span v-if="page === '...'" class="w-8 h-10 flex items-center justify-center text-gray-400 font-bold">
                    ...
                  </span>
                  <button v-else @click="currentPage = page"
                    class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border transition-all duration-300 font-bold text-sm flex items-center justify-center shadow-sm active:scale-90"
                    :class="currentPage === page
                      ? 'bg-[#8C6239] text-white border-[#8C6239] shadow-md shadow-[#8C6239]/20'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#8C6239] hover:text-[#8C6239]'">
                    {{ page }}
                  </button>
                </template>
              </div>

              <button @click="currentPage++" :disabled="currentPage === totalPages"
                class="p-2 sm:p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-90">
                <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-if="!filteredProduits.length"
          class="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
          <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold text-gray-400 mb-2">Aucun produit trouvé</h3>
          <p class="text-gray-500 text-sm">Essayez de modifier vos filtres de recherche</p>
          <button @click="resetFilters"
            class="mt-4 px-5 py-2 bg-[#8C6239] text-white rounded-lg hover:bg-[#5C3E29] transition-colors shadow-md text-sm">
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </div>

    <Transition enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="showToast"
        class="fixed bottom-4 right-4 bg-[#8C6239] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-sm font-medium">{{ toastMessage }}</span>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const produits = ref([
  { id: 1, nom: 'Perruque Lace Front Premium', prix: 45000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg' },
  { id: 2, nom: 'Mèches Brésiliennes 14"', prix: 18000, categorie: 'Mèches', sousCategorie: 'Brésiliennes', image: '/images/perruque.jpg' },
  { id: 3, nom: 'Kit Onglerie Professionnel', prix: 25000, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg' },
  { id: 4, nom: 'Sérum Éclat Vitamine C', prix: 12000, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg' },
  { id: 5, nom: 'Perruque Bouclée Deep Wave', prix: 35000, categorie: 'Perruques', sousCategorie: 'Bouclées', image: '/images/perruque.jpg' },
  { id: 6, nom: 'Vernis Semi-Permanent Nude', prix: 4500, categorie: 'Produits d\'onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg' },
  { id: 7, nom: 'Masque Hydratation Intense', prix: 8500, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg' },
  { id: 8, nom: 'Extensions Clips Naturelles', prix: 15000, categorie: 'Mèches', sousCategorie: 'Synthétiques', image: '/images/perruque.jpg' },
  { id: 9, nom: 'Parfum Mystère de l\'Orient', prix: 48000, categorie: 'Parfums', sousCategorie: 'Hommes', image: '/images/parfum.jpg' },
  { id: 10, nom: 'Perruque Bob Lisse HD', prix: 32000, categorie: 'Perruques', sousCategorie: 'Lisses', image: '/images/perruque.jpg' },
  { id: 11, nom: 'Kit Faux Ongles Design', prix: 6500, categorie: 'Produits d\'onglerie', sousCategorie: 'Faux ongles', image: '/images/cosmetique.jpg' },
  { id: 12, nom: 'Crème Corps Karité Bio', prix: 5500, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg' },
  { id: 13, nom: 'Mèches Indiennes Wave', prix: 22000, categorie: 'Mèches', sousCategorie: 'Indiennes', image: '/images/perruque.jpg' },
  { id: 14, nom: 'Palette Maquillage Nude', prix: 14000, categorie: 'Cosmétiques', sousCategorie: 'Maquillage', image: '/images/creme.jpg' },
  { id: 15, nom: 'Parfum Fleur de Coton', prix: 38000, categorie: 'Parfums', sousCategorie: 'Femmes', image: '/images/parfum.jpg' },
  { id: 16, nom: 'Lampe UV-LED Portable', prix: 12500, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg' },
  { id: 17, nom: 'Perruque Lace Noire Longue', prix: 29000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg' },
  { id: 18, nom: 'Huile Capillaire Réparatrice', prix: 7000, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg' },
  { id: 19, nom: 'Mèches Afro Kinky Curly', prix: 16500, categorie: 'Mèches', sousCategorie: 'Synthétiques', image: '/images/perruque.jpg' },
  { id: 20, nom: 'Vernis Top Coat Brillant', prix: 3500, categorie: 'Produits d\'onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg' },
  { id: 21, nom: 'Parfum Ambre Solaire', prix: 42000, categorie: 'Parfums', sousCategorie: 'Mixtes', image: '/images/parfum.jpg' },
  { id: 22, nom: 'Kit Entretien Perruque', prix: 9500, categorie: 'Perruques', sousCategorie: 'Lisses', image: '/images/perruque.jpg' },
  { id: 23, nom: 'Perruque Lace Front Blonde', prix: 48000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg' },
  { id: 24, nom: 'Mèches Indiennes 18"', prix: 25000, categorie: 'Mèches', sousCategorie: 'Indiennes', image: '/images/perruque.jpg' },
  { id: 25, nom: 'Kit Onglerie Expert UV', prix: 35000, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg' },
  { id: 26, nom: 'Crème Anti-Âge Premium', prix: 15000, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg' },
  { id: 27, nom: 'Perruque Boucle Glamour', prix: 38000, categorie: 'Perruques', sousCategorie: 'Bouclées', image: '/images/perruque.jpg' },
  { id: 28, nom: 'Vernis Bleu Nuit Profond', prix: 4000, categorie: 'Produits d\'onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg' },
  { id: 29, nom: 'Masque Argile Détox', prix: 7500, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg' },
  { id: 30, nom: 'Extensions Tissage Lisse', prix: 20000, categorie: 'Mèches', sousCategorie: 'Brésiliennes', image: '/images/perruque.jpg' },
  { id: 31, nom: 'Parfum Boisé Intense', prix: 52000, categorie: 'Parfums', sousCategorie: 'Hommes', image: '/images/parfum.jpg' },
  { id: 33, nom: 'Kit Oncle Gel UV Rapide', prix: 18000, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg' },
  { id: 34, nom: 'Crème Mains Réparatrice', prix: 4500, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg' },
  { id: 35, nom: 'Mèches Brésiliennes Kinky', prix: 19000, categorie: 'Mèches', sousCategorie: 'Brésiliennes', image: '/images/perruque.jpg' },
  { id: 36, nom: 'Rouge à Lèvres Mat Velours', prix: 8500, categorie: 'Cosmétiques', sousCategorie: 'Maquillage', image: '/images/creme.jpg' },
  { id: 38, nom: 'Lampe LED Ongles Express', prix: 15000, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg' },
  { id: 39, nom: 'Perruque Lace Front Ombré', prix: 42000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg' },
  { id: 41, nom: 'Huile de Coco Purifiée', prix: 6000, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg' },
  { id: 42, nom: 'Vernis Pailleté Argent', prix: 5000, categorie: 'Produits d\'onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg' },
  { id: 43, nom: 'Parfum Citron Givré', prix: 35000, categorie: 'Parfums', sousCategorie: 'Femmes', image: '/images/parfum.jpg' },
  { id: 44, nom: 'Kit Ongles Effet Miroir', prix: 12000, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg' }
])

const currentPage = ref(1)
const itemsPerPage = 8

const search = ref('')
const sortBy = ref('nom')
const showToast = ref(false)
const toastMessage = ref('')
const showMobileFilters = ref(false)
const activeProductId = ref(null)

const toggleActiveProduct = (id) => {
  if (activeProductId.value === id) {
    activeProductId.value = null
  } else {
    activeProductId.value = id
  }
}

const handleClickOutside = (event) => {
  if (activeProductId.value && !event.target.closest('.group')) {
    activeProductId.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

/* PLAGE PRIX */
const priceRange = {
  min: 0,
  max: 100000
}

/* FILTRES */
const filters = ref({
  categories: [],
  subCategories: [],
  minPrice: priceRange.min,
  maxPrice: priceRange.max
})

const categoriesTree = [
  { name: 'Parfums', subCategories: ['Hommes', 'Femmes', 'Mixtes'] },
  { name: 'Perruques', subCategories: ['Lace front', 'Bouclées', 'Lisses'] },
  { name: 'Mèches', subCategories: ['Brésiliennes', 'Indiennes', 'Synthétiques'] },
  { name: 'Cosmétiques', subCategories: ['Soins visage', 'Maquillage', 'Soins corps'] },
  { name: 'Produits d\'onglerie', subCategories: ['Vernis', 'Faux ongles', 'Kits'] }
]

/* RESET */
const resetFilters = () => {
  search.value = ''
  currentPage.value = 1
  filters.value = {
    categories: [],
    subCategories: [],
    minPrice: priceRange.min,
    maxPrice: priceRange.max
  }
}
const handleCategoryChange = (categoryName) => {
  currentPage.value = 1 // Réinitialiser à la page 1 lors d'un changement de filtre
  if (!filters.value.categories.includes(categoryName)) {
    const cat = categoriesTree.find(c => c.name === categoryName)
    if (cat) {
      filters.value.subCategories = filters.value.subCategories.filter(sub => !cat.subCategories.includes(sub))
    }
  }
}

/* FILTRAGE */
const filteredProduits = computed(() => {
  return produits.value.filter(p => {
    const searchMatch = p.nom.toLowerCase().includes(search.value.toLowerCase())
    const categoryMatch = !filters.value.categories.length || filters.value.categories.includes(p.categorie)
    const subCategoryMatch = !filters.value.subCategories.length || filters.value.subCategories.includes(p.sousCategorie)
    const minMatch = p.prix >= filters.value.minPrice
    const maxMatch = p.prix <= filters.value.maxPrice
    return searchMatch && categoryMatch && subCategoryMatch && minMatch && maxMatch
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

const totalPages = computed(() => Math.ceil(sortedProduits.value.length / itemsPerPage))

const paginatedProduits = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedProduits.value.slice(start, end)
})

const displayedPages = computed(() => {
  const current = currentPage.value
  const total = totalPages.value
  const delta = 2 // Nombre de pages autour de la page courante
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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