<template>
  <div class="min-h-screen bg-[#E7E7E7] py-20">
    <div class="flex justify-center">
      <div
        class="w-full max-w-5xl bg-white
               grid grid-cols-1 md:grid-cols-2
               shadow-xl rounded-lg overflow-hidden"
      >
        <!-- IMAGE -->
        <div class="hidden md:block">
          <img
            src="/h.jpg"
            alt="Inscription"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- FORM -->
        <div class="p-10">
          <h1 class="font-serif text-3xl text-[#7A4A2E] mb-2">
            Créer un compte
          </h1>
          <p class="text-sm text-gray-600 mb-8">
            Rejoignez Florencia et profitez d’une expérience beauté unique.
          </p>

          <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Prénom"
              class="border p-3 text-sm focus:outline-none focus:border-[#7A0C0C]"
            />
            <input
              type="text"
              placeholder="Nom"
              class="border p-3 text-sm focus:outline-none focus:border-[#7A0C0C]"
            />

            <input
              type="email"
              placeholder="Email"
              class="border p-3 text-sm md:col-span-2
                     focus:outline-none focus:border-[#7A0C0C]"
            />

            <input
              type="text"
              placeholder="Adresse"
              class="border p-3 text-sm md:col-span-2
                     focus:outline-none focus:border-[#7A0C0C]"
            />

            <input
              type="password"
              placeholder="Mot de passe"
              class="border p-3 text-sm focus:outline-none focus:border-[#7A0C0C]"
            />
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              class="border p-3 text-sm focus:outline-none focus:border-[#7A0C0C]"
            />

            <label class="md:col-span-2 flex gap-2 text-sm text-gray-600 mt-2">
              <input type="checkbox" class="mt-1 cursor-pointer" />
              J’accepte les conditions générales et la politique de confidentialité
            </label>

            <button
              type="submit"
              class="cursor-pointer md:col-span-2 mt-4
                     bg-[#7A4A2E] text-white py-4
                     uppercase tracking-widest text-sm
                     hover:bg-[#5C3621] transition
                     shadow-md rounded-sm"
            >
              S’inscrire
            </button>
          </form>

          <p class="text-sm text-center text-gray-600 mt-8">
            Vous avez déjà un compte ?
            <NuxtLink
              to="/connexion"
              class="text-[#7A4A2E] font-medium hover:underline"
            >
              Se connecter
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>