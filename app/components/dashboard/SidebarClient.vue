<template>
  <aside class="sidebar">
    <!-- Logo et marque -->
    <div class="sidebar-header">
      <div class="logo-wrapper">
        <h1 class="logo">Florencia</h1>
        <div class="logo-underline"></div>
      </div>
      <p class="client-tag">Espace Client</p>
    </div>

    <!-- Menu de navigation -->
    <nav class="sidebar-nav">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="nav-item"
        :class="{ 'active': route.path === item.to }"
      >
        <span class="nav-icon" v-html="item.icon"></span>
        <span class="nav-label">{{ item.label }}</span>
        <span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
      </NuxtLink>
    </nav>

    <!-- Pied de sidebar simplifié -->
    <div class="sidebar-footer">
      <div class="footer-content">
        <p class="copyright">© 2026 Florencia</p>
        <p class="rights">Tous droits réservés</p>
        <div class="footer-decoration"></div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from '#app'

const route = useRoute()

// Icônes SVG personnalisées
const menuItems = [
  { 
    to: '/dashboard-client', 
    label: 'Tableau de bord', 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="3" width="7" height="9" rx="1"/>
      <rect x="14" y="3" width="7" height="5" rx="1"/>
      <rect x="14" y="12" width="7" height="9" rx="1"/>
      <rect x="3" y="16" width="7" height="5" rx="1"/>
    </svg>`
  },
  { 
    to: '/dashboard-client/commandes', 
    label: 'Mes commandes', 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="3" y="7" width="18" height="14" rx="2"/>
      <path d="M16 3L20 7 16 11"/>
      <path d="M8 3L4 7 8 11"/>
    </svg>`,

  },
  { 
    to: '/dashboard-client/mes-rendez-vous', 
    label: 'Mes rendez-vous', 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M12 8v4"/>
      <path d="M12 16h.01"/>
    </svg>`
  },
  { 
    to: '/dashboard-client/adresses', 
    label: 'Mes adresses', 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`
  },

  { 
    to: '/dashboard-client/profil', 
    label: 'Mon profil', 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="8" r="4"/>
      <path d="M5 20v-2a7 7 0 0 1 14 0v2"/>
    </svg>`
  },

]
</script>

<style scoped>
.sidebar {
  font-family: 'EB Garamond', serif;
  width: 18rem;
  height: 100vh;
  position: fixed;
  inset: 0 0 0 0;
  background: white;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  z-index: 30;
}

/* En-tête avec logo */
.sidebar-header {
  padding: 2rem 1.5rem 1.5rem;
  border-bottom: 1px solid #E7E7E7;
}

.logo-wrapper {
  margin-bottom: 0.5rem;
}

.logo {
  font-size: 2rem;
  font-weight: 600;
  color: #8C6239;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.logo-underline {
  width: 2.5rem;
  height: 2px;
  background: linear-gradient(90deg, #8C6239, #D69069);
  border-radius: 2px;
}

.client-tag {
  font-size: 0.9rem;
  color: #9B9B9B;
  font-style: italic;
}

/* Navigation */
.sidebar-nav {
  flex: 1;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  border-radius: 1rem;
  color: #676767;
  transition: all 0.2s ease;
  text-decoration: none;
  position: relative;
}

.nav-item:hover {
  background: #F3F3F3;
  color: #8C6239;
}

.nav-item.active {
  background: linear-gradient(135deg, #8C6239, #B17951);
  color: white;
  box-shadow: 0 4px 12px rgba(140, 98, 57, 0.2);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
}

.nav-label {
  font-size: 1.05rem;
  font-weight: 500;
  flex: 1;
}

.nav-badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.nav-item:not(.active) .nav-badge {
  background: #E7E7E7;
  color: #676767;
}

/* Pied de sidebar simplifié */
.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid #E7E7E7;
  background: #F9F9F9;
}

.footer-content {
  text-align: center;
}

.copyright {
  font-size: 0.9rem;
  font-weight: 500;
  color: #343434;
  margin-bottom: 0.25rem;
}

.rights {
  font-size: 0.8rem;
  color: #9B9B9B;
  font-style: italic;
  margin-bottom: 0.75rem;
}

.footer-decoration {
  width: 2rem;
  height: 2px;
  background: linear-gradient(90deg, #8C6239, #D69069);
  border-radius: 2px;
  margin: 0 auto;
  opacity: 0.3;
}

/* Scrollbar personnalisée */
.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: #F3F3F3;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: #DADADA;
  border-radius: 4px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: #9B9B9B;
}
</style>