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
    <section class="relative py-12 lg:py-16 overflow-hidden">
      <div class="absolute inset-0" style="height: 100px !important;">
        <img src="/images/cosmetique.jpg" alt="Blog" class="w-full h-full object-cover opacity-20" style="height: 100px !important;">
        <div class="absolute inset-0 bg-gradient-to-r from-[#262B14] via-[#262B14]/80 to-[#262B14]"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center animate-fadeInUp">
          <div class="inline-flex items-center gap-2 mb-4">
            <NuxtLink to="/" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Accueil</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <NuxtLink to="/blog" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Blog</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-[#E8D4AD] text-sm">{{ post?.title?.split(' ').slice(0, 3).join(' ') || 'Article' }}</span>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-light text-[#E8D4AD] mb-4" style="font-family: 'Playfair Display', serif;">
            Article
          </h1>
          <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto"></div>
          <p class="text-[#E8D4AD]/50 text-sm mt-4 max-w-md mx-auto">Découvrez nos conseils, astuces et actualités beauté</p>
        </div>
      </div>
    </section>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- PARTIE PRINCIPALE - ARTICLE -->
        <div class="flex-1">
          
          <!-- Skeleton Loader -->
          <div v-if="loading" class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5 lg:p-6 animate-pulse">
            <div class="h-6 w-28 bg-[#E8D4AD]/10 rounded-full mb-5"></div>
            <div class="h-8 w-3/4 bg-[#E8D4AD]/10 rounded-lg mb-3"></div>
            <div class="flex gap-3 mb-6">
              <div class="h-4 w-20 bg-[#E8D4AD]/5 rounded"></div>
              <div class="h-4 w-24 bg-[#E8D4AD]/5 rounded"></div>
            </div>
            <div class="h-[200px] bg-[#E8D4AD]/10 rounded-xl mb-6"></div>
            <div class="space-y-2">
              <div class="h-3 w-full bg-[#E8D4AD]/5 rounded"></div>
              <div class="h-3 w-5/6 bg-[#E8D4AD]/5 rounded"></div>
              <div class="h-3 w-4/6 bg-[#E8D4AD]/5 rounded"></div>
            </div>
          </div>
          
          <!-- Article trouvé -->
          <div v-else-if="post" class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5 lg:p-6 animate-fadeInUp">
            
            <!-- Catégorie et meta -->
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="bg-[#E8D4AD]/20 text-[#E8D4AD] text-[10px] px-2.5 py-1 rounded-full">{{ post.category }}</span>
              <div class="flex items-center gap-1">
                <svg class="w-3 h-3 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span class="text-[10px] text-[#E8D4AD]/50">{{ post.date }}</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-3 h-3 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span class="text-[10px] text-[#E8D4AD]/50">{{ post.author }}</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-3 h-3 text-[#E8D4AD]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span class="text-[10px] text-[#E8D4AD]/50">{{ post.readTime }} min</span>
              </div>
            </div>
            
            <!-- Titre -->
            <h1 class="text-2xl md:text-3xl font-light text-[#E8D4AD] mb-4 leading-tight" style="font-family: 'Playfair Display', serif;">
              {{ post.title }}
            </h1>
            
            <!-- Image principale - HAUTEUR RÉDUITE À 200px -->
            <div class="relative rounded-xl overflow-hidden mb-6">
              <div class="absolute -inset-1 bg-gradient-to-r from-[#E8D4AD]/20 to-[#E8D4AD]/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img :src="post.image" :alt="post.title" class="relative w-full h-[200px] object-cover rounded-xl">
            </div>
            
            <!-- Contenu -->
            <div class="prose prose-invert max-w-none">
              <div class="text-[#E8D4AD]/80 leading-relaxed space-y-4 text-sm">
                <p class="text-base italic text-[#E8D4AD]/60 border-l-2 border-[#E8D4AD]/30 pl-3">{{ post.excerpt }}</p>
                <p>{{ post.content || 'Découvrez tous les détails de cet article passionnant. Notre équipe d\'experts partage avec vous ses meilleurs conseils et astuces pour sublimer votre beauté au quotidien.' }}</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <h3 class="text-lg font-light text-[#E8D4AD] mt-6 mb-2">Pourquoi c'est important ?</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <h3 class="text-lg font-light text-[#E8D4AD] mt-6 mb-2">Nos conseils d'experts</h3>
                <ul class="list-disc pl-4 space-y-1">
                  <li>Conseil 1 : Prenez soin de votre chevelure avec des produits naturels</li>
                  <li>Conseil 2 : Hydratez régulièrement vos cheveux pour éviter la sécheresse</li>
                  <li>Conseil 3 : Protégez vos cheveux de la chaleur excessive</li>
                </ul>
              </div>
            </div>
            
            <!-- Tags et partage -->
            <div class="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-[#E8D4AD]/10">
              <div class="flex flex-wrap gap-1">
                <span class="text-[#E8D4AD]/50 text-[10px]">Tags :</span>
                <span v-for="tag in post.tags || ['Beauté', 'Conseils', 'Tendance']" :key="tag" 
                      class="text-[10px] text-[#E8D4AD]/60 bg-[#E8D4AD]/5 px-2 py-0.5 rounded-full">{{ tag }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#E8D4AD]/50 text-[10px]">Partager :</span>
                <div class="flex gap-1">
                  <button class="w-6 h-6 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg>
                  </button>
                  <button class="w-6 h-6 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Article non trouvé -->
          <div v-else class="text-center py-16 bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15">
            <svg class="w-20 h-20 text-[#E8D4AD]/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-xl font-light text-[#E8D4AD] mb-2">Article introuvable</h3>
            <p class="text-[#E8D4AD]/50 text-sm mb-6">L'article que vous recherchez n'existe pas.</p>
            <NuxtLink to="/blog" class="px-5 py-2 bg-[#E8D4AD] text-[#262B14] rounded-full text-sm hover:bg-[#E8D4AD]/90 transition-all">
              Retour au blog
            </NuxtLink>
          </div>
          
          <!-- Articles similaires -->
          <div v-if="relatedPosts.length > 0" class="mt-10">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-6 h-px bg-[#E8D4AD]/30"></div>
              <h2 class="text-base font-light text-[#E8D4AD]" style="font-family: 'Playfair Display', serif;">Articles similaires</h2>
              <div class="w-6 h-px bg-[#E8D4AD]/30"></div>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div v-for="item in relatedPosts" :key="item.id" 
                   class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                   @click="goToPost(item.id)">
                <div class="relative aspect-[16/9] overflow-hidden">
                  <img :src="item.image" class="w-full h-full object-cover transition-transform group-hover:scale-110">
                  <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/70 via-transparent to-transparent"></div>
                  <div class="absolute bottom-2 left-2">
                    <span class="bg-[#E8D4AD]/20 backdrop-blur-sm text-[#E8D4AD] text-[9px] px-2 py-0.5 rounded-full">{{ item.category }}</span>
                  </div>
                </div>
                <div class="p-3">
                  <h3 class="text-[#E8D4AD] text-xs font-light line-clamp-2 group-hover:text-[#E8D4AD]/90">{{ item.title }}</h3>
                  <p class="text-[#E8D4AD]/40 text-[9px] mt-1">{{ item.date }}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- SIDEBAR -->
        <aside class="lg:w-72 flex-shrink-0">
          <div class="sticky top-24 space-y-5">
            
            <!-- Recherche -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-xl border border-[#E8D4AD]/15 p-4">
              <h3 class="text-[#E8D4AD] font-light text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                Rechercher
              </h3>
              <div class="relative">
                <input v-model="searchQuery" type="text" placeholder="Rechercher un article..."
                  class="w-full bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-lg px-3 py-2 pl-8 text-[#E8D4AD] text-xs placeholder:text-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all">
                <svg class="w-3 h-3 text-[#E8D4AD]/40 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>
            
            <!-- Derniers articles -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-xl border border-[#E8D4AD]/15 p-4">
              <h3 class="text-[#E8D4AD] font-light text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Derniers articles
              </h3>
              <div class="space-y-3">
                <div v-for="item in latestPosts" :key="item.id" 
                     class="flex gap-2 cursor-pointer group/item hover:bg-[#E8D4AD]/5 p-1.5 rounded-lg transition-all"
                     @click="goToPost(item.id)">
                  <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#262B14]">
                    <img :src="item.image" class="w-full h-full object-cover transition-transform group-hover/item:scale-110">
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-[#E8D4AD] text-[11px] font-light line-clamp-2 group-hover/item:text-[#E8D4AD]/80">{{ item.title }}</h4>
                    <p class="text-[#E8D4AD]/40 text-[9px] mt-0.5">{{ item.date }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Catégories -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-xl border border-[#E8D4AD]/15 p-4">
              <h3 class="text-[#E8D4AD] font-light text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>
                Catégories
              </h3>
              <div class="space-y-1.5">
                <div v-for="cat in categoriesStats" :key="cat.name" 
                     class="flex justify-between items-center cursor-pointer group hover:bg-[#E8D4AD]/5 p-1.5 rounded-lg transition-all"
                     @click="goToCategory(cat.name)">
                  <span class="text-xs text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors">{{ cat.name }}</span>
                  <span class="text-[10px] text-[#E8D4AD]/40">{{ cat.count }}</span>
                </div>
              </div>
            </div>
            
            <!-- Newsletter -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-xl border border-[#E8D4AD]/15 p-4 text-center">
              <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center mx-auto mb-2">
                <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 class="text-[#E8D4AD] font-light text-xs mb-1">Newsletter</h3>
              <p class="text-[#E8D4AD]/50 text-[9px] mb-3">Recevez nos derniers articles</p>
              <div class="flex gap-2">
                <input type="email" placeholder="Votre email" class="flex-1 bg-[#262B14]/50 border border-[#E8D4AD]/20 rounded-full px-2 py-1.5 text-[9px] text-[#E8D4AD] placeholder:text-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none">
                <button class="px-2 py-1.5 bg-[#E8D4AD] text-[#262B14] rounded-full text-[9px] hover:bg-[#E8D4AD]/90 transition-all">S'abonner</button>
              </div>
            </div>
            
          </div>
        </aside>
        
      </div>
    </div>
    
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-6 right-6 bg-[#E8D4AD] text-[#262B14] px-4 py-2 rounded-full text-xs shadow-2xl flex items-center gap-2 z-50">
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const post = ref(null)
const loading = ref(true)
const searchQuery = ref('')
const showToast = ref(false)
const toastMessage = ref('')

// Base de données articles
const posts = ref([
  {
    id: 1,
    title: 'Les tendances capillaires du printemps 2024',
    excerpt: 'Découvrez les couleurs et coupes qui feront sensation cette saison pour sublimer votre chevelure.',
    image: '/images/perruque.jpg',
    category: 'Tendances',
    author: 'Sophie Martin',
    date: '15 Mars 2024',
    readTime: 5,
    tags: ['Tendances', 'Cheveux', 'Printemps']
  },
  {
    id: 2,
    title: 'Comment entretenir ses cheveux crépus naturellement',
    excerpt: 'Astuces et produits naturels pour des cheveux crépus en pleine santé, brillants et bien hydratés.',
    image: '/images/creme.jpg',
    category: 'Soins',
    author: 'Emma Laurent',
    date: '8 Mars 2024',
    readTime: 7,
    tags: ['Soins', 'Naturel', 'Cheveux crépus']
  },
  {
    id: 3,
    title: 'Les bienfaits de l\'huile d\'argan pour vos cheveux',
    excerpt: 'Découvrez tous les secrets de l\'huile d\'argan, un trésor de la nature pour vos cheveux.',
    image: '/images/huile.jpg',
    category: 'Soins',
    author: 'Camille Dubois',
    date: '1 Mars 2024',
    readTime: 4,
    tags: ['Soins', 'Huile d\'argan', 'Naturel']
  },
  {
    id: 4,
    title: 'Tendances maquillage : le naturel revisité',
    excerpt: 'Le maquillage naturel fait peau neuve avec des textures légères et des couleurs subtiles.',
    image: '/images/cosmetique.jpg',
    category: 'Tendances',
    author: 'Julie Renard',
    date: '25 Février 2024',
    readTime: 6,
    tags: ['Maquillage', 'Tendances', 'Naturel']
  }
])

// Statistiques des catégories
const categoriesStats = computed(() => {
  const stats = {}
  posts.value.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1
  })
  return Object.entries(stats).map(([name, count]) => ({ name, count }))
})

// Derniers articles
const latestPosts = computed(() => {
  return [...posts.value].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
})

// Articles similaires
const relatedPosts = computed(() => {
  if (!post.value) return []
  return posts.value.filter(p => p.id !== post.value.id && p.category === post.value.category).slice(0, 3)
})

const fetchPost = () => {
  loading.value = true
  setTimeout(() => {
    const id = Number(route.params.id)
    const found = posts.value.find(p => p.id === id)
    post.value = found || null
    loading.value = false
  }, 300)
}

const goToPost = (id) => {
  router.push(`/blog/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToCategory = (category) => {
  router.push(`/blog?category=${encodeURIComponent(category)}`)
}

watch(() => route.params.id, () => {
  fetchPost()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(() => {
  fetchPost()
})
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
</style>