import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const getVinos = async (bodegaFiltrada) => {
  const db = getFirestore();

  const colleccionRef = collection(db, "vinos");

  const q = bodegaFiltrada ? query(colleccionRef, where("bodega", "==", bodegaFiltrada)) : colleccionRef;

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export { getVinos };
