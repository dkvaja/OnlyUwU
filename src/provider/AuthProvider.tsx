import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: any) => {
      firebaseUser &&
        setUser({ ...firebaseUser?.providerData[0], uid: firebaseUser.uid });
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
