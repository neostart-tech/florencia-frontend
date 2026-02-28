<template>
  <!-- LOADING -->
  <div
    v-if="isPageLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white/70"
  >
    <div class="loader"></div>
  </div>

  <div class="profile-container">
    <div class="profile-wrapper">
      <!-- En-tête -->
      <div class="page-header">
        <div>
          <h1 class="page-title">Mon Profil</h1>
          <p class="page-subtitle">
            Gérez vos informations personnelles et la sécurité de votre compte
          </p>
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

      <div class="profile-grid">
        <!-- Colonne principale -->
        <div class="main-column">
          <!-- Section informations personnelles -->
          <div class="profile-card">
            <div class="card-header">
              <h2 class="card-title">Informations personnelles</h2>
              <button
                @click="isEditingPersonal = !isEditingPersonal"
                class="edit-button"
                :class="{ 'cancel': isEditingPersonal }"
              >
                <span v-if="isEditingPersonal">Annuler</span>
                <span v-else>Modifier</span>
              </button>
            </div>

            <form
              v-if="isEditingPersonal"
              @submit.prevent="updatePersonalInfo"
              class="edit-form"
            >
              <div class="form-grid">
                <div class="form-group">
                  <label for="firstName">Prénom</label>
                  <input
                    v-model="userData.firstName"
                    type="text"
                    id="firstName"
                    class="form-input"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="lastName">Nom</label>
                  <input
                    v-model="userData.lastName"
                    type="text"
                    id="lastName"
                    class="form-input"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email">Adresse email</label>
                <input
                  v-model="userData.email"
                  type="email"
                  id="email"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone">Téléphone</label>
                <input
                  v-model="userData.phone"
                  type="tel"
                  id="phone"
                  class="form-input"
                />
              </div>

              <div class="form-actions">
                <button
                  type="button"
                  @click="isEditingPersonal = false"
                  class="button secondary"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="button primary"
                >
                  <span v-if="isLoading">Enregistrement...</span>
                  <span v-else>Enregistrer</span>
                </button>
              </div>
            </form>

            <div v-else class="info-display">
              <div class="info-item">
                <span class="info-icon" v-html="userIcon"></span>
                <div>
                  <p class="info-label">Nom complet</p>
                  <p class="info-value">{{ userData.firstName }} {{ userData.lastName }}</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon" v-html="emailIcon"></span>
                <div>
                  <p class="info-label">Email</p>
                  <p class="info-value">{{ userData.email }}</p>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon" v-html="phoneIcon"></span>
                <div>
                  <p class="info-label">Téléphone</p>
                  <p class="info-value">{{ userData.phone || "Non renseigné" }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Section mot de passe -->
          <div class="profile-card">
            <div class="card-header">
              <h2 class="card-title">Sécurité du compte</h2>
              <button
                @click="isEditingPassword = !isEditingPassword"
                class="edit-button"
                :class="{ 'cancel': isEditingPassword }"
              >
                {{ isEditingPassword ? "Annuler" : "Changer le mot de passe" }}
              </button>
            </div>

            <form
              v-if="isEditingPassword"
              @submit.prevent="updatePassword"
              class="edit-form"
            >
              <div class="form-group">
                <label for="currentPassword">Mot de passe actuel</label>
                <div class="password-input">
                  <input
                    v-model="passwordData.currentPassword"
                    :type="showCurrentPassword ? 'text' : 'password'"
                    id="currentPassword"
                    class="form-input"
                    required
                  />
                  <button
                    type="button"
                    @click="showCurrentPassword = !showCurrentPassword"
                    class="password-toggle"
                    v-html="showCurrentPassword ? eyeOffIcon : eyeIcon"
                  ></button>
                </div>
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label for="newPassword">Nouveau mot de passe</label>
                  <div class="password-input">
                    <input
                      v-model="passwordData.newPassword"
                      :type="showNewPassword ? 'text' : 'password'"
                      id="newPassword"
                      class="form-input"
                      required
                    />
                    <button
                      type="button"
                      @click="showNewPassword = !showNewPassword"
                      class="password-toggle"
                      v-html="showNewPassword ? eyeOffIcon : eyeIcon"
                    ></button>
                  </div>
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Confirmer le mot de passe</label>
                  <div class="password-input">
                    <input
                      v-model="passwordData.confirmPassword"
                      :type="showConfirmPassword ? 'text' : 'password'"
                      id="confirmPassword"
                      class="form-input"
                      required
                    />
                    <button
                      type="button"
                      @click="showConfirmPassword = !showConfirmPassword"
                      class="password-toggle"
                      v-html="showConfirmPassword ? eyeOffIcon : eyeIcon"
                    ></button>
                  </div>
                </div>
              </div>

              <div v-if="passwordError" class="error-message">
                {{ passwordError }}
              </div>

              <div class="form-actions">
                <button
                  type="button"
                  @click="isEditingPassword = false"
                  class="button secondary"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="button primary"
                >
                  <span v-if="isLoading">Changement...</span>
                  <span v-else>Changer le mot de passe</span>
                </button>
              </div>
            </form>

            <div v-else class="security-info">
              <p class="security-text">
                Pour des raisons de sécurité, votre mot de passe n'est pas affiché. 
                Vous pouvez le changer à tout moment.
              </p>
            </div>
          </div>
        </div>

        <!-- Colonne latérale -->
        <div class="sidebar-column">
          <!-- Informations du compte -->
          <div class="profile-card">
            <h2 class="card-title">Informations du compte</h2>
            <div class="account-info">
              <div class="account-item">
                <span class="account-label">Date d'inscription</span>
                <span class="account-value">{{ formatDate(userData.createdAt) }}</span>
              </div>
              <div class="account-item">
                <span class="account-label">Dernière modification</span>
                <span class="account-value">{{ formatDate(userData.updatedAt) }}</span>
              </div>
              <div class="account-item">
                <span class="account-label">ID utilisateur</span>
                <span class="account-value id">{{ userData.id }}</span>
              </div>
            </div>
          </div>

          <!-- Zone de danger -->
          <div class="danger-zone">
            <h3 class="danger-title">Suppression de compte</h3>
            <p class="danger-text">
              Une fois votre compte supprimé, toutes vos données seront effacées définitivement.
            </p>
            <button @click="showDeleteModal = true" class="danger-button">
              Supprimer mon compte
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal suppression -->
    <Transition name="modal">
      <div v-if="showDeleteModal" class="modal-overlay" @click="showDeleteModal = false">
        <div class="modal-content" @click.stop>
          <div class="modal-icon danger">
            <span v-html="warningIcon"></span>
          </div>
          
          <h3 class="modal-title">Supprimer votre compte</h3>
          
          <p class="modal-text">
            Cette action est irréversible. Toutes vos données seront définitivement supprimées.
            Veuillez confirmer en tapant votre mot de passe.
          </p>

          <div class="modal-form">
            <input
              v-model="deletePassword"
              type="password"
              placeholder="Votre mot de passe"
              class="modal-input"
            />
          </div>

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
              @click="deleteAccount"
              :disabled="!deletePassword"
              class="button danger"
            >
              Supprimer le compte
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
const isEditingPersonal = ref(false);
const isEditingPassword = ref(false);
const showDeleteModal = ref(false);
const deletePassword = ref("");
const passwordError = ref("");

// Visibilité des mots de passe
const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

// Données utilisateur
const userData = reactive({
  id: "USR-001",
  firstName: "Sophie",
  lastName: "Martin",
  email: "sophie.martin@email.com",
  phone: "92 00 00 00 00",
  createdAt: "2024-01-15T10:30:00",
  updatedAt: "2024-06-20T14:45:00",
});

// Données mot de passe
const passwordData = reactive({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

// Chargement initial
onMounted(async () => {
  try {
    isPageLoading.value = true;
    // Simulation d'appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Les données sont déjà dans userData
  } catch (error) {
    errorMessage.value = "Impossible de charger le profil";
  } finally {
    isPageLoading.value = false;
  }
});

// Formatage date
const formatDate = (dateString) => {
  if (!dateString) return "-";
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Mise à jour profil
const updatePersonalInfo = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  
  try {
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
    successMessage.value = "Profil mis à jour avec succès";
    isEditingPersonal.value = false;
    setTimeout(() => { successMessage.value = "" }, 3000);
  } catch (error) {
    errorMessage.value = "Erreur lors de la mise à jour";
  } finally {
    isLoading.value = false;
  }
};

// Mise à jour mot de passe
const updatePassword = async () => {
  passwordError.value = "";

  if (passwordData.newPassword !== passwordData.confirmPassword) {
    passwordError.value = "Les mots de passe ne correspondent pas";
    return;
  }

  if (passwordData.newPassword.length < 8) {
    passwordError.value = "Le mot de passe doit contenir au moins 8 caractères";
    return;
  }

  isLoading.value = true;

  try {
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
    successMessage.value = "Mot de passe modifié avec succès";
    isEditingPassword.value = false;
    
    // Reset
    passwordData.currentPassword = "";
    passwordData.newPassword = "";
    passwordData.confirmPassword = "";
    
    setTimeout(() => { successMessage.value = "" }, 3000);
  } catch (error) {
    passwordError.value = "Erreur lors de la mise à jour du mot de passe";
  } finally {
    isLoading.value = false;
  }
};

// Suppression compte
const deleteAccount = async () => {
  if (!deletePassword.value) return;
  
  isLoading.value = true;
  
  try {
    // Simulation API
    await new Promise(resolve => setTimeout(resolve, 1000));
    showDeleteModal.value = false;
    // Redirection vers accueil
    navigateTo('/');
  } catch (error) {
    errorMessage.value = "Impossible de supprimer le compte";
    showDeleteModal.value = false;
  } finally {
    isLoading.value = false;
  }
};

// Icônes SVG
const userIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C6239" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M5 20v-2a7 7 0 0 1 14 0v2"/></svg>`;
const emailIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C6239" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7L12 13 2 7"/></svg>`;
const phoneIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C6239" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>`;
const eyeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>`;
const eyeOffIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 7 10 7a18.5 18.5 0 0 1-2.06 3.5M3 3l18 18"/></svg>`;
const errorIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>`;
const successIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
const warningIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2L2 19h20L12 2z"/></svg>`;
</script>

<style scoped>
.profile-container {
  font-family: 'EB Garamond', serif;
  min-height: 100vh;
  background: #F3F3F3;
}

.profile-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

/* En-tête */
.page-header {
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

/* Messages */
.message {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
}

.message.error {
  background: rgba(255, 0, 0, 0.05);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: #B17951;
}

.message.success {
  background: rgba(140, 98, 57, 0.05);
  border: 1px solid rgba(140, 98, 57, 0.2);
  color: #8C6239;
}

.message-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Grille */
.profile-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

/* Cartes */
.profile-card {
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  border: 1px solid #E7E7E7;
  margin-bottom: 2rem;
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

.edit-button {
  padding: 0.5rem 1rem;
  border: 1px solid #8C6239;
  border-radius: 2rem;
  background: none;
  color: #8C6239;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-button:hover {
  background: #8C6239;
  color: white;
}

.edit-button.cancel {
  border-color: #9B9B9B;
  color: #9B9B9B;
}

.edit-button.cancel:hover {
  background: #9B9B9B;
  color: white;
}

/* Informations */
.info-display {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: #F3F3F3;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-label {
  font-size: 0.9rem;
  color: #9B9B9B;
  margin-bottom: 0.25rem;
}

.info-value {
  font-size: 1.1rem;
  color: #343434;
}

/* Formulaires */
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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

.password-input {
  position: relative;
}

.password-toggle {
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

.password-toggle:hover {
  color: #8C6239;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
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

/* Sécurité */
.security-info {
  padding: 1rem;
  background: #F9F9F9;
  border-radius: 1rem;
}

.security-text {
  color: #676767;
  font-style: italic;
}

.error-message {
  color: #B17951;
  font-size: 0.9rem;
  padding: 0.5rem;
  background: rgba(177, 121, 81, 0.1);
  border-radius: 0.5rem;
}

/* Informations compte */
.account-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.account-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  background: #F9F9F9;
  border-radius: 0.75rem;
}

.account-label {
  font-size: 0.85rem;
  color: #9B9B9B;
}

.account-value {
  font-size: 1rem;
  color: #343434;
}

.account-value.id {
  font-family: monospace;
  font-size: 0.9rem;
}

/* Zone de danger */
.danger-zone {
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #B17951;
}

.danger-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #B17951;
  margin-bottom: 0.75rem;
}

.danger-text {
  font-size: 0.95rem;
  color: #676767;
  margin-bottom: 1.5rem;
}

.danger-button {
  width: 100%;
  padding: 0.75rem;
  background: none;
  border: 1px solid #B17951;
  color: #B17951;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.danger-button:hover {
  background: #B17951;
  color: white;
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
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
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

.modal-icon.danger {
  background: rgba(177, 121, 81, 0.1);
  color: #B17951;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343434;
  text-align: center;
  margin-bottom: 1rem;
}

.modal-text {
  color: #676767;
  text-align: center;
  margin-bottom: 1.5rem;
}

.modal-form {
  margin-bottom: 1.5rem;
}

.modal-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E7E7E7;
  border-radius: 0.75rem;
  font-family: 'EB Garamond', serif;
}

.modal-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
  .profile-wrapper {
    padding: 1rem;
  }

  .profile-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .modal-actions {
    grid-template-columns: 1fr;
  }
}
</style>