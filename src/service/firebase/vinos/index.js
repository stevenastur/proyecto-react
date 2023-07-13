import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const getVinos = async (bodegaFiltrada) => {
  const db = getFirestore();

  const colleccionRef = collection(db, "vinos");

  const q = bodegaFiltrada ? query(colleccionRef, where("bodega", "==", bodegaFiltrada)) : colleccionRef;

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
};

const getVino = async (id) => {
  const db = getFirestore();

  const vinoRef = doc(db, "vinos", id);

  const snapshot = await getDoc(vinoRef);

  // if (snapshot.exists()) {

  return { id: snapshot.id, ...snapshot.data() };

  // } else {

  //   throw new Error("No se encontró el producto");
  // }
};

export { getVinos , getVino};
