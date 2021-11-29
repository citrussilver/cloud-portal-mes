<template>
  <div>
    <!-- <div id="dev-bar">
      <h4>Developer Mode</h4>
      <div id="theme-selector">
        <h5>Select a Theme:</h5>
        <select name="" id="theme_select">
          <option value="t1">Vortex</option>
          <option value="t2">Theme 2</option>
          <option value="t3">Theme 3</option>
        </select>
      </div>
    </div> -->
    <VortexLayout>
      <router-view/>
    </VortexLayout>
  </div>
</template>

<script>
import VortexLayout from './components/layouts/Vortex/Vortex.vue'

export default {
  name: 'App',
  components: {
    VortexLayout
  }
}
</script>

<style>
#dev-bar {
  background-color: #44c5ee;
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
}
</style>
