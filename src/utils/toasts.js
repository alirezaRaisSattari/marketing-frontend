import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css';

// eslint-disable-next-line import/prefer-default-export
export const toasts = Vue.use(VueToast, {
  position: 'top-right',
  duration: 5000,
})
