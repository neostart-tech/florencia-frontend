import { defineNuxtPlugin } from '#app'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

export default defineNuxtPlugin(() => {
 

  // Configuration globale
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 3000,
  }

  return {
    provide: {
      toastr
    }
  }
})