import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const userFromLocal: any = localStorage.getItem("auth");

export const addPost = async (post: any) =>
  new Promise(async (resolve, reject) => {
    const newCityRef = doc(collection(db, "posts"));
    await setDoc(newCityRef, {
      ...post,
      id: newCityRef?.id,
      createdAt: new Date(),
      like: 0,
      isAnyComment: false,
      comments: [],
      createdBy: auth?.currentUser?.uid || userFromLocal?.uid,
    })
      .then(() => resolve(true))
      .catch((error) =>
        resolve({
          success: false,
          error: error?.message,
        })
      );
  });
