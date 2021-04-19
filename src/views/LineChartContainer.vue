<template>
  <RaitingChart
    v-if="this.state.loaded"
    v-bind:chartData="this.state.chartData"
    v-bind:chartOptions="this.state.chartOptions"
  />
</template>

<script>
import { defineComponent } from "vue";
import RaitingChart from "./LineChart";

export default defineComponent({
  name: "RaitingChart",
  components: { RaitingChart },
  data() {
    return {
      api: "https://my.api.mockaroo.com",
      api_key: "233f2e40",
      state: {
        labels: [],
        loaded: false,
        values: [],
        chartData: {},
        chartOptions: {
          responsive: false,
        },
      },
    };
  },
  methods: {
    getApi() {
      fetch(`${this.api}/books_project.json?key=${this.api_key}`)
        .then((res) => res.json())
        .then((result) => {
          result.forEach((element) => {
            this.state.values.push({
              key: element.author.surname,
              value: element.rate.average,
            });
          });

          this.state.chartData = {
            labels: this.state.labels,
            datasets: [
              {
                data: this.state.values,
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
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  beforeMount() {
    this.getApi();
  },
});
</script>