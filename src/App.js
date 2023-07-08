import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainter } from "./pages";
import { BarraNavegadora } from "./components/layout";
import { ItemDetail } from "./components/common";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { PrintProvider } from "./context/print";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADjS_IVwnLK0vZLdFiP6EZI4dRnuAeoBw",
  authDomain: "los-simpsons-30e44.firebaseapp.com",
  projectId: "los-simpsons-30e44",
  storageBucket: "los-simpsons-30e44.appspot.com",
  messagingSenderId: "356201608005",
  appId: "1:356201608005:web:6b88e64a93a5a0aa2dc42c",
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
            <Route path="/personajes" element={<ItemListContainter />} />
            <Route path="/personajes/:id" element={<ItemDetail />} />
          </Routes>
        </BrowserRouter>
      </PrintProvider>
    </div>
  );
}

export default App;
