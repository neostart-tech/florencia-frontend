<template>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">

        <!-- Breadcrumb & Retour -->
        <div class="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <button @click="router.push('/boutique')"
                class="flex items-center gap-2 text-gray-500 hover:text-[#8C6239] transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à la boutique
            </button>

            <div v-if="produit" class="flex items-center gap-2 text-sm text-gray-500">
                <span class="hover:text-[#8C6239] cursor-pointer font-medium"
                    @click="router.push('/boutique')">Boutique</span>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700 font-medium">{{ produit.categorie }}</span>
                <template v-if="produit.sousCategorie">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span class="text-gray-400">{{ produit.sousCategorie }}</span>
                </template>
            </div>
        </div>

        <!-- Layout principal -->
        <div v-if="produit" class="bg-white rounded-3xl p-6 lg:p-10 shadow-lg border border-gray-100 animate-fade-in">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                <!-- Image Section -->
                <div
                    class="relative group rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-4 border border-gray-100 aspect-square">
                    <img :src="produit.image" :alt="produit.nom"
                        class="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        @error="handleImageError" />
                </div>

                <!-- Détails Section -->
                <div class="flex flex-col justify-center">
                    <div class="mb-4 flex items-center gap-2">
                        <span
                            class="bg-[#8C6239]/10 text-[#8C6239] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-[#8C6239]/20">
                            {{ produit.categorie }}
                        </span>
                        <span v-if="produit.sousCategorie"
                            class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                            {{ produit.sousCategorie }}
                        </span>
                    </div>

                    <h1 class="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{{ produit.nom }}
                    </h1>

                    <div class="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
                        <span class="text-4xl font-bold text-[#8C6239]">{{ produit.prix.toLocaleString() }} FCFA</span>
                    </div>

                    <div class="prose text-gray-600 mb-8 leading-relaxed">
                        <p>{{ produit.description || `Découvrez ce magnifique produit de notre boutique. Conçu avec soin
                            pour
                            répondre à vos attentes, il allie qualité et esthétique.Laissez - vous séduire par son
                            charme
                            et
                            profitez de l'excellence à un prix abordable.` }}</p>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row items-stretch gap-4 mb-8">
                        <button @click="addToCart"
                            class="flex-1 flex items-center justify-center gap-3 bg-[#8C6239] text-white rounded-xl font-bold text-lg hover:bg-[#5C3E29] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-14 px-8 whitespace-nowrap">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Ajouter au panier
                        </button>
                    </div>

                    <!-- Caractéristiques (Mock) -->
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-auto">
                        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-[#8C6239]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Informations complémentaires
                        </h3>
                        <ul class="space-y-3">
                            <li class="flex items-center justify-between text-sm">
                                <span class="text-gray-500">Disponibilité :</span>
                                <span
                                    class="font-medium text-green-600 flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-md">
                                    <span class="w-2 h-2 rounded-full bg-green-500"></span> En stock
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <!-- Skeleton loader si pas de produit -->
        <div v-else-if="loading"
            class="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-gray-100 min-h-[600px] flex items-center justify-center">
            <div class="animate-pulse flex flex-col items-center">
                <div class="w-16 h-16 border-4 border-[#8C6239] border-t-transparent rounded-full animate-spin mb-4">
                </div>
                <div class="text-gray-400 font-medium">Chargement des détails de l'article...</div>
            </div>
        </div>

        <!-- Produit non trouvé -->
        <div v-else class="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Produit introuvable</h3>
            <p class="text-gray-500 mb-8 max-w-md mx-auto">Désolé, l'article que vous recherchez n'existe pas ou n'est
                plus
                disponible dans notre boutique.</p>
            <button @click="router.push('/boutique')"
                class="px-8 py-3 bg-[#8C6239] text-white rounded-xl hover:bg-[#5C3E29] transition-all shadow-md hover:shadow-lg font-medium">
                Retour à la boutique
            </button>
        </div>

        <!-- Toast Notification -->
        <Transition enter-active-class="transform ease-out duration-300 transition"
            enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
            leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="showToast"
                class="fixed bottom-4 right-4 bg-[#8C6239] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 z-50">
                <div class="bg-white/20 p-2 rounded-full">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div>
                    <h4 class="font-bold text-sm">Produit ajouté !</h4>
                    <span class="text-xs text-white/90">{{ produit?.nom }} a été ajouté à votre panier.</span>
                </div>
            </div>
        </Transition>

        <!-- Produits similaires -->
        <div v-if="produitsSimilaires.length > 0" class="mt-16">
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <span class="w-2 h-8 bg-[#8C6239] rounded-full"></span>
                    Produits similaires
                </h2>
                <NuxtLink to="/boutique" class="text-[#8C6239] font-medium hover:underline text-sm">
                    Voir tout le catalogue
                </NuxtLink>
            </div>

            <div class="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 sm:gap-6 pb-6 scrollbar-hide snap-x">
                <div v-for="p in produitsSimilaires" :key="p.id" @click="router.push(`/boutique/${p.id}`)"
                    class="min-w-[70%] sm:min-w-[45%] lg:min-w-0 snap-start group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div class="aspect-square relative overflow-hidden bg-gray-50">
                        <img :src="p.image" :alt="p.nom"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            @error="handleImageError" />
                    </div>
                    <div class="p-4">
                        <h3
                            class="font-bold text-sm text-gray-800 group-hover:text-[#8C6239] transition-colors line-clamp-2 mb-2">
                            {{ p.nom }}
                        </h3>
                        <div class="text-[#8C6239] font-bold">
                            {{ p.prix.toLocaleString() }} FCFA
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const produitsDB = [
    { id: 1, nom: 'Perruque Lace Front Premium', prix: 45000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg', description: "Perruque de haute qualité avec lace front, pour un rendu indétectable et naturel." },
    { id: 2, nom: 'Mèches Brésiliennes 14"', prix: 18000, categorie: 'Mèches', sousCategorie: 'Brésiliennes', image: '/images/perruque.jpg', description: "Mèches 100% vierges brésiliennes, douces et soyeuses." },
    { id: 3, nom: 'Kit Onglerie Professionnel', prix: 25000, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg', description: "Un kit complet professionnel pour vos poses d'ongles." },
    { id: 4, nom: 'Sérum Éclat Vitamine C', prix: 12000, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg', description: "Sérum qui hydrate intensément et révèle l'éclat naturel de votre peau." },
    { id: 5, nom: 'Perruque Bouclée Deep Wave', prix: 35000, categorie: 'Perruques', sousCategorie: 'Bouclées', image: '/images/perruque.jpg', description: "Somptueuse perruque aux boucles rebondies et volumineuses." },
    { id: 6, nom: 'Vernis Semi-Permanent Nude', prix: 4500, categorie: 'Produits d\'onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg', description: "Vernis garantissant une tenue parfaite pendant plusieurs semaines." },
    { id: 7, nom: 'Masque Hydratation Intense', prix: 8500, categorie: 'Cosmétiques', sousCategorie: 'Soins visage', image: '/images/creme.jpg', description: "Soin profond réparateur pour cheveux et peau." },
    { id: 8, nom: 'Extensions Clips Naturelles', prix: 15000, categorie: 'Mèches', sousCategorie: 'Synthétiques', image: '/images/perruque.jpg', description: "Pour ajouter de la longueur et du volume en toute simplicité." },
    { id: 9, nom: 'Parfum Mystère de l\'Orient', prix: 48000, categorie: 'Parfums', sousCategorie: 'Hommes', image: '/images/parfum.jpg', description: "Une fragrance envoûtante aux notes boisées et ambrées." },
    { id: 10, nom: 'Perruque Bob Lisse HD', prix: 32000, categorie: 'Perruques', sousCategorie: 'Lisses', image: '/images/perruque.jpg', description: "Coupe au carré moderne avec une lace HD invisible." },
    { id: 11, nom: 'Kit Faux Ongles Design', prix: 6500, categorie: 'Produits d\'onglerie', sousCategorie: 'Faux ongles', image: '/images/cosmetique.jpg', description: "Faux ongles pré-dessinés pour une manucure rapide et stylée." },
    { id: 12, nom: 'Crème Corps Karité Bio', prix: 5500, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg', description: "Soin nourrissant intense pour les peaux sèches." },
    { id: 13, nom: 'Mèches Indiennes Wave', prix: 22000, categorie: 'Mèches', sousCategorie: 'Indiennes', image: '/images/perruque.jpg', description: "Mèches naturelles indiennes avec une ondulation légère." },
    { id: 14, nom: 'Palette Maquillage Nude', prix: 14000, categorie: 'Cosmétiques', sousCategorie: 'Maquillage', image: '/images/creme.jpg', description: "Une sélection de couleurs naturelles pour un regard sublimé." },
    { id: 15, nom: 'Parfum Fleur de Coton', prix: 38000, categorie: 'Parfums', sousCategorie: 'Femmes', image: '/images/parfum.jpg', description: "Fraîcheur et douceur réunies dans un flacon élégant." },
    { id: 16, nom: 'Lampe UV-LED Portable', prix: 12500, categorie: 'Produits d\'onglerie', sousCategorie: 'Kits', image: '/images/cosmetique.jpg', description: "Idéale pour vos déplacements, séchage rapide garanti." },
    { id: 17, nom: 'Perruque Lace Noire Longue', prix: 29000, categorie: 'Perruques', sousCategorie: 'Lace front', image: '/images/perruque.jpg', description: "Perruque lisse extra longue pour un look glamour." },
    { id: 18, nom: 'Huile Capillaire Réparatrice', prix: 7000, categorie: 'Cosmétiques', sousCategorie: 'Soins corps', image: '/images/creme.jpg', description: "Nourrit en profondeur et répare les pointes abîmées." },
    { id: 19, nom: 'Mèches Afro Kinky Curly', prix: 16500, categorie: 'Mèches', sousCategorie: 'Synthétiques', image: '/images/perruque.jpg', description: "Texture afro naturelle très réaliste." },
    { id: 20, nom: 'Vernis Top Coat Brillant', prix: 3500, categorie: 'Produits d\'onglerie', sousCategorie: 'Vernis', image: '/images/cosmetique.jpg', description: "Finition ultra-brillante pour protéger votre vernis." },
    { id: 21, nom: 'Parfum Ambre Solaire', prix: 42000, categorie: 'Parfums', sousCategorie: 'Mixtes', image: '/images/parfum.jpg', description: "Un parfum chaud et radieux pour toutes les occasions." },
    { id: 22, nom: 'Kit Entretien Perruque', prix: 9500, categorie: 'Perruques', sousCategorie: 'Lisses', image: '/images/perruque.jpg', description: "Tout le nécessaire pour garder votre perruque comme neuve." }
]

const produit = ref(null)
const loading = ref(true)
const showToast = ref(false)

const produitsSimilaires = computed(() => {
    if (!produit.value) return []

    // Essayer d'abord la même sous-catégorie
    let suggestions = produitsDB.filter(p =>
        p.id !== produit.value.id &&
        p.categorie === produit.value.categorie &&
        p.sousCategorie === produit.value.sousCategorie
    )

    // Si pas assez de suggestions, ajouter d'autres produits de la même catégorie
    if (suggestions.length < 8) {
        const otherInCat = produitsDB.filter(p =>
            p.id !== produit.value.id &&
            p.categorie === produit.value.categorie &&
            p.sousCategorie !== produit.value.sousCategorie &&
            !suggestions.find(s => s.id === p.id)
        )
        suggestions = [...suggestions, ...otherInCat]
    }

    return suggestions.slice(0, 8)
})

// Simuler la récupération des produits de la boutique
const fetchProduct = () => {
    loading.value = true

    setTimeout(() => {
        const id = Number(route.params.id)
        const foundProduct = produitsDB.find(p => p.id === id)

        if (foundProduct) {
            produit.value = foundProduct
        }

        loading.value = false
    }, 500) // Simulation d'un délai réseau pour l'UX
}

// Re-charger le produit si l'ID change (navigation entre produits similaires)
watch(() => route.params.id, () => {
    fetchProduct()
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

onMounted(() => {
    fetchProduct()
})

const handleImageError = (e) => {
    e.target.src = '/images/placeholder.jpg'
}

const addToCart = () => {
    showToast.value = true

    setTimeout(() => {
        showToast.value = false
    }, 3000)
}
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

img[src*="placeholder"] {
    object-fit: contain;
    padding: 1rem;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
