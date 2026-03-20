<template>
  <section class="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
    </div>
    
    <!-- Elegant pattern overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <!-- LEFT SIDE: IMAGE (fixed) -->
        <div class="w-full lg:w-1/2 flex justify-center group">
          <div class="relative max-w-md w-full">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#E8D4AD]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative overflow-hidden shadow-2xl">
              <img 
                src="/images/creme.jpg" 
                alt="Salon de Beauté"
                class="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                style="border-radius: 80px 20px 80px 20px;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div class="absolute -top-6 -right-6 w-20 h-20 border border-[#E8D4AD]/30 rounded-full animate-float"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 border border-[#E8D4AD]/20 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </div>
        
        <!-- RIGHT SIDE: TESTIMONIAL CONTENT -->
        <div class="w-full lg:w-1/2 space-y-6">
          
          <!-- Title with random stars -->
          <div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
              Ils Nous
              <span class="block text-3xl md:text-4xl font-light mt-2">Font Confiance</span>
            </h2>
            <div class="flex gap-1 mt-4">
              <div v-for="i in randomStars" :key="i" class="star-container" :style="{ animationDelay: `${Math.random() * 0.5}s` }">
                <svg class="w-5 h-5 text-[#FBBF24] star-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <!-- Optional: show rating number -->
              <span class="ml-2 text-sm text-[#E8D4AD]/60" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                ({{ randomStars }}/5)
              </span>
            </div>
          </div>
          
          <!-- Testimonial Text with animation -->
          <transition name="fade" mode="out-in">
            <p :key="currentTestimonial" class="text-base md:text-lg leading-relaxed text-[#E8D4AD]/90 italic"
               style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; line-height: 1.7;">
              "{{ testimonials[currentTestimonial].text }}"
            </p>
          </transition>
          
          <!-- Divider -->
          <div class="w-16 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent"></div>
          
          <!-- Client Info and Navigation -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <!-- Avatar that changes with testimonial -->
              <transition name="fade" mode="out-in">
                <img 
                  :key="currentTestimonial"
                  :src="testimonials[currentTestimonial].avatar" 
                  :alt="testimonials[currentTestimonial].name"
                  class="w-12 h-12 rounded-full object-cover border-2 border-[#E8D4AD]"
                />
              </transition>
              <div>
                <transition name="fade" mode="out-in">
                  <h4 :key="currentTestimonial" class="text-lg font-light text-[#E8D4AD]"
                      style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                    {{ testimonials[currentTestimonial].name }}
                  </h4>
                </transition>
                <transition name="fade" mode="out-in">
                  <p :key="currentTestimonial" class="text-xs text-[#E8D4AD]/60 uppercase tracking-wider"
                     style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                    {{ testimonials[currentTestimonial].role }}
                  </p>
                </transition>
              </div>
            </div>
            
            <!-- Navigation Arrows -->
            <div class="flex gap-3">
              <button 
                @click="prevTestimonial"
                class="w-10 h-10 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all duration-300 group"
              >
                <svg class="w-5 h-5 text-[#E8D4AD] group-hover:text-[#262B14] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                @click="nextTestimonial"
                class="w-10 h-10 rounded-full border border-[#E8D4AD]/30 flex items-center justify-center hover:bg-[#E8D4AD] hover:text-[#262B14] transition-all duration-300 group"
              >
                <svg class="w-5 h-5 text-[#E8D4AD] group-hover:text-[#262B14] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Dots indicator -->
          <div class="flex gap-2 pt-4">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              @click="currentTestimonial = index"
              class="transition-all duration-300"
              :class="[
                currentTestimonial === index 
                  ? 'w-6 h-1.5 bg-[#E8D4AD]' 
                  : 'w-1.5 h-1.5 bg-[#E8D4AD]/40 hover:bg-[#E8D4AD]/60 rounded-full'
              ]"
            ></button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials = ref<Testimonial[]>([
  {
    text: "Un service absolument exceptionnel ! L'équipe est talentueuse et à l'écoute. Je suis repartie avec une coupe qui me correspond parfaitement. Le salon est magnifique et l'ambiance est très relaxante. Je recommande vivement !",
    name: "Marie Lambert",
    role: "Cliente Fidèle",
    avatar: "/images/creme.jpg",
    rating: 5
  },
  {
    text: "La meilleure expérience de coiffure que j'ai eue ! Les experts sont incroyablement talentueux et prennent le temps de comprendre ce que vous voulez. Les produits utilisés sont de grande qualité. Un vrai moment de plaisir !",
    name: "Sophie Bernard",
    role: "Cliente depuis 2020",
    avatar: "/images/creme.jpg",
    rating: 5
  },
  {
    text: "Je suis tombée amoureuse de ce salon ! L'ambiance est chaleureuse, l'équipe est professionnelle et le résultat est toujours parfait. Le balayage qu'ils m'ont fait est magnifique. Merci à toute l'équipe !",
    name: "Julie Moreau",
    role: "Cliente Régulière",
    avatar: "/images/creme.jpg",
    rating: 5
  }
])

const currentTestimonial = ref(0)
const randomStars = ref(0)

const generateRandomStars = () => {
  // Generate random number between 3 and 5
  return Math.floor(Math.random() * 3) + 3
}

const nextTestimonial = () => {
  if (currentTestimonial.value < testimonials.value.length - 1) {
    currentTestimonial.value++
  } else {
    currentTestimonial.value = 0
  }
  // Generate new random stars when testimonial changes
  randomStars.value = generateRandomStars()
}

const prevTestimonial = () => {
  if (currentTestimonial.value > 0) {
    currentTestimonial.value--
  } else {
    currentTestimonial.value = testimonials.value.length - 1
  }
  // Generate new random stars when testimonial changes
  randomStars.value = generateRandomStars()
}

onMounted(() => {
  // Generate random stars on initial load
  randomStars.value = generateRandomStars()
})
</script>

<style scoped>
/* Elegant fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

/* Elegant animations */
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

@keyframes starPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes starSpin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(15deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes starBounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.1);
  }
}

/* Random animations for stars */
.star-container {
  display: inline-block;
  animation: var(--star-animation, starPulse) 0.8s ease-in-out infinite;
  transform-origin: center;
}

.star-container:nth-child(1) {
  --star-animation: starPulse 1s ease-in-out infinite;
  animation-delay: 0s;
}

.star-container:nth-child(2) {
  --star-animation: starSpin 0.6s ease-in-out infinite;
  animation-delay: 0.2s;
}

.star-container:nth-child(3) {
  --star-animation: starBounce 0.7s ease-in-out infinite;
  animation-delay: 0.4s;
}

.star-container:nth-child(4) {
  --star-animation: starPulse 0.9s ease-in-out infinite;
  animation-delay: 0.1s;
}

.star-container:nth-child(5) {
  --star-animation: starSpin 0.8s ease-in-out infinite;
  animation-delay: 0.3s;
}

.star-icon {
  transition: all 0.3s ease;
}

.star-container:hover .star-icon {
  transform: scale(1.3);
  filter: drop-shadow(0 0 5px #FBBF24);
}

/* Fade animation for testimonial content */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(15px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-15px);
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

/* Button hover effects */
button {
  transition: all 0.3s ease;
}
</style>