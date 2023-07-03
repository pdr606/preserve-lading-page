import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Componentes/Header";
import "./App.css";
import Home from "./Componentes/Home";
import Servicos from "./Componentes/Servicos";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serviços" element={<Servicos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
