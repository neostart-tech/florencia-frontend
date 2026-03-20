<template>
  <section class="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
    </div>
    
    <!-- Elegant pattern overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- LEFT SIDE: FORM -->
        <div class="w-full lg:w-1/2">
          
          <!-- Title -->
          <div class="mb-8 text-center lg:text-left">
            <h2 class="text-4xl md:text-5xl font-light tracking-wide"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
              Réserver
              <span class="block text-3xl md:text-4xl font-light mt-2">Une Place</span>
            </h2>
            <div class="w-20 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mt-4 mx-auto lg:mx-0"></div>
          </div>
          
          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            
            <!-- Row 1: Name and Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Your Name -->
              <div class="form-group group">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    v-model="form.name"
                    placeholder="Votre Nom"
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all duration-300 text-[#E8D4AD] placeholder:text-[#E8D4AD]/50"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
                  />
                </div>
              </div>
              
              <!-- Your Email -->
              <div class="form-group group">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    v-model="form.email"
                    placeholder="Votre Email"
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all duration-300 text-[#E8D4AD] placeholder:text-[#E8D4AD]/50"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
                  />
                </div>
              </div>
            </div>
            
            <!-- Row 2: Date and Service Type -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Custom Date Picker -->
              <div class="form-group group relative">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    ref="dateInput"
                    type="date" 
                    v-model="form.date"
                    class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all duration-300 text-[#E8D4AD] cursor-pointer"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
                  />
                </div>
              </div>
              
              <!-- Custom Service Type Select with Elegant Design -->
              <div class="form-group group relative">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div 
                    @click="toggleDropdown"
                    class="w-full pl-8 pr-10 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus-within:border-[#E8D4AD] cursor-pointer flex items-center justify-between transition-all duration-300"
                    :class="{ 'border-[#E8D4AD]': isDropdownOpen }"
                  >
                    <span 
                      class="text-[#E8D4AD]"
                      :class="{ 'text-[#E8D4AD]/50': !selectedServiceName }"
                      style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
                    >
                      {{ selectedServiceName || "Type de Service" }}
                    </span>
                    <svg class="w-4 h-4 text-[#E8D4AD]/50 transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <!-- Custom Dropdown Menu -->
                  <transition name="dropdown">
                    <div v-if="isDropdownOpen" class="absolute top-full left-0 right-0 mt-1 bg-[#2A2F18] border border-[#E8D4AD]/20 rounded-lg shadow-xl z-20 overflow-hidden">
                      <div 
                        v-for="service in services" 
                        :key="service.value"
                        @click="selectService(service)"
                        class="px-4 py-3 cursor-pointer transition-all duration-300 hover:bg-[#E8D4AD] hover:text-[#262B14] text-[#E8D4AD]"
                        :class="{ 'bg-[#E8D4AD] text-[#262B14]': form.serviceType === service.value }"
                        style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
                      >
                        {{ service.label }}
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            
            <!-- Row 3: Message -->
            <div class="form-group group">
              <div class="relative">
                <div class="absolute left-0 top-4">
                  <svg class="w-5 h-5 text-[#E8D4AD]/50 group-focus-within:text-[#E8D4AD] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <textarea 
                  v-model="form.message"
                  rows="4"
                  placeholder="Comment pouvons-nous vous aider ? N'hésitez pas à nous contacter !"
                  class="w-full pl-8 pr-4 py-3 bg-transparent border-b border-[#E8D4AD]/30 focus:border-[#E8D4AD] outline-none transition-all duration-300 text-[#E8D4AD] placeholder:text-[#E8D4AD]/50 resize-none"
                  style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;"
                ></textarea>
              </div>
            </div>
            
            <!-- Submit Button -->
            <div class="pt-4 flex justify-center lg:justify-start">
              <button 
                type="submit"
                class="group relative inline-flex items-center justify-center px-10 py-3 overflow-hidden transition-all duration-500"
              >
                <span class="absolute inset-0 border border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
                <span class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
                      style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Envoyer
                </span>
                <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </button>
            </div>
            
          </form>
        </div>
        
        <!-- RIGHT SIDE: IMAGE -->
        <div class="w-full lg:w-1/2 flex justify-center group">
          <div class="relative max-w-md w-full">
            <div class="absolute -inset-4 bg-gradient-to-l from-[#E8D4AD]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative overflow-hidden shadow-2xl">
              <img 
                src="/images/huile.jpg" 
                alt="Salon de Coiffure"
                class="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                style="border-radius: 200px 200px 0 0;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="absolute -top-6 -left-6 w-20 h-20 border border-[#E8D4AD]/30 rounded-full animate-float"></div>
            <div class="absolute -bottom-6 -right-6 w-16 h-16 border border-[#E8D4AD]/20 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue'

interface FormData {
  name: string;
  email: string;
  date: string;
  serviceType: string;
  message: string;
}

interface Service {
  value: string;
  label: string;
}

const form = reactive<FormData>({
  name: '',
  email: '',
  date: '',
  serviceType: '',
  message: ''
})

const services: Service[] = [
  { value: 'haircut', label: 'Coupe de Cheveux' },
  { value: 'coloring', label: 'Coloration' },
  { value: 'treatment', label: 'Traitement du Cuir Chevelu' },
  { value: 'styling', label: 'Coiffage' },
  { value: 'balayage', label: 'Balayage' }
]

const isDropdownOpen = ref(false)
const dateInput = ref<HTMLInputElement | null>(null)

const selectedServiceName = computed(() => {
  const service = services.find(s => s.value === form.serviceType)
  return service ? service.label : ''
})

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectService = (service: Service) => {
  form.serviceType = service.value
  isDropdownOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.form-group') && isDropdownOpen.value) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleSubmit = () => {
  console.log('Formulaire soumis:', form)
  alert('Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.')
  form.name = ''
  form.email = ''
  form.date = ''
  form.serviceType = ''
  form.message = ''
}
</script>

<style scoped>
/* Elegant fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

/* Animations */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Dropdown animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Date input styling */
input[type="date"] {
  color-scheme: dark;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  color: #E8D4AD;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

/* Form group hover effects */
.form-group {
  transition: all 0.3s ease;
}

/* Animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>