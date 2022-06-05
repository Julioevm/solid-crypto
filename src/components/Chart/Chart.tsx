import { createStore } from "solid-js/store";
import { SolidApexCharts } from "solid-apexcharts";
import "./styles.css";

export type TimeSeries = Array<{ x: string; y: string }>;

const Chart = (props: { data: TimeSeries }) => {
  const [options] = createStore({
    theme: {
      mode: "light",
      palette: "palette1",
    },
    chart: {
      height: 350,
      with: 600,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Coin Price Timeline",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "$";
        },
      },
    },

  });

  const [series] = createStore({
    list: [
      {
        name: "Price",
        data: props.data,
      },
    ],
    xaxis: {
      type: "datetime",
    },
  });

  return (
    <div id="chart" class="chart">
      <SolidApexCharts
        width="100%"
        type="area"
        options={options}
        series={series.list as any}
      />
    </div>
  );
};

export default Chart;
