<template>
  <div class="min-h-screen flex flex-col bg-gray-50 relative pb-20 md:pb-0">
    <!-- Header global -->
    <Header />

    <!-- Contenu dynamique -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Footer global -->
    <Footer />

    <!-- Navigation mobile moderne -->
    <BottomNavbar />
  </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import BottomNavbar from '@/components/layout/BottomNavbar.vue'
</script>

<style scoped>
/* Les animations ont été déplacées dans les composants spécifiques si nécessaire */
</style>
