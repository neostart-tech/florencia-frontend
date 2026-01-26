<template>
  <NuxtLink
    :to="`/boutique/perruques/${perruque.slug}`"
    class="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden block"
  >
    <img
      :src="perruque.images[0]"
      alt=""
      class="w-full h-64 object-cover"
    />

    <div class="p-5">
      <h3 class="font-semibold text-gray-800">
        {{ perruque.nom }}
      </h3>

      <p class="text-pink-600 font-bold mt-2">
        {{ perruque.prix.toLocaleString() }} FCFA
      </p>

      <button
        class="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800"
      >
        Ajouter au panier
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  perruque: Object
})
</script>
