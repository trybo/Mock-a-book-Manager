<template>
  <TheHeader />
  <input type="button" v-on:click="return_page()" value="cofnij" />
  <div class="table">
    <div class="book">
      <div class="book_poster">
        <img v-bind:src="this.poster" />
      </div>

      <div class="book_details">
        <p>Title: {{ this.title }}</p>
        <!-- do napisania:
        
        wypluć wszystkie dane z return w formie this.nazwazmiennej
        ostylować to w fajnej formie np.
            - zrobić jakiś div, gdzie
            
            z lewej strony plakat
            z prawej strony poszczególne pola z informacjami jakos fajnie ustawione
            powstawiać jakieś fajne fancy efektywne cssy :) 
        
         -->
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
    };
  },
  methods: {
    return_page() {
      this.$router.go(-1);
    },
  },
  mounted() {
      //załadowanie zmiennych przekazanych przez router z poprzedniego komponentu
      this.title = this.$route.params.title,
      this.author_name = this.$route.params.author_name,
      this.author_surname = this.$route.params.author_surname,
      this.book_genre = this.$route.params.book_genre,
      this.book_pages = this.$route.params.book_pages,
      this.release_year = this.$route.params.release_year,
      this.book_poster = this.$route.params.book_poster,
      this.isbn = this.$route.params.isbn,
      this.book_rate = this.$route.params.book_rate,
      this.book_votes = this.$route.params.book_votes
  },
};
</script>



