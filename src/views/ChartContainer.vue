<template>
  <div>
    <h1>GenreChart</h1>
    <GenreChart
      v-bind:chartData="this.state.chartData"
      v-bind:chartOptions="this.state.chartOptions"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GenreChart from "./Chart";

export default defineComponent({
  name: "GenreChartContainer",
  components: { GenreChart },
  data() {
    return {
      // api: "https://my.api.mockaroo.com",
      // api_key: "5ffd1860",
      state: {
        genres: [],
        chartData: {},
        chartOptions: {
          responsive: true,
        },
      },
    };
  },
  mounted() {},
  beforeMount() {
    this.getApi();
  },
  methods: {
    getApi() {
      fetch(`${this.api}/books_project2.json?key=${this.api_key}`)
        .then((res) => res.json())
        .then((result) => {
          let parsed = JSON.parse(JSON.stringify(result))
          parsed.forEach((element) => {
            typeof element.book.genre;
            if (this.state.genres[element.book.genre]) {
              this.state.genres[element.book.genre] += 1;
            } else {
              this.state.genres[element.book.genre] = 1;
            }
          });
          // w tym miejscu jakoś trzea opanwoać przypisanie tych wartosci do odpowiednich zmiennych 
          // zeby przekazywało je do charta i powinno już być git
            console.log(this.state.genres["History"]) // zwraca ilość wszystkich genres = History

        });


      this.state.chartData = {
        labels: this.state.genre,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [1, 2], //this.state.genres.keys(),
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            borderWidth: 4,
          },
        ],
      };
    },
  },
});
</script>  