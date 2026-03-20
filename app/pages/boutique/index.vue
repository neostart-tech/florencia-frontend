<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310] overflow-hidden">
    
    <!-- Effet de fond animé -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow animation-delay-2000"></div>
      <div class="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#E8D4AD]/3 rounded-full filter blur-[100px] animate-float-slow animation-delay-1000"></div>
    </div>
    
    <!-- Particules flottantes -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 30" :key="i" class="absolute rounded-full bg-[#E8D4AD]/10 animate-particle" :style="{
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 12}s`,
        animationDuration: `${Math.random() * 20 + 10}s`
      }"></div>
    </div>
    
    <!-- HERO SECTION - Page Indicator -->
    <section class="relative py-12 lg:py-16 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-[#262B14] via-transparent to-[#262B14]"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center animate-fadeInUp">
          <div class="inline-flex items-center gap-2 mb-4">
            <NuxtLink to="/" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Accueil</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-[#E8D4AD] text-sm">Boutique</span>
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-light text-[#E8D4AD] mb-3" style="font-family: 'Playfair Display', serif;">
            Notre Boutique
          </h1>
          <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto"></div>
          <p class="text-[#E8D4AD]/50 text-sm mt-4 max-w-md mx-auto">Découvrez notre collection exclusive de produits d'exception</p>
        </div>
      </div>
    </section>
    
    <!-- ZONE LES PLUS VENDUS -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-4 relative z-10">
      <div class="mb-12">
        <div class="flex flex-col items-center mb-8">
          <div class="flex items-center gap-3">
            <div class="w-12 h-px bg-gradient-to-r from-transparent to-[#E8D4AD]/30"></div>
            <div class="relative">
              <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD]/30 to-transparent"></div>
              <svg class="w-6 h-6 text-[#E8D4AD]/40 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <h3 class="text-[#E8D4AD] font-light text-xl tracking-wide mt-2" style="font-family: 'Playfair Display', serif;">Les Plus Vendus</h3>
            </div>
            <div class="w-12 h-px bg-gradient-to-l from-transparent to-[#E8D4AD]/30"></div>
          </div>
          <p class="text-[#E8D4AD]/40 text-xs mt-2">Ce que nos clientes préfèrent</p>
        </div>
        
        <div class="relative">
          <button @click="scrollTopVentes(-1)" class="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#262B14]/80 backdrop-blur-sm border border-[#E8D4AD]/20 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all opacity-0 group-hover:opacity-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button @click="scrollTopVentes(1)" class="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#262B14]/80 backdrop-blur-sm border border-[#E8D4AD]/20 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all opacity-0 group-hover:opacity-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
          
          <div class="overflow-hidden rounded-2xl">
            <div class="flex gap-5 transition-transform duration-500 ease-out" :style="{ transform: `translateX(-${topVentesScroll * 100}%)` }">
              <div v-for="(item, idx) in topVentes" :key="item.id" class="flex-shrink-0 w-[calc(33.333%-13px)] sm:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] group">
                <div class="relative bg-gradient-to-b from-[#343A20]/40 to-[#2A2F18]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer" @click="viewProduct(item.id)">
                  <div class="absolute top-3 left-3 z-10">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8D4AD]/20 to-[#E8D4AD]/5 backdrop-blur-sm flex items-center justify-center border border-[#E8D4AD]/20">
                      <span class="text-[11px] font-light text-[#E8D4AD]">#{{ idx + 1 }}</span>
                    </div>
                  </div>
                  <div class="relative aspect-square overflow-hidden">
                    <img :src="item.image" class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110">
                    <button @click.stop="addToCart(item)" class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#E8D4AD] text-[#262B14] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" /></svg>
                    </button>
                    <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="p-4">
                    <div class="flex items-center gap-1 mb-2">
                      <svg v-for="s in 5" :key="s" class="w-3 h-3" :class="s <= 4 ? 'text-[#E8D4AD]' : 'text-[#E8D4AD]/30'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h4 class="text-[#E8D4AD] text-sm font-light line-clamp-1 group-hover:text-[#E8D4AD]/90">{{ item.name }}</h4>
                    <div class="mt-2 flex items-baseline gap-2">
                      <span class="text-[#E8D4AD] text-base font-light">{{ item.price.toLocaleString() }} FCFA</span>
                      <span v-if="item.oldPrice" class="text-[#E8D4AD]/30 text-xs line-through">{{ item.oldPrice.toLocaleString() }} FCFA</span>
                    </div>
                    <button @click.stop="addToCart(item)" class="mt-3 w-full py-1.5 bg-[#E8D4AD]/10 hover:bg-[#E8D4AD] text-[#E8D4AD] hover:text-[#262B14] rounded-full text-xs transition-all flex items-center justify-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" /></svg>
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center gap-2 mt-6">
            <button v-for="i in totalTopVentesPages" :key="i" @click="topVentesScroll = i - 1"
              class="transition-all duration-500"
              :class="topVentesScroll === i - 1 ? 'w-5 h-1.5 bg-[#E8D4AD]' : 'w-1.5 h-1.5 bg-[#E8D4AD]/30 rounded-full hover:bg-[#E8D4AD]/50'"></button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- SECTION PRINCIPALE -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pb-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-10">
        
        <!-- SIDEBAR GAUCHE AVEC CHECKBOX PERSONNALISÉES -->
        <aside class="lg:w-80 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            
            <!-- Filtres principaux -->
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-[#E8D4AD]/25 to-[#E8D4AD]/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div class="relative bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5">
                <div class="flex items-center justify-between mb-5">
                  <h3 class="text-[#E8D4AD] font-light text-sm uppercase tracking-wider flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                    Filtres
                  </h3>
                  <button @click="resetFilters" class="text-[10px] text-[#E8D4AD]/40 hover:text-[#E8D4AD] transition-colors flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    Réinitialiser
                  </button>
                </div>
                
                <!-- Recherche -->
                <div class="relative mb-5">
                  <input v-model="search" type="text" placeholder="Rechercher..."
                    class="w-full bg-[#262B14]/60 border border-[#E8D4AD]/20 rounded-xl px-4 py-2.5 pl-9 text-[#E8D4AD] text-sm placeholder:text-[#E8D4AD]/30 focus:border-[#E8D4AD] focus:ring-1 focus:ring-[#E8D4AD]/20 outline-none transition-all">
                  <svg class="w-4 h-4 text-[#E8D4AD]/40 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                
                <!-- Catégories avec checkboxes personnalisées élégantes -->
                <div class="mb-5">
                  <h4 class="text-[#E8D4AD]/60 text-xs uppercase tracking-wider mb-3">Catégories</h4>
                  <div class="space-y-2">
                    <label v-for="cat in categories" :key="cat.id" class="flex items-center gap-3 cursor-pointer group/label p-1.5 rounded-lg transition-all">
                      <!-- Custom Checkbox Élégant -->
                      <div class="relative">
                        <input type="checkbox" :value="cat.id" v-model="selectedCategories" class="peer absolute opacity-0 w-4 h-4 cursor-pointer">
                        <div class="w-4 h-4 rounded border border-[#E8D4AD]/40 bg-transparent peer-checked:bg-[#E8D4AD] peer-checked:border-[#E8D4AD] transition-all duration-300 flex items-center justify-center">
                          <svg class="w-3 h-3 text-[#262B14] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span class="text-sm text-[#E8D4AD]/70 group-hover/label:text-[#E8D4AD] transition-colors">{{ cat.name }}</span>
                      <span class="text-[10px] text-[#E8D4AD]/30 ml-auto">{{ getCategoryCount(cat.id) }}</span>
                    </label>
                  </div>
                </div>
                
                <!-- Note minimale -->
                <div class="mb-5">
                  <h4 class="text-[#E8D4AD]/60 text-xs uppercase tracking-wider mb-3">Note minimale</h4>
                  <div class="flex gap-2">
                    <button v-for="rating in [1,2,3,4,5]" :key="rating" @click="minRating = rating"
                      class="flex-1 py-1.5 rounded-lg text-xs transition-all"
                      :class="minRating === rating ? 'bg-[#E8D4AD] text-[#262B14]' : 'bg-[#262B14]/50 text-[#E8D4AD]/60 hover:bg-[#E8D4AD]/20'">
                      {{ rating }}★
                    </button>
                  </div>
                </div>
                
                <!-- Prix -->
                <div>
                  <div class="flex justify-between text-xs text-[#E8D4AD]/50 mb-3">
                    <span class="bg-[#262B14]/30 px-2 py-0.5 rounded-full">{{ minPrice.toLocaleString() }} FCFA</span>
                    <span class="bg-[#262B14]/30 px-2 py-0.5 rounded-full">{{ maxPrice.toLocaleString() }} FCFA</span>
                  </div>
                  <div class="relative h-6">
                    <div class="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#E8D4AD]/20 rounded-full"></div>
                    <div class="absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#E8D4AD] to-[#E8D4AD]/70 rounded-full" :style="{ left: (minPrice / 100000) * 100 + '%', width: ((maxPrice - minPrice) / 100000) * 100 + '%' }"></div>
                    <input type="range" :min="0" :max="100000" step="1000" v-model.number="minPrice" class="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E8D4AD] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#262B14]">
                    <input type="range" :min="0" :max="100000" step="1000" v-model.number="maxPrice" class="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#E8D4AD] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#262B14]">
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Filtre Promotions avec checkboxes personnalisées -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5">
              <h3 class="text-[#E8D4AD] font-light text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Promotions
              </h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="relative">
                    <input type="checkbox" v-model="showOnlyPromos" class="peer absolute opacity-0 w-4 h-4 cursor-pointer">
                    <div class="w-4 h-4 rounded border border-[#E8D4AD]/40 bg-transparent peer-checked:bg-[#E8D4AD] peer-checked:border-[#E8D4AD] transition-all duration-300 flex items-center justify-center">
                      <svg class="w-3 h-3 text-[#262B14] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors">Voir uniquement les produits en promo</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer group">
                  <div class="relative">
                    <input type="checkbox" v-model="showOnlyNew" class="peer absolute opacity-0 w-4 h-4 cursor-pointer">
                    <div class="w-4 h-4 rounded border border-[#E8D4AD]/40 bg-transparent peer-checked:bg-[#E8D4AD] peer-checked:border-[#E8D4AD] transition-all duration-300 flex items-center justify-center">
                      <svg class="w-3 h-3 text-[#262B14] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors">Nouveautés</span>
                </label>
              </div>
            </div>
            
            <!-- Filtre Marques avec checkboxes personnalisées -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-5">
              <h3 class="text-[#E8D4AD] font-light text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                Marques
              </h3>
              <div class="space-y-2">
                <label v-for="brand in brands" :key="brand.id" class="flex items-center gap-3 cursor-pointer group">
                  <div class="relative">
                    <input type="checkbox" :value="brand.id" v-model="selectedBrands" class="peer absolute opacity-0 w-4 h-4 cursor-pointer">
                    <div class="w-4 h-4 rounded border border-[#E8D4AD]/40 bg-transparent peer-checked:bg-[#E8D4AD] peer-checked:border-[#E8D4AD] transition-all duration-300 flex items-center justify-center">
                      <svg class="w-3 h-3 text-[#262B14] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span class="text-sm text-[#E8D4AD]/70 group-hover:text-[#E8D4AD] transition-colors">{{ brand.name }}</span>
                </label>
              </div>
            </div>
            
            <!-- Carte Nouveautés -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-4 hover:border-[#E8D4AD]/30 transition-all cursor-pointer group" @click="viewCategory('nouveautes')">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all">
                  <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-[#E8D4AD] text-sm font-light">Nouveautés</h4>
                  <p class="text-[#E8D4AD]/40 text-[10px]">{{ nouveautes.length }} nouveaux produits</p>
                </div>
                <svg class="w-4 h-4 text-[#E8D4AD]/40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
            
            <!-- Carte Meilleures Ventes -->
            <div class="bg-gradient-to-br from-[#343A20]/70 to-[#2A2F18]/70 backdrop-blur-md rounded-2xl border border-[#E8D4AD]/15 p-4 hover:border-[#E8D4AD]/30 transition-all cursor-pointer group" @click="viewCategory('meilleures')">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all">
                  <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-[#E8D4AD] text-sm font-light">Meilleures Ventes</h4>
                  <p class="text-[#E8D4AD]/40 text-[10px]">Les préférées de nos clientes</p>
                </div>
                <svg class="w-4 h-4 text-[#E8D4AD]/40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
            
          </div>
        </aside>
        
        <!-- PARTIE PRINCIPALE (identique) -->
        <div class="flex-1">
          <!-- Tri -->
          <div class="flex justify-between items-center mb-6 pb-3 border-b border-[#E8D4AD]/10">
            <p class="text-[#E8D4AD]/40 text-sm flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
              {{ filteredProducts.length }} produits
            </p>
            <div class="flex items-center gap-3">
              <span class="text-xs text-[#E8D4AD]/40">Trier par</span>
              <select v-model="sortBy" class="bg-transparent border border-[#E8D4AD]/20 rounded-full px-4 py-1.5 text-sm text-[#E8D4AD] focus:outline-none focus:border-[#E8D4AD] transition-all cursor-pointer">
                <option value="nom" class="bg-[#262B14]">Nom (A-Z)</option>
                <option value="prix" class="bg-[#262B14]">Prix croissant</option>
                <option value="prix-desc" class="bg-[#262B14]">Prix décroissant</option>
                <option value="note" class="bg-[#262B14]">Meilleures notes</option>
              </select>
            </div>
          </div>
          
          <!-- Message aucun résultat -->
          <div v-if="filteredProducts.length === 0" class="text-center py-20 animate-fadeInUp">
            <div class="relative inline-block">
              <div class="w-28 h-28 mx-auto mb-6 relative">
                <svg class="w-full h-full text-[#E8D4AD]/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-12 h-12 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 class="text-[#E8D4AD] text-2xl font-light mb-2">Aucun résultat</h3>
              <p class="text-[#E8D4AD]/50 text-sm max-w-md mx-auto">Aucun produit ne correspond à vos critères. Essayez de modifier vos filtres.</p>
              <button @click="resetFilters" class="mt-6 px-6 py-2 bg-[#E8D4AD] text-[#262B14] rounded-full text-sm hover:bg-[#E8D4AD]/90 transition-all inline-flex items-center gap-2 shadow-lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                Réinitialiser
              </button>
            </div>
          </div>
          
          <!-- Grille produits -->
          <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-5">
            <div v-for="product in paginatedProducts" :key="product.id" 
                 class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl overflow-hidden border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div class="relative aspect-square overflow-hidden">
                <img :src="product.image" class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110">
                <div class="absolute top-3 left-3 flex gap-1">
                  <span v-if="product.isNew" class="bg-[#E8D4AD]/90 text-[#262B14] text-[9px] px-2 py-0.5 rounded-full shadow-lg">Nouveau</span>
                  <span v-else-if="product.isPromo" class="bg-[#E8D4AD]/90 text-[#262B14] text-[9px] px-2 py-0.5 rounded-full shadow-lg">-{{ product.discount }}%</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <button @click="addToCart(product)" class="flex-1 py-2 bg-[#E8D4AD] text-[#262B14] text-xs rounded-full hover:bg-[#E8D4AD]/90 transition-all flex items-center justify-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" /></svg>
                    Ajouter
                  </button>
                  <button @click="viewProduct(product.id)" class="w-8 h-8 bg-[#262B14]/80 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center hover:text-[#262B14] transition-all hover:scale-110" style="color:white !important">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                </div>
              </div>
              <div class="p-3">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-[#E8D4AD]/40 text-[9px] uppercase tracking-wider">{{ product.categoryName }}</span>
                  <div class="flex gap-0.5">
                    <svg v-for="s in 5" :key="s" class="w-2.5 h-2.5" :class="s <= (product.rating || 4) ? 'text-[#E8D4AD]' : 'text-[#E8D4AD]/30'" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  </div>
                </div>
                <h3 class="text-[#E8D4AD] text-sm font-light mt-1 line-clamp-1 group-hover:text-[#E8D4AD]/80">{{ product.name }}</h3>
                <div class="mt-2 flex items-center justify-between">
                  <div>
                    <span class="text-[#E8D4AD] text-base font-light">{{ product.price.toLocaleString() }} FCFA</span>
                    <span v-if="product.oldPrice" class="text-[#E8D4AD]/30 text-xs line-through ml-2">{{ product.oldPrice.toLocaleString() }}</span>
                  </div>
                  <button @click="addToCart(product)" class="w-7 h-7 rounded-full bg-[#E8D4AD]/20 hover:bg-[#E8D4AD] text-[#E8D4AD] hover:text-[#262B14] flex items-center justify-center transition-all">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h11L17 13" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div v-if="totalPages > 1 && filteredProducts.length > 0" class="flex justify-center gap-2 mt-12">
            <button @click="currentPage--" :disabled="currentPage === 1" class="w-9 h-9 rounded-full border border-[#E8D4AD]/20 flex items-center justify-center disabled:opacity-30 hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button v-for="p in displayedPages" :key="p" @click="currentPage = p" class="w-9 h-9 rounded-full text-sm transition-all" :class="currentPage === p ? 'bg-[#E8D4AD] text-[#262B14] shadow-lg shadow-[#E8D4AD]/20' : 'text-[#E8D4AD]/50 hover:text-[#E8D4AD] hover:bg-[#E8D4AD]/10'">{{ p }}</button>
            <button @click="currentPage++" :disabled="currentPage === totalPages" class="w-9 h-9 rounded-full border border-[#E8D4AD]/20 flex items-center justify-center disabled:opacity-30 hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
    
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-6 right-6 bg-[#E8D4AD] text-[#262B14] px-5 py-3 rounded-full text-sm shadow-2xl flex items-center gap-2 z-50 backdrop-blur-sm border border-[#262B14]/10">
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
const showToast = ref(false)
const toastMessage = ref('')
const search = ref('')
const sortBy = ref('nom')
const currentPage = ref(1)
const itemsPerPage = 9
const selectedCategories = ref([])
const selectedBrands = ref([])
const minPrice = ref(0)
const maxPrice = ref(100000)
const minRating = ref(0)
const showOnlyPromos = ref(false)
const showOnlyNew = ref(false)
const topVentesScroll = ref(0)

const categories = [
  { id: 'perruques', name: 'Perruques' },
  { id: 'meches', name: 'Mèches' },
  { id: 'cosmetiques', name: 'Cosmétiques' },
  { id: 'onglerie', name: 'Onglerie' },
  { id: 'parfums', name: 'Parfums' }
]

const brands = [
  { id: 'florencia', name: 'Florencia' },
  { id: 'premium', name: 'Premium Beauty' },
  { id: 'naturel', name: 'Naturel Essence' }
]

const products = ref([
  { id: 1, name: 'Perruque Lace Front Premium', price: 45000, oldPrice: 55000, category: 'perruques', categoryName: 'Perruques', image: '/images/perruque.jpg', isNew: false, isPromo: true, discount: 18, sales: 89, rating: 5, brand: 'premium' },
  { id: 2, name: 'Mèches Brésiliennes 14"', price: 18000, oldPrice: null, category: 'meches', categoryName: 'Mèches', image: '/images/perruque.jpg', isNew: true, isPromo: false, sales: 56, rating: 4, brand: 'florencia' },
  { id: 3, name: 'Kit Onglerie Professionnel', price: 25000, oldPrice: 32000, category: 'onglerie', categoryName: 'Onglerie', image: '/images/cosmetique.jpg', isNew: false, isPromo: true, discount: 22, sales: 120, rating: 5, brand: 'premium' },
  { id: 4, name: 'Sérum Éclat Vitamine C', price: 12000, oldPrice: null, category: 'cosmetiques', categoryName: 'Cosmétiques', image: '/images/creme.jpg', isNew: true, isPromo: false, sales: 45, rating: 4, brand: 'naturel' },
  { id: 5, name: 'Perruque Bouclée Deep Wave', price: 35000, oldPrice: 45000, category: 'perruques', categoryName: 'Perruques', image: '/images/perruque.jpg', isNew: false, isPromo: true, discount: 22, sales: 67, rating: 4, brand: 'florencia' },
  { id: 6, name: 'Vernis Semi-Permanent Nude', price: 4500, oldPrice: null, category: 'onglerie', categoryName: 'Onglerie', image: '/images/cosmetique.jpg', isNew: false, isPromo: false, sales: 34, rating: 3, brand: 'naturel' },
  { id: 7, name: 'Masque Hydratation Intense', price: 8500, oldPrice: 12000, category: 'cosmetiques', categoryName: 'Cosmétiques', image: '/images/creme.jpg', isNew: false, isPromo: true, discount: 29, sales: 78, rating: 5, brand: 'premium' },
  { id: 8, name: 'Extensions Clips Naturelles', price: 15000, oldPrice: null, category: 'meches', categoryName: 'Mèches', image: '/images/perruque.jpg', isNew: true, isPromo: false, sales: 23, rating: 4, brand: 'naturel' },
  { id: 9, name: 'Parfum Mystère de l\'Orient', price: 48000, oldPrice: 60000, category: 'parfums', categoryName: 'Parfums', image: '/images/perruque.jpg', isNew: false, isPromo: true, discount: 20, sales: 92, rating: 5, brand: 'florencia' }
])

const getCategoryCount = (catId) => products.value.filter(p => p.category === catId).length

const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const searchMatch = p.name.toLowerCase().includes(search.value.toLowerCase())
    const catMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(p.category)
    const brandMatch = selectedBrands.value.length === 0 || selectedBrands.value.includes(p.brand)
    const priceMatch = p.price >= minPrice.value && p.price <= maxPrice.value
    const ratingMatch = (p.rating || 0) >= minRating.value
    const promoMatch = !showOnlyPromos.value || p.isPromo
    const newMatch = !showOnlyNew.value || p.isNew
    return searchMatch && catMatch && brandMatch && priceMatch && ratingMatch && promoMatch && newMatch
  })
})

const sortedProducts = computed(() => {
  const list = [...filteredProducts.value]
  if (sortBy.value === 'prix') return list.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'prix-desc') return list.sort((a, b) => b.price - a.price)
  if (sortBy.value === 'note') return list.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  return list.sort((a, b) => a.name.localeCompare(b.name))
})

const totalPages = computed(() => Math.ceil(sortedProducts.value.length / itemsPerPage))
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return sortedProducts.value.slice(start, start + itemsPerPage)
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

const topVentes = computed(() => [...products.value].sort((a, b) => b.sales - a.sales).slice(0, 10))
const totalTopVentesPages = computed(() => Math.ceil(topVentes.value.length / 5))
const nouveautes = computed(() => products.value.filter(p => p.isNew).slice(0, 3))

const scrollTopVentes = (direction) => {
  const maxScroll = totalTopVentesPages.value - 1
  if (direction === 1 && topVentesScroll.value < maxScroll) topVentesScroll.value++
  if (direction === -1 && topVentesScroll.value > 0) topVentesScroll.value--
}

const viewCategory = (category) => {
  if (category === 'nouveautes') {
    showOnlyNew.value = true
    showOnlyPromos.value = false
    selectedCategories.value = []
  }
  if (category === 'meilleures') {
    sortBy.value = 'prix-desc'
  }
}

const resetFilters = () => {
  search.value = ''
  selectedCategories.value = []
  selectedBrands.value = []
  minPrice.value = 0
  maxPrice.value = 100000
  minRating.value = 0
  showOnlyPromos.value = false
  showOnlyNew.value = false
  currentPage.value = 1
  sortBy.value = 'nom'
}

const addToCart = (product) => {
  toastMessage.value = `${product.name} ajouté au panier`
  showToast.value = true
  setTimeout(() => { showToast.value = false }, 2000)
}

const viewProduct = (id) => { router.push(`/boutique/${id}`) }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes particle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

.animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
.animate-slowZoom { animation: slowZoom 20s ease-out infinite alternate; }
.animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
.animate-particle { animation: particle linear infinite; }

.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

input[type="range"] { -webkit-appearance: none; background: transparent; }
input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #E8D4AD; cursor: pointer; border: 2px solid #262B14; }

.group { animation: fadeInUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
</style>