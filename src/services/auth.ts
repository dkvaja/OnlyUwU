import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const registerUser = () =>
  new Promise((resolve) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("auth", JSON.stringify(result.user));
        resolve({
          success: true,
          user: result.user,
        });
      })
      .catch((error) => {
        resolve({
          success: false,
          message: error.message,
        });
      });
  });

export const logOutUser = () =>
  new Promise((resolve) => {
    auth
      ?.signOut()
      .then(() => {
        localStorage.removeItem("auth");
        resolve({
          success: true,
        });
      })
      .catch((error) => resolve({ success: false, message: error?.message }));
  });
