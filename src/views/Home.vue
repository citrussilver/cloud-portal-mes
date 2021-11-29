<template>
  <div class="home">
    <UserExpenseDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import UserExpenseDetails from './UserExpenseDetails.vue'

export default {
  name: 'Home',
  components: {
    UserExpenseDetails
  }
}
</script>
