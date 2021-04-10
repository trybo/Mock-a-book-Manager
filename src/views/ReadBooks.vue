<template>
  <TheHeader />
  <div class="table">
    <div class="book" v-for="result in results" :key="result.id">
      <div class="book_poster">
        <img v-bind:src="result.poster" />
      </div>

      <div class="book_details">
        <p>Title: {{ result.book.title }}</p>
<!-- w sumie to tyle póki co niech tu bedzie, reszta będzie istotna po kliknieciu w plakat zeby tam sie dało przekazać. -->
      </div>
    </div>

    <!-- 
      rozwiązanie tabelaryczne, które nie łapie jeszcze zagnieżdżonych, może siedzieć awaryjnie póki co
      
      <table>
      <thead>
        <tr>
          <th v-for="key in results_keys" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="result in results" :key="result.id">
          <td v-for="key in results_keys" :key="key">{{ result[key] }}</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";

export default {
  data() {
    return {
      api: "https://my.api.mockaroo.com",
      api_key: "881c9e40",
      results: [],
      results_keys: [],
    };
  },
  components: {
    TheHeader,
  },
  methods: {
    getApi() {
      fetch(`${this.api}/books_project.json?key=${this.api_key}`)
        .then((res) => res.json())
        .then((result) => {
          this.results = JSON.parse(JSON.stringify(result));
          this.results_keys = Object.keys(this.results["0"]);
        })
        .then(console.log(this.results));
    }
  },
  mounted() {
    this.getApi();
  },
};
</script>
<style scoped>
.table {
  padding: 20px;

}

.book {
  padding: 5px;
  width: 80%;
  height: 340px;
  margin: auto;
  border: 1px solid black;
}

.book_poster {
  width: 25%;
  height: 340px;
  float: left;
}

.book_details {
  /* border: 1px solid black; */
  height: 340px;
  margin-left: 15px;
}


</style>