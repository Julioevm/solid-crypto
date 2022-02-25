import { useNavigate } from "solid-app-router";
import { createSignal } from "solid-js";
import { createLogin } from "../primitives/createLogin";
import styles from "./Form.module.css";

const Login = () => {
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    createLogin(email(), password()) && navigate("/");
  };
  return (
    <>
      <header>
        <h1>Log into your account</h1>
      </header>
      <main>
        <form class={styles.large_form}>
          <input
            type="email"
            placeholder="Email..."
            onInput={(e: any) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onInput={(e: any) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
