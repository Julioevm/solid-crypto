import { createStore } from "solid-js/store";
import { SolidApexCharts } from "solid-apexcharts";

const Chart = () => {
  const [options] = createStore({
    theme: {
      mode: "dark",
      palette: "palette1",
    },
    chart: {
      height: 350,
      with: 600,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Coin price",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  const [series] = createStore({
    list: [
      {
        name: "series-1",
        data: [30.0, 40.0, 35.0, 50.0, 49.0, 60.0, 70.2, 91.2],
      },
    ],
  });

  return (
    <div id="chart">
      <SolidApexCharts
        width="600"
        type="area"
        options={options}
        series={series.list}
      />
    </div>
  );
};

export default Chart;
