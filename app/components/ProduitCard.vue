<template>
  <article
    class="group bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
  >
    <!-- IMAGE -->
    <div class="relative aspect-square bg-gray-100 overflow-hidden">
      <NuxtLink :to="`/boutique/${produit.id}`">
        <img
          :src="produit.image || '/placeholder.jpg'"
          :alt="produit.nom"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </NuxtLink>

      <div
        v-if="produit.promotion"
        class="absolute top-3 left-3 bg-[#8C6239] text-white text-xs px-2 py-1 rounded-md"
      >
        -{{ produit.promotion }}%
      </div>
    </div>

    <!-- CONTENU -->
    <div class="p-4 flex flex-col flex-grow">

      <span class="text-xs uppercase text-gray-500 mb-1">
        {{ produit.categorie }}
      </span>

      <h3 class="font-semibold text-sm mb-2 line-clamp-2 min-h-[40px]">
        {{ produit.nom }}
      </h3>

      <!-- PRIX -->
      <div class="flex items-center gap-2 mb-3">
        <span class="font-bold text-black">
          {{ formatPrice(produit.prix) }} FCFA
        </span>
        <span
          v-if="produit.originalPrice"
          class="line-through text-xs text-gray-400"
        >
          {{ formatPrice(produit.originalPrice) }} FCFA
        </span>
      </div>

      <!-- BOUTON -->
      <button
        class="mt-auto bg-[#8C6239] text-white py-2 rounded-lg text-sm hover:bg-[#9F6E45] transition"
      >
        Ajouter au panier
      </button>

    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  produit: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return price ? price.toLocaleString('fr-FR') : '0'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>