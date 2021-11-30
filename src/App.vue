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
    <VortexNFLayout>
      <router-view/>
    </VortexNFLayout>
    <!-- <ScaffoldLayout>
      <router-view/>
    </ScaffoldLayout> -->
  </div>
</template>

<script>
import VortexNFLayout from './components/layouts/Vortex/VortexNF.vue'
import VortexLayout from './components/layouts/Vortex/Vortex.vue'
import ScaffoldLayout from './components/layouts/Scaffold/Scaffold.vue'

export default {
  name: 'App',
  components: {
    VortexLayout,
    VortexNFLayout,
    ScaffoldLayout
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
