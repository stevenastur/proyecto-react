import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainter } from "./pages";
import { BarraNavegadora } from "./components/layout";
import { ItemDetailContainter } from "./components/common";
import { PrintProvider } from "./context/print";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApZURm_72iZgCku3zzbGbEkXUg8_oQCRw",
  authDomain: "vinos-705de.firebaseapp.com",
  projectId: "vinos-705de",
  storageBucket: "vinos-705de.appspot.com",
  messagingSenderId: "242057114399",
  appId: "1:242057114399:web:b1a3550f33fc84970ab62a",
  measurementId: "G-8MXRCTQHTN"
};

// Initialize Firebase
initializeApp(firebaseConfig);



function App() {
  return (
    <div className="App">
      <PrintProvider>
        <BrowserRouter>
          <BarraNavegadora />
          <Routes>
            <Route path="/" element={<ItemListContainter />} />
            <Route path="/vinos" element={<ItemListContainter />} />
            <Route path="/category/:nombreBodega" element={<ItemListContainter />} />
            <Route path="/vinos/:id" element={<ItemDetailContainter />} />
          </Routes>
        </BrowserRouter>
      </PrintProvider>
    </div>
  );
}

export default App;
