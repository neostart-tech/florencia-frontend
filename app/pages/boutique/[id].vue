<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310] overflow-hidden">
    
    <!-- Effet de fond animé luxueux -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8D4AD]/3 rounded-full filter blur-[150px] animate-pulse-slow"></div>
    </div>
    
    <!-- Particules flottantes -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 50" :key="i" class="absolute rounded-full bg-[#E8D4AD]/10 animate-particle" :style="{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 20 + 15}s`
      }"></div>
    </div>
    
    <!-- NOUVELLE SECTION HERO ÉLÉGANTE -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-[#262B14] via-transparent to-[#262B14]"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center animate-fadeInUp">
          <div class="inline-flex items-center gap-2 mb-4">
            <NuxtLink to="/" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Accueil</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <NuxtLink to="/boutique" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Boutique</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-[#E8D4AD] text-sm">{{ produit?.nom?.split(' ').slice(0, 3).join(' ') || 'Produit' }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8D4AD] mb-4" style="font-family: 'Playfair Display', serif;">
            Détail du Produit
          </h1>
          <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto"></div>
          <p class="text-[#E8D4AD]/50 text-sm mt-4 max-w-md mx-auto">Découvrez l'excellence et la qualité de nos produits</p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#262B14] to-transparent"></div>
    </section>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-6 relative z-10">
      
      <!-- Breadcrumb -->
      <div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fadeInUp">
        <button @click="router.push('/boutique')"
          class="group flex items-center gap-2 text-[#E8D4AD]/60 hover:text-[#E8D4AD] transition-all duration-300 bg-[#343A20]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 hover:bg-[#343A20]/60">
          <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à la boutique
        </button>
        
        <div v-if="produit" class="flex items-center gap-2 text-sm animate-fadeInRight">
          <NuxtLink to="/boutique" class="text-[#E8D4AD]/50 hover:text-[#E8D4AD] transition-colors">Boutique</NuxtLink>
          <svg class="w-3 h-3 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          <span class="text-[#E8D4AD]/60">{{ produit.categorie }}</span>
        </div>
      </div>
      
      <!-- Skeleton Loader Élégant -->
      <div v-if="loading" class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-3xl border border-[#E8D4AD]/15 p-6 lg:p-10 animate-pulse">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div class="relative">
            <div class="rounded-2xl bg-[#262B14]/50 h-[450px] flex items-center justify-center">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8D4AD]/10 to-transparent animate-shimmer"></div>
                <svg class="w-20 h-20 text-[#E8D4AD]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex gap-2">
              <div class="h-8 w-24 bg-[#E8D4AD]/10 rounded-full animate-pulse"></div>
              <div class="h-8 w-20 bg-[#E8D4AD]/5 rounded-full animate-pulse"></div>
            </div>
            <div class="h-10 w-3/4 bg-[#E8D4AD]/10 rounded-lg animate-pulse"></div>
            <div class="h-12 w-32 bg-[#E8D4AD]/10 rounded-lg animate-pulse"></div>
            <div class="space-y-3">
              <div class="h-4 w-full bg-[#E8D4AD]/5 rounded animate-pulse"></div>
              <div class="h-4 w-5/6 bg-[#E8D4AD]/5 rounded animate-pulse"></div>
              <div class="h-4 w-4/6 bg-[#E8D4AD]/5 rounded animate-pulse"></div>
            </div>
            <div class="h-12 w-40 bg-[#E8D4AD]/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <!-- Produit trouvé -->
      <div v-else-if="produit" class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-3xl border border-[#E8D4AD]/15 p-6 lg:p-10 animate-fadeInUp">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          <!-- Image Section -->
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#E8D4AD]/20 to-[#E8D4AD]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#262B14]/80 to-[#2A2F18]/80 border border-[#E8D4AD]/20 shadow-2xl">
              <img :src="produit.image" :alt="produit.nom"
                class="w-full h-full object-contain transition-all duration-700 group-hover:scale-105 p-8"
                @error="handleImageError" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <!-- Détails Section -->
          <div class="flex flex-col justify-center space-y-6">
            
            <div class="flex flex-wrap gap-2 animate-fadeInRight" style="animation-delay: 0.1s">
              <span class="bg-[#E8D4AD]/10 text-[#E8D4AD] px-3 py-1 rounded-full text-xs tracking-wider border border-[#E8D4AD]/20 backdrop-blur-sm">
                {{ produit.categorie }}
              </span>
              <span v-if="produit.sousCategorie" class="bg-[#343A20]/50 text-[#E8D4AD]/60 px-3 py-1 rounded-full text-xs">
                {{ produit.sousCategorie }}
              </span>
            </div>
            
            <h1 class="text-3xl lg:text-4xl font-light text-[#E8D4AD] leading-tight animate-fadeInRight" style="font-family: 'Playfair Display', serif; animation-delay: 0.2s">
              {{ produit.nom }}
            </h1>
            
            <div class="flex items-baseline gap-3 pb-4 border-b border-[#E8D4AD]/10 animate-fadeInRight" style="animation-delay: 0.3s">
              <span class="text-4xl font-light text-[#E8D4AD]">{{ produit.prix.toLocaleString() }} FCFA</span>
              <span v-if="produit.oldPrice" class="text-lg text-[#E8D4AD]/40 line-through">{{ produit.oldPrice.toLocaleString() }} FCFA</span>
            </div>
            
            <div class="text-[#E8D4AD]/70 leading-relaxed animate-fadeInRight" style="animation-delay: 0.4s">
              <p>{{ produit.description }}</p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp" style="animation-delay: 0.5s">
              <button @click="addToCart"
                class="group relative flex-1 flex items-center justify-center gap-3 bg-[#E8D4AD] text-[#262B14] rounded-full font-medium text-base hover:bg-[#E8D4AD]/90 transition-all duration-300 shadow-lg hover:shadow-xl h-12 px-6 overflow-hidden">
                <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <svg class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" />
                </svg>
                <span class="relative z-10">Ajouter au panier</span>
              </button>
            </div>
            
            <div class="bg-[#262B14]/30 rounded-2xl p-5 border border-[#E8D4AD]/10 mt-4 animate-fadeInUp" style="animation-delay: 0.6s">
              <h3 class="text-[#E8D4AD] font-light text-sm mb-4 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Informations complémentaires
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex justify-between items-center py-1 border-b border-[#E8D4AD]/5 group hover:border-[#E8D4AD]/20 transition-all">
                  <span class="text-[#E8D4AD]/50">Disponibilité</span>
                  <span class="text-[#E8D4AD] flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> En stock
                  </span>
                </li>
                <li class="flex justify-between items-center py-1">
                  <span class="text-[#E8D4AD]/50">Livraison</span>
                  <span class="text-[#E8D4AD]">24h - 48h</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      
      <!-- Produit non trouvé -->
      <div v-else class="text-center py-20 bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-3xl border border-[#E8D4AD]/15 animate-fadeInUp">
        <div class="relative inline-block">
          <svg class="w-28 h-28 text-[#E8D4AD]/20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-[#E8D4AD]/20 animate-ping"></div>
          </div>
        </div>
        <h3 class="text-2xl font-light text-[#E8D4AD] mb-3">Produit introuvable</h3>
        <p class="text-[#E8D4AD]/50 mb-8 max-w-md mx-auto">L'article que vous recherchez n'existe pas dans notre boutique.</p>
        <button @click="router.push('/boutique')"
          class="group relative px-6 py-2 bg-[#E8D4AD] text-[#262B14] rounded-full hover:bg-[#E8D4AD]/90 transition-all overflow-hidden">
          <span class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span class="relative z-10">Retour à la boutique</span>
        </button>
      </div>
      
      <!-- CARROUSEL PRODUITS SIMILAIRES - 12 articles avec défilement automatique -->
      <div v-if="produit && allSimilarProducts.length > 0" class="mt-20">
        <div class="flex items-center justify-between mb-8 animate-fadeInUp">
          <div>
            <h2 class="text-2xl font-light text-[#E8D4AD] flex items-center gap-3" style="font-family: 'Playfair Display', serif;">
              <span class="w-1 h-6 bg-[#E8D4AD]/50 rounded-full animate-pulse"></span>
              Vous pourriez aussi aimer
            </h2>
            <p class="text-[#E8D4AD]/40 text-xs mt-1">Découvrez notre sélection d'articles similaires</p>
          </div>
          <div class="flex gap-2">
            <button @click="scrollCarousel(-1)" class="w-8 h-8 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all group">
              <svg class="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button @click="scrollCarousel(1)" class="w-8 h-8 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all group">
              <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        
        <div class="relative overflow-hidden">
          <div class="flex gap-5 transition-transform duration-500 ease-out" :style="{ transform: `translateX(-${carouselIndex * carouselStep}%)` }">
            <div v-for="p in allSimilarProducts" :key="p.id" @click="router.push(`/boutique/${p.id}`)"
              class="flex-shrink-0 w-[calc(50%-10px)] sm:w-[calc(33.333%-13px)] lg:w-[calc(25%-15px)] group cursor-pointer animate-fadeInUp">
              <div class="bg-gradient-to-br from-[#343A20]/50 to-[#2A2F18]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div class="aspect-square overflow-hidden bg-[#262B14]/30 relative">
                  <img :src="p.image" :alt="p.nom" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" @error="handleImageError" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div class="p-3">
                  <span class="text-[#E8D4AD]/40 text-[9px] uppercase tracking-wider">{{ p.categorie }}</span>
                  <h3 class="text-[#E8D4AD] text-sm font-light mt-1 line-clamp-1 group-hover:text-[#E8D4AD]/90">{{ p.nom }}</h3>
                  <p class="text-[#E8D4AD] text-base font-light mt-1">{{ p.prix.toLocaleString() }} FCFA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Indicateurs de défilement -->
        <div class="flex justify-center gap-2 mt-8">
          <button v-for="i in totalCarouselPages" :key="i" @click="carouselIndex = i - 1"
            class="transition-all duration-500"
            :class="carouselIndex === i - 1 ? 'w-5 h-1.5 bg-[#E8D4AD]' : 'w-1.5 h-1.5 bg-[#E8D4AD]/30 rounded-full hover:bg-[#E8D4AD]/50'"></button>
        </div>
      </div>
      
    </div>
    
    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-6 right-6 bg-[#E8D4AD] text-[#262B14] px-5 py-3 rounded-full text-sm shadow-2xl flex items-center gap-2 z-50 backdrop-blur-sm border border-[#262B14]/10 animate-slideInRight">
        <div class="bg-[#262B14]/20 rounded-full p-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const produit = ref(null)
const loading = ref(true)
const showToast = ref(false)
const toastMessage = ref('')
const carouselIndex = ref(0)
let autoSlideInterval = null

// Base de données produits (12+ produits pour le carrousel)
const produitsDB = [
  { id: 1, nom: 'Perruque Lace Front Premium', prix: 45000, oldPrice: 55000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg', description: "Perruque de haute qualité avec lace front, pour un rendu indétectable et naturel.", rating: 5, sales: 89 },
  { id: 2, nom: 'Mèches Brésiliennes 14"', prix: 18000, oldPrice: null, categorie: 'Mèches', sousCategorie: 'Brésiliennes', image: '/images/perruque.jpg', description: "Mèches 100% vierges brésiliennes, douces et soyeuses.", rating: 4, sales: 56 },
  { id: 3, nom: 'Kit Onglerie Professionnel', prix: 25000, oldPrice: 32000, categorie: 'Onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg', description: "Un kit complet professionnel pour vos poses d'ongles.", rating: 5, sales: 120 },
  { id: 4, nom: 'Sérum Éclat Vitamine C', prix: 12000, oldPrice: null, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg', description: "Sérum qui hydrate intensément et révèle l'éclat naturel de votre peau.", rating: 4, sales: 45 },
  { id: 5, nom: 'Perruque Bouclée Deep Wave', prix: 35000, oldPrice: 45000, categorie: 'Perruques', sousCategorie: 'Bouclées', image: '/images/perruque.jpg', description: "Somptueuse perruque aux boucles rebondies et volumineuses.", rating: 4, sales: 67 },
  { id: 6, nom: 'Vernis Semi-Permanent Nude', prix: 4500, oldPrice: null, categorie: 'Onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg', description: "Vernis garantissant une tenue parfaite pendant plusieurs semaines.", rating: 3, sales: 34 },
  { id: 7, nom: 'Masque Hydratation Intense', prix: 8500, oldPrice: 12000, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg', description: "Soin profond réparateur pour cheveux et peau.", rating: 5, sales: 78 },
  { id: 8, nom: 'Extensions Clips Naturelles', prix: 15000, oldPrice: null, categorie: 'Mèches', sousCategorie: 'Synthétiques', image: '/images/perruque.jpg', description: "Pour ajouter de la longueur et du volume en toute simplicité.", rating: 4, sales: 23 },
  { id: 9, nom: 'Parfum Mystère de l\'Orient', prix: 48000, oldPrice: 60000, categorie: 'Parfums', sousCategorie: 'Hommes', image: '/images/perruque.jpg', description: "Une fragrance envoûtante aux notes boisées et ambrées.", rating: 5, sales: 92 },
  { id: 10, nom: 'Perruque Bob Lisse HD', prix: 32000, oldPrice: null, categorie: 'Perruques', sousCategorie: 'Lisses', image: '/images/perruque.jpg', description: "Coupe au carré moderne avec une lace HD invisible.", rating: 4, sales: 45 },
  { id: 11, nom: 'Kit Faux Ongles Design', prix: 6500, oldPrice: null, categorie: 'Onglerie', sousCategorie: 'Faux ongles', image: '/images/cosmetique.jpg', description: "Faux ongles pré-dessinés pour une manucure rapide.", rating: 4, sales: 56 },
  { id: 12, nom: 'Crème Corps Karité Bio', prix: 5500, oldPrice: null, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg', description: "Soin nourrissant intense pour les peaux sèches.", rating: 4, sales: 67 },
  { id: 13, nom: 'Mèches Indiennes Wave', prix: 22000, oldPrice: null, categorie: 'Mèches', sousCategorie: 'Indiennes', image: '/images/perruque.jpg', description: "Mèches naturelles indiennes avec une ondulation légère.", rating: 4, sales: 34 },
  { id: 14, nom: 'Palette Maquillage Nude', prix: 14000, oldPrice: null, categorie: 'Cosmétiques', sousCategorie: 'Maquillage', image: '/images/creme.jpg', description: "Une sélection de couleurs naturelles pour un regard sublimé.", rating: 4, sales: 78 }
]

const allSimilarProducts = computed(() => {
  if (!produit.value) return []
  // Exclure le produit actuel et prendre 12 produits similaires ou différents
  const others = produitsDB.filter(p => p.id !== produit.value.id)
  return others.slice(0, 12)
})

const itemsPerView = ref(4)
const carouselStep = computed(() => 100 / itemsPerView.value)
const totalCarouselPages = computed(() => Math.ceil(allSimilarProducts.value.length / itemsPerView.value))

const scrollCarousel = (direction) => {
  const maxIndex = totalCarouselPages.value - 1
  if (direction === 1 && carouselIndex.value < maxIndex) carouselIndex.value++
  if (direction === -1 && carouselIndex.value > 0) carouselIndex.value--
  resetAutoSlide()
}

const startAutoSlide = () => {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
  autoSlideInterval = setInterval(() => {
    const maxIndex = totalCarouselPages.value - 1
    if (carouselIndex.value < maxIndex) carouselIndex.value++
    else carouselIndex.value = 0
  }, 5000)
}

const resetAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    startAutoSlide()
  }
}

const updateItemsPerView = () => {
  const width = window.innerWidth
  if (width < 640) itemsPerView.value = 1
  else if (width < 768) itemsPerView.value = 2
  else if (width < 1024) itemsPerView.value = 3
  else itemsPerView.value = 4
}

const fetchProduct = () => {
  loading.value = true
  setTimeout(() => {
    const id = Number(route.params.id)
    const found = produitsDB.find(p => p.id === id)
    produit.value = found || null
    loading.value = false
    carouselIndex.value = 0
    resetAutoSlide()
  }, 600)
}

watch(() => route.params.id, () => {
  fetchProduct()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(() => {
  fetchProduct()
  updateItemsPerView()
  window.addEventListener('resize', updateItemsPerView)
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerView)
  if (autoSlideInterval) clearInterval(autoSlideInterval)
})

const handleImageError = (e) => { e.target.src = '/images/placeholder.jpg' }

const addToCart = () => {
  if (produit.value) {
    toastMessage.value = `${produit.value.nom} ajouté au panier`
    showToast.value = true
    setTimeout(() => { showToast.value = false }, 2500)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.03; transform: scale(1); }
  50% { opacity: 0.08; transform: scale(1.1); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes particle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

.animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
.animate-fadeInUp { animation: fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-fadeInRight { animation: fadeInRight 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-slideInRight { animation: slideInRight 0.4s ease-out forwards; }
.animate-particle { animation: particle linear infinite; }
.animate-shimmer { animation: shimmer 1.5s infinite; }

.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>