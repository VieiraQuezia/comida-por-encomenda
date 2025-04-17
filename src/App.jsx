import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detalhe1 from "./pages/Detalhe1";
import Detalhe2 from "./pages/Detalhe2";
import Detalhe3 from "./pages/Detalhe3";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detalhe 1" element={<Detalhe1 />} />
        <Route path="/Detalhe 2" element={<Detalhe2 />} />
        <Route path="/Detalhe 3" element={<Detalhe3 />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Sobre Nós" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;