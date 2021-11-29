import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vortex Layout dependencies
import './assets/js/plugins/bootsnav_files/skins/color.css'
import './assets/js/plugins/bootsnav_files/css/animate.css'
import './assets/js/plugins/bootsnav_files/css/bootsnav.css'
import './assets/js/plugins/bootsnav_files/css/overwrite.css'
import './assets/js/plugins/owl-carousel/owl.carousel.css'
import './assets/js/plugins/owl-carousel/owl.theme.css'
import './assets/js/plugins/owl-carousel/owl.transitions.css'
import './assets/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css'
import './assets/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
