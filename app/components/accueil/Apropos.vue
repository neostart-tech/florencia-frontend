<template>
  <section
    class="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30">
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"
      ></div>
    </div>

    <!-- Elegant pattern overlay -->
    <div
      class="absolute inset-0 opacity-5"
      style="
        background-image: radial-gradient(
          circle at 2px 2px,
          #e8d4ad 1px,
          transparent 1px
        );
        background-size: 40px 40px;
      "
    ></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <!-- IMAGE with elegant frame and animation -->
        <div class="w-full lg:w-1/2 flex justify-center group">
          <div class="relative max-w-md w-full">
            <!-- Decorative frame -->
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#E8D4AD]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            ></div>
            <div
              class="absolute -inset-2 border border-[#E8D4AD]/20 rounded-3xl"
            ></div>

            <!-- Main image with elegant shape -->
            <div class="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/cosmetique.jpg"
                alt="À propos"
                class="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%"
              />
              <!-- Overlay gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#262B14]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>

            <!-- Floating decorative elements -->
            <div
              class="absolute -top-6 -right-6 w-20 h-20 border border-[#E8D4AD]/30 rounded-full animate-float"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-16 h-16 border border-[#E8D4AD]/20 rounded-full animate-float animation-delay-1000"
            ></div>
          </div>
        </div>

        <!-- CONTENT with elegant typography -->
        <div class="w-full lg:w-1/2 space-y-8">
          <!-- LOGO with rotating text - CENTERED -->
          <div class="flex justify-center lg:justify-start">
            <div
              class="relative w-32 h-32 flex items-center justify-center group/logo"
            >
              <!-- Glow effect -->
              <div
                class="absolute inset-0 bg-[#E8D4AD]/10 rounded-full blur-md group-hover/logo:blur-xl transition-all duration-500"
              ></div>

              <!-- Logo - CENTERED properly -->
              <img
                src="/logo/Florencia1.png"
                alt="Logo"
                class="w-20 h-20 object-contain relative z-10 transition-transform duration-500 group-hover/logo:scale-110"
              />

              <!-- Rotating text around logo - PERFECTLY CENTERED -->
              <svg
                class="absolute top-0 left-0 w-full h-full animate-spin-slow"
              >
                <defs>
                  <path
                    id="circlePathCentered"
                    d="M 64,64 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                    fill="none"
                  />
                </defs>
                <text
                  class="text-[10px] tracking-[2px] fill-[#E8D4AD] font-serif"
                  font-family="Georgia, serif"
                >
                  <textPath href="#circlePathCentered" startOffset="0%">
                    ✧ FLORENCIA ✧ FLORENCIA ✧ FLORENCIA ✧
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <!-- Title - BELOW the logo with elegant font and animation -->
          <div class="text-center lg:text-left">
            <div class="relative inline-block title-group">
              <!-- Changed from group/title to title-group -->
              <h2
                class="elegant-title text-4xl md:text-5xl lg:text-6xl font-light tracking-wide relative"
              style="font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; color: #e8d4ad;"
              >
                À propos
                <span
                  class="block text-2xl md:text-3xl font-light mt-2 elegant-subtitle"
                  >de nous</span
                >
              </h2>
              <!-- Elegant animated underline -->
              <div
                class="absolute -bottom-4 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0"
              >
                <div
                  class="w-0 title-group:hover:w-16 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent transition-all duration-700 ease-out"
                ></div>
              </div>
              <!-- Decorative dot -->
              <div
                class="absolute -bottom-6 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0 opacity-0 title-group:hover:opacity-100 transition-opacity duration-500"
              >
                <div class="w-1 h-1 bg-[#E8D4AD] rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- TEXT with elegant styling -->
          <p
            class="text-base md:text-lg leading-relaxed text-[#E8D4AD]/90 font-light max-w-lg text-center lg:text-left animate-fadeInUp"
           style="font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; line-height: 1.8;"
          >
            Découvrez l'histoire de Florencia, une passionnée de création
            florale qui transforme chaque bouquet en une œuvre d'art unique.
            Avec des années d'expérience dans l'art floral, nous mettons notre
            savoir-faire et notre créativité au service de vos émotions. Chaque
            création est pensée avec soin pour raconter votre histoire.
          </p>

          <!-- ACTIONS with elegant animations -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6"
          >
            <!-- Elegant button with slide effect -->
            <NuxtLink
              to="/a-propos"
              class="group relative px-8 py-3 overflow-hidden transition-all duration-500"
            >
              <span
                class="absolute inset-0 border border-[#E8D4AD] transition-all duration-300 group-hover:border-[#E8D4AD]"
              ></span>
              <span
                class="relative z-10 text-[#E8D4AD] uppercase text-sm tracking-[3px] font-light group-hover:text-[#262B14] transition-colors duration-300"
              style="font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;"
              >
                En savoir plus
              </span>
              <span
                class="absolute inset-0 bg-[#E8D4AD] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
              ></span>
            </NuxtLink>

            <!-- Elegant phone contact with hover animation -->
            <div class="flex items-center gap-3 group/phone cursor-pointer">
              <div class="relative">
                <svg
                  class="w-8 h-8 text-[#E8D4AD] transition-all duration-300 group-hover/phone:scale-110 group-hover/phone:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div
                  class="absolute -top-1 -right-1 w-2 h-2 bg-[#E8D4AD] rounded-full animate-ping opacity-75"
                ></div>
              </div>

              <div class="flex flex-col">
                <span
                  class="text-[10px] uppercase tracking-[2px] text-[#E8D4AD]/60 font-light"
                  style="font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;"
                >
                  Téléphone
                </span>
                <span
                  class="text-base font-light tracking-wide group-hover/phone:tracking-wider transition-all duration-300"
                 style="font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;color:whitesmoke"
                >
                  + 000 111 456
                </span>
              </div>
            </div>
          </div>

          <!-- Decorative separator line -->
          <div class="pt-6">
            <div
              class="w-12 h-px bg-gradient-to-r from-[#E8D4AD] to-transparent mx-auto lg:mx-0 animate-slideInLeft"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Elegant fonts */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap");

/* Elegant animations */
@keyframes spinText {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.05);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 48px;
    opacity: 1;
  }
}

/* Title elegant animation */
.elegant-title {
  animation: fadeInUp 0.8s ease-out;
  position: relative;
  transition: all 0.3s ease;
}

.elegant-subtitle {
  animation: fadeInUp 0.8s ease-out 0.2s both;
  letter-spacing: 1px;
}

/* Title hover effect - CORRECTED without slash */
.title-group:hover .elegant-title {
  letter-spacing: 2px;
  transition: letter-spacing 0.5s ease;
}

.title-group:hover .elegant-subtitle {
  letter-spacing: 1.5px;
  transition: letter-spacing 0.5s ease 0.1s;
}

/* Animations */
.animate-spin-slow {
  animation: spinText 20s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.animate-slideInLeft {
  animation: slideInLeft 0.6s ease-out 0.6s forwards;
  opacity: 0;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Elegant text selection */
::selection {
  background-color: #e8d4ad;
  color: #262b14;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .elegant-title {
    letter-spacing: 1px;
  }
}
</style>
