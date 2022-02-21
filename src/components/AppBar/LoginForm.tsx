import { createSignal, Setter } from "solid-js";
import { useLogin } from "../../hooks/useLogin";
import { State } from "./AppBar";
import styles from "./AppBar.module.css";

const LoginForm = (props: { setState: Setter<State> }) => {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const handleSubmit = () => {
    useLogin(email(), password()) && props.setState("login");
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

export default LoginForm;
