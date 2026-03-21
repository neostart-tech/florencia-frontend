<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310] overflow-hidden">
    
    <!-- Effet de fond animé luxueux -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow animation-delay-2000"></div>
    </div>
    
    <!-- Particules flottantes -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 40" :key="i" class="absolute rounded-full bg-[#E8D4AD]/10 animate-particle" :style="{
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 20 + 15}s`
      }"></div>
    </div>
    
    <!-- Hero Section -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="/images/cosmetique.jpg" alt="Blog" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-[#262B14] via-[#262B14]/80 to-[#262B14]"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center animate-fadeInUp">
          <div class="inline-flex items-center gap-2 mb-4">
            <NuxtLink to="/" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Accueil</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-[#E8D4AD] text-sm">Blog</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8D4AD] mb-4" style="font-family: 'Playfair Display', serif;">
            Notre Blog
          </h1>
          <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto"></div>
          <p class="text-[#E8D4AD]/50 text-sm mt-4 max-w-md mx-auto">Découvrez nos conseils, astuces et actualités beauté</p>
        </div>
      </div>
    </section>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-8 relative z-10">
      <div class="flex flex-col lg:flex-row gap-10">
        
        <!-- PARTIE PRINCIPALE - ARTICLES -->
        <div class="flex-1">
          
          <!-- Articles en grille -->
          <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(post, idx) in paginatedPosts" :key="post.id" 
                 class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                 :style="{ animationDelay: `${0.05 * idx}s` }"
                 @click="viewPost(post.id)">
              
              <!-- Image -->
              <div class="relative aspect-[16/9] overflow-hidden">
                <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/70 via-transparent to-transparent"></div>
                
                <!-- Catégorie -->
                <div class="absolute top-4 left-4">
                  <span class="bg-[#E8D4AD]/20 backdrop-blur-sm text-[#E8D4AD] text-[10px] px-3 py-1 rounded-full">{{ post.category }}</span>
                </div>
                
                <!-- Date -->
                <div class="absolute bottom-4 left-4">
                  <div class="flex items-center gap-1 bg-[#262B14]/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <svg class="w-3 h-3 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span class="text-[10px] text-[#E8D4AD]">{{ post.date }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Contenu -->
              <div class="p-5">
                <div class="flex items-center gap-3 mb-2">
                  <div class="flex items-center gap-1">
                    <svg class="w-3 h-3 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span class="text-[10px] text-[#E8D4AD]/50">{{ post.author }}</span>
                  </div>
                  <div class="w-1 h-1 rounded-full bg-[#E8D4AD]/30"></div>
                  <div class="flex items-center gap-1">
                    <svg class="w-3 h-3 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span class="text-[10px] text-[#E8D4AD]/50">{{ post.readTime }} min de lecture</span>
                  </div>
                </div>
                <h3 class="text-xl font-light text-[#E8D4AD] mb-2 group-hover:text-[#E8D4AD]/90 line-clamp-2" style="font-family: 'Playfair Display', serif;">
                  {{ post.title }}
                </h3>
                <p class="text-[#E8D4AD]/60 text-sm leading-relaxed line-clamp-3 mb-4">{{ post.excerpt }}</p>
                <button class="text-[#E8D4AD]/70 hover:text-[#E8D4AD] text-sm flex items-center gap-1 group/btn transition-all">
                  Lire la suite 
                  <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-12">
            <button @click="currentPage--" :disabled="currentPage === 1" 
              class="w-9 h-9 rounded-full border border-[#E8D4AD]/20 flex items-center justify-center disabled:opacity-30 hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button v-for="p in displayedPages" :key="p" @click="currentPage = p" 
              class="w-9 h-9 rounded-full text-sm transition-all"
              :class="currentPage === p ? 'bg-[#E8D4AD] text-[#262B14] shadow-lg' : 'text-[#E8D4AD]/50 hover:text-[#E8D4AD] hover:bg-[#E8D4AD]/10'">
              {{ p }}
            </button>
            <button @click="currentPage++" :disabled="currentPage === totalPages" 
              class="w-9 h-9 rounded-full border border-[#E8D4AD]/20 flex items-center justify-center disabled:opacity-30 hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          
          <!-- Message aucun résultat -->
          <div v-if="filteredPosts.length === 0" class="text-center py-20">
            <svg class="w-24 h-24 text-[#E8D4AD]/20 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-2xl font-light text-[#E8D4AD] mb-3">Aucun article trouvé</h3>
            <p class="text-[#E8D4AD]/50 text-sm">Aucun article ne correspond à votre recherche.</p>
          </div>
        </div>
        
        <!-- SIDEBAR -->
        <aside class="lg:w-80 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            
            <!-- Recherche -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5">
              <h3 class="text-[#E8D4AD] font-light text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                Rechercher
              </h3>
              <div class="relative">
                <input v-model="searchQuery" type="text" placeholder="Rechercher un article..."
                  class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 pl-9 text-[#E8D4AD] text-sm placeholder:text-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all">
                <svg class="w-4 h-4 text-[#E8D4AD]/40 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>
            
            <!-- Derniers articles -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5">
              <h3 class="text-[#E8D4AD] font-light text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Derniers articles
              </h3>
              <div class="space-y-4">
                <div v-for="post in latestPosts" :key="post.id" 
                     class="flex gap-3 cursor-pointer group/item hover:bg-[#E8D4AD]/5 p-2 rounded-lg transition-all"
                     @click="viewPost(post.id)">
                  <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#262B14]">
                    <img :src="post.image" class="w-full h-full object-cover transition-transform group-hover/item:scale-110">
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-[#E8D4AD] text-xs font-light line-clamp-2 group-hover/item:text-[#E8D4AD]/80">{{ post.title }}</h4>
                    <p class="text-[#E8D4AD]/40 text-[10px] mt-1">{{ post.date }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Catégories -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5">
              <h3 class="text-[#E8D4AD] font-light text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>
                Catégories
              </h3>
              <div class="space-y-2">
                <div v-for="cat in categoriesStats" :key="cat.name" 
                     class="flex justify-between items-center cursor-pointer group hover:bg-[#E8D4AD]/5 p-2 rounded-lg transition-all"
                     @click="activeCategoryFilter = cat.name">
                  <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors">{{ cat.name }}</span>
                  <span class="text-xs text-[#E8D4AD]/40">{{ cat.count }}</span>
                </div>
              </div>
            </div>
            
            <!-- Newsletter -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5 text-center">
              <div class="w-12 h-12 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 class="text-[#E8D4AD] font-light text-sm mb-2">Newsletter</h3>
              <p class="text-[#E8D4AD]/50 text-[10px] mb-4">Recevez nos derniers articles</p>
              <div class="flex gap-2">
                <input type="email" placeholder="Votre email" class="flex-1 bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-full px-3 py-2 text-xs text-[#E8D4AD] placeholder:text-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none">
                <button class="px-3 py-2 bg-[#E8D4AD] text-[#262B14] rounded-full text-xs hover:bg-[#E8D4AD]/90 transition-all">S'abonner</button>
              </div>
            </div>
            
          </div>
        </aside>
        
      </div>
    </div>
    
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-6 right-6 bg-[#E8D4AD] text-[#262B14] px-5 py-3 rounded-full text-sm shadow-2xl flex items-center gap-2 z-50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const activeCategoryFilter = ref('')
const currentPage = ref(1)
const itemsPerPage = 4
const showToast = ref(false)
const toastMessage = ref('')

// Articles du blog
const posts = ref([
  {
    id: 1,
    title: 'Les tendances capillaires du printemps 2024',
    excerpt: 'Découvrez les couleurs et coupes qui feront sensation cette saison pour sublimer votre chevelure.',
    content: 'Contenu complet de l\'article...',
    image: '/images/perruque.jpg',
    category: 'Tendances',
    author: 'Sophie Martin',
    date: '15 Mars 2024',
    readTime: 5
  },
  {
    id: 2,
    title: 'Comment entretenir ses cheveux crépus naturellement',
    excerpt: 'Astuces et produits naturels pour des cheveux crépus en pleine santé, brillants et bien hydratés.',
    content: 'Contenu complet de l\'article...',
    image: '/images/creme.jpg',
    category: 'Soins',
    author: 'Emma Laurent',
    date: '8 Mars 2024',
    readTime: 7
  },
  {
    id: 3,
    title: 'Les bienfaits de l\'huile d\'argan pour vos cheveux',
    excerpt: 'Découvrez tous les secrets de l\'huile d\'argan, un trésor de la nature pour vos cheveux.',
    content: 'Contenu complet de l\'article...',
    image: '/images/huile.jpg',
    category: 'Soins',
    author: 'Camille Dubois',
    date: '1 Mars 2024',
    readTime: 4
  },
  {
    id: 4,
    title: 'Tendances maquillage : le naturel revisité',
    excerpt: 'Le maquillage naturel fait peau neuve avec des textures légères et des couleurs subtiles.',
    content: 'Contenu complet de l\'article...',
    image: '/images/cosmetique.jpg',
    category: 'Tendances',
    author: 'Julie Renard',
    date: '25 Février 2024',
    readTime: 6
  },
  {
    id: 5,
    title: 'Routine beauté pour peaux sèches',
    excerpt: 'Les gestes essentiels pour hydrater et nourrir votre peau en profondeur.',
    content: 'Contenu complet de l\'article...',
    image: '/images/creme.jpg',
    category: 'Conseils',
    author: 'Sophie Martin',
    date: '18 Février 2024',
    readTime: 5
  },
  {
    id: 6,
    title: 'Comment choisir sa perruque selon sa morphologie',
    excerpt: 'Guide complet pour trouver la perruque idéale qui mettra en valeur vos traits.',
    content: 'Contenu complet de l\'article...',
    image: '/images/perruque.jpg',
    category: 'Conseils',
    author: 'Emma Laurent',
    date: '10 Février 2024',
    readTime: 8
  }
])

// Statistiques des catégories
const categoriesStats = computed(() => {
  const stats = {}
  posts.value.forEach(post => {
    stats[post.category] = (stats[post.category] || 0) + 1
  })
  return Object.entries(stats).map(([name, count]) => ({ name, count }))
})

// Derniers articles (les plus récents)
const latestPosts = computed(() => {
  return [...posts.value].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
})

// Articles filtrés
const filteredPosts = computed(() => {
  let result = posts.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.excerpt.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    )
  }
  
  if (activeCategoryFilter.value) {
    result = result.filter(p => p.category === activeCategoryFilter.value)
  }
  
  return result
})

// Pagination
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / itemsPerPage))
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredPosts.value.slice(start, start + itemsPerPage)
})

const displayedPages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  const pages = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) pages.push(i)
    else if (pages[pages.length - 1] !== '...') pages.push('...')
  }
  return pages
})

// Navigation
const viewPost = (id) => {
  toastMessage.value = `Article chargé`
  showToast.value = true
  setTimeout(() => { showToast.value = false }, 2000)
  // router.push(`/blog/${id}`)
}

// Réinitialisation des filtres
const resetFilters = () => {
  searchQuery.value = ''
  activeCategoryFilter.value = ''
  currentPage.value = 1
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes particle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 0.3; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

.animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
.animate-fadeInUp { animation: fadeInUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-particle { animation: particle linear infinite; }

.toast-enter-active, .toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>