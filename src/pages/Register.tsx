import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "solid-app-router";
import { createSignal } from "solid-js";

const Register = () => {
  const [name, setName] = createSignal<string>("");
  const [email, setEmail] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");

  const navigate = useNavigate();
  const registerUser = () => {
    const authentication = getAuth();

    createUserWithEmailAndPassword(authentication, email(), password())
      .then((response) => {
        sessionStorage.setItem("auth_token", response.user.refreshToken);
        sessionStorage.setItem("email", response.user.email || "undefined");
        updateProfile(response.user, {
          displayName: name(),
        }).then(() => {
          sessionStorage.setItem(
            "name",
            response.user.displayName || "undefined"
          );
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header>
        <h1>Solid Crypto</h1>
      </header>
      <main>
        <h2>Register a new account</h2>
        <form>
          <div>
            {/* //TODO: Style this better */}
            <input
              type="name"
              placeholder="Name..."
              onInput={(e: any) => setName(e.target.value)}
            />
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
            <input type="password" placeholder="Confirm Password..." />
            <button type="button" onClick={registerUser}>
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
