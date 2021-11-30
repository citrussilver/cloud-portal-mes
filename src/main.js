import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vortex Layout dependencies
import './assets/Vortex/js/plugins/bootsnav_files/skins/color.css'
import './assets/Vortex/js/plugins/bootsnav_files/css/animate.css'
import './assets/Vortex/js/plugins/bootsnav_files/css/bootsnav.css'
import './assets/Vortex/js/plugins/bootsnav_files/css/overwrite.css'
import './assets/Vortex/js/plugins/owl-carousel/owl.carousel.css'
import './assets/Vortex/js/plugins/owl-carousel/owl.theme.css'
import './assets/Vortex/js/plugins/owl-carousel/owl.transitions.css'
import './assets/Vortex/js/plugins/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css'
import './assets/Vortex/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './assets/Vortex/css/main.css'

// Scaffold Layout dependencies
// import './assets/Scaffold/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/Scaffold/vendor/icofont/icofont.min.css'
// import './assets/Scaffold/vendor/boxicons/css/boxicons.min.css'
// import './assets/Scaffold/vendor/venobox/venobox.css'
// import './assets/Scaffold/vendor/owl.carousel/assets/owl.carousel.min.css'
// import './assets/Scaffold/vendor/aos/aos.css'
// import './assets/Scaffold/css/style.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
