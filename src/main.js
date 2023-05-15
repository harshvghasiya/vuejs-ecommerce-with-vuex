import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './style.css'
import './assets/css/vendor/icofont.min.css'
import './assets/css/vendor/line-awesome.min.css'
import './assets/css/vendor/simple-line-icons.css'
import './assets/css/plugins/swiper-bundle.min.css'
import './assets/css/plugins/magnific-popup.css'
import './assets/css/style.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App).use(router).use(store).use(VueSweetalert2).use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  timeout: 1500,
}).mount('#app')
