<template>
  <div class="w-75 mx-auto">
    <PieChart
      v-if="this.state.loaded"
      v-bind:chartData="this.state.chartData"
      v-bind:chartOptions="this.state.chartOptions"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PieChart from "./PieChart";

export default defineComponent({
  name: "AuthorPieChart",
  components: { PieChart },
  props: ["results"],
  data() {
    return {
      //   api: "https://my.api.mockaroo.com",
      //   api_key: "febc6e00",
      state: {
        labels: [],
        loaded: false,
        values: [],
        chartData: {},
        chartOptions: {
          responsive: true,
          title: {
            display: true,
            text: "Number Of Genres",
            fontColor: "white",
            fontSize: 27,
          },
          legend: {
            labels: {
              fontColor: "white",
              fontSize: 18,
            },
          },
        },
      },
    };
  },
  methods: {
    getData() {
      let genres = [];
      this.results.forEach((element) => {
        if (genres[element.book.genre]) {
          genres[element.book.genre] += 1;
        } else {
          genres[element.book.genre] = 1;
        }
      });
      Object.keys(genres).forEach((element) => {
        this.state.labels.push(element);
      });
      Object.values(genres).forEach((element) => {
        this.state.values.push(element);
      });

      this.state.chartData = {
        labels: this.state.labels,
        datasets: [
          {
            data: this.state.values,
            backgroundColor: ["red", "blue", "green", "yellow", "black", "cyan", "magenta", "white", "orange", "darkblue"],
            borderColor: "#d1d7e0",
            pointHoverBackgroundColor: "#4c495d",
            borderWidth: 1,
            fontColor: "#d1d7e0",
          },
        ],
      };
      this.state.loaded = true;
    },
  },
  beforeMount() {
    this.getData();
  },
});
</script>  