<template>
  <div class="home">
    <router-link to="/"><h1>BooksManager</h1></router-link>
    <h3>Discover books bla, bla, bla...</h3>
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
.home {
  text-align: center;
  padding: 25px;
  display: float;
  align-items: center;
  justify-content: center;
}
</style>