import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      {
        id: 1,
        name: 'Perruque Lace Front Naturelle – Couleur #4',
        price: 10750,
        quantity: 1,
        image: '/categories/perruque.jpg'
      },
      {
        id: 2,
        name: 'Vernis à Ongles Rose Passion – 15ml',
        price: 10750,
        quantity: 2,
        image: '/categories/vernis.jpg'
      }
    ]
  }),

  getters: {
    subtotal: (state) =>
      state.items.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
  },

  actions: {
    increase(item) {
      item.quantity++
    },
    decrease(item) {
      if (item.quantity > 1) {
        item.quantity--
      }
    },
    remove(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    clear() {
      this.items = []
    }
  }
})

