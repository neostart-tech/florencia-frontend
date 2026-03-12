<template>
  <div class="min-h-screen bg-[#E7E7E7] py-20">
    <div class="flex justify-center">
      <div class="w-full max-w-5xl bg-white
               grid grid-cols-1 md:grid-cols-2
               shadow-xl rounded-lg overflow-hidden">
        <!-- IMAGE -->
        <div class="hidden md:block">
          <img src="/h.jpg" alt="Inscription" class="w-full h-full object-cover" />
        </div>

        <!-- FORM -->
        <div class="p-10" @submit.prevent="handleRegister">
          <h1 class="font-serif text-3xl text-[#7A4A2E] mb-2">
            Créer un compte
          </h1>
          <p class="text-sm text-gray-600 mb-8">
            Rejoignez Florencia et profitez d’une expérience beauté unique.
          </p>

          <form class="grid grid-cols-1 gap-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <div class="space-y-1">
              <label for="nom" class="block text-sm font-medium text-gray-700">Nom complet</label>
              <input v-model="name" type="text" id="nom" placeholder="Nom complet"
                class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
                required />
            </div>

            <div class="space-y-1">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="email" type="email" id="email" placeholder="Email"
                class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
                required />
            </div>

            <div class="space-y-1">
              <label for="telephone" class="block text-sm font-medium text-gray-700">Numéro de téléphone
                (facultatif)</label>
              <input v-model="tel" type="tel" id="telephone" placeholder="Numéro de téléphone"
                class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent" />
            </div>

            <div class="space-y-1">
              <label for="motdepasse" class="block text-sm font-medium text-gray-700">Mot de passe</label>
              <div class="relative mt-1">

                <input v-model="password" :type="showPassword ? 'text' : 'password'" id="motdepasse"
                  placeholder="Mot de passe"
                  class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
                  required />
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700">
                  <!-- Œil ouvert -->
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>

                  <!-- Œil barré -->
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.219-3.423m1.43-1.1A9.963 9.963 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-1.481 2.563M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="space-y-1">
              <label for="confirmer" class="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
              <div class="relative mt-1">
                <input v-model="confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" id="confirmer"
                  placeholder="Confirmer le mot de passe"
                  class="w-full border border-gray-300 p-3 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
                  required />
                <button type="button" @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700">
                  <!-- Œil ouvert -->
                  <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>

                  <!-- Œil barré -->
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.96 9.96 0 012.219-3.423m1.43-1.1A9.963 9.963 0 0112 5c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-1.481 2.563M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
                  </svg>
                </button>
              </div>
            </div>

            <p v-if="error" class="text-sm text-red-600 text-center">
              {{ error }}
            </p>

            <button type="submit" :disabled="auth.loading"
              class="w-full mt-4 bg-[#7A4A2E] text-white py-3 px-4 uppercase tracking-widest text-sm font-semibold rounded-md hover:bg-[#5C3621] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7A0C0C] focus:ring-offset-2">
              {{ auth.loading ? "Inscription en cours..." : "S’inscrire" }}
            </button>
          </form>

          <p class="text-sm text-center text-gray-600 mt-8">
            Vous avez déjà un compte ?
            <NuxtLink to="/connexion" class="text-[#7A4A2E] font-medium hover:underline">
              Se connecter
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~~/stores/auth";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "#imports";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();
const toast = useToast();

const name = ref("");
const email = ref("");
const tel = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const error = ref("");

const handleRegister = async () => {
  error.value = "";

  if (password.value !== confirmPassword.value) {
    error.value = "Les mots de passe ne correspondent pas";
    return;
  }

  try {
    await auth.register({
      nom: name.value,
      email: email.value,
      tel: tel.value || null,
      password: password.value,
    });

    // Redirection après inscription
    const redirect =
      typeof route.query.redirect === "string"
        ? route.query.redirect
        : router.options.history.state.back || "/";

    navigateTo(redirect);
    toast.success({ message: "Bienvenue sur notre plateforme !" });
  } catch (err: any) {
    error.value = err?.message || "Impossible de créer le compte.";
  }
};
</script>