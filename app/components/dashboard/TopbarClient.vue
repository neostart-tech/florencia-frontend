<template>
  <header class="topbar">
    <div class="topbar-left">
      <!-- Bouton menu mobile (optionnel) -->
      <button class="mobile-menu-btn md:hidden">
        <span v-html="menuIcon"></span>
      </button>
    </div>

    <div class="topbar-right">
      <!-- Notifications -->
      <button class="icon-button notification-btn">
        <span class="icon" v-html="bellIcon"></span>
        <span class="notification-badge">3</span>
      </button>

      <!-- Panier -->
      <button class="icon-button cart-btn">
        <span class="icon" v-html="cartIcon"></span>
        <span class="cart-badge">2</span>
      </button>

      <!-- Séparateur -->
      <div class="separator"></div>

      <!-- Profil utilisateur -->
      <div class="user-profile">
        <div class="user-info">
          <p class="user-greeting">Bonjour,</p>
          <p class="user-name">Sophie</p>
        </div>
        <div class="user-avatar">
          <img src="https://i.pravatar.cc/40?img=5" alt="Sophie Martin">
          <span class="online-indicator"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from '#app'
import { computed } from 'vue'

const route = useRoute()

const pageTitle = computed(() => {
  const titles = {
    '/dashboard-client': 'Tableau de bord',
    '/dashboard-client/commandes': 'Mes commandes',
    '/dashboard-client/wishlist': 'Ma wishlist',
    '/dashboard-client/profile': 'Mon profil',
    '/dashboard-client/addresses': 'Mes adresses',
  }
  return titles[route.path] || 'Dashboard'
})

// Icônes SVG
const menuIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <line x1="3" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="6" x2="21" y2="6"/>
  <line x1="3" y1="18" x2="21" y2="18"/>
</svg>`

const bellIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
</svg>`

const cartIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
  <circle cx="9" cy="21" r="1"/>
  <circle cx="20" cy="21" r="1"/>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
</svg>`
</script>

<style scoped>
.topbar {
  font-family: 'EB Garamond', serif;
  height: 5rem;
  background: white;
  border-bottom: 1px solid #E7E7E7;
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
}

/* Partie gauche */
.topbar-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.mobile-menu-btn {
  background: none;
  border: none;
  color: #676767;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.mobile-menu-btn:hover {
  background: #F3F3F3;
  color: #8C6239;
}

.page-title-wrapper {
  position: relative;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: #343434;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
}

.page-title-decoration {
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 3rem;
  height: 2px;
  background: linear-gradient(90deg, #8C6239, #D69069);
  border-radius: 2px;
  opacity: 0.5;
}

/* Partie droite */
.topbar-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Boutons d'icônes */
.icon-button {
  position: relative;
  background: none;
  border: none;
  color: #676767;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button:hover {
  background: #F3F3F3;
  color: #8C6239;
  transform: translateY(-1px);
}

.icon-button:active {
  transform: translateY(0);
}

.notification-badge,
.cart-badge {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 1.25rem;
  height: 1.25rem;
  background: #8C6239;
  color: white;
  border-radius: 1rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.25rem;
  border: 2px solid white;
  font-weight: 600;
}

/* Séparateur */
.separator {
  width: 1px;
  height: 2rem;
  background: #E7E7E7;
}

/* Profil utilisateur */
.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 2rem;
  background: #F9F9F9;
  border: 1px solid #E7E7E7;
  transition: all 0.2s;
  cursor: pointer;
}

.user-profile:hover {
  border-color: #8C6239;
  background: #F3F3F3;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(140, 98, 57, 0.1);
}

.user-info {
  text-align: right;
}

.user-greeting {
  font-size: 0.8rem;
  color: #9B9B9B;
  margin-bottom: 0.125rem;
}

.user-name {
  font-size: 1rem;
  font-weight: 600;
  color: #343434;
  line-height: 1;
}

.user-avatar {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.online-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  background: #4CAF50;
  border: 2px solid white;
  border-radius: 50%;
}

/* Animation subtile */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.notification-btn .notification-badge {
  animation: pulse 2s infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .topbar {
    padding: 0 1rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .user-info {
    display: none;
  }

  .user-profile {
    padding: 0.25rem;
  }

  .separator {
    display: none;
  }

  .topbar-right {
    gap: 0.5rem;
  }
}
</style>