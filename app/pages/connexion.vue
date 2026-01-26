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
            alt="Connexion"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- FORM -->
        <div class="p-10">
          <h1 class="font-serif text-3xl text-[#7A4A2E] mb-2">
            Se connecter
          </h1>

          <p class="text-sm text-gray-600 mb-8">
            Accédez à votre compte et gérez vos commandes en toute simplicité.
          </p>

          <form class="space-y-5">
            <div>
              <label class="text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="exemple@email.com"
                class="w-full border p-3 text-sm mt-1
                       focus:outline-none focus:border-[#7A0C0C]"
              />
            </div>

            <div>
              <label class="text-sm text-gray-700">Mot de passe</label>
              <input
                type="password"
                placeholder="••••••••"
                class="w-full border p-3 text-sm mt-1
                       focus:outline-none focus:border-[#7A0C0C]"
              />
            </div>

            <div class="flex justify-between items-center text-sm">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="cursor-pointer" />
                Se souvenir de moi
              </label>

              <a
                href="#"
                class="text-[#7A4A2E] hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              class="cursor-pointer w-full
                     bg-[#7A4A2E] text-white py-4
                     uppercase tracking-widest text-sm
                     hover:bg-[#5C3621] transition
                     shadow-md rounded-sm"
            >
              Se connecter
            </button>
          </form>

          <p class="text-sm text-center text-gray-600 mt-8">
            Vous n’avez pas de compte ?
            <NuxtLink
              to="/inscription"
              class="text-[#7A4A2E] font-medium hover:underline"
            >
              Créer un compte
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
