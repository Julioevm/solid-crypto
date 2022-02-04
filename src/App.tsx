import {
  Component,
  createEffect,
  createResource,
  createSignal,
  lazy,
  Show,
} from "solid-js";

import styles from "./App.module.css";
import CoinList from "./components/CoinList/CoinList";
import { Coin } from "./components/CoinLine/CoinLine";
import { SearchBar } from "./components/SearchBar/SearchBar";
import AppBar from "./components/AppBar/AppBar";
import { Routes, useRoutes } from "solid-app-router";

const routes = [
  {
    path: "/coin/:id",
    component: lazy(() => import("./pages/coin/[id]")),
  },
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
];

const App: Component = () => {
  const user = { firstName: "John", lastName: "Doe" };
  const Routes = useRoutes(routes);

  return (
    <div class={styles.App}>
      <AppBar user={user} />
      <Routes />
    </div>
  );
};

export default App;
