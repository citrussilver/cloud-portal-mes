<template>
  <div>
    <VortexLayout>
      <Main/>
    </VortexLayout>
    
  </div>
</template>

<script>
// @ is an alias to /src
import VortexLayout from '../components/layouts/Vortex/Vortex.vue'
import Main from '../components/Vortex/Main.vue'

export default {
  name: 'Home',
  components: {
    VortexLayout,
    Main
  }
}
</script>
