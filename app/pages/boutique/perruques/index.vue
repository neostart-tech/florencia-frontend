<template>
  <section class="max-w-7xl mx-auto px-10 lg:px-16 py-12">

    <h1 class="text-2xl font-semibold text-[#8C6239] mb-5 font-[EBGaramond]">
    Nos Perruques
    </h1>

    <!-- Barre de recherche -->
    <input
    v-model="search"
    type="text"
    placeholder="Rechercher une perruque..."
    class="
        w-full md:w-1/3 mb-8 px-4 py-3
        border border-gray-700 rounded-xl
        font-[EBGaramond]
        placeholder:font-[EBGaramond]
        placeholder:text-gray-500
        focus:outline-none
        focus:border-[#8C6239]
        focus:ring-1 focus:ring-[#8C6239]"
    />

    <!-- Liste des perruques -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <PerruqueCard
        v-for="p in filteredPerruques"
        :key="p.id"
        :perruque="p" 
      />
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { perruques } from '~/data/perruques'
import PerruqueCard from '~/components/PerruqueCard.vue'

const search = ref('')

const filteredPerruques = computed(() => {
  return perruques.filter(p =>
    p.nom.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
