<template>
    <Breadcrumb :breadcrumb="breadcrumbItems" bgImage="/h.jpg" />
    <div class="bg-[#F3F3F3] text-[#343434] font-[Raleway]">

    <!-- FORMULAIRE -->
    <section class="py-24 bg-[#E7E7E7]">
      <div class="max-w-5xl mx-auto px-6 lg:px-16">

        <div class="bg-white rounded-3xl shadow-2xl p-10 lg:p-16">

          <h2 class="font-[EBGaramond] text-3xl mb-12 text-center">
            Réserver un rendez-vous
          </h2>

          <form class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Nom complet"
              class="w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            />

            <input
              type="email"
              placeholder="Adresse email"
              class="w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            />

            <select
              class="w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            >
              <option>Choisir un service</option>
              <option>Manucure</option>
              <option>Pédicure</option>
              <option>Coiffure</option>
              <option>Soin visage</option>
            </select>

            <input
              type="tel"
              placeholder="Téléphone"
              class="w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            />

            <input
              type="date"
              class="w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            />

            <input
              type="time"
              class="w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            />

            <textarea
              rows="4"
              placeholder="Message ou précision"
              class="md:col-span-2 w-full px-5 py-4 rounded-xl border border-[#DADADA] focus:outline-none focus:ring-2 focus:ring-[#9F6E45]"
            ></textarea>

            <button
              class="md:col-span-2 bg-[#9F6E45] text-white py-4 rounded-full hover:bg-[#9F6E45] transition font-semibold tracking-wide"
            >
              Confirmer le rendez-vous
            </button>

          </form>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>

import Breadcrumb from '~/components/Breadcrumb.vue'
const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Réservation' }
]

const services = [
  { title: 'Manucure', desc: 'Soin & élégance des mains', icon: '💅' },
  { title: 'Pédicure', desc: 'Confort & beauté des pieds', icon: '🦶' },
  { title: 'Coiffure', desc: 'Styles modernes & classiques', icon: '💇‍♀️' },
  { title: 'Soins visage', desc: 'Éclat & bien-être', icon: '✨' },
]
</script>
