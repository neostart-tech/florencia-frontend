<template>
  <div>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <!-- En-tête de section -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="font-['EBGaramond'] text-3xl md:text-4xl text-[#343434] mb-3">
          Nos univers beauté
        </h2>
        <div class="w-30 h-0.5 bg-[#9F6E45]/30 mx-auto"></div>
      </div>

      <!-- Grille des catégories -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        <NuxtLink v-for="category in categories" :key="category.name" :to="category.link" class="group relative block">
          <div
            class="relative bg-[#F3F3F3] rounded-xl p-6 md:p-8 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:-translate-y-1 border border-transparent group-hover:border-[#9F6E45]/20">
            <h3
              class="font-['Raleway'] text-base md:text-lg font-light text-center text-[#343434] group-hover:text-[#9F6E45] transition-colors duration-300">
              {{ category.name }}
            </h3>
            <div
              class="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-px bg-[#9F6E45]/50 transition-all duration-300 group-hover:w-8">
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center mt-10 md:mt-12">
        <NuxtLink to="/boutique"
          class="inline-flex items-center gap-2 font-['Raleway'] text-sm text-[#9F6E45] border-b border-[#9F6E45]/30 pb-0.5 hover:border-[#9F6E45] transition-all duration-300 group">
          <span>Explorer tous nos univers</span>
          <span class="text-lg transform group-hover:translate-x-1 transition-transform">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const categories = [
  { name: 'Perruques', link: '/boutique?category=perruques' },
  { name: 'Mèches', link: '/boutique?category=meches' },
  { name: 'Onglerie', link: '/boutique?category=onglerie' },
  { name: 'Cosmétiques', link: '/boutique?category=cosmetique' },
  { name: 'Nails', link: '/boutique?category=nails' }
]
</script>