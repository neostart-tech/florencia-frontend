<template>
  <section
    class="relative w-full h-48 lg:h-56 bg-cover bg-center"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Contenu -->
    <div class="relative max-w-7xl mx-auto px-6 lg:px-16 h-full flex flex-col justify-center">

      <!-- Breadcrumb -->
      <nav class="text-sm lg:text-base font-[Raleway] text-white/80" aria-label="breadcrumb">
        <ol class="inline-flex items-center space-x-2 lg:space-x-3">
          <li
            v-for="(item, index) in breadcrumb"
            :key="index"
            class="inline-flex items-center hover:text-[#C3855D] transition"
          >
            <template v-if="item.href && index !== breadcrumb.length - 1">
              <NuxtLink :to="item.href" class="flex items-center">
                <svg v-if="index === 0" class="w-4 h-4 mr-1 text-[#C3855D]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 20V10H0L10 0l10 10h-10v10z"/>
                </svg>
                {{ item.label }}
              </NuxtLink>
            </template>

            <template v-else>
              <span class="font-semibold text-white">{{ item.label }}</span>
            </template>

            <!-- Separator sauf pour le dernier -->
            <span v-if="index < breadcrumb.length - 1" class="mx-2 text-white/50">/</span>
          </li>
        </ol>
      </nav>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Props dynamiques
const props = defineProps({
  breadcrumb: {
    type: Array,
    required: true
  },
  bgImage: {
    type: String,
    default: '/h.jpg'
  }
})

// Le titre de la page = dernier élément du breadcrumb
const pageTitle = computed(() => {
  return props.breadcrumb[props.breadcrumb.length - 1].label
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap');

.font-[EBGaramond] {
  font-family: 'EB Garamond', serif;
}

.font-[Raleway] {
  font-family: 'Raleway', sans-serif;
}
</style>
