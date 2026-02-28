<template>
  <!-- LOADING -->
  <div
    v-if="isPageLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white/70"
  >
    <div class="loader"></div>
  </div>
  <div class="addresses-container">
    <div class="addresses-wrapper">
      <!-- En-tête -->
      <div class="page-header">
        <div>
          <h1 class="page-title">Mes adresses de livraison</h1>
          <p class="page-subtitle">
            Gérez vos adresses de livraison
          </p>
        </div>
       
        <!-- Statistique rapide -->
        <div class="stats-pill">
          <span class="stats-pill-label">Total adresses</span>
          <span class="stats-pill-value">{{ addresses.length }}</span>
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
      <!-- Bouton ajouter -->
      <div class="action-bar">
        <button @click="openAddModal" class="add-button">
          <span class="add-icon" v-html="plusIcon"></span>
          Ajouter une nouvelle adresse de livraison
        </button>
      </div>
      <!-- Liste des adresses -->
      <div class="addresses-grid">
        <div
          v-for="address in addresses"
          :key="address.id"
          class="address-card"
          :class="{ 'default': address.isDefault }"
        >
          <!-- Badge par défaut -->
          <div v-if="address.isDefault" class="default-badge">
            <span class="badge-icon" v-html="starIcon"></span>
            Adresse par défaut
          </div>
          <!-- En-tête de la carte -->
          <div class="address-header">
            <div class="address-type">
              <span class="type-icon" v-html="shippingIcon"></span>
              <span class="type-label">Adresse de livraison</span>
            </div>
            <div class="address-actions">
              <button @click="openEditModal(address)" class="action-button edit" v-html="editIcon"></button>
              <button @click="confirmDelete(address)" class="action-button delete" v-html="deleteIcon"></button>
            </div>
          </div>
          <!-- Contenu de l'adresse -->
          <div class="address-content">
            <h3 class="address-name">{{ address.name }}</h3>
            <p class="address-line">{{ address.street }}</p>
            <p v-if="address.complement" class="address-line">{{ address.complement }}</p>
            <p class="address-line">{{ address.postalCode }} {{ address.city }}</p>
            <p class="address-line">{{ address.country }}</p>
            <p class="address-phone">{{ address.phone }}</p>
          </div>
          <!-- Bouton définir par défaut -->
          <div v-if="!address.isDefault" class="address-footer">
            <button @click="setAsDefault(address)" class="set-default-button">
              Définir comme adresse par défaut
            </button>
          </div>
        </div>
      </div>
      <!-- État vide -->
      <div v-if="addresses.length === 0" class="empty-state">
        <span class="empty-icon" v-html="emptyIcon"></span>
        <h3>Aucune adresse enregistrée</h3>
        <p>Commencez par ajouter votre première adresse de livraison</p>
        <button @click="openAddModal" class="empty-button">
          Ajouter une adresse
        </button>
      </div>
    </div>
    <!-- Modal ajout/modification -->
    <Transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <!-- En-tête modal -->
          <div class="modal-header">
            <h2 class="modal-title">{{ modalMode === 'add' ? 'Nouvelle adresse de livraison' : 'Modifier l\'adresse' }}</h2>
            <button @click="closeModal" class="modal-close" v-html="closeIcon"></button>
          </div>
          <!-- Formulaire -->
          <form @submit.prevent="saveAddress" class="address-form">
            
            <!-- Nom complet -->
            <div class="form-group">
              <label for="name">Nom complet</label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                class="form-input"
                placeholder="Jean Dupont"
                required
              />
            </div>
            <!-- Rue -->
            <div class="form-group">
              <label for="street">Rue / Avenue</label>
              <input
                v-model="formData.street"
                type="text"
                id="street"
                class="form-input"
                placeholder="15 Rue de la Paix"
                required
              />
            </div>
            <!-- Complément (optionnel) -->
            <div class="form-group">
              <label for="complement">Complément (optionnel)</label>
              <input
                v-model="formData.complement"
                type="text"
                id="complement"
                class="form-input"
                placeholder="Appartement, étage, résidence..."
              />
            </div>
            <!-- Code postal et ville -->
            <div class="form-grid">
              <div class="form-group">
                <label for="postalCode">Code postal</label>
                <input
                  v-model="formData.postalCode"
                  type="text"
                  id="postalCode"
                  class="form-input"
                  placeholder="75001"
                  required
                />
              </div>
              <div class="form-group">
                <label for="city">Ville</label>
                <input
                  v-model="formData.city"
                  type="text"
                  id="city"
                  class="form-input"
                  placeholder="Paris"
                  required
                />
              </div>
            </div>
            <!-- Pays -->
            <div class="form-group">
              <label for="country">Pays</label>
              <select v-model="formData.country" id="country" class="form-input" required>
                <option value="France">France</option>
                <option value="Belgique">Belgique</option>
                <option value="Suisse">Suisse</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            <!-- Téléphone -->
            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input
                v-model="formData.phone"
                type="tel"
                id="phone"
                class="form-input"
                placeholder="01 23 45 67 89"
                required
              />
            </div>
            <!-- Définir par défaut -->
            <div class="form-group checkbox">
              <label class="checkbox-label">
                <input
                  v-model="formData.isDefault"
                  type="checkbox"
                  class="checkbox-input"
                />
                <span class="checkbox-text">Définir comme adresse par défaut</span>
              </label>
            </div>
            <!-- Actions -->
            <div class="form-actions">
              <button type="button" @click="closeModal" class="button secondary">
                Annuler
              </button>
              <button type="submit" :disabled="isLoading" class="button primary">
                <span v-if="isLoading">Enregistrement...</span>
                <span v-else>{{ modalMode === 'add' ? 'Ajouter' : 'Modifier' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
    <!-- Modal confirmation suppression -->
    <Transition name="modal">
      <div v-if="showDeleteModal" class="modal-overlay" @click="showDeleteModal = false">
        <div class="modal-content delete-modal" @click.stop>
          <div class="modal-icon warning">
            <span v-html="warningIcon"></span>
          </div>
         
          <h3 class="modal-title">Supprimer cette adresse ?</h3>
         
          <p class="modal-text">
            Êtes-vous sûr de vouloir supprimer cette adresse de livraison ? Cette action est irréversible.
          </p>
          <div class="modal-actions">
            <button
              type="button"
              @click="showDeleteModal = false"
              class="button secondary"
            >
              Annuler
            </button>
            <button
              type="button"
              @click="deleteAddress"
              class="button danger"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
definePageMeta({ layout: 'dashboard-client' })
// États
const isPageLoading = ref(true);
const errorMessage = ref("");
const successMessage = ref("");
const isLoading = ref(false);
const showModal = ref(false);
const showDeleteModal = ref(false);
const modalMode = ref('add'); // 'add' ou 'edit'
const selectedAddress = ref(null);
// Liste des adresses
const addresses = ref([]);
// Formulaire
const formData = reactive({
  id: null,
  name: "",
  type: "shipping",
  street: "",
  complement: "",
  postalCode: "",
  city: "",
  country: "France",
  phone: "",
  isDefault: false
});
// Chargement initial
onMounted(async () => {
  try {
    isPageLoading.value = true;
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
   
    // Données mockées (plusieurs adresses)
    addresses.value = [
      {
        id: 1,
        name: "Sophie Martin",
        type: "shipping",
        street: "15 Rue de la Paix",
        complement: "Appartement 4B",
        postalCode: "75001",
        city: "Paris",
        country: "France",
        phone: "01 23 45 67 89",
        isDefault: true
      },
      {
        id: 2,
        name: "Sophie Martin",
        type: "shipping",
        street: "25 Avenue des Champs-Élysées",
        complement: "Bureau 302",
        postalCode: "75008",
        city: "Paris",
        country: "France",
        phone: "01 98 76 54 32",
        isDefault: false
      },
      {
        id: 3,
        name: "Sophie Martin (Bureau)",
        type: "shipping",
        street: "10 Rue du Faubourg Saint-Honoré",
        complement: "",
        postalCode: "75008",
        city: "Paris",
        country: "France",
        phone: "01 45 67 89 10",
        isDefault: false
      }
    ];
  } catch (error) {
    errorMessage.value = "Impossible de charger les adresses";
  } finally {
    isPageLoading.value = false;
  }
});
// Ouvrir modal ajout
const openAddModal = () => {
  modalMode.value = 'add';
  resetForm();
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};
// Ouvrir modal modification
const openEditModal = (address) => {
  modalMode.value = 'edit';
  selectedAddress.value = address;
 
  // Remplir le formulaire
  formData.id = address.id;
  formData.name = address.name;
  formData.type = "shipping";
  formData.street = address.street;
  formData.complement = address.complement || "";
  formData.postalCode = address.postalCode;
  formData.city = address.city;
  formData.country = address.country;
  formData.phone = address.phone;
  formData.isDefault = address.isDefault;
 
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};
// Fermer modal
const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
  resetForm();
};
// Reset formulaire
const resetForm = () => {
  formData.id = null;
  formData.name = "";
  formData.type = "shipping";
  formData.street = "";
  formData.complement = "";
  formData.postalCode = "";
  formData.city = "";
  formData.country = "France";
  formData.phone = "";
  formData.isDefault = false;
};
// Sauvegarder adresse
const saveAddress = async () => {
  isLoading.value = true;
  errorMessage.value = "";
 
  try {
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
   
    if (modalMode.value === 'add') {
      // Ajout
      const newAddress = {
        id: Date.now(),
        ...formData
      };
     
      // Si c'est la première adresse ou si elle est définie par défaut
      if (addresses.value.length === 0 || formData.isDefault) {
        // Retirer le statut par défaut des autres
        addresses.value.forEach(addr => addr.isDefault = false);
        newAddress.isDefault = true;
      }
     
      addresses.value.push(newAddress);
      successMessage.value = "Adresse ajoutée avec succès";
    } else {
      // Modification
      const index = addresses.value.findIndex(addr => addr.id === formData.id);
      if (index !== -1) {
        // Gestion du statut par défaut
        if (formData.isDefault) {
          addresses.value.forEach(addr => addr.isDefault = false);
        }
       
        addresses.value[index] = { ...formData };
      }
      successMessage.value = "Adresse modifiée avec succès";
    }
   
    closeModal();
    setTimeout(() => { successMessage.value = "" }, 3000);
  } catch (error) {
    errorMessage.value = "Erreur lors de l'enregistrement";
  } finally {
    isLoading.value = false;
  }
};
// Confirmer suppression
const confirmDelete = (address) => {
  selectedAddress.value = address;
  showDeleteModal.value = true;
  document.body.style.overflow = 'hidden';
};
// Supprimer adresse
const deleteAddress = async () => {
  if (!selectedAddress.value) return;
 
  isLoading.value = true;
 
  try {
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
   
    // Suppression
    addresses.value = addresses.value.filter(addr => addr.id !== selectedAddress.value.id);
   
    // Si l'adresse supprimée était par défaut, définir une nouvelle par défaut
    if (selectedAddress.value.isDefault && addresses.value.length > 0) {
      addresses.value[0].isDefault = true;
    }
   
    successMessage.value = "Adresse supprimée avec succès";
    showDeleteModal.value = false;
    setTimeout(() => { successMessage.value = "" }, 3000);
  } catch (error) {
    errorMessage.value = "Erreur lors de la suppression";
  } finally {
    isLoading.value = false;
    document.body.style.overflow = 'auto';
    selectedAddress.value = null;
  }
};
// Définir comme adresse par défaut
const setAsDefault = async (address) => {
  isLoading.value = true;
 
  try {
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 500));
   
    // Retirer le statut par défaut de toutes les adresses
    addresses.value.forEach(addr => addr.isDefault = false);
   
    // Définir la nouvelle adresse par défaut
    const index = addresses.value.findIndex(addr => addr.id === address.id);
    if (index !== -1) {
      addresses.value[index].isDefault = true;
    }
   
    successMessage.value = "Adresse par défaut mise à jour";
    setTimeout(() => { successMessage.value = "" }, 3000);
  } catch (error) {
    errorMessage.value = "Erreur lors de la mise à jour";
  } finally {
    isLoading.value = false;
  }
};
// Icônes SVG
const getAddressIcon = (type) => {
  return shippingIcon;
};
const plusIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
const editIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>`;
const deleteIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 4V2"/><path d="M16 4V2"/></svg>`;
const starIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const closeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const errorIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>`;
const successIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
const warningIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2L2 19h20L12 2z"/></svg>`;
const emptyIcon = `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9B9B9B" stroke-width="1.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
const shippingIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 8v4M12 16h.01"/></svg>`;
const billingIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M16 2v4M8 2v4M2 8h20"/></svg>`;
</script>
<style scoped>
.addresses-container {
  font-family: 'EB Garamond', serif;
  min-height: 100vh;
  background: #F3F3F3;
}
.addresses-wrapper {
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
/* Barre d'action */
.action-bar {
  margin-bottom: 2rem;
}
.add-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  background: white;
  border: 1px solid #8C6239;
  border-radius: 2rem;
  color: #8C6239;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}
.add-button:hover {
  background: #8C6239;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(140, 98, 57, 0.2);
}
/* Grille des adresses */
.addresses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}
/* Carte adresse */
.address-card {
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #E7E7E7;
  position: relative;
  transition: all 0.2s;
}
.address-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(140, 98, 57, 0.1);
  border-color: #8C6239;
}
.address-card.default {
  border-color: #8C6239;
  background: linear-gradient(to bottom, white, #F9F9F9);
}
.default-badge {
  position: absolute;
  top: -0.5rem;
  right: 1.5rem;
  background: #8C6239;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  box-shadow: 0 2px 8px rgba(140, 98, 57, 0.3);
}
.address-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}
.address-type {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 1rem;
  background: #F3F3F3;
  border-radius: 2rem;
  color: #676767;
}
.type-icon {
  display: flex;
  align-items: center;
  color: #8C6239;
}
.type-label {
  font-size: 0.9rem;
}
.address-actions {
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
.action-button.delete:hover {
  background: #B17951;
  color: white;
}
.address-content {
  margin-bottom: 1.5rem;
}
.address-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #343434;
  margin-bottom: 0.5rem;
}
.address-line {
  color: #676767;
  margin-bottom: 0.25rem;
}
.address-phone {
  margin-top: 0.75rem;
  color: #8C6239;
  font-weight: 500;
}
.address-footer {
  border-top: 1px solid #E7E7E7;
  padding-top: 1rem;
}
.set-default-button {
  width: 100%;
  padding: 0.5rem;
  background: none;
  border: 1px dashed #9B9B9B;
  border-radius: 2rem;
  color: #676767;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}
.set-default-button:hover {
  border-color: #8C6239;
  color: #8C6239;
  background: #F3F3F3;
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
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
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
/* Formulaire */
.address-form {
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
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
/* Checkbox */
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}
.checkbox-input {
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #E7E7E7;
  border-radius: 0.25rem;
  cursor: pointer;
}
.checkbox-text {
  color: #343434;
}
/* Actions formulaire */
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
/* Modal suppression */
.delete-modal {
  max-width: 450px;
  text-align: center;
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
}
.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
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
@media (max-width: 768px) {
  .addresses-wrapper {
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
  .addresses-grid {
    grid-template-columns: 1fr;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .modal-actions {
    flex-direction: column;
  }
}
</style>