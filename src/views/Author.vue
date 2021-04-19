<template>
  <TheHeader />
  <div class="container">
    <BaseText>
      Books of
      <template v-slot:purple-text>{{
        author_name + " " + author_surname
      }}</template>
    </BaseText>

    <BaseButton @click="showStats()">{{isChart ? "BOOKS" : "STATS"}}</BaseButton>

   <AuthorPieChart :results="results" v-if="isChart"/>
   <AuthorBarChart :results="results" v-if="isChart"/>

    <table class="table table-hover table-bordered" v-else>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Release year</th>
          <th scope="col">Pages</th>
          <th scope="col">Rate</th>
        </tr>
      </thead>
      <tbody v-for="result in results" :key="result.id">
        <tr @click="getData(result)">
          <th scope="row">{{ result.id }}</th>
          <td>{{ result.book.title }}</td>
          <td>{{ result.book.genre }}</td>
          <td>{{ result.book.release_year }}</td>
          <td>{{ result.book.pages }}</td>
          <td>{{ result.rate.average }}</td>
        </tr>
      </tbody>
    </table>

    <BaseButton @click="return_page()" class="pb-4">GO BACK</BaseButton>
  </div>
</template>

<script>
import AuthorPieChart from "../components/charts/AuthorPieChart.vue"
import AuthorBarChart from "../components/charts/AuthorBarChart.vue"

export default {
  data() {
    return {
      api: "https://my.api.mockaroo.com",
      api_key: "881c9e40",
      results: [],
      results_keys: [],
      clicked_result: [],
      author_name: "",
      author_surname: "",
      isChart: false,
    };
  },
  components: { 
    AuthorPieChart,
    AuthorBarChart
  },
  methods: {
    showStats() {
      this.isChart = !this.isChart;
    },
    getApi() {
      fetch(
        `${this.api}/authors.json?key=${this.api_key}&name=${this.author_name}&surname=${this.author_surname}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.results = JSON.parse(JSON.stringify(result));
          this.results_keys = Object.keys(this.results["0"]);
        })
        .then(console.log(this.results));
    },
    getData(item) {
      // łapie dane konkretnego plakatu i przekazuje na podstronę.
      this.clicked_result = item;
      this.bookPage(this.clicked_result);
    },
    bookPage(book_data) {
      // metoda przekierowująca na unikalną podstronę książki
      console.log(book_data.book.title);
      this.$router.push({
        name: "Book", //book component
        params: {
          title: book_data.book.title,
          author_name: this.author_name,
          author_surname: this.author_surname,
          book_genre: book_data.book.genre,
          book_pages: book_data.book.pages,
          release_year: book_data.book.release_year,
          book_poster: book_data.poster,
          isbn: book_data.isbn,
          book_rate: book_data.rate.average,
          book_votes: book_data.rate.votes,
          description: book_data.description,
        },
      });
    },
    return_page() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getApi();
    //załadowanie zmiennych przekazanych przez router z poprzedniego komponentu
    (this.author_name = this.$route.params.author_name),
      (this.author_surname = this.$route.params.author_surname);
  },
};
</script>

<style scoped>
thead {
  background: #4c495d;
}

tbody {
  background: #564f6f;
  cursor: pointer;
}

table {
  color: #d1d7e0;
}
</style>