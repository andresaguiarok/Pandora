import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/"  element={<ItemListContainer  />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
