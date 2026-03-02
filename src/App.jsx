import Home from './pages/Home'
import './App.css'
import ProduitsBracelet from './pages/ProduitsBracelet';
import { Routes, Route, Navigate } from "react-router-dom";
import ProduitsPerruque from './pages/ProduitsPerruque';
import ProduitsMontre from './pages/ProduitsMontre';

function App() {

  return (
    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/produits-bracelet" element={<ProduitsBracelet />} />
        <Route path="/produits-perruque" element={<ProduitsPerruque />} />

        <Route path="/produits-montre" element={<ProduitsMontre />} />

      </Routes>

    </>
  )
}

export default App
