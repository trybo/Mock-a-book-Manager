<template>
  <TheHeader />
  <div class="container">
    <BaseText>
    Books of 
    <template v-slot:purple-text>{{
        author_name + " " + author_surname
      }}</template>
    </BaseText>
    <!-- <h3 class="text-center pt-5 pb-3">
      Books of
      <span class="font-weight-bold">{{
        author_name + " " + author_surname
      }}</span>
    </h3> -->

    <table class="table table-hover table-bordered">
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

    <BaseButton @click="return_page()">GO BACK</BaseButton>

    <!-- <div class="card-deck">
      <div
        class="card text-center my-3"
        @click="getData(result)"
        v-for="result in results"
        :key="result.id"
      >
        <img class="card-img-top" :src="result.poster" />
        <div class="card-body">
          <h5 class="card-title">{{ result.book.title }}</h5>
          <p class="card-text">
            {{ author_name + " " + author_surname }}
          </p>
        </div>
        <div class="card-footer">
          <small>{{ result.book.genre }}</small>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: "https://my.api.mockaroo.com",
      api_key: "881c9e40",
      results: [],
      results_keys: [],
      clicked_result: [],
      author_name: "",
      author_surname: ""
    };
  },
  methods: {
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
/* .card-deck {
  margin-top: 10px;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 0.5rem;
}

.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}

.card {
  background: #564f6f;
  border: 1px solid #d1d7e0;
}

.card-footer {
  background: #4c495d;
} */

/* span {
  color: #802bb1;
} */

thead {
  background: #4c495d;
}

tbody {
  background: #564f6f;
}

table {
  color: #d1d7e0;
}
</style>