import { collection, getDocs, getFirestore } from 'firebase/firestore'

const getPersonajes = async () => {

  const db = getFirestore()

  const colleccionRef = collection (db, "personajes")


    const snapshot = await getDocs(colleccionRef)


    return snapshot.docs.map((doc) =>  ({ id: doc.id, ...doc.data()}))
}

export { getPersonajes }
