<template>
  <section class="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-[40%] h-[40%] bg-[#E8D4AD]/5 rounded-full filter blur-[100px]"></div>
      <div class="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#E8D4AD]/5 rounded-full filter blur-[100px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <span class="text-[11px] uppercase tracking-[5px] text-[#E8D4AD]/40 block mb-3 animate-fadeInUp"
              style="font-family: 'Playfair Display', 'Georgia', serif;">
          Notre Boutique
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide animate-fadeInUp animation-delay-200"
            style="font-family: 'Playfair Display', 'Georgia', serif; color: #E8D4AD;">
          Produits Féminins
        </h2>
        <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto mt-6 animate-fadeInUp animation-delay-400"></div>
        <p class="text-[#E8D4AD]/50 text-sm max-w-2xl mx-auto mt-5 animate-fadeInUp animation-delay-600"
           style="font-family: 'Playfair Display', 'Georgia', serif;">
          Une sélection de produits d'exception pour sublimer votre beauté au quotidien
        </p>
      </div>
      
      <!-- Catégories sous forme de filtres élégants -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="setCategory(cat.id)"
          class="px-5 py-2 rounded-full text-sm transition-all duration-500"
          :class="activeCategory === cat.id 
            ? 'bg-[#E8D4AD] text-[#262B14] shadow-lg shadow-[#E8D4AD]/20' 
            : 'bg-[#343A20]/50 text-[#E8D4AD]/60 hover:bg-[#343A20] hover:text-[#E8D4AD]'"
          style="font-family: 'Playfair Display', 'Georgia', serif;">
          {{ cat.name }}
        </button>
      </div>
      
      <!-- Carrousel élégant -->
      <div class="relative px-8 lg:px-12">
        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#262B14]/80 backdrop-blur-sm border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all duration-300 group"
        >
          <svg class="w-5 h-5 text-[#E8D4AD] group-hover:text-[#262B14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#262B14]/80 backdrop-blur-sm border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all duration-300 group"
        >
          <svg class="w-5 h-5 text-[#E8D4AD] group-hover:text-[#262B14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Carousel Container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-all duration-700 ease-out gap-6"
            :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }"
          >
            <div 
              v-for="product in filteredProducts" 
              :key="product.id"
              class="flex-shrink-0 group cursor-pointer"
              :style="{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }"
            >
              <div class="relative bg-[#343A20]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <!-- Image avec effet élégant -->
                <div class="relative aspect-square overflow-hidden">
                  <img 
                    :src="product.image" 
                    :alt="product.name"
                    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <!-- Badge élégant -->
                  <div class="absolute top-4 left-4 z-10">
                    <span v-if="product.isNew" class="bg-[#E8D4AD] text-[#262B14] text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Nouveau</span>
                    <span v-else-if="product.isPromo" class="bg-[#E8D4AD] text-[#262B14] text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">-{{ product.discount }}%</span>
                  </div>
                  
                  <!-- Boutons flottants alignés verticalement à droite - cachés initialement -->
                  <div class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                    <!-- Voir plus -->
                    <button 
                      @click="viewProduct(product)"
                      class="action-btn-view w-10 h-10 rounded-full bg-[#262B14]/90 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#262B14] transition-all duration-300 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      <svg class="w-5 h-5 text-white group-hover:text-[#262B14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <!-- Ajouter au panier -->
                    <button 
                      @click="addToCart(product)"
                      class="action-btn-cart w-10 h-10 rounded-full bg-[#262B14]/90 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#262B14] transition-all duration-300 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      <svg class="w-5 h-5 text-white group-hover:text-[#262B14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" />
                      </svg>
                    </button>
                  </div>
                  
                  <!-- Overlay au hover -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/70 via-[#262B14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <!-- Infos produit -->
                <div class="p-5 flex-1 flex flex-col">
                  <div class="mb-2">
                    <span class="text-[#E8D4AD]/40 text-[10px] uppercase tracking-wider">{{ product.categoryName }}</span>
                  </div>
                  <h3 class="text-base font-light text-[#E8D4AD] mb-2 tracking-wide line-clamp-1"
                      style="font-family: 'Playfair Display', 'Georgia', serif;">
                    {{ product.name }}
                  </h3>
                  <p class="text-[#E8D4AD]/50 text-xs mb-3 line-clamp-2 flex-1">{{ product.description }}</p>
                  <div class="flex items-center justify-between pt-2">
                    <div>
                      <span v-if="product.oldPrice" class="text-[#E8D4AD]/40 text-xs line-through mr-2">{{ formatPrice(product.oldPrice) }}</span>
                      <span class="text-[#E8D4AD] text-lg font-light">{{ formatPrice(product.price) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Dots indicateurs -->
        <div class="flex justify-center gap-2 mt-10">
          <button 
            v-for="(_, idx) in totalSlides" 
            :key="idx"
            @click="goToSlide(idx)"
            class="transition-all duration-500"
            :class="currentIndex === idx 
              ? 'w-6 h-1.5 bg-[#E8D4AD]' 
              : 'w-1.5 h-1.5 bg-[#E8D4AD]/40 hover:bg-[#E8D4AD]/60 rounded-full'"
          ></button>
        </div>
      </div>
      
      <!-- Voir plus -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/boutique"
          class="group inline-flex items-center gap-2 text-[#E8D4AD]/60 hover:text-[#E8D4AD] transition-colors duration-300 text-sm tracking-wide"
          style="font-family: 'Playfair Display', 'Georgia', serif;">
          <span>Découvrir toute la collection</span>
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'hair', name: 'Soins Cheveux' },
  { id: 'makeup', name: 'Maquillage' },
  { id: 'accessories', name: 'Accessoires' },
  { id: 'perfume', name: 'Parfums' },
  { id: 'skincare', name: 'Soins Visage' }
]

const activeCategory = ref('all')
const currentIndex = ref(0)
const itemsPerView = ref(4)
let autoPlayInterval = null

const products = ref([
  {
    id: 1,
    name: 'Sérum Capillaire Réparateur',
    description: 'Nourrit et répare les cheveux abîmés, apporte brillance et douceur.',
    price: 12500,
    oldPrice: 18000,
    category: 'hair',
    categoryName: 'Soins Cheveux',
    image: '/images/serum.jpg',
    isNew: false,
    isPromo: true,
    discount: 30
  },
  {
    id: 2,
    name: 'Huile d\'Argan Bio',
    description: 'Huile 100% naturelle pour cheveux et corps, ultra-nourrissante.',
    price: 9500,
    oldPrice: null,
    category: 'hair',
    categoryName: 'Soins Cheveux',
    image: '/images/huile.jpg',
    isNew: true,
    isPromo: false
  },
  {
    id: 3,
    name: 'Kit Soin Complet',
    description: 'Shampoing + Après-shampoing + Masque, formule professionnelle.',
    price: 25000,
    oldPrice: 35000,
    category: 'hair',
    categoryName: 'Soins Cheveux',
    image: '/images/creme.jpg',
    isNew: false,
    isPromo: true,
    discount: 28
  },
  {
    id: 4,
    name: 'Rouge à Lèvres Velours',
    description: 'Longue tenue, finition mat, tons naturels et intenses.',
    price: 4500,
    oldPrice: 7000,
    category: 'makeup',
    categoryName: 'Maquillage',
    image: '/images/cosmetique.jpg',
    isNew: false,
    isPromo: true,
    discount: 35
  },
  {
    id: 5,
    name: 'Mascara Volume Extrême',
    description: 'Courbe et volume intense pour un regard captivant.',
    price: 5800,
    oldPrice: null,
    category: 'makeup',
    categoryName: 'Maquillage',
    image: '/images/lunettes.jpg',
    isNew: true,
    isPromo: false
  },
  {
    id: 6,
    name: 'Perruque Naturelle',
    description: 'Cheveux naturels, coupe ajustable, rendu parfait.',
    price: 85000,
    oldPrice: 110000,
    category: 'accessories',
    categoryName: 'Accessoires',
    image: '/images/perruque.jpg',
    isNew: false,
    isPromo: true,
    discount: 22
  },
  {
    id: 7,
    name: 'Parfum Floral Élégant',
    description: 'Notes de jasmin, rose et vanille, sillage envoûtant.',
    price: 45000,
    oldPrice: null,
    category: 'perfume',
    categoryName: 'Parfums',
    image: '/images/creme.jpg',
    isNew: true,
    isPromo: false
  },
  {
    id: 8,
    name: 'Crème Visage Anti-Âge',
    description: 'Hydratation intense, réduit les rides et illumine le teint.',
    price: 22500,
    oldPrice: 30000,
    category: 'skincare',
    categoryName: 'Soins Visage',
    image: '/images/serum.jpg',
    isNew: false,
    isPromo: true,
    discount: 25
  }
])

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products.value
  return products.value.filter(p => p.category === activeCategory.value)
})

const totalSlides = computed(() => Math.ceil(filteredProducts.value.length / itemsPerView.value))

const formatPrice = (price) => {
  return price.toLocaleString('fr-FR') + ' FCFA'
}

const addToCart = (product) => {
  console.log('Ajouté au panier:', product.name)
}

const viewProduct = (product) => {
  console.log('Voir produit:', product.name)
}

const setCategory = (categoryId) => {
  activeCategory.value = categoryId
  currentIndex.value = 0
  resetAutoPlay()
}

const nextSlide = () => {
  if (currentIndex.value < totalSlides.value - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = totalSlides.value - 1
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoPlay()
}

const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

const resetAutoPlay = () => {
  stopAutoPlay()
  startAutoPlay()
}

const updateItemsPerView = () => {
  const width = window.innerWidth
  if (width < 640) itemsPerView.value = 1
  else if (width < 1024) itemsPerView.value = 2
  else if (width < 1280) itemsPerView.value = 3
  else itemsPerView.value = 4
}

onMounted(() => {
  updateItemsPerView()
  window.addEventListener('resize', updateItemsPerView)
  startAutoPlay()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerView)
  stopAutoPlay()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation fluide pour les boutons */
.action-btn-view,
.action-btn-cart {
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

/* Délai différent pour le deuxième bouton */
.group:hover .action-btn-view {
  transition-delay: 0.05s;
}

.group:hover .action-btn-cart {
  transition-delay: 0.15s;
}
</style>