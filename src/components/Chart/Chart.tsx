import { createStore } from "solid-js/store";
import { SolidApexCharts } from "solid-apexcharts";
import "./styles.css";

type Timeline = Array<{ epoch: number; price: number }>;

const Chart = (props: { data: Timeline }) => {
  const [options] = createStore({
    theme: {
      mode: "light",
      palette: "palette1",
    },
    chart: {
      height: 350,
      with: 600,
      type: "line",
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
  });

  const [series] = createStore({
    list: [
      {
        name: "series-1",
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
        series={series.list}
      />
    </div>
  );
};

export default Chart;
