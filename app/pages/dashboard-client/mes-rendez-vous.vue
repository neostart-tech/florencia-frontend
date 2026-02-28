<template>
  <!-- LOADING -->
  <div
    v-if="isPageLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white/70"
  >
    <div class="loader"></div>
  </div>

  <div class="appointments-container">
    <div class="appointments-wrapper">
      <!-- En-tête -->
      <div class="page-header">
        <div>
          <h1 class="page-title">Mes rendez-vous</h1>
          <p class="page-subtitle">
            Gérez tous vos rendez-vous de services
          </p>
        </div>

        <!-- Statistiques rapides -->
        <div class="stats-group">
          <div class="stats-pill">
            <span class="stats-pill-label">Total</span>
            <span class="stats-pill-value">{{ appointments.length }}</span>
          </div>
          <div class="stats-pill">
            <span class="stats-pill-label">À venir</span>
            <span class="stats-pill-value">{{ upcomingCount }}</span>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div v-if="errorMessage" class="message error">
        <div class="message-content">
          <span class="message-icon" v-html="errorIcon"></span>
          <span>{{ errorMessage }}</span>
        </div>
      </div>

      <div v-if="successMessage" class="message success">
        <div class="message-content">
          <span class="message-icon" v-html="successIcon"></span>
          <span>{{ successMessage }}</span>
        </div>
      </div>

      <!-- Filtres -->
      <div class="filters-bar">
        <div class="filter-tabs">
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="filter-tab"
            :class="{ 'active': currentFilter === filter.value }"
            @click="currentFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="filter-actions">
          <button @click="openBookingModal" class="booking-button">
            <span class="booking-icon" v-html="plusIcon"></span>
            Prendre un rendez-vous
          </button>
        </div>
      </div>

      <!-- Liste des rendez-vous -->
      <div v-if="filteredAppointments.length > 0" class="appointments-list">
        <div
          v-for="appointment in filteredAppointments"
          :key="appointment.id"
          class="appointment-card"
        >
          <!-- Badge de statut -->
          <div class="card-header">
            <div class="appointment-status" :class="appointment.status">
              <span class="status-dot"></span>
              {{ appointment.statusText }}
            </div>
            <div class="appointment-actions">
              <button
                v-if="appointment.status === 'upcoming'"
                @click="openRescheduleModal(appointment)"
                class="action-button edit"
                v-html="editIcon"
              ></button>
              <button
                v-if="appointment.status === 'upcoming'"
                @click="confirmCancel(appointment)"
                class="action-button cancel"
                v-html="cancelIcon"
              ></button>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="card-body">
            <div class="service-info">
              <h3 class="service-name">{{ appointment.service }}</h3>
              <p class="service-prestataire">Avec {{ appointment.prestataire }}</p>
            </div>

            <div class="datetime-info">
              <div class="datetime-item">
                <span class="datetime-icon" v-html="calendarIcon"></span>
                <span class="datetime-text">{{ appointment.date }}</span>
              </div>
              <div class="datetime-item">
                <span class="datetime-icon" v-html="clockIcon"></span>
                <span class="datetime-text">{{ appointment.time }}</span>
              </div>
            </div>

            <div class="price-info">
              <span class="price-label">Total</span>
              <span class="price-value">{{ appointment.price }}</span>
            </div>
          </div>

          <!-- Actions complémentaires -->
          <div class="card-footer">
            <button
              v-if="appointment.status === 'completed'"
              @click="openReviewModal(appointment)"
              class="footer-button review"
            >
              Laisser un avis
            </button>
            <button
              v-if="appointment.status === 'upcoming'"
              @click="openAppointmentDetails(appointment)"
              class="footer-button details"
            >
              Voir détails
            </button>
          </div>
        </div>
      </div>

      <!-- État vide -->
      <div v-else class="empty-state">
        <span class="empty-icon" v-html="emptyIcon"></span>
        <h3>Aucun rendez-vous trouvé</h3>
        <p>{{ getEmptyStateMessage() }}</p>
        <button @click="openBookingModal" class="empty-button">
          Prendre un rendez-vous
        </button>
      </div>
    </div>

    <!-- Modal de réservation -->
    <Transition name="modal">
      <div v-if="showBookingModal" class="modal-overlay" @click="closeBookingModal">
        <div class="modal-content booking-modal" @click.stop>
          <div class="modal-header">
            <h2 class="modal-title">Prendre un rendez-vous</h2>
            <button @click="closeBookingModal" class="modal-close" v-html="closeIcon"></button>
          </div>

          <form @submit.prevent="bookAppointment" class="booking-form">
            <!-- Service -->
            <div class="form-group">
              <label>Service</label>
              <select v-model="bookingForm.service" class="form-input" required>
                <option value="">Sélectionnez un service</option>
                <option value="manucure">Manucure complète</option>
                <option value="pedicure">Pédicure</option>
                <option value="perruque">Pose de perruque</option>
                <option value="soin">Soin visage</option>
                <option value="coupe">Coupe + Brushing</option>
              </select>
            </div>

            <!-- Prestataire -->
            <div class="form-group">
              <label>Prestataire</label>
              <select v-model="bookingForm.prestataire" class="form-input" required>
                <option value="">Sélectionnez un prestataire</option>
                <option value="Marie">Marie</option>
                <option value="Sophie">Sophie</option>
                <option value="Julie">Julie</option>
                <option value="Amélie">Amélie</option>
              </select>
            </div>

            <!-- Date -->
            <div class="form-group">
              <label>Date</label>
              <input
                v-model="bookingForm.date"
                type="date"
                class="form-input"
                :min="minDate"
                required
              />
            </div>

            <!-- Heure -->
            <div class="form-group">
              <label>Heure</label>
              <select v-model="bookingForm.time" class="form-input" required>
                <option value="">Sélectionnez une heure</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>

            <!-- Actions -->
            <div class="form-actions">
              <button type="button" @click="closeBookingModal" class="button secondary">
                Annuler
              </button>
              <button type="submit" :disabled="isLoading" class="button primary">
                <span v-if="isLoading">Réservation en cours...</span>
                <span v-else>Confirmer le rendez-vous</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Modal de confirmation d'annulation -->
    <Transition name="modal">
      <div v-if="showCancelModal" class="modal-overlay" @click="showCancelModal = false">
        <div class="modal-content cancel-modal" @click.stop>
          <div class="modal-icon warning">
            <span v-html="warningIcon"></span>
          </div>

          <h3 class="modal-title">Annuler ce rendez-vous ?</h3>

          <p class="modal-text">
            Êtes-vous sûr de vouloir annuler ce rendez-vous ?
            Cette action est irréversible.
          </p>

          <div class="modal-actions">
            <button
              type="button"
              @click="showCancelModal = false"
              class="button secondary"
            >
              Non, conserver
            </button>
            <button
              type="button"
              @click="cancelAppointment"
              class="button danger"
            >
              Oui, annuler
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";

definePageMeta({ layout: 'dashboard-client' })

// États
const isPageLoading = ref(true)
const errorMessage = ref("")
const successMessage = ref("")
const isLoading = ref(false)
const currentFilter = ref('all')
const showBookingModal = ref(false)
const showCancelModal = ref(false)

// Données
const appointments = ref([])
const selectedAppointment = ref(null)

// Formulaire de réservation
const bookingForm = reactive({
  service: "",
  prestataire: "",
  date: "",
  time: ""
})

// Date minimum pour la réservation
const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

// Filtres
const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'À venir', value: 'upcoming' },
  { label: 'Passés', value: 'completed' },
  { label: 'Annulés', value: 'cancelled' }
]

// Rendez-vous filtrés
const filteredAppointments = computed(() => {
  if (currentFilter.value === 'all') return appointments.value
  return appointments.value.filter(a => a.status === currentFilter.value)
})

// Compteur de rendez-vous à venir
const upcomingCount = computed(() => {
  return appointments.value.filter(a => a.status === 'upcoming').length
})

// Chargement initial
onMounted(async () => {
  try {
    isPageLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Données mockées
    appointments.value = [
      {
        id: 1,
        service: "Manucure complète",
        prestataire: "Marie",
        date: "15 mars 2024",
        time: "14h30",
        price: "45000 FCFA",
        status: "upcoming",
        statusText: "À venir"
      },
      {
        id: 2,
        service: "Pédicure",
        prestataire: "Sophie",
        date: "18 mars 2024",
        time: "10h00",
        price: "32800 FCFA",
        status: "upcoming",
        statusText: "À venir"
      },
      {
        id: 3,
        service: "Pose de perruque",
        prestataire: "Julie",
        date: "20 mars 2024",
        time: "16h00",
        price: "78200 FCFA",
        status: "upcoming",
        statusText: "À venir"
      },
      {
        id: 4,
        service: "Soin visage",
        prestataire: "Amélie",
        date: "12 mars 2024",
        time: "09h30",
        price: "23900 FCFA",
        status: "completed",
        statusText: "Effectué"
      },
      {
        id: 5,
        service: "Coupe + Brushing",
        prestataire: "Sophie",
        date: "5 mars 2024",
        time: "15h30",
        price: "19900 FCFA",
        status: "completed",
        statusText: "Effectué"
      },
      {
        id: 6,
        service: "Manucure gel",
        prestataire: "Marie",
        date: "28 fév 2024",
        time: "11h00",
        price: "29800 FCFA",
        status: "cancelled",
        statusText: "Annulé"
      }
    ]
  } catch (error) {
    errorMessage.value = "Impossible de charger les rendez-vous"
  } finally {
    isPageLoading.value = false
  }
})

// Ouvrir modal de réservation
const openBookingModal = () => {
  resetBookingForm()
  showBookingModal.value = true
  document.body.style.overflow = 'hidden'
}

// Fermer modal de réservation
const closeBookingModal = () => {
  showBookingModal.value = false
  document.body.style.overflow = 'auto'
  resetBookingForm()
}

// Reset formulaire
const resetBookingForm = () => {
  bookingForm.service = ""
  bookingForm.prestataire = ""
  bookingForm.date = ""
  bookingForm.time = ""
}

// Réserver un rendez-vous
const bookAppointment = async () => {
  isLoading.value = true
  errorMessage.value = ""

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newAppointment = {
      id: Date.now(),
      service: bookingForm.service === 'manucure' ? 'Manucure complète' :
               bookingForm.service === 'pedicure' ? 'Pédicure' :
               bookingForm.service === 'perruque' ? 'Pose de perruque' :
               bookingForm.service === 'soin' ? 'Soin visage' : 'Coupe + Brushing',
      prestataire: bookingForm.prestataire,
      date: new Date(bookingForm.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      time: bookingForm.time + 'h00',
      price: getPriceForService(bookingForm.service),
      status: "upcoming",
      statusText: "À venir"
    }

    appointments.value.push(newAppointment)
    successMessage.value = "Rendez-vous confirmé avec succès !"
    closeBookingModal()
    setTimeout(() => { successMessage.value = "" }, 3000)
  } catch (error) {
    errorMessage.value = "Erreur lors de la réservation"
  } finally {
    isLoading.value = false
  }
}

// Prix selon le service
const getPriceForService = (service) => {
  const prices = {
    'manucure': '45000 FCFA',
    'pedicure': '32800 FCFA',
    'perruque': '78200 FCFA',
    'soin': '23900 FCFA',
    'coupe': '19900 FCFA'
  }
  return prices[service] || '35000 FCFA'
}

// Confirmer l'annulation
const confirmCancel = (appointment) => {
  selectedAppointment.value = appointment
  showCancelModal.value = true
  document.body.style.overflow = 'hidden'
}

// Annuler un rendez-vous
const cancelAppointment = async () => {
  if (!selectedAppointment.value) return

  isLoading.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const index = appointments.value.findIndex(a => a.id === selectedAppointment.value.id)
    if (index !== -1) {
      appointments.value[index].status = "cancelled"
      appointments.value[index].statusText = "Annulé"
    }

    successMessage.value = "Rendez-vous annulé avec succès"
    showCancelModal.value = false
    setTimeout(() => { successMessage.value = "" }, 3000)
  } catch (error) {
    errorMessage.value = "Erreur lors de l'annulation"
  } finally {
    isLoading.value = false
    document.body.style.overflow = 'auto'
    selectedAppointment.value = null
  }
}

// Message pour l'état vide
const getEmptyStateMessage = () => {
  switch (currentFilter.value) {
    case 'upcoming':
      return "Vous n'avez aucun rendez-vous à venir"
    case 'completed':
      return "Vous n'avez aucun rendez-vous passé"
    case 'cancelled':
      return "Vous n'avez aucun rendez-vous annulé"
    default:
      return "Vous n'avez pas encore pris de rendez-vous"
  }
}

// Icônes SVG
const plusIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
const editIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>`
const cancelIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
const calendarIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
const clockIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
const closeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
const errorIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>`
const successIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
const warningIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2L2 19h20L12 2z"/></svg>`
const emptyIcon = `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" stroke-width="1.2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
</script>

<style scoped>
.appointments-container {
  font-family: 'EB Garamond', serif;
  min-height: 100vh;
  background: #F3F3F3;
}

.appointments-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
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

.stats-group {
  display: flex;
  gap: 1rem;
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

/* Messages */
.message {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
}

.message.error {
  background: rgba(177, 121, 81, 0.1);
  border: 1px solid rgba(177, 121, 81, 0.2);
  color: #B17951;
}

.message.success {
  background: rgba(140, 98, 57, 0.1);
  border: 1px solid rgba(140, 98, 57, 0.2);
  color: #8C6239;
}

.message-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Barre de filtres */
.filters-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.filter-tab {
  padding: 0.5rem 1.5rem;
  border: none;
  background: transparent;
  border-radius: 2rem;
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: #676767;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-tab:hover {
  color: #8C6239;
}

.filter-tab.active {
  background: #8C6239;
  color: white;
}

.filter-actions {
  display: flex;
  gap: 1rem;
}

.booking-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: #8C6239;
  border: none;
  border-radius: 2rem;
  color: white;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.booking-button:hover {
  background: #B17951;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(140, 98, 57, 0.2);
}

/* Liste des rendez-vous */
.appointments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.appointment-card {
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #E7E7E7;
  transition: all 0.2s;
}

.appointment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(140, 98, 57, 0.1);
  border-color: #8C6239;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.appointment-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.appointment-status.upcoming {
  background: rgba(140, 98, 57, 0.1);
  color: #8C6239;
}
.appointment-status.upcoming .status-dot {
  background: #8C6239;
}

.appointment-status.completed {
  background: rgba(177, 121, 81, 0.1);
  color: #B17951;
}
.appointment-status.completed .status-dot {
  background: #B17951;
}

.appointment-status.cancelled {
  background: #F3F3F3;
  color: #9B9B9B;
}
.appointment-status.cancelled .status-dot {
  background: #9B9B9B;
}

.appointment-actions {
  display: flex;
  gap: 0.5rem;
}

.action-button {
  width: 2rem;
  height: 2rem;
  border: none;
  background: #F3F3F3;
  border-radius: 0.5rem;
  color: #676767;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-button.edit:hover {
  background: #8C6239;
  color: white;
}

.action-button.cancel:hover {
  background: #B17951;
  color: white;
}

.card-body {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.service-info {
  min-width: 200px;
}

.service-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #343434;
  margin-bottom: 0.25rem;
}

.service-prestataire {
  font-size: 0.95rem;
  color: #8C6239;
  font-style: italic;
}

.datetime-info {
  display: flex;
  gap: 1.5rem;
}

.datetime-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #676767;
}

.datetime-icon {
  color: #8C6239;
}

.datetime-text {
  font-size: 0.95rem;
}

.price-info {
  text-align: right;
}

.price-label {
  font-size: 0.85rem;
  color: #9B9B9B;
  display: block;
  margin-bottom: 0.25rem;
}

.price-value {
  font-size: 1.3rem;
  font-weight: 600;
  color: #8C6239;
}

.card-footer {
  border-top: 1px solid #E7E7E7;
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
}

.footer-button {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.footer-button.review {
  background: none;
  border: 1px solid #8C6239;
  color: #8C6239;
}

.footer-button.review:hover {
  background: #8C6239;
  color: white;
}

.footer-button.details {
  background: #F3F3F3;
  color: #676767;
}

.footer-button.details:hover {
  background: #8C6239;
  color: white;
}

/* État vide */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 1.5rem;
  border: 1px solid #E7E7E7;
}

.empty-icon {
  display: block;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.3rem;
  color: #343434;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #9B9B9B;
  margin-bottom: 1.5rem;
}

.empty-button {
  padding: 0.75rem 2rem;
  background: #8C6239;
  color: white;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.empty-button:hover {
  background: #B17951;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(140, 98, 57, 0.2);
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
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.booking-modal {
  max-width: 500px;
}

.cancel-modal {
  max-width: 450px;
  text-align: center;
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

.modal-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.modal-icon.warning {
  background: rgba(177, 121, 81, 0.1);
  color: #B17951;
}

.modal-text {
  color: #676767;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem 1.5rem;
}

/* Formulaire */
.booking-form {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.95rem;
  color: #676767;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid #E7E7E7;
  border-radius: 0.75rem;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  transition: all 0.2s;
  width: 100%;
}

.form-input:focus {
  outline: none;
  border-color: #8C6239;
  box-shadow: 0 0 0 3px rgba(140, 98, 57, 0.1);
}

select.form-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23676767' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #E7E7E7;
}

/* Boutons */
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  font-family: 'EB Garamond', serif;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.button.primary {
  background: #8C6239;
  color: white;
}

.button.primary:hover:not(:disabled) {
  background: #B17951;
}

.button.secondary {
  background: white;
  border: 1px solid #E7E7E7;
  color: #676767;
}

.button.secondary:hover {
  border-color: #8C6239;
  color: #8C6239;
}

.button.danger {
  background: #B17951;
  color: white;
}

.button.danger:hover:not(:disabled) {
  background: #8C6239;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Loader */
.loader {
  width: 40px;
  height: 40px;
  border: 3px solid #E7E7E7;
  border-top-color: #8C6239;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Animations */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 1024px) {
  .card-body {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .datetime-info {
    justify-content: flex-start;
  }

  .price-info {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .appointments-wrapper {
    padding: 1rem;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .stats-group {
    width: 100%;
  }

  .stats-pill {
    flex: 1;
    align-items: flex-start;
  }

  .filters-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-tabs {
    overflow-x: auto;
    padding: 0.5rem;
  }

  .filter-tab {
    white-space: nowrap;
  }

  .datetime-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }
}
</style>