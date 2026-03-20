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
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 20 + 15}s`
      }"></div>
    </div>
    
    <!-- Hero Section Élégante -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="/images/cosmetique.jpg" alt="Services" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-[#262B14] via-[#262B14]/80 to-[#262B14]"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center animate-fadeInUp">
          <div class="inline-flex items-center gap-2 mb-4">
            <NuxtLink to="/" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Accueil</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-[#E8D4AD] text-sm">Services</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8D4AD] mb-4" style="font-family: 'Playfair Display', serif;">
            Nos Prestations
          </h1>
          <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto"></div>
          <p class="text-[#E8D4AD]/50 text-sm mt-4 max-w-md mx-auto">Des services et formules sur mesure pour révéler votre beauté</p>
        </div>
      </div>
    </section>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-8 relative z-10">
      
      <!-- Filtres élégants -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 animate-fadeInUp">
        <div class="relative w-full lg:w-80">
          <input v-model="searchQuery" type="text" placeholder="Rechercher un service..."
            class="w-full bg-[#343A20]/60 border border-[#E8D4AD]/20 rounded-full px-5 py-3 pl-12 text-[#E8D4AD] text-sm placeholder:text-[#E8D4AD]/40 focus:border-[#E8D4AD] focus:ring-1 focus:ring-[#E8D4AD]/20 outline-none transition-all">
          <svg class="w-5 h-5 text-[#E8D4AD]/40 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          <button v-for="cat in categories" :key="cat.id" @click="activeCategory = cat.id"
            class="px-5 py-2 rounded-full text-sm transition-all duration-500"
            :class="activeCategory === cat.id 
              ? 'bg-[#E8D4AD] text-[#262B14] shadow-lg shadow-[#E8D4AD]/20' 
              : 'bg-[#343A20]/50 text-[#E8D4AD]/70 hover:bg-[#343A20] hover:text-[#E8D4AD]'">
            {{ cat.name }}
          </button>
        </div>
      </div>
      
      <!-- Grille unifiée des services et packs -->
      <div v-if="filteredItems.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="(item, idx) in filteredItems" :key="item.id" 
             class="group relative bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fadeInUp"
             :style="{ animationDelay: `${0.05 * idx}s` }"
             @click="openBooking(item)">
          
          <!-- Badge pour les packs -->
          <div v-if="item.type === 'pack'" class="absolute top-3 left-3 z-10">
            <div class="flex items-center gap-1 bg-[#E8D4AD]/20 backdrop-blur-sm rounded-full px-2 py-0.5">
              <svg class="w-3 h-3 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <span class="text-[9px] text-[#E8D4AD]">Pack</span>
            </div>
          </div>
          
          <!-- Badge populaire -->
          <div v-if="item.popular" class="absolute top-3 right-3 z-10">
            <span class="bg-[#E8D4AD] text-[#262B14] text-[9px] px-2 py-0.5 rounded-full shadow-lg">Populaire</span>
          </div>
          
          <!-- Image -->
          <div class="relative aspect-square overflow-hidden">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Durée et prix au hover -->
            <div class="absolute bottom-3 left-3 right-3 flex justify-between items-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span class="text-[#E8D4AD] text-[10px] bg-[#262B14]/50 backdrop-blur-sm px-2 py-0.5 rounded-full">{{ item.duration }}</span>
              <span class="bg-[#E8D4AD] text-[#262B14] px-2 py-0.5 rounded-full text-[10px] font-medium">{{ item.price.toLocaleString() }} FCFA</span>
            </div>
          </div>
          
          <!-- Contenu -->
          <div class="p-4">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[#E8D4AD]/40 text-[9px] uppercase tracking-wider">{{ item.categoryName }}</span>
            </div>
            <h3 class="text-[#E8D4AD] text-base font-light mb-2 group-hover:text-[#E8D4AD]/90 line-clamp-1">{{ item.name }}</h3>
            
            <!-- Services inclus (pour les packs) -->
            <div v-if="item.type === 'pack'" class="mb-3">
              <div class="space-y-0.5">
                <div v-for="(service, sidx) in item.services.slice(0, 2)" :key="sidx" class="flex items-center gap-1 text-[#E8D4AD]/50 text-[9px]">
                  <svg class="w-2 h-2 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  {{ service }}
                </div>
                <div v-if="item.services.length > 2" class="text-[#E8D4AD]/40 text-[8px]">+{{ item.services.length - 2 }} services</div>
              </div>
            </div>
            
            <!-- Prix et bouton -->
            <div class="flex items-center justify-between mt-3 pt-2 border-t border-[#E8D4AD]/10">
              <div>
                <span class="text-[#E8D4AD] text-lg font-light">{{ item.price.toLocaleString() }} FCFA</span>
                <span v-if="item.oldPrice" class="text-[#E8D4AD]/40 text-xs line-through ml-2">{{ item.oldPrice.toLocaleString() }} FCFA</span>
              </div>
              <button @click.stop="openBooking(item)" 
                class="w-8 h-8 rounded-full bg-[#E8D4AD]/10 hover:bg-[#E8D4AD] text-[#E8D4AD] hover:text-[#262B14] transition-all flex items-center justify-center group/btn">
                <svg class="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Message aucun résultat -->
      <div v-else class="text-center py-20 animate-fadeInUp">
        <div class="relative inline-block">
          <svg class="w-28 h-28 text-[#E8D4AD]/20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-[#E8D4AD]/20 animate-ping"></div>
          </div>
        </div>
        <h3 class="text-2xl font-light text-[#E8D4AD] mb-3">Aucun service trouvé</h3>
        <p class="text-[#E8D4AD]/50 text-sm mb-8 max-w-md mx-auto">Aucune prestation ne correspond à vos critères.</p>
        <button @click="resetFilters" class="px-6 py-2 bg-[#E8D4AD] text-[#262B14] rounded-full hover:bg-[#E8D4AD]/90 transition-all">
          Réinitialiser les filtres
        </button>
      </div>
      
    </div>
    
    <!-- Modal de réservation élégant -->
    <div v-if="showBookingModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal">
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"></div>
      <div class="relative bg-gradient-to-br from-[#343A20] to-[#2A2F18] rounded-2xl max-w-md w-full p-6 border border-[#E8D4AD]/20 shadow-2xl animate-scaleIn">
        <button @click="closeModal" class="absolute top-4 right-4 text-[#E8D4AD]/50 hover:text-[#E8D4AD] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div class="text-center mb-4">
          <div class="w-12 h-12 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h3 class="text-xl font-light text-[#E8D4AD] mb-1" style="font-family: 'Playfair Display', serif;">Réserver</h3>
          <p class="text-[#E8D4AD]/60 text-xs">{{ selectedService?.name }}</p>
        </div>
        
        <form @submit.prevent="submitBooking" class="space-y-3">
          <input v-model="bookingForm.name" type="text" placeholder="Votre nom" required
            class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 text-sm text-[#E8D4AD] placeholder:text-[#E8D4AD]/40 focus:border-[#E8D4AD] outline-none transition-all">
          <input v-model="bookingForm.email" type="email" placeholder="Votre email" required
            class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 text-sm text-[#E8D4AD] placeholder:text-[#E8D4AD]/40 focus:border-[#E8D4AD] outline-none transition-all">
          <input v-model="bookingForm.phone" type="tel" placeholder="Votre téléphone" required
            class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 text-sm text-[#E8D4AD] placeholder:text-[#E8D4AD]/40 focus:border-[#E8D4AD] outline-none transition-all">
          <input v-model="bookingForm.date" type="date" required
            class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 text-sm text-[#E8D4AD] focus:border-[#E8D4AD] outline-none transition-all">
          <textarea v-model="bookingForm.message" rows="2" placeholder="Message ou remarques..."
            class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 text-sm text-[#E8D4AD] placeholder:text-[#E8D4AD]/40 focus:border-[#E8D4AD] outline-none transition-all resize-none"></textarea>
          <button type="submit" class="w-full py-2.5 bg-[#E8D4AD] text-[#262B14] rounded-xl text-sm font-medium hover:bg-[#E8D4AD]/90 transition-all">
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
    
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-6 right-6 bg-[#E8D4AD] text-[#262B14] px-5 py-3 rounded-full text-sm shadow-2xl flex items-center gap-2 z-50 animate-slideInRight">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const activeCategory = ref('all')
const showBookingModal = ref(false)
const selectedService = ref(null)
const showToast = ref(false)
const toastMessage = ref('')

const bookingForm = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
  message: ''
})

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'hair', name: 'Cheveux' },
  { id: 'nails', name: 'Onglerie' },
  { id: 'face', name: 'Visage' },
  { id: 'body', name: 'Corps' }
]

// Services individuels
const services = [
  { id: 1, name: 'Coupe Signature', price: 25000, duration: '45 min', category: 'hair', categoryName: 'Cheveux', image: '/images/perruque.jpg', type: 'service' },
  { id: 2, name: 'Brushing Professionnel', price: 8000, duration: '30 min', category: 'hair', categoryName: 'Cheveux', image: '/images/creme.jpg', type: 'service' },
  { id: 3, name: 'Coloration Complète', price: 45000, duration: '2h', category: 'hair', categoryName: 'Cheveux', image: '/images/cosmetique.jpg', type: 'service' },
  { id: 4, name: 'Balayage', price: 55000, duration: '2h30', category: 'hair', categoryName: 'Cheveux', image: '/images/huile.jpg', type: 'service' },
  { id: 5, name: 'Manucure Classique', price: 8000, duration: '30 min', category: 'nails', categoryName: 'Onglerie', image: '/images/cosmetique.jpg', type: 'service' },
  { id: 6, name: 'Pédicure', price: 12000, duration: '45 min', category: 'nails', categoryName: 'Onglerie', image: '/images/cosmetique.jpg', type: 'service' },
  { id: 7, name: 'Soin Visage Éclat', price: 18000, duration: '1h', category: 'face', categoryName: 'Visage', image: '/images/creme.jpg', type: 'service' },
  { id: 8, name: 'Massage Relaxant', price: 25000, duration: '1h', category: 'body', categoryName: 'Corps', image: '/images/huile.jpg', type: 'service' }
]

// Packs combinés
const packs = [
  { id: 101, name: 'Pack Onglerie', price: 28000, oldPrice: 35000, duration: '1h30', image: '/images/cosmetique.jpg', category: 'nails', categoryName: 'Onglerie', type: 'pack', popular: false, services: ['Manucure', 'Pédicure', 'Vernis'] },
  { id: 102, name: 'Pack Visage', price: 32000, oldPrice: 40000, duration: '1h30', image: '/images/creme.jpg', category: 'face', categoryName: 'Visage', type: 'pack', popular: false, services: ['Soin Visage', 'Massage Relaxant'] },
  { id: 103, name: 'Pack Bien-être', price: 45000, oldPrice: 58000, duration: '2h', image: '/images/creme.jpg', category: 'body', categoryName: 'Corps', type: 'pack', popular: true, services: ['Massage Relaxant', 'Soin Visage'] },
  { id: 104, name: 'Pack Beauté Complète', price: 75000, oldPrice: 95000, duration: '3h', image: '/images/cosmetique.jpg', category: 'hair', categoryName: 'Cheveux', type: 'pack', popular: true, services: ['Coupe', 'Coloration', 'Manucure', 'Brushing'] },
  { id: 105, name: 'Pack Onglerie & Visage', price: 55000, oldPrice: 70000, duration: '2h30', image: '/images/cosmetique.jpg', category: 'nails', categoryName: 'Onglerie', type: 'pack', popular: true, services: ['Manucure', 'Pédicure', 'Soin Visage'] },
  { id: 106, name: 'Pack Total Relax', price: 85000, oldPrice: 105000, duration: '4h', image: '/images/huile.jpg', category: 'body', categoryName: 'Corps', type: 'pack', popular: false, services: ['Massage', 'Soin Visage', 'Manucure', 'Pédicure'] }
]

// Fusion des services et packs
const allItems = computed(() => [...services, ...packs])

// Filtrage unifié
const filteredItems = computed(() => {
  let result = allItems.value
  
  if (activeCategory.value !== 'all') {
    result = result.filter(item => item.category === activeCategory.value)
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      item.name.toLowerCase().includes(query) || 
      (item.services && item.services.some(s => s.toLowerCase().includes(query)))
    )
  }
  
  return result
})

const openBooking = (item) => {
  selectedService.value = item
  showBookingModal.value = true
}

const closeModal = () => {
  showBookingModal.value = false
  selectedService.value = null
  bookingForm.value = { name: '', email: '', phone: '', date: '', message: '' }
}

const submitBooking = () => {
  toastMessage.value = `Demande de réservation envoyée pour ${selectedService.value.name}`
  showToast.value = true
  setTimeout(() => { showToast.value = false }, 3000)
  closeModal()
}

const resetFilters = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
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
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes particle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 0.3; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

.animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
.animate-fadeInUp { animation: fadeInUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
.animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
.animate-slideInRight { animation: slideInRight 0.4s ease-out forwards; }
.animate-particle { animation: particle linear infinite; }

.toast-enter-active, .toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>