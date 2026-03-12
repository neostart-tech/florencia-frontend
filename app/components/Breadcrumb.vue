<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm text-gray-500">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="hover:text-gray-900 transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="font-medium text-gray-900">
          {{ item.label }}
        </span>
        <span
          v-if="index < items.length - 1"
          class="ml-2 text-gray-400"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>
