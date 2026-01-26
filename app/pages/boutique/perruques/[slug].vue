<template>
  <section class="max-w-6xl mx-auto px-6 py-16">

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Images -->
      <div>
        <img
          :src="selectedImage"
          class="w-full rounded-2xl mb-4"
        />

        <div class="flex gap-4">
          <img
            v-for="img in perruque.images"
            :key="img"
            :src="img"
            @click="selectedImage = img"
            class="h-20 w-20 object-cover rounded-xl cursor-pointer border"
          />
        </div>
      </div>

      <!-- Infos -->
      <div>
        <h1 class="text-3xl font-bold">
          {{ perruque.nom }}
        </h1>

        <p class="text-pink-600 text-2xl font-bold mt-4">
          {{ perruque.prix.toLocaleString() }} FCFA
        </p>

        <p class="mt-6 text-gray-600">
          {{ perruque.description }}
        </p>

        <p
          class="mt-4 font-semibold"
          :class="perruque.stock > 0 ? 'text-green-600' : 'text-red-600'"
        >
          {{ perruque.stock > 0 ? 'En stock' : 'Rupture de stock' }}
        </p>

        <div class="mt-6 flex items-center gap-4">
          <input
            type="number"
            min="1"
            class="w-20 border rounded-lg px-3 py-2"
          />

          <button
            class="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
            :disabled="perruque.stock === 0"
          >
            Ajouter au panier
          </button>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { perruques } from '~/data/perruques'

const route = useRoute()

const perruque = perruques.find(
  p => p.slug === route.params.slug
)

const selectedImage = ref(perruque.images[0])
</script>
