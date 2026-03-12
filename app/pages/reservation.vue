<template>
  <Breadcrumb :breadcrumb="breadcrumbItems" bgImage="/h.jpg" />
  <div class="bg-[#F3F3F3] text-[#343434] font-[Raleway] min-h-screen pb-12">
    <section class="py-12 md:py-20 bg-[#E7E7E7]">
      <div class="max-w-6xl mx-auto px-4 lg:px-8">
        <div class="bg-white rounded-3xl shadow-2xl p-6 lg:p-12">
          <h2 class="font-[EBGaramond] text-3xl md:text-4xl mb-8 text-center text-[#9F6E45]">
            Réserver votre moment
          </h2>

          <!-- Filters -->
          <div class="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div class="w-full md:w-1/3">
              <label class="block text-sm font-semibold mb-2 text-gray-700">Filtrer par service</label>
              <select v-model="selectedServiceFilter"
                class="w-full px-4 py-3 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45] bg-white transition-all cursor-pointer">
                <option value="">Tous les services</option>
                <option v-for="srv in uniqueServices" :key="srv.id" :value="srv.id">
                  {{ srv.nom }}
                </option>
              </select>
            </div>

            <div class="flex items-center gap-4 mt-6 md:mt-0">
              <button @click="prevMonth"
                class="p-3 rounded-full bg-white hover:bg-gray-100 transition border border-gray-200 focus:outline-none shadow-sm text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div class="font-[EBGaramond] text-2xl min-w-[200px] text-center capitalize text-gray-800">
                {{ monthYear }}
              </div>
              <button @click="nextMonth"
                class="p-3 rounded-full bg-white hover:bg-gray-100 transition border border-gray-200 focus:outline-none shadow-sm text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <!-- Week headers -->
            <div class="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
              <div v-for="dayName in ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']" :key="dayName"
                class="py-4 text-center text-sm font-bold text-gray-500 uppercase tracking-wider">
                {{ dayName }}
              </div>
            </div>
            <!-- Days block -->
            <div class="grid grid-cols-7 gap-px bg-gray-200">
              <div v-for="(day, idx) in calendarDays" :key="idx" @click="day.inMonth ? selectDate(day.date) : null"
                class="min-h-[110px] bg-white p-2 md:p-3 transition-all cursor-pointer relative group" :class="{
                  'opacity-40 cursor-default bg-gray-50': !day.inMonth,
                  'ring-2 ring-inset ring-[#9F6E45] bg-[#fffbf8]': isSameDate(selectedDate, day.date),
                  'hover:bg-orange-50': day.inMonth && !isSameDate(selectedDate, day.date)
                }">
                <div class="flex justify-between items-start">
                  <span class="font-semibold text-sm md:text-base w-7 h-7 flex items-center justify-center rounded-full"
                    :class="{ 'bg-[#9F6E45] text-white': isSameDate(selectedDate, day.date), 'text-gray-700': !isSameDate(selectedDate, day.date) }">
                    {{ day.dayNumber }}
                  </span>
                </div>

                <div class="mt-2 space-y-1">
                  <!-- Show dots for available horaires -->
                  <div v-if="day.inMonth && day.matchingHoraires.length > 0" class="flex flex-wrap gap-1 mt-1">
                    <span v-for="h in day.matchingHoraires.slice(0, 4)" :key="h.id"
                      class="inline-block w-2.5 h-2.5 rounded-full bg-[#9F6E45]"
                      :title="h.service?.nom || h.service?.title"></span>
                    <span v-if="day.matchingHoraires.length > 4" class="text-xs text-gray-500 font-medium">
                      +{{ day.matchingHoraires.length - 4 }}
                    </span>
                  </div>
                  <div v-if="day.inMonth && day.matchingHoraires.length > 0"
                    class="text-[11px] md:text-xs text-[#9F6E45] font-medium truncate mt-1">
                    {{ day.matchingHoraires.length }} créneau(x)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Horaires List for Selected Date -->
          <div v-if="selectedDate" ref="horairesContainer"
            class="mt-12 animate-fade-in p-6 bg-gray-50 border border-gray-100 rounded-3xl">
            <h3 class="font-[EBGaramond] text-2xl mb-6 text-gray-800 border-b pb-4">
              Créneaux pour le <span class="capitalize font-semibold text-[#9F6E45]">{{ dateFormatted }}</span>
            </h3>

            <div v-if="horairesForSelectedDate.length === 0"
              class="text-gray-500 italic p-8 bg-white rounded-xl border border-dashed border-gray-300 text-center">
              <svg class="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Aucun créneau disponible pour ce jour avec les filtres actuels.
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div v-for="horaire in horairesForSelectedDate" :key="horaire.id" @click="selectedHoraire = horaire"
                class="p-5 border-2 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
                :class="{
                  'border-[#9F6E45] bg-[#9F6E45] text-white shadow-md': selectedHoraire && selectedHoraire.id === horaire.id,
                  'border-gray-200 bg-white hover:border-[#9F6E45] text-gray-800': !(selectedHoraire && selectedHoraire.id === horaire.id)
                }">

                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-xl tracking-tight">{{ formatTime(horaire.heure_debut) }}</span>
                  <p class="text-xs font-medium px-2 py-1 rounded-full"
                    :class="{ 'bg-white text-[#9F6E45]': selectedHoraire && selectedHoraire.id === horaire.id, 'bg-gray-100 text-gray-600': !(selectedHoraire && selectedHoraire.id === horaire.id) }">
                    à {{ formatTime(horaire.heure_fin) }}
                  </p>
                </div>

                <h4 class="font-semibold text-base mb-1"
                  :class="{ 'text-white': selectedHoraire && selectedHoraire.id === horaire.id, 'text-[#9F6E45]': !(selectedHoraire && selectedHoraire.id === horaire.id) }">
                  {{ horaire.service?.nom || horaire.service?.title || 'Service' }}
                </h4>

                <div class="flex items-center gap-2 text-sm mt-4 opacity-80 border-t pt-3"
                  :class="{ 'border-white/20': selectedHoraire && selectedHoraire.id === horaire.id }">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Places max: {{ horaire.nbre_clients }}
                </div>
              </div>
            </div>

            <div v-if="selectedHoraire"
              class="mt-8 bg-white p-6 rounded-2xl border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in shadow-sm">
              <div>
                <p class="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Votre sélection</p>
                <p class="font-bold text-lg text-gray-800">
                  {{ selectedHoraire.service?.nom || selectedHoraire.service?.title }} <span
                    class="text-gray-400 font-normal mx-2">|</span>
                  <span class="text-[#9F6E45]">{{ formatTime(selectedHoraire.heure_debut) }}</span>
                </p>
              </div>
              <button @click="submitReservation" :disabled="isSubmitting"
                class="w-full md:w-auto px-10 py-4 bg-[#9F6E45] text-white rounded-full hover:bg-opacity-90 transition font-semibold tracking-wide shadow-md disabled:opacity-50 flex items-center justify-center gap-2 hover:-translate-y-0.5 transform">
                <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Confirmer la réservation
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Réservation' },
];

const router = useRouter();

const horaires = ref([]);
const selectedServiceFilter = ref('');
const currentDate = ref(new Date());
const selectedDate = ref(null);
const selectedHoraire = ref(null);
const isSubmitting = ref(false);
const horairesContainer = ref(null);

// Fetch available schedules on mount
onMounted(async () => {
  try {
    const { $api } = useNuxtApp();
    const data = await $api('/horaires');
    // data can be directly an array, or nested in data
    horaires.value = Array.isArray(data) ? data : (data.data || []);
  } catch (e) {
    console.error('Failed to load horaires', e);
  }
});

// Dynamic options for filter dropdown based on available schedules
const uniqueServices = computed(() => {
  const map = new Map();
  horaires.value.forEach(h => {
    if (h.service && h.service.id) {
      map.set(h.service.id, {
        id: h.service.id,
        nom: h.service.nom || h.service.title || 'Service'
      });
    }
  });
  return Array.from(map.values()).sort((a, b) => a.nom.localeCompare(b.nom));
});

// Navigate options
const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
  selectedDate.value = null;
  selectedHoraire.value = null;
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
  selectedDate.value = null;
  selectedHoraire.value = null;
};

const monthYear = computed(() => {
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(currentDate.value);
});

// Grid building logic
const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Normalizing to Lundi=1 -> Dimanche=7
  let firstDayOfWeek = firstDayOfMonth.getDay();
  if (firstDayOfWeek === 0) firstDayOfWeek = 7;

  const days = [];

  // Previous month padding
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = 1; i < firstDayOfWeek; i++) {
    const dayDate = new Date(year, month - 1, prevMonthLastDay - firstDayOfWeek + i + 1);
    days.push({
      date: dayDate,
      dayNumber: dayDate.getDate(),
      inMonth: false,
      matchingHoraires: []
    });
  }

  // Current month active days
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const dayDate = new Date(year, month, i);
    const jsDay = dayDate.getDay();

    // JS 0 is Sunday, which corresponds perfectly to our database logic where Lundi=1, Dimanche=0 depending on config.
    // If our Jour seed says `0=Dimanche, 1=Lundi`, it matches `dayDate.getDay()` natively.

    const matching = horaires.value.filter(h => {
      const matchDay = h.jour && Number(h.jour.numero) === jsDay;
      const matchService = selectedServiceFilter.value ? (h.service && h.service.id === selectedServiceFilter.value) : true;
      return matchDay && matchService;
    });

    matching.sort((a, b) => a.heure_debut.localeCompare(b.heure_debut));

    days.push({
      date: dayDate,
      dayNumber: i,
      inMonth: true,
      hasHoraires: matching.length > 0,
      matchingHoraires: matching
    });
  }

  // Next month padding
  const totalCells = days.length > 35 ? 42 : 35;
  const cellsToFill = totalCells - days.length;
  for (let i = 1; i <= cellsToFill; i++) {
    const dayDate = new Date(year, month + 1, i);
    days.push({
      date: dayDate,
      dayNumber: i,
      inMonth: false,
      matchingHoraires: []
    });
  }

  return days;
});

const isSameDate = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
};

const selectDate = async (date) => {
  selectedDate.value = date;
  selectedHoraire.value = null; // reset if day bounds changed

  await nextTick();
  if (horairesContainer.value) {
    horairesContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const formatTime = (timeStr) => {
  if (!timeStr) return '';
  const parts = timeStr.split(':');
  if (parts.length >= 2) {
    return `${parts[0]}h${parts[1] !== '00' ? parts[1] : ''}`;
  }
  return timeStr;
};

// Extracted from grid arrays for explicit day presentation
const horairesForSelectedDate = computed(() => {
  if (!selectedDate.value) return [];
  const jsDay = selectedDate.value.getDay();
  const matching = horaires.value.filter(h => {
    const matchDay = h.jour && Number(h.jour.numero) === jsDay;
    const matchService = selectedServiceFilter.value ? (h.service && h.service.id === selectedServiceFilter.value) : true;
    return matchDay && matchService;
  });
  return matching.sort((a, b) => a.heure_debut.localeCompare(b.heure_debut));
});

const dateFormatted = computed(() => {
  if (!selectedDate.value) return '';
  return new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(selectedDate.value);
});

// Make the reservation directly with timeslot since user is authed securely via headers
const submitReservation = async () => {
  if (!selectedHoraire.value) {
    alert('Veuillez choisir un créneau horaire.');
    return;
  }

  isSubmitting.value = true;

  try {
    const { $api } = useNuxtApp();
    await $api('/reservations', {
      method: 'POST',
      body: {
        horaire_id: selectedHoraire.value.id,
      },
    });

    alert('Votre réservation a été confirmée avec succès !');

    // Clear selections or redirect
    selectedHoraire.value = null;
    selectedDate.value = null;
    // router.push('/reservations'); // Optional redirection to reservations list

  } catch (err) {
    console.error('Erreur réservation:', err);
    if (err.response?._data?.message) {
      alert(err.response._data.message);
    } else {
      alert('Une erreur s\'est produite. Veuillez vous assurer d\'être connecté.');
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
