<template>
  <div class="dashboard-container">
    <div class="welcome-section">
      <h1 class="welcome-title">Bienvenue Sophie !</h1>
      <p class="welcome-subtitle">Ravie de vous retrouver dans votre espace personnel</p>
    </div>
    <div class="stats-grid">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="stat-card"
        :style="{ borderTopColor: stat.color }"
      >
        <div class="stat-icon" :style="{ backgroundColor: stat.iconBg }">
          <component :is="stat.icon" class="w-5 h-5" :style="{ color: stat.color }" />
        </div>
        <div class="stat-content">
          <p class="stat-label">{{ stat.label }}</p>
          <p class="stat-value">{{ stat.value }}</p>
          <span v-if="stat.trend" class="stat-trend" :class="stat.trendPositive ? 'positive' : 'negative'">
            {{ stat.trend }}
          </span>
        </div>
      </div>
    </div>
    <div class="dashboard-grid">
      <div class="dashboard-card orders-card">
        <div class="card-header">
          <h2 class="card-title">Commandes récentes</h2>
          <NuxtLink to="/dashboard-client/commandes" class="card-link"> Voir tout → </NuxtLink>
        </div>
        <div class="orders-list">
          <div v-for="order in recentOrders" :key="order.id" class="order-item">
            <div class="order-info">
              <span class="order-number">Commande #{{ order.id }}</span>
              <span class="order-date">{{ order.date }}</span>
            </div>
            <div class="order-status" :class="order.status">
              {{ order.statusText }}
            </div>
            <div class="order-amount">{{ order.amount }}</div>
          </div>
        </div>
      </div>
      <div class="dashboard-card appointments-card">
        <h2 class="card-title">Rendez-vous</h2>
        <div class="appointments-list">
          <div v-for="appointment in myAppointments" :key="appointment.id" class="appointment-item">
            <div class="appointment-info">
              <span class="appointment-service">{{ appointment.service }}</span>
              <span class="appointment-date">{{ appointment.date }} à {{ appointment.time }}</span>
            </div>
            <div class="appointment-status" :class="appointment.status">
              {{ appointment.statusText }}
            </div>
            <div class="appointment-prestataire">{{ appointment.prestataire }}</div>
          </div>
        </div>
        <div class="appointment-footer">
          <NuxtLink to="/dashboard-client/rendez-vous" class="appointment-link">Voir tous mes rendez-vous →</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({ layout: 'dashboard-client' })
// Icônes simples (vous pouvez les remplacer par des icônes réelles)
const ShoppingBagIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' }
const StarIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' }
const HeartIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' }
const CalendarIcon = { template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' }

const stats = [
  {
    label: 'Commandes',
    value: 12,
    icon: ShoppingBagIcon,
    color: '#8C6239',
    iconBg: 'rgba(140, 98, 57, 0.1)',
    trend: '+3 cette semaine',
    trendPositive: true
  },
  {
    label: 'Rendez-vous',
    value: 8,
    icon: CalendarIcon,
    color: '#B17951',
    iconBg: 'rgba(177, 121, 81, 0.1)',
    trend: '+2 cette semaine',
    trendPositive: true
  },
  {
    label: 'Favoris',
    value: 5,
    icon: HeartIcon,
    color: '#C3855D',
    iconBg: 'rgba(195, 133, 93, 0.1)',
    trend: '2 nouveaux'
  },
  {
    label: 'Avis',
    value: 8,
    icon: StarIcon,
    color: '#D69069',
    iconBg: 'rgba(214, 144, 105, 0.1)',
    trend: '75% positifs',
    trendPositive: true
  },
]

const recentOrders = [
  { id: '2024-001', date: '12 mars 2024', status: 'delivered', statusText: 'Livrée', amount: '45000 FCFA' },
  { id: '2024-002', date: '8 mars 2024', status: 'processing', statusText: 'En cours', amount: '32800 FCFA' },
  { id: '2024-003', date: '1 mars 2024', status: 'delivered', statusText: 'Livrée', amount: '78200 FCFA' },
  { id: '2024-004', date: '25 fév 2024', status: 'delivered', statusText: 'Livrée', amount: '23900 FCFA' },
]

const myAppointments = [
  { id: '2024-001', service: 'Manucure complète', date: '15 mars', time: '14h30', status: 'confirmed', statusText: 'Confirmé', prestataire: 'Marie' },
  { id: '2024-002', service: 'Pédicure', date: '18 mars', time: '10h00', status: 'confirmed', statusText: 'Confirmé', prestataire: 'Sophie' },
  { id: '2024-003', service: 'Pose perruque', date: '20 mars', time: '16h00', status: 'pending', statusText: 'En attente', prestataire: 'Julie' },
  { id: '2024-004', service: 'Soin visage', date: '22 mars', time: '09h30', status: 'confirmed', statusText: 'Confirmé', prestataire: 'Amélie' },
]

const wishlistItems = [
  { id: 1, name: 'Café Grand Cru', price: '12900 FCFA', image: '/images/cafe-1.jpg' },
  { id: 2, name: 'Mug en céramique', price: '24500 FCFA', image: '/images/mug-1.jpg' },
  { id: 3, name: 'Grains d\'Éthiopie', price: '15800 FCFA', image: '/images/cafe-2.jpg' },
]

const recentReviews = [
  { id: 1, product: 'Café Grand Cru', rating: 5, comment: 'Excellent café, arôme intense !', date: 'Il y a 3 jours' },
  { id: 2, product: 'Mug Voyage', rating: 4, comment: 'Très beau design, contenance parfaite.', date: 'Il y a 1 semaine' },
]

const recommendations = [
  { id: 1, name: 'Café Bio Pérou', price: '14900 FCFA', image: '/images/cafe-3.jpg' },
  { id: 2, name: 'Machine espresso', price: '299000 FCFA', image: '/images/machine.jpg' },
  { id: 3, name: 'Tasse à café', price: '19900 FCFA', image: '/images/tasse.jpg' },
  { id: 4, name: 'Moulin à café', price: '89000 FCFA', image: '/images/moulin.jpg' }, 
]
</script>
<style scoped>
.dashboard-container {
  font-family: 'EB Garamond', serif;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #F3F3F3;
  min-height: 100vh;
}
/* En-tête */
.welcome-section {
  margin-bottom: 2.5rem;
}
.welcome-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #343434;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}
.welcome-subtitle {
  font-size: 1.1rem;
  color: #676767;
  font-style: italic;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-top: 4px solid;
  transition: transform 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-2px);
}
.stat-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.stat-content {
  flex: 1;
}
.stat-label {
  font-size: 0.9rem;
  color: #676767;
  margin-bottom: 0.25rem;
}
.stat-value {
  font-size: 1.8rem;
  font-weight: 600;
  color: #343434;
  line-height: 1.2;
  margin-bottom: 0.25rem;
}
.stat-trend {
  font-size: 0.85rem;
  color: #676767;
}
.stat-trend.positive {
  color: #8C6239;
}
.stat-trend.negative {
  color: #9B9B9B;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.dashboard-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #343434;
}
.card-link {
  font-size: 0.95rem;
  color: #8C6239;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;
}
.card-link:hover {
  color: #B17951;
}
/* Commandes */
.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E7E7E7;
}
.order-item:last-child {
  border-bottom: none;
}
.order-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.order-number {
  font-weight: 500;
  color: #343434;
}
.order-date {
  font-size: 0.85rem;
  color: #9B9B9B;
}
.order-status {
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
}
.order-status.delivered {
  background: rgba(140, 98, 57, 0.1);
  color: #8C6239;
}
.order-status.processing {
  background: rgba(177, 121, 81, 0.1);
  color: #B17951;
}
.order-amount {
  font-weight: 600;
  color: #343434;
}
/* Rendez-vous */
.appointments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.appointment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E7E7E7;
}
.appointment-item:last-child {
  border-bottom: none;
}
.appointment-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.appointment-service {
  font-weight: 500;
  color: #343434;
}
.appointment-date {
  font-size: 0.85rem;
  color: #9B9B9B;
}
.appointment-status {
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
}
.appointment-status.confirmed {
  background: rgba(140, 98, 57, 0.1);
  color: #8C6239;
}
.appointment-status.pending {
  background: rgba(177, 121, 81, 0.1);
  color: #B17951;
}
.appointment-prestataire {
  font-size: 0.9rem;
  color: #8C6239;
  font-style: italic;
}
.appointment-footer {
  text-align: center;
  margin-top: 1rem;
}
.appointment-link {
  font-size: 0.95rem;
  color: #8C6239;
  text-decoration: none;
  transition: color 0.2s;
}
.appointment-link:hover {
  color: #B17951;
}
/* Wishlist */
.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.wishlist-item {
  text-align: center;
}
.wishlist-image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.75rem;
  background: #F3F3F3;
  margin-bottom: 0.5rem;
  object-fit: cover;
}
.wishlist-name {
  font-size: 0.95rem;
  color: #343434;
  margin-bottom: 0.25rem;
}
.wishlist-price {
  font-size: 0.9rem;
  color: #8C6239;
  font-weight: 500;
}
/* Avis */
.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.review-item {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #E7E7E7;
}
.review-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.review-product {
  font-weight: 500;
  color: #343434;
}
.review-rating {
  display: flex;
  gap: 0.25rem;
}
.star {
  color: #DADADA;
  font-size: 1.1rem;
}
.star.filled {
  color: #8C6239;
}
.review-comment {
  font-size: 0.95rem;
  color: #676767;
  font-style: italic;
  margin-bottom: 0.5rem;
}
.review-date {
  font-size: 0.85rem;
  color: #9B9B9B;
}
.recommendations-section {
  margin-top: 2.5rem;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343434;
  margin-bottom: 1.5rem;
}
.recommendations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.product-card {
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
}
.product-image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.75rem;
  background: #F3F3F3;
  margin-bottom: 1rem;
  object-fit: cover;
}
.product-name {
  font-size: 1rem;
  color: #343434;
  margin-bottom: 0.5rem;
}
.product-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: #8C6239;
  margin-bottom: 1rem;
}
.product-button {
  width: 100%;
  padding: 0.6rem;
  background: #8C6239;
  color: white;
  border: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}
.product-button:hover {
  background: #B17951;
}
/* Responsive */
@media (max-width: 1024px) {
  .stats-grid,
  .recommendations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
 
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .dashboard-container {
    padding: 1rem;
  }
 
  .stats-grid {
    grid-template-columns: 1fr;
  }
 
  .wishlist-grid {
    grid-template-columns: 1fr;
  }
}
</style>