<template>
  <section class="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
    </div>
    
    <!-- Elegant pattern overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Section Title -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="relative inline-block">
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent"></div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
            Foire Aux
            <span class="block text-3xl md:text-4xl font-light mt-2">Questions</span>
          </h2>
          <div class="flex justify-center items-center gap-2 mt-4">
            <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#E8D4AD]/50"></div>
            <div class="w-1 h-1 rounded-full bg-[#E8D4AD] animate-pulse"></div>
            <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#E8D4AD]/50"></div>
          </div>
          <p class="text-sm text-[#E8D4AD]/50 tracking-wider mt-3"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            TOUT CE QUE VOUS DEVEZ SAVOIR
          </p>
        </div>
      </div>
      
      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="faq-item group"
        >
          <button 
            @click="toggleFaq(index)"
            class="w-full text-left p-5 md:p-6 bg-[#343A20]/50 backdrop-blur-sm border border-[#E8D4AD]/10 rounded-2xl transition-all duration-300 hover:border-[#E8D4AD]/30 hover:bg-[#343A20]/70"
          >
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="w-8 h-8 rounded-full bg-[#E8D4AD]/10 flex items-center justify-center group-hover:bg-[#E8D4AD]/20 transition-all duration-300">
                  <span class="text-[#E8D4AD] text-sm font-light" style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                </div>
                <h3 class="text-lg md:text-xl font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  {{ faq.question }}
                </h3>
              </div>
              <svg 
                class="w-5 h-5 text-[#E8D4AD] transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === index }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          <transition name="accordion">
            <div v-if="openIndex === index" class="mt-2 px-5 md:px-6 pb-5 md:pb-6">
              <div class="pl-12">
                <div class="w-12 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mb-4"></div>
                <p class="text-[#E8D4AD]/70 leading-relaxed"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; line-height: 1.7;">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
      
      <!-- Contact Prompt -->
      <div class="text-center mt-12 pt-8">
        <p class="text-[#E8D4AD]/60 text-sm mb-4"
           style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
          Vous avez d'autres questions ?
        </p>
        <NuxtLink 
          to="/contact"
          class="group relative inline-flex items-center justify-center px-8 py-2 overflow-hidden transition-all duration-500"
        >
          <span class="absolute inset-0 border border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"></span>
          <span class="relative z-10 text-[#E8D4AD] uppercase text-xs tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
                style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            Contactez-nous
          </span>
          <span class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </NuxtLink>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQ {
  question: string;
  answer: string;
}

const faqs = ref<FAQ[]>([
  {
    question: "Comment puis-je prendre rendez-vous ?",
    answer: "Vous pouvez prendre rendez-vous directement sur notre site via la section \"Réservations\", par téléphone au + 000 111 456, ou en vous rendant directement dans notre salon. Nous vous recommandons de réserver à l'avance pour garantir votre créneau préféré."
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard), espèces, et virements bancaires. Un acompte peut être demandé pour certaines prestations."
  },
  {
    question: "Puis-je annuler ou modifier mon rendez-vous ?",
    answer: "Oui, vous pouvez annuler ou modifier votre rendez-vous gratuitement jusqu'à 24 heures à l'avance. Pour toute annulation tardive, des frais peuvent s'appliquer. Contactez-nous directement pour toute modification."
  },
  {
    question: "Quels produits utilisez-vous ?",
    answer: "Nous utilisons exclusivement des produits professionnels de haute qualité, respectueux des cheveux et de l'environnement. Nos marques partenaires incluent des gammes bio et naturelles pour répondre à tous les besoins capillaires."
  },
  {
    question: "Proposez-vous des services pour enfants ?",
    answer: "Absolument ! Nous proposons des services adaptés aux enfants de tous âges dans une ambiance ludique et sécurisée. N'hésitez pas à nous consulter pour plus d'informations."
  },
  {
    question: "Les prix incluent-ils les taxes ?",
    answer: "Oui, tous nos prix affichés incluent les taxes en vigueur. Des forfaits et promotions sont régulièrement proposés, n'hésitez pas à consulter notre section Boutique."
  }
])

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
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

/* Accordion animation */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 300px;
}

/* FAQ item hover effects */
.faq-item {
  transition: all 0.3s ease;
}

/* Animations */
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>