<template>
  <div>
    <TheHeader />
    <div class="book">
      <div>{{ results[random_number].book.title }}</div>
      <div>{{ results[random_number].book.genre }}</div>
      <div>{{ results[random_number].book.release_year }}</div>
      <img v-bind:src="results[random_number].poster" />
      <br />
      <br />
      <button @click="getRandomNumber">cokolwiek</button>
    </div>
  </div>
</template>



<script>
import TheHeader from "../components/TheHeader";
import axios from "axios";

export default {
  data() {
    return {
      api: "https://my.api.mockaroo.com",
      api_key: "881c9e40",
      results: [],
      results_keys: [],
      random_number: 0,
    };
  },
  components: {
    TheHeader,
  },
  methods: {
    getApi() {
      axios
        .get(`${this.api}/books_project.json?key=${this.api_key}`)
        .then((result) => {
          this.results = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRandomNumber() {
      this.random_number = Math.floor(Math.random() * this.results.length);
    },

    /*    getApi() {
      fetch(`${this.api}/books_project.json?key=${this.api_key}`)
        .then((res) => res.json())
        .thescopen((result) => {
          this.result_keys = Object.keys(result[0]);
        })
        .then(console.log(this.id));
      //console.log(this.results_keys);
      //.then(console.log(this.getRandomObject(this.results_keys)));
    },
    */
  },
  mounted() {
    this.getRandomNumber();
  },
  beforeMount() {
    this.getApi();
  },
};
</script>

<style  >
.book {
  padding: 5%;
  text-align: center;
  width: 80%;
  height: 340px;
  margin: 0 auto;
}
</style>