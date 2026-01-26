<template>
    <Breadcrumb :breadcrumb="breadcrumbItems" bgImage="/h.jpg" />
  <div class="min-h-screen bg-[#F3F3F3]">

    <!-- TITRE -->
    <div class="max-w-5xl mx-auto px-5 py-8">
      <h1 class="text-2xl font-serif text-[#343434]">
        Finaliser ma commande
      </h1>
    </div>

    <!-- CONTENU -->
    <div class="max-w-5xl mx-auto px-5 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">

      <!-- FORMULAIRE -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">

        <!-- CLIENT -->
        <h2 class="text-lg font-semibold text-[#343434] mb-4">
          Informations client
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input class="input" placeholder="Nom" />
          <input class="input" placeholder="Prénom" />
          <input class="input md:col-span-2" placeholder="Adresse email" />
          <input class="input md:col-span-2" placeholder="Téléphone" />
        </div>

        <!-- ADRESSE -->
        <h2 class="text-lg font-semibold text-[#343434] mb-4">
          Adresse de livraison
        </h2>

        <div class="grid grid-cols-1 gap-4 mb-6">
          <input class="input" placeholder="Adresse complète" />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input class="input" placeholder="Ville" />
            <input class="input" placeholder="Pays" />
          </div>
        </div>

        <!-- PAIEMENT -->
        <h2 class="text-lg font-semibold text-[#343434] mb-4">
          Mode de paiement
        </h2>

        <div class="space-y-3">
          <label class="payment-option">
            <input
              type="radio"
              value="Paiement à la livraison"
              v-model="selectedPayment"
            />
            <span>Paiement à la livraison</span>
          </label>

          <label class="payment-option">
            <input
              type="radio"
              value="Semoa"
              v-model="selectedPayment"
            />
            <span>Semoa</span>
          </label>

          <label class="payment-option">
            <input
              type="radio"
              value="Carte bancaire (Stripe)"
              v-model="selectedPayment"
            />
            <span>Carte bancaire (Stripe)</span>
          </label>
        </div>
      </div>

      <!-- RÉCAPITULATIF -->
      <div class="bg-white rounded-lg shadow-sm p-6 h-fit">

        <h2 class="text-lg font-semibold mb-4 text-[#343434]">
          Récapitulatif
        </h2>

        <!-- PRODUITS -->
        <div class="space-y-3 mb-4">
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between text-sm"
          >
            <span class="max-w-[70%]">
              {{ item.name }}
              <span class="text-[#676767]">× {{ item.quantity }}</span>
            </span>
            <span>{{ format(item.price * item.quantity) }}</span>
          </div>
        </div>

        <!-- SOUS TOTAL -->
        <div class="flex justify-between text-sm mb-3">
          <span>Sous-total</span>
          <span>{{ format(subtotal) }}</span>
        </div>

        <!-- LIVRAISON -->
        <div class="flex justify-between items-start text-sm mb-4">
          <span class="font-medium">Livraison</span>
          <span class="text-xs text-[#676767] text-right max-w-[60%]">
            Saisissez votre adresse pour afficher le prix de la livraison.
          </span>
        </div>

        <!-- TOTAL -->
        <div class="border-t pt-3 flex justify-between font-semibold">
          <span>Total</span>
          <span>{{ format(total) }}</span>
        </div>

        <!-- MODE DE PAIEMENT (DYNAMIQUE) -->
        <div class="mt-5 border-t pt-4">
          <p class="text-sm font-medium mb-1">
            Mode de paiement sélectionné
          </p>
          <p class="text-sm text-[#676767]">
            {{ selectedPayment }}
          </p>
        </div>

        <button
          class="cursor-pointer mt-6 w-full bg-[#9F6E45] text-white py-3 rounded-full
                 text-sm tracking-wide hover:opacity-90 transition"
        >
          Confirmer la commande
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Panier', href: '/panier' },
  { label: 'Commande' }
]

const cart = ref([
  {
    id: 1,
    name: 'Perruque Lace Front Naturelle – Couleur #4',
    price: 10750,
    quantity: 1
  },
  {
    id: 2,
    name: 'Vernis à Ongles Rose Passion – 15ml',
    price: 10750,
    quantity: 2
  }
])

const selectedPayment = ref('Paiement à la livraison')

const subtotal = computed(() =>
  cart.value.reduce((t, i) => t + i.price * i.quantity, 0)
)

const shipping = 0
const total = computed(() => subtotal.value + shipping)

const format = (v) =>
  v.toLocaleString('fr-FR') + ' CFA'
</script>

<style scoped>
.input {
  border: 1px solid #dadada;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;
}

.input:focus {
  outline: none;
  border-color: #9F6E45;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid #dadada;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
}

.payment-option:hover {
  border-color: #9F6E45;
}

.payment-option input {
  accent-color: #9F6E45;
}
</style>
