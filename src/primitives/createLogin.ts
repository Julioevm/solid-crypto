import { logEvent } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setAuthToken } from "../App";
import { analytics } from "../Firebase/FirebaseConfig";

export const createLogin = (email: string, password: string): Promise<boolean> => {
  const authentication = getAuth();

  return signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      sessionStorage.setItem("name", response.user.displayName || "undefined");
      sessionStorage.setItem("email", response.user.email || "undefined");
      setAuthToken(response.user.refreshToken);
    })
    .then(() => {
      logEvent(analytics, "login", {
        email: email,
      });
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

};
