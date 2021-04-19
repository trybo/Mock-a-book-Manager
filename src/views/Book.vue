<template>
  <TheHeader />
  <div class="container">
    <BaseText>
    Info about 
    <template v-slot:purple-text>{{ title }}</template>
    </BaseText>

    <!-- <h3 class="text-center pt-5 pb-3">
      Info about
      <span class="font-weight-bold">{{ title }}</span>
    </h3> -->

    <div class="card flex-row">
      <img
        class="card-img-left example-card-img-responsive"
        :src="book_poster"
      />
      <div class="card-body">
        <h4 class="card-title h5 h4-sm">
          {{ author_name + " " + author_surname }}
        </h4>
        <p class="card-text">
          Release year: {{ release_year }}
          <br />
          Number of pages: {{ book_pages }} <br />
          Genre: {{ book_genre }} <br />
          ISBN: {{ isbn }} <br />
          Rate: {{ book_rate }} / {{ book_votes }} <br /><br />
          {{ description }}
        </p>
      </div>
    </div>
    <div class="row">
    <BaseButton @click="return_page()">LIST OF BOOKS</BaseButton>
    <BaseButton @click="authorPage()">AUTHOR'S BOOKS</BaseButton></div>
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
      this.$router.push({
        name: "ReadBooks"
      });
    },
    authorPage() {
      this.$router.push({
        name: "Author", //book component
        params: {
          author_name: this.author_name,
          author_surname: this.author_surname,
        },
      });
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
/* span {
  color: #802bb1;
} */

.card-body {
  background-color: #564f6f;
}
</style>
