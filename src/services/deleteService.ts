import { db } from "./../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export const deletePost = (postId: string) =>
  new Promise((resolve) => {
    deleteDoc(doc(db, "posts", postId))
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
