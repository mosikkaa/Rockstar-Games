import './App.css'
import Home from './components/Home/Home.tsx'
import {Routes,Route} from "react-router-dom";
import Jogos from "./components/Jogos/Jogos.tsx"
import Loja from "./components/Loja/Loja.tsx"
import Ajuda from "./components/Ajuda/Ajuda.tsx";
import Launcher from "./components/Launcher/Launcher.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Sobre from "./components/Sobre/Sobre.tsx";
import Support from "./components/Support/Support.tsx";
import Empregos from "./components/Empregos/Empregos.tsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/launcher" element={<Launcher />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/empregos" element={<Empregos />}/>
        <Route path="/jogos/:number" element={<Empregos />}/>
    </Routes>
  )
}

export default App
