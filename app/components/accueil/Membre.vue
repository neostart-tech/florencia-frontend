<template>
  <section class="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-[#262B14] via-[#2A2F18] to-[#1f2310]">
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-0 w-80 h-80 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-[#E8D4AD] rounded-full filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>
    </div>
    
    <!-- Elegant pattern overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, #E8D4AD 1px, transparent 1px); background-size: 40px 40px;"></div>
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Elegant Section Title with Decorative Elements -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="relative inline-block">
          <!-- Decorative top line -->
          <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#E8D4AD] to-transparent"></div>
          
          <!-- Main Title -->
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide relative"
              style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif; color: #E8D4AD;">
            Notre
            <span class="font-medium relative">
              Équipe
              <span class="absolute -bottom-2 left-0 right-0 h-px bg-[#E8D4AD]/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </span>
          </h2>
          
          <!-- Decorative separator -->
          <div class="flex justify-center items-center gap-2 mt-4">
            <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#E8D4AD]/50"></div>
            <div class="w-1 h-1 rounded-full bg-[#E8D4AD] animate-pulse"></div>
            <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#E8D4AD]/50"></div>
          </div>
          
          <!-- Subtitle with animation -->
          <p class="text-xs md:text-sm text-[#E8D4AD]/50 tracking-wider mt-3 animate-fadeIn"
             style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
            DES EXPERTS PASSIONNÉS À VOTRE SERVICE
          </p>
        </div>
      </div>
      
      <!-- Staff Grid - Elegant design with overlapping and tilt -->
      <div class="flex flex-wrap justify-center items-center gap-0">
        
        <!-- Staff 1 -->
        <div class="staff-card group cursor-pointer w-[170px] sm:w-[190px] lg:w-[210px] transform transition-all duration-500 hover:z-20">
          <div class="relative overflow-hidden shadow-lg mx-[-6px] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl" style="transform: rotate(-3deg);">
            <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/80 via-[#262B14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src="/images/lunettes.jpg" 
              alt="Sophie Martin"
              class="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-110"
              style="border-radius: 70px 70px 35px 35px;"
            />
            <!-- Elegant frame overlay -->
            <div class="absolute inset-0 border-2 border-[#E8D4AD]/0 group-hover:border-[#E8D4AD]/30 transition-all duration-500 rounded-[inherit] pointer-events-none"></div>
            <!-- Info panel -->
            <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
              <div class="bg-[#262B14]/90 backdrop-blur-sm rounded-lg p-2 text-center border border-[#E8D4AD]/10">
                <h3 class="text-sm font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Sophie Martin
                </h3>
                <p class="text-[10px] text-[#E8D4AD]/70 uppercase tracking-wider mt-0.5"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Coiffeuse Experte
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Staff 2 -->
        <div class="staff-card group cursor-pointer w-[170px] sm:w-[190px] lg:w-[210px] transform transition-all duration-500 hover:z-20">
          <div class="relative overflow-hidden shadow-lg mx-[-6px] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl" style="transform: rotate(2deg);">
            <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/80 via-[#262B14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src="/images/lunettes.jpg" 
              alt="Emma Laurent"
              class="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-110"
              style="border-radius: 45px 45px 45px 45px;"
            />
            <div class="absolute inset-0 border-2 border-[#E8D4AD]/0 group-hover:border-[#E8D4AD]/30 transition-all duration-500 rounded-[inherit] pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
              <div class="bg-[#262B14]/90 backdrop-blur-sm rounded-lg p-2 text-center border border-[#E8D4AD]/10">
                <h3 class="text-sm font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Emma Laurent
                </h3>
                <p class="text-[10px] text-[#E8D4AD]/70 uppercase tracking-wider mt-0.5"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Coloriste
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Staff 3 -->
        <div class="staff-card group cursor-pointer w-[170px] sm:w-[190px] lg:w-[210px] transform transition-all duration-500 hover:z-20">
          <div class="relative overflow-hidden shadow-lg mx-[-6px] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl" style="transform: rotate(-1deg);">
            <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/80 via-[#262B14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src="/images/lunettes.jpg" 
              alt="Camille Dubois"
              class="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-110"
              style="border-radius: 35px 35px 70px 70px;"
            />
            <div class="absolute inset-0 border-2 border-[#E8D4AD]/0 group-hover:border-[#E8D4AD]/30 transition-all duration-500 rounded-[inherit] pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
              <div class="bg-[#262B14]/90 backdrop-blur-sm rounded-lg p-2 text-center border border-[#E8D4AD]/10">
                <h3 class="text-sm font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Camille Dubois
                </h3>
                <p class="text-[10px] text-[#E8D4AD]/70 uppercase tracking-wider mt-0.5"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Spécialiste Traitements
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Staff 4 -->
        <div class="staff-card group cursor-pointer w-[170px] sm:w-[190px] lg:w-[210px] transform transition-all duration-500 hover:z-20">
          <div class="relative overflow-hidden shadow-lg mx-[-6px] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3 group-hover:shadow-2xl" style="transform: rotate(3deg);">
            <div class="absolute inset-0 bg-gradient-to-t from-[#262B14]/80 via-[#262B14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img 
              src="/images/lunettes.jpg" 
              alt="Julie Renard"
              class="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-110"
              style="border-radius: 45px 45px 45px 45px;"
            />
            <div class="absolute inset-0 border-2 border-[#E8D4AD]/0 group-hover:border-[#E8D4AD]/30 transition-all duration-500 rounded-[inherit] pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out z-20">
              <div class="bg-[#262B14]/90 backdrop-blur-sm rounded-lg p-2 text-center border border-[#E8D4AD]/10">
                <h3 class="text-sm font-light text-[#E8D4AD] tracking-wide"
                    style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Julie Renard
                </h3>
                <p class="text-[10px] text-[#E8D4AD]/70 uppercase tracking-wider mt-0.5"
                   style="font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;">
                  Styliste
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Elegant decorative line with floating dots -->
      <div class="flex justify-center items-center gap-2 mt-10">
        <div class="w-6 h-px bg-gradient-to-r from-transparent to-[#E8D4AD]/30"></div>
        <div class="flex gap-1">
          <div class="w-1 h-1 rounded-full bg-[#E8D4AD]/40 animate-float-slow"></div>
          <div class="w-1 h-1 rounded-full bg-[#E8D4AD]/60 animate-float-slow animation-delay-200"></div>
          <div class="w-1 h-1 rounded-full bg-[#E8D4AD]/80 animate-float-slow animation-delay-400"></div>
        </div>
        <div class="w-6 h-px bg-gradient-to-l from-transparent to-[#E8D4AD]/30"></div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
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

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-3px);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staff card base */
.staff-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.staff-card:hover {
  z-index: 30;
}

.staff-card:hover > div {
  transform: scale(1.05) translateY(-12px) rotate(0deg) !important;
  box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.4);
}

/* Image styling */
img {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.staff-card {
  animation: slideUp 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  opacity: 0;
}

.staff-card:nth-child(1) { animation-delay: 0s; }
.staff-card:nth-child(2) { animation-delay: 0.1s; }
.staff-card:nth-child(3) { animation-delay: 0.2s; }
.staff-card:nth-child(4) { animation-delay: 0.3s; }

/* Title animations */
h2, .animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-float-slow {
  animation: float-slow 2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Responsive */
@media (max-width: 768px) {
  .staff-card {
    width: 150px;
  }
}

@media (max-width: 640px) {
  .staff-card {
    width: 130px;
  }
}
</style>