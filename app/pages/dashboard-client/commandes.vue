<template>
  <div class="orders-container">
    <!-- En-tête -->
    <div class="page-header">
      <div>
        <h1 class="page-title">Mes commandes</h1>
        <p class="page-subtitle">Suivez et gérez l'historique de vos achats</p>
      </div>
      
      <!-- Statistique rapide -->
      <div class="stats-pill">
        <span class="stats-pill-label">Total dépensé</span>
        <span class="stats-pill-value">200000 FCFA</span>
      </div>
    </div>

    <div class="filters-section">
      <div class="search-wrapper">
        <span class="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher une commande..."
          class="search-input"
        >
        <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div class="filter-tabs">
        <button
          v-for="filter in orderFilters"
          :key="filter.value"
          @click="selectedFilter = filter.value"
          class="filter-tab"
          :class="{ 'active': selectedFilter === filter.value }"
        >
          {{ filter.label }}
          <span v-if="filter.count" class="filter-count">{{ filter.count }}</span>
        </button>
      </div>
    </div>

    <!-- Liste des commandes -->
    <div class="orders-list">
      <TransitionGroup name="list" tag="div" class="space-y-4">
        <article
          v-for="order in filteredOrders"
          :key="order.id"
          class="order-card"
          @click="openOrderDetails(order)"
        >
          <!-- En-tête de la carte -->
          <div class="order-card-header">
            <div class="order-main-info">
              <div class="order-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C6239" stroke-width="1.8">
                  <rect x="3" y="7" width="18" height="14" rx="2"/>
                  <path d="M16 3L20 7 16 11"/>
                  <path d="M8 3L4 7 8 11"/>
                </svg>
              </div>
              <div>
                <div class="order-id-row">
                  <h3 class="order-id">{{ order.id }}</h3>
                  <span class="order-status" :class="order.status.toLowerCase().replace(' ', '-')">
                    {{ order.status }}
                  </span>
                  <span v-if="order.isUrgent" class="urgent-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B17951" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <circle cx="12" cy="16" r="1" fill="#B17951"/>
                    </svg>
                    Urgent
                  </span>
                </div>
                <div class="order-meta">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {{ order.date }}
                  </span>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {{ order.time }}
                  </span>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    {{ order.items.length }} article{{ order.items.length > 1 ? 's' : '' }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="order-total">
              <span class="total-label">Total</span>
              <span class="total-value">{{ order.total.toFixed(0) }} FCFA</span>
            </div>
          </div>

          <!-- Aperçu des produits -->
          <div class="order-products">
            <div v-for="(item, index) in order.items.slice(0, 4)" :key="index" class="product-chip">
              <img :src="item.image" :alt="item.name" class="product-chip-image">
              <span class="product-chip-name">{{ item.name }}</span>
            </div>
            <div v-if="order.items.length > 4" class="product-chip more">
              +{{ order.items.length - 4 }}
            </div>
          </div>

          <!-- Barre de progression (si commande en cours) -->
          <div v-if="order.status === 'En cours' || order.status === 'Expédiée'" class="progress-section">
            <div class="progress-steps">
              <span :class="{ 'completed': order.progress >= 25 }">Préparation</span>
              <span :class="{ 'completed': order.progress >= 75 }">Livraison</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: order.progress + '%' }"></div>
            </div>
            <span class="progress-percent">{{ order.progress }}%</span>
          </div>
        </article>
      </TransitionGroup>

      <!-- Message si aucune commande -->
      <div v-if="filteredOrders.length === 0" class="empty-state">
        <span class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" stroke-width="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </span>
        <h3>Aucune commande trouvée</h3>
        <p>Essayez de modifier vos filtres ou effectuez une nouvelle recherche</p>
      </div>
    </div>

    <!-- Modal des détails -->
    <Transition name="modal">
      <div v-if="selectedOrder" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <!-- En-tête modal -->
          <div class="modal-header">
            <div>
              <h2 class="modal-title">Détails de la commande</h2>
              <p class="modal-subtitle">{{ selectedOrder.id }} · {{ selectedOrder.date }}</p>
            </div>
            <button @click="closeModal" class="modal-close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <!-- Statut et actions rapides -->
            <div class="status-bar">
              <span class="order-status large" :class="selectedOrder.status.toLowerCase().replace(' ', '-')">
                {{ selectedOrder.status }}
              </span>
              <div class="action-buttons">
                <button class="action-button">
                  <span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M4 4v16h16V4H4z"/>
                      <path d="M8 8h8M8 12h6M8 16h4"/>
                    </svg>
                  </span>
                  Facture
                </button>
                <button class="action-button primary">
                  <span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M3 12h4l3-9 4 18 3-9h4"/>
                    </svg>
                  </span>
                  Commander à nouveau
                </button>
              </div>
            </div>

            <!-- Adresse  -->
            <div class="addresses-grid">
              <div class="address-card">
                <div class="address-header">
                  <span class="address-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C6239" stroke-width="1.8">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M12 8v4M12 16h.01"/>
                    </svg>
                  </span>
                  <h4>Adresse de livraison</h4>
                </div>

                <p>{{ selectedOrder.shippingAddress.name }}</p>
                <p>{{ selectedOrder.shippingAddress.street }}</p>
                <p>{{ selectedOrder.shippingAddress.city }}</p>
                <p class="address-phone">{{ selectedOrder.shippingAddress.phone }}</p>
              </div>
            </div>

            <!-- Liste des produits -->
            <div class="products-section">
              <h4 class="section-title">Articles ({{ selectedOrder.items.length }})</h4>
              
              <div class="products-list">
                <div v-for="(item, index) in selectedOrder.items" :key="index" class="product-item">
                  <img :src="item.image" :alt="item.name" class="product-image">
                  <div class="product-details">
                    <div class="product-info">
                      <h5>{{ item.name }}</h5>
                      <p>{{ item.category }}</p>
                    </div>
                    <div class="product-variants">
                      <span class="variant-badge">{{ item.size }}</span>
                      <span class="variant-badge">Qté: {{ item.quantity }}</span>
                    </div>
                  </div>
                  <div class="product-price">
                    <span class="price-total">{{ (item.price * item.quantity).toFixed(0) }} FCFA</span>
                    <span class="price-unit">{{ item.price.toFixed(0) }} FCFA/pièce</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Récapitulatif -->
            <div class="summary-section">
              <h4 class="section-title">Récapitulatif</h4>
              
              <div class="summary-lines">
                <div class="summary-line">
                  <span>Sous-total</span>
                  <span>{{ selectedOrder.subtotal.toFixed(0) }} FCFA</span>
                </div>
                <div class="summary-line">
                  <span>Livraison</span>
                  <span>{{ selectedOrder.shippingCost.toFixed(0) }} FCFA</span>
                </div>
                <div v-if="selectedOrder.discount" class="summary-line discount">
                  <span>Réduction</span>
                  <span>-{{ selectedOrder.discount.toFixed(0) }} FCFA</span>
                </div>
                <div class="summary-line total">
                  <span>Total</span>
                  <span>{{ selectedOrder.total.toFixed(0) }} FCFA</span>
                </div>
              </div>

              <div class="payment-info">
                <span class="payment-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C6239" stroke-width="1.8">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                    <circle cx="16" cy="15" r="1" fill="#8C6239"/>
                  </svg>
                </span>
                <div>
                  <p class="payment-method">{{ selectedOrder.paymentMethod }}</p>
                  <p class="payment-status">{{ selectedOrder.paymentStatus }}</p>
                </div>
                <span class="payment-badge">Payé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'dashboard-client' })

import { ref, computed } from 'vue'

// État
const selectedFilter = ref('all')
const searchQuery = ref('')
const selectedOrder = ref(null) 

// Filtres
const orderFilters = [
  { label: 'Toutes', value: 'all', count: 8 },
  { label: 'En cours', value: 'pending', count: 2 },
  { label: 'Livrées', value: 'delivered', count: 5 },
]

// Données mockées
const orders = ref([
  {
    id: '#CMD-2024-001',
    date: '15 Juin 2024',
    time: '14:30',
    status: 'Livrée',
    total: 18000,
    subtotal: 15000,
    shippingCost: 3000,
    discount: 0,
    items: [
    { 
      name: 'Lunettes de Soleil',
      category: 'Accessoires',
      price: 3500,
      quantity: 1,
      size: '50ml',
      image: '/images/lunettes.jpg'
    },
    { 
      name: 'Sérum Éclat',
      category: 'Traitement',
      price: 8000,
      quantity: 1,
      size: '30ml',
      image: '/images/serum.jpg'
    },
  ],

    shippingAddress: {
      name: 'Sophie Martin',
      street: '15 Rue de la Paix',
      city: '10001 Paris',
      phone: '92 00 00 00 00'
    },
    billingAddress: {
      name: 'Sophie Martin',
      street: '15 Rue de la Paix',
      city: '1000 Bruxelles',
      phone: '92 00 00 00 00'
    },
    paymentMethod: 'Carte bancaire',
    paymentStatus: 'Payé le 15/06/2024'
  },
  {
    id: '#CMD-2024-002',
    date: '10 Juin 2024',
    time: '09:15',
    status: 'En cours',
    total: 14000,
    subtotal: 12000,
    shippingCost: 2000,
    discount: 0,
    progress: 45,
    items: [
    { 
      name: 'Coffret Découverte',
      category: 'Coffret',
      price: 2000,
      quantity: 1,
      size: '5 pièces',
      image: '/images/crème.jpg'
    },
    { 
      name: 'Huile Corporelle',
      category: 'Corps',
      price: 2000,
      quantity: 2,
      size: '200ml',
      image: '/images/huile.jpg'
    },
  ],

    shippingAddress: {
      name: 'Sophie Martin',
      street: '15 Rue de la Paix',
      city: '1000 Bruxelles',
      phone: '92 00 00 00 00'
    },
    billingAddress: {
      name: 'Sophie Martin',
      street: '15 Rue de la Paix',
      city: '1000 Bruxelles',
      phone: '92 00 00 00 00'
    },
    paymentMethod: 'Semoa',
    paymentStatus: 'Payé le 10/06/2024'
  },
  {
    id: '#CMD-2024-003',
    date: '5 Juin 2024',
    time: '16:45',
    status: 'Livrée',
    total: 15000,
    subtotal: 12000,
    shippingCost: 3000,
    discount: 0,
    progress: 75,
    items: [
    { 
      name: 'Baume à Lèvres',
      category: 'Lèvres',
      price: 7000,
      quantity: 2,
      size: '15g',
      image: '/images/crème.jpg'
    },
    { 
      name: 'Masque Cheveux',
      category: 'Capillaire',
      price: 18000,
      quantity: 1,
      size: '200ml',
      image: '/images/huile.jpg'
    },
  ],

    shippingAddress: {
      name: 'Sophie Martin',
      street: '15 Rue de la Paix',
      city: '1000 Bruxelles',
      phone: '92 00 00 00 00'
    },
    billingAddress: {
      name: 'Sophie Martin',
      street: '15 Rue de la Paix',
      city: '1000 Bruxelles',
      phone: '92 00 00 00 00'
    },
    paymentMethod: 'Carte bancaire',
    paymentStatus: 'Payé le 05/06/2024'
  }
])

// Filtrage
const filteredOrders = computed(() => {
  let filtered = orders.value

  if (selectedFilter.value !== 'all') {
    const statusMap = {
      'pending': 'En cours',
      'delivered': 'Livrée',
      'shipped': 'Expédiée'
    }
    filtered = filtered.filter(order => order.status === statusMap[selectedFilter.value])
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(order =>
      order.id.toLowerCase().includes(query) ||
      order.items.some(item => item.name.toLowerCase().includes(query))
    )
  }

  return filtered
})

// Méthodes
const openOrderDetails = (order) => {
  selectedOrder.value = order
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedOrder.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.orders-container {
  font-family: 'EB Garamond', serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #F3F3F3;
  min-height: 100vh;
}

/* En-tête */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #343434;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #676767;
  font-style: italic;
}

.stats-pill {
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stats-pill-label {
  font-size: 0.9rem;
  color: #9B9B9B;
}

.stats-pill-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #8C6239;
  line-height: 1.2;
}

/* Filtres */
.filters-section {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-wrapper {
  position: relative;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9B9B9B;
}

.search-input {
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 1px solid #E7E7E7;
  border-radius: 2rem;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  background: white;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #8C6239;
  box-shadow: 0 0 0 3px rgba(140, 98, 57, 0.1);
}

.clear-search {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9B9B9B;
  cursor: pointer;
  padding: 0.25rem;
}

.clear-search:hover {
  color: #8C6239;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 0.5rem 1.25rem;
  border: 1px solid #E7E7E7;
  border-radius: 2rem;
  background: white;
  color: #676767;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-tab:hover {
  border-color: #8C6239;
  color: #8C6239;
}

.filter-tab.active {
  background: #8C6239;
  border-color: #8C6239;
  color: white;
}

.filter-count {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.125rem 0.375rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
}

/* Cartes commandes */
.order-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #E7E7E7;
}

.order-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(140, 98, 57, 0.1);
  border-color: #8C6239;
}

.order-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.order-main-info {
  display: flex;
  gap: 1rem;
}

.order-icon {
  width: 3rem;
  height: 3rem;
  background: #F3F3F3;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order-id-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.order-id {
  font-size: 1.2rem;
  font-weight: 600;
  color: #343434;
}

.order-status {
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-weight: 500;
}

.order-status.livrée {
  background: #E7E7E7;
  color: #343434;
}

.order-status.en-cours {
  background: rgba(140, 98, 57, 0.1);
  color: #8C6239;
}

.order-status.expédiée {
  background: rgba(177, 121, 81, 0.1);
  color: #B17951;
}

.urgent-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: #F3F3F3;
  border-radius: 1rem;
  color: #B17951;
}

.order-meta {
  display: flex;
  gap: 1.5rem;
  color: #9B9B9B;
  font-size: 0.95rem;
}

.order-meta span {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.order-total {
  text-align: right;
}

.total-label {
  display: block;
  font-size: 0.9rem;
  color: #9B9B9B;
  margin-bottom: 0.25rem;
}

.total-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343434;
}

/* Aperçu produits */
.order-products {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.product-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem 0.375rem 0.375rem;
  background: #F3F3F3;
  border-radius: 2rem;
}

.product-chip.more {
  background: #E7E7E7;
  color: #676767;
}

.product-chip-image {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.product-chip-name {
  font-size: 0.9rem;
  color: #343434;
}

/* Barre de progression */
.progress-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #E7E7E7;
}

.progress-steps {
  display: flex;
  gap: 2rem;
  font-size: 0.85rem;
  color: #9B9B9B;
}

.progress-steps span.completed {
  color: #8C6239;
}

.progress-bar {
  flex: 1;
  height: 0.375rem;
  background: #E7E7E7;
  border-radius: 1rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #8C6239, #C3855D);
  border-radius: 1rem;
  transition: width 0.3s;
}

.progress-percent {
  font-size: 0.9rem;
  font-weight: 500;
  color: #8C6239;
  min-width: 3rem;
  text-align: right;
}

/* État vide */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1rem;
  border: 1px solid #E7E7E7;
}

.empty-icon {
  display: block;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.3rem;
  color: #343434;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #9B9B9B;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 50;
}

.modal-content {
  background: white;
  border-radius: 1.5rem;
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
  position: sticky;
  top: 0;
  background: white;
  padding: 1.5rem;
  border-bottom: 1px solid #E7E7E7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343434;
  margin-bottom: 0.25rem;
}

.modal-subtitle {
  color: #9B9B9B;
}

.modal-close {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  background: #F3F3F3;
  color: #676767;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  background: #8C6239;
  color: white;
}

.modal-body {
  padding: 1.5rem;
}

/* Éléments du modal */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.order-status.large {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
}

.action-buttons {
  display: flex;
  gap: 0.75rem;
}

.action-button {
  padding: 0.6rem 1.2rem;
  border: 1px solid #E7E7E7;
  border-radius: 2rem;
  background: white;
  color: #676767;
  font-family: 'EB Garamond', serif;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.action-button.primary {
  background: #8C6239;
  border-color: #8C6239;
  color: white;
}

.action-button.primary:hover {
  background: #B17951;
  border-color: #B17951;
}

.action-button:hover:not(.primary) {
  border-color: #8C6239;
  color: #8C6239;
}

.addresses-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.address-card {
  padding: 1.25rem;
  background: #F9F9F9;
  border-radius: 1rem;
  border: 1px solid #E7E7E7;
}

.address-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.address-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.address-header h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #343434;
}

.address-card p {
  color: #676767;
  margin-bottom: 0.25rem;
}

.address-phone {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #8C6239;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #343434;
  margin-bottom: 1rem;
}

.products-list {
  border: 1px solid #E7E7E7;
  border-radius: 1rem;
  overflow: hidden;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #E7E7E7;
}

.product-item:last-child {
  border-bottom: none;
}

.product-image {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  object-fit: cover;
  background: #F3F3F3;
}

.product-details {
  flex: 1;
}

.product-info h5 {
  font-weight: 500;
  color: #343434;
  margin-bottom: 0.25rem;
}

.product-info p {
  font-size: 0.9rem;
  color: #9B9B9B;
}

.product-variants {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.variant-badge {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  background: #F3F3F3;
  border-radius: 1rem;
  color: #676767;
}

.product-price {
  text-align: right;
}

.price-total {
  display: block;
  font-weight: 600;
  color: #343434;
}

.price-unit {
  font-size: 0.85rem;
  color: #9B9B9B;
}

.summary-section {
  margin-top: 2rem;
}

.summary-lines {
  background: #F9F9F9;
  padding: 1.25rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: #676767;
}

.summary-line.discount {
  color: #8C6239;
}

.summary-line.total {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #E7E7E7;
  font-weight: 600;
  color: #343434;
  font-size: 1.1rem;
}

.payment-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #F9F9F9;
  border-radius: 1rem;
  border: 1px solid #E7E7E7;
}

.payment-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-method {
  font-weight: 500;
  color: #343434;
  margin-bottom: 0.25rem;
}

.payment-status {
  font-size: 0.9rem;
  color: #9B9B9B;
}

.payment-badge {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  background: rgba(140, 98, 57, 0.1);
  color: #8C6239;
  border-radius: 2rem;
  font-size: 0.85rem;
}

/* Animations */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .orders-container {
    padding: 1rem;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .stats-pill {
    width: 100%;
    align-items: flex-start;
  }

  .order-card-header {
    flex-direction: column;
    gap: 1rem;
  }

  .order-total {
    text-align: left;
    width: 100%;
  }

  .progress-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .addresses-grid {
    grid-template-columns: 1fr;
  }

  .product-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-price {
    text-align: left;
    width: 100%;
  }
}
</style>