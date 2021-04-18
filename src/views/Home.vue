<template>
  <div class="container text-center">
    <h3 class="text-uppercase font-weight-bold pt-5">Welcome to</h3>
    <router-link to="/">
    <img src="../assets/logo.png" width="96" />
    <h1>Mock-a-book (Manager)</h1></router-link>
    <h4 class="font-weight-light">Discover the world of random books</h4>
    <HomeNavbar />
    <HomeFooter />
  </div>
</template>

<script>
import HomeNavbar from "../components/HomeNavbar.vue";
import HomeFooter from "../components/HomeFooter.vue";

export default {
  components: {
    HomeNavbar,
    HomeFooter
  },
};
</script>

<style scoped>
.container a{
  text-decoration: none;
}
h1{
  color: #802BB1;
}
h1:hover,
h1:active,
h1.router-link-active {
  color: #702BB1;
}
</style>