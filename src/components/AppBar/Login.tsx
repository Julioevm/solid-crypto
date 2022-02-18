import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createSignal, Setter } from "solid-js";
import { State } from "./AppBar";
import styles from "./AppBar.module.css";

const Login = (props: { setState: Setter<State> }) => {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const handleSubmit = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email(), password())
      .then((response) => {
        sessionStorage.setItem("auth_token", response.user.refreshToken);
        sessionStorage.setItem("email", response.user.email || "undefined");
        sessionStorage.setItem(
          "name",
          response.user.displayName || "undefined"
        );
      })
      .catch((error) => {
        console.log(error);
      });

    props.setState("login");
  };

  return (
    <form class={styles.app_bar_login}>
      <div>
        <input
          type="email"
          placeholder="email..."
          onInput={(e: any) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password..."
          onInput={(e: any) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={() => props.setState("logout")}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Login;
