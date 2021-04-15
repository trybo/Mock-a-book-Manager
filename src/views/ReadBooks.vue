<template>
  <TheHeader />
  <div class="table">
    <div
      class="book"
      v-on:click="getData(result)"
      v-for="result in results"
      :key="result.id"
    >
      <div class="book_poster">
        <img v-bind:src="result.poster" />
      </div>

      <div class="book_details">
        <p>{{ result.book.title }}</p>
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
          book_votes: book_data.rate.votes,
          description: book_data.description,
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
  width: 80%;
  margin: auto;
}

.book {
  padding: 5px;
  width: 20%;
  height: 340px;
  display: inline-block;
  /* position: relative;
  margin: 1%; */
}

.book_poster {
  width: 25%;
  height: 340px;
  float: left;
  /* position: relative; */
}

.book_details {
  /* border: 1px solid black; */
  height: auto;
  background-color: green;
  position: absolute;
  width: 200px;
  margin-top: auto;
}

.book_details > p {
  margin: 5px;
  text-align: center;
}
</style>