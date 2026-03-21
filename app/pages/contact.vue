<template>
  <div class="relative min-h-screen bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310] overflow-hidden">
    
    <!-- Effet de fond animé luxueux -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E8D4AD]/5 rounded-full filter blur-[120px] animate-float-slow animation-delay-2000"></div>
    </div>
    
    <!-- Particules flottantes -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="i in 40" :key="i" class="absolute rounded-full bg-[#E8D4AD]/10 animate-particle" :style="{
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${Math.random() * 20 + 15}s`
      }"></div>
    </div>
    
    <!-- Hero Section -->
    <section class="relative py-12 lg:py-16 overflow-hidden">
      <div class="absolute inset-0">
        <img src="/images/cosmetique.jpg" alt="Contact" class="w-full h-full object-cover opacity-20">
        <div class="absolute inset-0 bg-gradient-to-r from-[#262B14] via-[#262B14]/80 to-[#262B14]"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center animate-fadeInUp">
          <div class="inline-flex items-center gap-2 mb-4">
            <NuxtLink to="/" class="text-[#E8D4AD]/50 text-sm hover:text-[#E8D4AD] transition-colors">Accueil</NuxtLink>
            <svg class="w-4 h-4 text-[#E8D4AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-[#E8D4AD] text-sm">Contact</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-light text-[#E8D4AD] mb-4" style="font-family: 'Playfair Display', serif;">
            Contactez-nous
          </h1>
          <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent mx-auto"></div>
          <p class="text-[#E8D4AD]/50 text-sm mt-4 max-w-md mx-auto">Nous sommes à votre écoute pour répondre à toutes vos questions</p>
        </div>
      </div>
    </section>
    
    <!-- Section Formulaire et Infos -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-8 relative z-10">
      <div class="flex flex-col lg:flex-row gap-10">
        
        <!-- LEFT SIDE: FORM -->
        <div class="w-full lg:w-1/2">
          
          <!-- Title -->
          <div class="mb-8 text-center lg:text-left animate-fadeInRight">
            <h2 class="text-3xl md:text-4xl font-light tracking-wide"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
              Envoyez-nous
              <span class="block text-2xl md:text-3xl font-light mt-2">un message</span>
            </h2>
            <div class="w-16 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mt-4 mx-auto lg:mx-0"></div>
          </div>
          
          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-5 animate-fadeInUp">
            
            <!-- Name and Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="form-group group">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input type="text" v-model="form.name" placeholder="Votre Nom" required
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all text-[#E8D4AD] placeholder:text-[#E8D4AD]/50 text-sm">
                </div>
              </div>
              
              <div class="form-group group">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input type="email" v-model="form.email" placeholder="Votre Email" required
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all text-[#E8D4AD] placeholder:text-[#E8D4AD]/50 text-sm">
                </div>
              </div>
            </div>
            
            <!-- Phone and Subject -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="form-group group">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input type="tel" v-model="form.phone" placeholder="Votre Téléphone"
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all text-[#E8D4AD] placeholder:text-[#E8D4AD]/50 text-sm">
                </div>
              </div>
              
              <div class="form-group group">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <input type="text" v-model="form.subject" placeholder="Sujet"
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all text-[#E8D4AD] placeholder:text-[#E8D4AD]/50 text-sm">
                </div>
              </div>
            </div>
            
            <!-- Message -->
            <div class="form-group group">
              <div class="relative">
                <div class="absolute left-0 top-4">
                  <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea v-model="form.message" rows="4" placeholder="Comment pouvons-nous vous aider ?"
                  class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all text-[#E8D4AD] placeholder:text-[#E8D4AD]/50 resize-none text-sm"></textarea>
              </div>
            </div>
            
            <!-- Submit Button -->
            <div class="pt-2">
              <button type="submit"
                class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden transition-all duration-500">
                <span class="absolute inset-0 border border-[#E8D4AD] rounded-full transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
                <span class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300">
                  Envoyer le message
                </span>
                <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full"></span>
              </button>
            </div>
          </form>
        </div>
        
        <!-- RIGHT SIDE: CONTACT INFO -->
        <div class="w-full lg:w-1/2 space-y-6 animate-fadeInLeft">
          
          <!-- Title -->
          <div class="text-center lg:text-left">
            <h2 class="text-3xl md:text-4xl font-light tracking-wide"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
              Nos Coordonnées
            </h2>
            <div class="w-16 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mt-4 mx-auto lg:mx-0"></div>
          </div>
          
          <!-- Contact Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Adresse -->
            <div class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all cursor-pointer">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all">
                  <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-[#E8D4AD] text-sm font-light mb-1">Adresse</h3>
                  <p class="text-[#E8D4AD]/60 text-xs leading-relaxed">Bè Kpota, Boulevard de l'Oti, Immeuble ALUCAL, Lomé, Togo</p>
                </div>
              </div>
            </div>
            
            <!-- Téléphone -->
            <div class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all cursor-pointer">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all">
                  <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-[#E8D4AD] text-sm font-light mb-1">Téléphone</h3>
                  <p class="text-[#E8D4AD]/60 text-xs">+228 79 19 33 22</p>
                </div>
              </div>
            </div>
            
            <!-- Email -->
            <div class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all cursor-pointer">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all">
                  <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-[#E8D4AD] text-sm font-light mb-1">Email</h3>
                  <p class="text-[#E8D4AD]/60 text-xs">citizen_3warm@icloud.com</p>
                </div>
              </div>
            </div>
            
            <!-- Horaires -->
            <div class="group bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8D4AD]/10 hover:border-[#E8D4AD]/30 transition-all cursor-pointer">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all">
                  <svg class="w-5 h-5 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-[#E8D4AD] text-sm font-light mb-1">Horaires</h3>
                  <p class="text-[#E8D4AD]/60 text-xs">Lundi - Vendredi: 09h00 - 19h00<br>Samedi: 09h00 - 20h00<br>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links - ICÔNES EN BLANC -->
          <div class="bg-gradient-to-br from-[#343A20]/60 to-[#2A2F18]/60 backdrop-blur-sm rounded-xl p-4 border border-[#E8D4AD]/10">
            <h3 class="text-[#E8D4AD] text-sm font-light mb-3 flex items-center gap-2">
              <svg class="w-4 h-4 text-[#E8D4AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Suivez-nous
            </h3>
            <div class="flex gap-3">
              <a href="#" class="w-8 h-8 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all group">
                <svg class="w-4 h-4 text-white group-hover:text-[#262B14]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all group">
                <svg class="w-4 h-4 text-white group-hover:text-[#262B14]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all group">
                <svg class="w-4 h-4 text-white group-hover:text-[#262B14]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- GOOGLE MAPS SECTION -->
    <section class="relative py-8 pb-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="text-center mb-6 animate-fadeInUp">
          <div class="flex items-center justify-center gap-3 mb-3">
            <div class="w-8 h-px bg-[#E8D4AD]/30"></div>
            <h2 class="text-xl font-light text-[#E8D4AD]" style="font-family: 'Playfair Display', serif;">Notre emplacement</h2>
            <div class="w-8 h-px bg-[#E8D4AD]/30"></div>
          </div>
          <p class="text-[#E8D4AD]/50 text-xs">Retrouvez-nous au cœur de Lomé</p>
        </div>
        
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8D4AD]/20 animate-fadeInUp">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#E8D4AD]/20 to-[#E8D4AD]/5 rounded-2xl blur-xl"></div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31739.66104567634!2d1.183393!3d6.131147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e2b4e5c5b5c5%3A0x5c5b5c5b5c5b5c5b!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="350" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="relative z-10">
          </iframe>
        </div>
      </div>
    </section>
    
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="fixed bottom-6 right-6 bg-[#E8D4AD] text-[#262B14] px-4 py-2 rounded-full text-sm shadow-2xl flex items-center gap-2 z-50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const showToast = ref(false)
const toastMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  toastMessage.value = 'Votre message a été envoyé avec succès !'
  showToast.value = true
  setTimeout(() => { showToast.value = false }, 3000)
  
  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -20px) scale(1.05); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes particle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { opacity: 0.3; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
}

.animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
.animate-fadeInUp { animation: fadeInUp 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-fadeInRight { animation: fadeInRight 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-fadeInLeft { animation: fadeInLeft 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; opacity: 0; }
.animate-particle { animation: particle linear infinite; }

.toast-enter-active, .toast-leave-active { transition: all 0.2s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateX(20px); }

.form-group {
  transition: all 0.3s ease;
}
</style>