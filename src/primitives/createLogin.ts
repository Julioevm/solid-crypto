import { logEvent } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setAuthToken } from "../App";
import { analytics } from "../Firebase/FirebaseConfig";

export const createLogin = (email: string, password: string): Promise<boolean> => {
  //let isLoginSuccessful = false;
  const authentication = getAuth();

  return signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      setAuthToken(response.user.refreshToken);
      sessionStorage.setItem("email", response.user.email || "undefined");
      sessionStorage.setItem("name", response.user.displayName || "undefined");
    })
    .then(() => {
      console.log("OK");

      
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
