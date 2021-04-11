<template>
  <TheHeader />
  <div class="table">
    <div
      class="book"
      v-on:click="getData(result)"
      v-for="result in results"
      :key="result.id"
    >

    <!-- do napisania: ostylować tak, aby Był plakat, a pod nim tytuł. I poszczególne "kafelki" pokazywały się obok siebie powiedzmy, że ok 4-5 na rząd :)  -->
      <div class="book_poster">
        <img v-bind:src="result.poster" />
      </div>

      <div class="book_details">
        <p>Title: {{ result.book.title }}</p>
      </div>
    </div>
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
      clicked_result: [],
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
          author_name: book_data.author.name,
          author_surname: book_data.author.surname,
          book_genre: book_data.book.genre,
          book_pages: book_data.book.pages,
          release_year: book_data.book.release_year,
          book_poster: book_data.poster,
          isbn: book_data.isbn,
          book_rate: book_data.rate.average,
          book_votes: book_data.rate.votes
        },
      });
    },
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