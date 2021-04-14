<template>
  <div class="container text-center">
    <p class="h3 text-uppercase font-weight-bold pt-5">Welcome to</p>
    <router-link to="/"><p class="h1">Mock-a-book (Manager)</p></router-link>
    <p class="h4">Discover the world of random books</p>
    <HomeNavbar />
  </div>
</template>

<script>
import HomeNavbar from "../components/HomeNavbar.vue";

export default {
  components: {
    HomeNavbar,
  },
};
</script>

<style scoped>

</style>