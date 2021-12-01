<template>
    <div class="flex-wrapper">
        <header>
            <Navbar/>
        </header>
        <div id="main-content">
            <slot></slot>
        </div>
        <footer>
            <Footer />
        </footer>
        <Contact/>
        <!-- <Modal/> -->
</div>
</template>

<script>
import Navbar from '../../Vortex/Navbar.vue'

import Footer from '../../Vortex/Footer.vue'
// import Modal from '../../Vortex/Modal.vue'

export default {
    components: {
        Navbar,
        Footer,
  },
}
</script>

<style>
.flex-wrapper {
    height: 100vh;
    display: flex;

    /* Direction of the items, can be row or column */
    flex-direction: column;
}

header {
    height: 9rem;
}

#main-content {
    flex: 1;
}
</style>