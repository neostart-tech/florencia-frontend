<template>
  <div class="min-h-screen bg-[#E7E7E7] py-20">
    <div class="flex justify-center">
      <div class="w-full max-w-5xl bg-white grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-lg overflow-hidden">
        <!-- IMAGE -->
        <div class="hidden md:block">
          <img src="/h.jpg" alt="Connexion" class="w-full h-full object-cover" />
        </div>

        <!-- FORM -->
        <div class="p-10" @submit.prevent="handleLogin">
          <h1 class="font-serif text-3xl text-[#7A4A2E] mb-2">Se connecter</h1>

          <p class="text-sm text-gray-600 mb-8">
            Accédez à votre compte et gérez vos commandes en toute simplicité.
          </p>

          <form class="space-y-5" @submit.prevent="handleLogin">
            <div>
              <label class="text-sm text-gray-700">Email</label>
              <input v-model="email" type="email" placeholder="exemple@email.com"
                class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
                required />
            </div>

            <div>
              <label class="text-sm text-gray-700">Mot de passe</label>
              <div class="relative mt-1">

                <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                  class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
                  required />

                <button type="button" @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.219-3.423m1.43-1.1A9.963 9.963 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-1.481 2.563M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Erreur -->
            <p v-if="error" class="text-sm text-red-600 text-center">
              {{ error }}
            </p>

            <div class="flex justify-between items-center text-sm">
              <label class="flex items-center gap-2">
                <input type="checkbox" class="cursor-pointer" />
                Se souvenir de moi
              </label>

              <a href="#" class="text-[#7A4A2E] hover:underline">
                Mot de passe oublié ?
              </a>
            </div>

            <button type="submit" :disabled="auth.loading"
              class="cursor-pointer w-full bg-[#7A4A2E] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#5C3621] transition shadow-md rounded-sm">
              {{ auth.loading ? "Connexion..." : "Se connecter" }}
            </button>
          </form>

          <p class="text-sm text-center text-gray-600 mt-8">
            Vous n’avez pas de compte ?
            <NuxtLink to="/inscription" class="text-[#7A4A2E] font-medium hover:underline">
              Créer un compte
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";
import { ref, onMounted } from "vue";

import { useRoute, useRouter } from "vue-router";
import { useToast } from "#imports";

// Redirect if already logged in
onMounted(() => {
  // Only redirect when on the login page (e.g., /connexion)
  if (auth.isLogged && route.path === "/connexion") {
    router.replace("/");
  }
});

const router = useRouter();
const auth = useAuthStore();
const route = useRoute();
const email = ref("");
const password = ref("");
const showPassword = ref(false);
const error = ref("");
const toast = useToast();
const handleLogin = async () => {
  error.value = "";

  try {
    await auth.login(email.value, password.value);

    const redirect =
      typeof route.query.redirect === "string"
        ? route.query.redirect
        : "/";

    router.replace(redirect);
    toast.success({ message: "Heureux de vous revoir !" });
  } catch (e: any) {
    error.value = e.message;
  }
};
</script>
