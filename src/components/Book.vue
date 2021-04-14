<template>
  <TheHeader />

  <div class="table">
    <div class="button">
      <button
        class="btn btn-purple btn-lg"
        type="button"
        v-on:click="return_page()"
      >
        {{ "Go Back" }}
      </button>
    </div>

    <div>
      <div class="card mx-auto" style="width: 38rem">
        <img class="card-img-tom" :src="book_poster" />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">
            {{ author_name + " " + author_surname }} <br />
            {{ release_year }} <br />
            {{ book_pages }} <br />
            {{ book_genre }} <br />
            {{ isbn }} <br />
            {{ book_rate }} / {{ book_votes }} <br />
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "",
      author_name: "",
      author_surname: "",
      book_genre: "",
      book_pages: "",
      release_year: "",
      book_poster: "",
      isbn: "",
      book_rate: "",
      book_votes: "",
      description: "",
    };
  },
  methods: {
    return_page() {
      this.$router.go(-1);
    },
  },
  mounted() {
    //załadowanie zmiennych przekazanych przez router z poprzedniego komponentu
    (this.title = this.$route.params.title),
      (this.author_name = this.$route.params.author_name),
      (this.author_surname = this.$route.params.author_surname),
      (this.book_genre = this.$route.params.book_genre),
      (this.book_pages = this.$route.params.book_pages),
      (this.release_year = this.$route.params.release_year),
      (this.book_poster = this.$route.params.book_poster),
      (this.isbn = this.$route.params.isbn),
      (this.book_rate = this.$route.params.book_rate),
      (this.book_votes = this.$route.params.book_votes),
      (this.description = this.$route.params.description);
  },
};
</script>


<style scoped>
.btn {
  background: #802bb1;
  color: #d1d7e0;
  width: 250px;
}
.button {
  text-align: center;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn:hover {
  background: #702bb1;
  color: #e1d7e0;
}
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
</style>
