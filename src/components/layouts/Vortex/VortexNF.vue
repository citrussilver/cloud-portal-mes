<template>
    <div class="flex-wrapper">
        <header>
            <NavbarAuth />
        </header>
        <div id="main-content">
            <slot>Main Content Here..</slot>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>
import NavbarAuth from '../../Vortex/NavbarAuth.vue'
import Footer from '../../Vortex/Footer.vue'

export default {
    components: {
        NavbarAuth,
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