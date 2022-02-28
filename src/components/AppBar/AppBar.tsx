import { Link, useMatch } from "solid-app-router";
import { createEffect, createSignal, Match, on, Show, Switch } from "solid-js";
import { authToken } from "../../App";
import "./styles.css";
import LoginForm from "./LoginForm";

export type State = "logout" | "form" | "login";

const AppBar = () => {
  const [state, setState] = createSignal<State>("logout");
  const [user, setUser] = createSignal<string>("Anonymous");
  const match = useMatch(() => "");

  createEffect(
    on(authToken, () => {
      if (authToken()) {
        setState("login");
        setUser(sessionStorage.getItem("name") ?? "Anonymous");
      }
    })
  );

  const logOut = () => {
    sessionStorage.removeItem("auth_token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    setState("logout");
  };

  const LoggedOut = () => {
    return (
      <div class="app_bar_container">
        <a class="pointer login_button" onClick={() => setState("form")}>
          Log-in
        </a>{" "}
        <Link class="login_link" href="/login">
          Log-in
        </Link>
        <Link href="/register">Register</Link>
      </div>
    );
  };

  const LoggedIn = () => {
    return (
      <div class="app_bar_container">
        <div>{user()}</div>
        <a class="pointer" onClick={logOut}>
          Log-out
        </a>
      </div>
    );
  };

  return (
    <div class="app_bar">
      {
        <Show when={!match()}>
          {
            <Link href="/" class="bar_title">
              Solid Crypto
            </Link>
          }
        </Show>
      }

      <Switch fallback={<LoggedOut />}>
        <Match when={state() === "form"}>
          <LoginForm setState={setState} />
        </Match>
        <Match when={state() === "login"}>
          <LoggedIn />
        </Match>
      </Switch>
    </div>
  );
};

export default AppBar;
