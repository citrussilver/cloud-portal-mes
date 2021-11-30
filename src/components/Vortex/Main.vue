<template>
  <div>
    <Banner/> 
    <About/>
    <Story/>
    <Services/>
    <Features/>
    <Price/>
    <Team/>
    <Clients/>
    <Newsletter/>
    <Contact/>
  </div>
</template>

<script>

import Banner from './Banner.vue'
import About from './About.vue'
import Story from './Story.vue'
import Services from './Services.vue'
import Features from './Features.vue'
import Price from './Price.vue'
import Team from './Team.vue'
import Clients from './Clients.vue'
import Newsletter from './Newsletter.vue'
import Contact from './Contact.vue'
import Modal from './Modal.vue'

export default {
    components: {
        Banner,
        About,
        Story,
        Services,
        Features,
        Price,
        Team,
        Clients,
        Newsletter,
        Contact,
        Modal
  },
}
</script>

<style>

</style>