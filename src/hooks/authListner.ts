import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem("auth"));
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: any) => {
      firebaseUser ? setUser({ ...firebaseUser }) : setUser(null);
    });
    return unsubscribe;
  }, []);
  return user;
};
