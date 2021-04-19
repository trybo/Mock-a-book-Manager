<template>
  <div class="w-75 mx-auto">
    <BarChart
      v-if="this.state.loaded"
      v-bind:chartData="this.state.chartData"
      v-bind:chartOptions="this.state.chartOptions"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BarChart from "./BarChart";

export default defineComponent({
  name: "AuthorBarChart",
  components: { BarChart },
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
      this.results.forEach((element) => {
            this.state.dict.push({
              key: element.author.surname,
              value: element.rate.average,
            });
          });

          this.state.chartData = {
            labels: Object.keys(this.state.dict),
            datasets: [
              {
                data: Object.keys(this.state.dict),
                label: "Data One",
                backgroundColor: "#f87979",
                borderColor: "#80b6f4",
                pointBorderColor: "#80b6f4",
                pointBackgroundColor: "#80b6f4",
                pointHoverBackgroundColor: "#80b6f4",
                pointHoverBorderColor: "#80b6f4",
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: false,
                borderWidth: 4,
              },
            ],
          };
          this.state.loaded = true;
        
    },
    // getApi() {
    //   fetch(`${this.api}/books_project.json?key=${this.api_key}`)
    //     .then((res) => res.json())
    //     .then((result) => {
    //       //let parsed = JSON.parse(JSON.stringify(result));
    //       let genres = [];
    //       result.forEach((element) => {
    //         if (genres[element.book.genre]) {
    //           genres[element.book.genre] += 1;
    //         } else {
    //           genres[element.book.genre] = 1;
    //         }
    //       });
    //       Object.keys(genres).forEach((element) => {
    //         this.state.labels.push(element);
    //       });
    //       Object.values(genres).forEach((element) => {
    //         this.state.values.push(element);
    //       });

    //       this.state.chartData = {
    //         labels: this.state.labels,
    //         datasets: [
    //           {
    //             data: this.state.values,
    //             label: "Data One",
    //             backgroundColor: "#f87979",
    //             borderColor: "#80b6f4",
    //             pointBorderColor: "#80b6f4",
    //             pointBackgroundColor: "#80b6f4",
    //             pointHoverBackgroundColor: "#80b6f4",
    //             pointHoverBorderColor: "#80b6f4",
    //             pointBorderWidth: 10,
    //             pointHoverRadius: 10,
    //             pointHoverBorderWidth: 1,
    //             pointRadius: 3,
    //             fill: false,
    //             borderWidth: 4,
    //           },
    //         ],
    //       };
    //       this.state.loaded = true;
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // },
  },
  beforeMount() {
    // this.getApi();
    this.getData();
  },
});
</script>  