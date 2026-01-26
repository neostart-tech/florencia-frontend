<template>
  <div class="bg-[#F6E9DD]">

    <!-- MAP SECTION -->
    <section class="w-full h-[420px] relative">
    <iframe
        class="w-full h-full border-0 grayscale"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=19%20North%20Road%20Piscataway%20NJ%2008854&output=embed"
    ></iframe>

  <!-- Map pin décoratif (optionnel, luxe) -->
  <div class="absolute top-[50%] left-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    <div class="w-[18px] h-[18px] bg-[#7A0C0C] rounded-full shadow-lg"></div>
  </div>
</section>


    <!-- CONTACT INFOS -->
    <section class="bg-white">
      <div
        class="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-[40px] p-[60px]"
      >
        <!-- Address -->
        <div>
          <h3 class="text-[#7A0C0C] font-serif text-[18px] mb-[12px]">
            Address
          </h3>
          <p class="text-gray-700 leading-relaxed">
            19 North Road Piscataway,<br />
            NJ 08854
          </p>
        </div>

        <!-- Email -->
        <div>
          <h3 class="text-[#7A0C0C] font-serif text-[18px] mb-[12px]">
            Email
          </h3>
          <p class="text-gray-700">
            gamma@sbcglobal.net
          </p>
        </div>

        <!-- Phone -->
        <div>
          <h3 class="text-[#7A0C0C] font-serif text-[18px] mb-[12px]">
            Phone
          </h3>
          <p class="text-gray-700">
            (246) 917-5787<br />
            (979) 353-9935
          </p>
        </div>
      </div>
    </section>

    <!-- BOOK APPOINTMENT -->
    <section class="bg-[#F6E9DD]">
      <div class="min-h-screen bg-gray-50 p-6">
    <!-- En-tête -->
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-gray-800 tracking-wide">BEAUTY SALON</h1>
      <div class="mt-2 flex items-center">
        <span class="text-gray-500 text-sm">Home</span>
        <span class="mx-2 text-gray-400">•</span>
        <span class="text-gray-500 text-sm">Services</span>
        <span class="mx-2 text-gray-400">•</span>
        <span class="text-gray-500 text-sm">About</span>
        <span class="mx-2 text-gray-400">•</span>
        <span class="font-semibold text-sm">Book appointment</span>
      </div>
    </header>

    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Section gauche - Texte descriptif -->
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-800">Book appointment</h2>
          <p class="text-gray-600 leading-relaxed">
            Mi senectus ac ullamcorper sollicitudin volutpat sit a velit. Purus scelerisque
          </p>
          <div class="pt-4">
            <div class="space-y-8">
              <!-- Premier bloc de contact -->
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Call us</h3>
                  <p class="text-gray-600">+1 (555) 000-0000</p>
                </div>
              </div>
              
              <!-- Deuxième bloc de contact -->
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800">Email us</h3>
                  <p class="text-gray-600">hello@beauty-salon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section droite - Formulaire -->
        <div class="bg-white p-8 rounded-xl shadow-md">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Ligne 1 : Prénom et Nom -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-800 font-medium mb-2">First name</label>
                <input 
                  type="text" 
                  v-model="form.firstName"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="John"
                >
              </div>
              <div>
                <label class="block text-gray-800 font-medium mb-2">Last name</label>
                <input 
                  type="text" 
                  v-model="form.lastName"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Doe"
                >
              </div>
            </div>

            <!-- Ligne 2 : Email et Téléphone -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-800 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  v-model="form.email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="john@example.com"
                >
              </div>
              <div>
                <label class="block text-gray-800 font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                >
              </div>
            </div>

            <!-- Ligne 3 : Date et Heure -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-800 font-medium mb-2">Date</label>
                <input 
                  type="date" 
                  v-model="form.date"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                >
              </div>
              <div>
                <label class="block text-gray-800 font-medium mb-2">Time</label>
                <select 
                  v-model="form.time"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                >
                  <option value="" disabled selected>Sélectionnez une heure</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>

            <!-- Ligne 4 : Service -->
            <div>
              <label class="block text-gray-800 font-medium mb-2">Service</label>
              <select 
                v-model="form.service"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              >
                <option value="" disabled selected>Sélectionnez un service</option>
                <option value="haircut">Coupe de cheveux</option>
                <option value="coloration">Coloration</option>
                <option value="manicure">Manucure</option>
                <option value="facial">Soin du visage</option>
                <option value="massage">Massage</option>
              </select>
            </div>

            <!-- Bouton d'envoi -->
            <button 
              type="submit"
              class="w-full bg-gray-800 text-white font-medium py-3 px-4 rounded-md hover:bg-gray-900 transition duration-200"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Données du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  service: ''
});

// Fonction de soumission du formulaire
const submitForm = () => {
  console.log('Formulaire soumis:', form.value);
  // Ici vous ajouteriez la logique pour envoyer les données au backend
  alert('Votre réservation a été envoyée avec succès!');
  
  // Réinitialisation du formulaire
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  };
};
</script>

<style>
/* Styles personnalisés pour améliorer l'apparence */
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0.6;
  cursor: pointer;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
}

/* Style pour les options de sélection */
select option {
  padding: 8px;
}
</style>