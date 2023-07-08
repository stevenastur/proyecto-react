import { collection, getDocs, getFirestore } from "firebase/firestore";

const getVinos = async () => {
  const db = getFirestore();

  const colleccionRef = collection(db, "vinos");

  const snapshot = await getDocs(colleccionRef);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { getVinos };
