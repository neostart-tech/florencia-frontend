<template>
   <section class="max-w-7xl mx-auto px-10 lg:px-16 py-20 bg-[#E7E7E7]">
      <h2 class="font-[EBGaramond] text-4xl text-[#343434] mb-16 text-center"> Nos services </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <img src="/services/service-manucure.jpg" alt="Manucure" class="w-full h-40 object-cover rounded mb-4" />
          <h3 class="font-semibold text-gray-900 text-lg mb-2">Manucure</h3>
          <p class="text-gray-700 mb-4">Soin complet des ongles et vernis professionnels.</p>
          <NuxtLink to="/reservation" class="text-[#8C6239] font-semibold hover:underline">Prendre RDV</NuxtLink>
        </div>
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <img src="/services/service-pedicure.jpg" alt="Pédicure" class="w-full h-40 object-cover rounded mb-4" />
          <h3 class="font-semibold text-gray-900 text-lg mb-2">Pédicure</h3>
          <p class="text-gray-700 mb-4">Soin des pieds et pose de vernis semi-permanent.</p>
          <NuxtLink to="/reservation" class="text-[#8C6239] font-semibold hover:underline">Prendre RDV</NuxtLink>
        </div>
        <div class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <img src="/services/service-coiffure.jpg " alt="Coiffure" class="w-full h-40 object-cover rounded mb-4" />
          <h3 class="font-semibold text-gray-900 text-lg mb-2">Coiffure</h3>
          <p class="text-gray-700 mb-4">Coupe, coiffure et extensions personnalisées.</p>
          <NuxtLink to="/reservation" class="text-[#8C6239] font-semibold hover:underline">Prendre RDV</NuxtLink>
        </div>
      </div>
        <!-- BOUTON -->
        <div class="mt-16 text-center">
            <NuxtLink
            to="/services"
            class="inline-block border border-black px-10 py-4 rounded-full font-semibold text-black hover:bg-black hover:text-white transition"
            >
            Voir tous nos services
            </NuxtLink>
        </div>
    </section>
</template>