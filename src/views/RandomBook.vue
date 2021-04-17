<template>
  <TheHeader />
  <div class="container">
    <h3 class="text-center pt-5 pb-3">
      <span class="font-weight-bold">SHUFFLE</span> and find your book!
    </h3>

    <div v-if="isShuffled">
      <div class="card mx-auto" style="width: 38rem" @click="getData(results)">
        <img class="card-img-tom" :src="results.poster" />
        <div class="card-body">
          <h5 class="card-title">{{ results.book.title }}</h5>
          <p class="card-text">
            {{ results.author.name + " " + results.author.surname }}
          </p>
        </div>
      </div>
    </div>

    <BaseButton @click="getApi()">{{
      isShuffled ? "SHUFFLE AGAIN" : "SHUFFLE"
    }}</BaseButton>

    <!-- <div class="col text-center my-3">
      <button class="btn btn-purple btn-lg" type="button" @click="getApi()">
        {{ isShuffled ? "SHUFFLE AGAIN" : "SHUFFLE" }}
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // api: "https://my.api.mockaroo.com",
      // api_key: "3b0093b0",
      results: [],
      results_keys: [],
      clicked_result: [],
      randomNumber: 0,
      isShuffled: false,
    };
  },
  methods: {
    // clickButton() {
    //   this.isShuffled = true;
    // },
    getApi() {
      this.getRandomNumber();
      fetch(
        `${this.api}/books_project/${this.randomNumber}.json?key=${this.api_key}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.results = JSON.parse(JSON.stringify(result));
          this.results_keys = Object.keys(this.results["0"]);
        })
        .then(console.log(this.results));
      this.isShuffled = true;
    },
    getRandomNumber() {
      // Losujemy liczbę z przedziału 1-100, bo pobieram tylko 1 rekord z mocaroo
      this.randomNumber = Math.floor(Math.random() * 101) + 1;
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
    // this.getApi();
  },
};
</script>

<style scoped>
/* .btn {
  background: #802bb1;
  color: #d1d7e0;
  width: 250px;
}

.btn:hover {
  background: #702bb1;
  color: #e1d7e0;
} */
.card {
  flex-direction: row;
  align-items: center;
  background: #564f6f;
}
.card-title {
  font-weight: bold;
}
.card img {
  width: 30%;
  border-top-right-radius: 0;
  border-bottom-left-radius: calc(0.25rem - 1px);
}
@media only screen and (max-width: 768px) {
  a {
    display: none;
  }
  .card-body {
    padding: 0.5em 1.2em;
  }
  .card-body .card-text {
    margin: 0;
  }
  .card img {
    width: 50%;
  }
}
@media only screen and (max-width: 1200px) {
  .card img {
    width: 40%;
  }
}

span {
  color: #802bb1;
}
</style>