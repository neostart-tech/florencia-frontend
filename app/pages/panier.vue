<template>
  <Breadcrumb :breadcrumb="breadcrumbItems" bgImage="/h.jpg" />

  <div class="min-h-screen bg-[#F3F3F3]">
    <!-- TITRE -->
    <div class="max-w-5xl mx-auto px-5 py-8">
      <h1 class="text-2xl font-serif text-[#343434]">
        Mon panier
      </h1>
    </div>

    <div class="max-w-5xl mx-auto px-5 pb-16">
      <div class="bg-white rounded-lg shadow-sm p-5">

        <!-- PANIER VIDE -->
        <div
          v-if="cart.length === 0"
          class="py-12 text-center text-[#676767] text-sm"
        >
          Votre panier est actuellement vide.
        </div>

        <!-- PANIER REMPLI -->
        <template v-else>

          <!-- ================= DESKTOP TABLE ================= -->
          <div class="hidden md:block overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="text-xs text-[#676767] border-b">
                  <th class="text-left font-semibold pb-3">PRODUIT</th>
                  <th class="text-center font-semibold pb-3 w-28">PRIX</th>
                  <th class="text-center font-semibold pb-3 w-36">QUANTITÉ</th>
                  <th class="text-right font-semibold pb-3 w-32">SOUS-TOTAL</th>
                  <th class="w-10"></th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="item in cart"
                  :key="item.id"
                  class="border-b last:border-0"
                >
                  <!-- PRODUIT -->
                  <td class="py-4">
                    <div class="flex items-center gap-3">
                      <img
                        :src="item.image"
                        class="w-14 h-14 rounded-md object-cover border"
                      />
                      <p class="text-sm text-[#343434] leading-snug max-w-[260px]">
                        {{ item.name }}
                      </p>
                    </div>
                  </td>

                  <!-- PRIX -->
                  <td class="text-center text-sm text-[#343434]">
                    {{ format(item.price) }}
                  </td>

                  <!-- QUANTITÉ -->
                  <td class="text-center">
                    <div class="inline-flex items-center border rounded-full">
                      <button
                        @click="decrease(item)"
                        class="px-3 py-1 cursor-pointer hover:text-[#9F6E45]"
                      >
                        −
                      </button>
                      <span class="px-3 text-sm">
                        {{ item.quantity }}
                      </span>
                      <button
                        @click="increase(item)"
                        class="px-3 py-1 cursor-pointer hover:text-[#9F6E45]"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <!-- SOUS TOTAL -->
                  <td class="text-right text-sm font-medium text-[#343434]">
                    {{ format(item.price * item.quantity) }}
                  </td>

                  <!-- SUPPRIMER -->
                  <td class="text-center">
                    <button
                      @click="removeItem(item.id)"
                      class="cursor-pointer text-[#9B9B9B] hover:text-red-500 transition"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ================= MOBILE (CARTE) ================= -->
          <div class="md:hidden space-y-4">
            <div
              v-for="item in cart"
              :key="item.id"
              class="border rounded-lg p-4"
            >
              <div class="flex gap-4">
                <img
                  :src="item.image"
                  class="w-16 h-16 rounded-md object-cover border"
                />

                <div class="flex-1">
                  <p class="text-sm font-medium mb-1">
                    {{ item.name }}
                  </p>

                  <p class="text-sm text-[#676767] mb-2">
                    Prix : {{ format(item.price) }}
                  </p>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center border rounded-full">
                      <button
                        @click="decrease(item)"
                        class="px-3 py-1 cursor-pointer"
                      >
                        −
                      </button>
                      <span class="px-3 text-sm">
                        {{ item.quantity }}
                      </span>
                      <button
                        @click="increase(item)"
                        class="px-3 py-1 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      @click="removeItem(item.id)"
                      class="cursor-pointer text-red-500"
                    >
                      ✕
                    </button>
                  </div>

                  <p class="text-right text-sm font-medium mt-2">
                    {{ format(item.price * item.quantity) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- TOTAL -->
          <div class="mt-10 flex justify-end">
            <div class="bg-[#F3F3F3] rounded-lg p-5 w-full md:w-80">
              <div class="flex justify-between text-sm mb-2">
                <span>Sous-total</span>
                <span>{{ format(subtotal) }}</span>
              </div>

              <div class="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>{{ format(total) }}</span>
              </div>

              <NuxtLink
                to="/commande"
                class="cursor-pointer mt-6 block w-full text-center
                       bg-[#9F6E45] text-white py-3 rounded-full
                       text-sm hover:bg-black transition"
              >
                Voir la commande
              </NuxtLink>
            </div>
          </div>

        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import Breadcrumb from '~/components/Breadcrumb.vue'

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Panier' }
]

const cartStore = useCartStore()

const cart = computed(() => cartStore.items)
const subtotal = computed(() => cartStore.subtotal)
const total = computed(() => subtotal.value)

const increase = (item) => cartStore.increase(item)
const decrease = (item) => cartStore.decrease(item)
const removeItem = (id) => cartStore.remove(id)

const format = (v) => v.toLocaleString('fr-FR') + ' CFA'
</script>
