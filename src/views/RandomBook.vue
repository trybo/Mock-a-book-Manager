<template>
  <TheHeader />
  <h3>SHUFFLE and ...</h3>

  <button class="btn btn-dark" type="button" @click="getApi()">SHUFFLE</button>
</template>

<script>
export default {
  data() {
    return {
      api: "https://my.api.mockaroo.com",
      api_key: "3b0093b0",
      results: [],
      results_keys: [],
      clicked_result: [],
      randomNumber: 22,
    };
  },
  methods: {
    getApi() {
      fetch(
        `${this.api}/books_project/${this.randomNumber}.json?key=${this.api_key}`
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
          author_name: book_data.author.name,
          author_surname: book_data.author.surname,
          book_genre: book_data.book.genre,
          book_pages: book_data.book.pages,
          release_year: book_data.book.release_year,
          book_poster: book_data.poster,
          isbn: book_data.isbn,
          book_rate: book_data.rate.average,
          book_votes: book_data.rate.votes,
        },
      });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>
