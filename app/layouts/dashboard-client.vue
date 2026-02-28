<template>
  <div class="min-h-screen bg-[#F8F6F3] flex">
    
    <!-- Sidebar -->
    <SidebarClient />

    <!-- Contenu -->
    <div class="flex-1 flex flex-col md:ml-72">
      
      <!-- Topbar -->
      <TopbarClient />

      <!-- Page content -->
      <main class="flex-1 p-6">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup>
import SidebarClient from '~/components/dashboard/SidebarClient.vue'
import TopbarClient from '~/components/dashboard/TopbarClient.vue'
</script>
