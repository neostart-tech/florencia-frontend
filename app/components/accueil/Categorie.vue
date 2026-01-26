<template>
    <!-- Catégories -->
<section class="max-w-7xl mx-auto px-10 lg:px-16 py-28 bg-white">
  <h2 class="font-[EBGaramond] text-4xl text-[#343434] mb-16 text-center">
    Nos univers beauté
  </h2>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
    
    <NuxtLink to="/boutique?category=perruques" class="group">
      <div class="relative overflow-hidden rounded-2xl">
        <img src="/categories/perruques.jpg" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
      <p class="mt-4 font-[Raleway] text-center tracking-wide text-[#343434] group-hover:text-[#9F6E45] transition">
        Perruques
      </p>
    </NuxtLink>

    <NuxtLink to="/boutique?category=meches" class="group">
      <div class="relative overflow-hidden rounded-2xl">
        <img src="/categories/meches.jpg" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
      <p class="mt-4 font-[Raleway] text-center tracking-wide text-[#343434] group-hover:text-[#9F6E45] transition">
        Mèches
      </p>
    </NuxtLink>

    <NuxtLink to="/boutique?category=onglerie" class="group">
      <div class="relative overflow-hidden rounded-2xl">
        <img src="/categories/onglerie.jpg" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
      <p class="mt-4 font-[Raleway] text-center tracking-wide text-[#343434] group-hover:text-[#9F6E45] transition">
        Onglerie
      </p>
    </NuxtLink>

    <NuxtLink to="/boutique?category=cosmetique" class="group">
      <div class="relative overflow-hidden rounded-2xl">
        <img src="/categories/cosmetique.jpg" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
      <p class="mt-4 font-[Raleway] text-center tracking-wide text-[#343434] group-hover:text-[#9F6E45] transition">
        Cosmétiques
      </p>
    </NuxtLink>

    <NuxtLink to="/boutique?category=nails" class="group">
      <div class="relative overflow-hidden rounded-2xl">
        <img src="/categories/nails.jpg" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>
      <p class="mt-4 font-[Raleway] text-center tracking-wide text-[#343434] group-hover:text-[#9F6E45] transition">
        Nails
      </p>
    </NuxtLink>

  </div>
</section>

</template>