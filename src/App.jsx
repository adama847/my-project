import React, { useState, useEffect } from 'react'; // 1. Importation des hooks
import Home from './pages/Home'
import './App.css'
import ProduitsBracelet from './pages/ProduitsBracelet';
import { Routes, Route, Navigate } from "react-router-dom";
import ProduitsPerruque from './pages/ProduitsPerruque';
import ProduitsMontre from './pages/ProduitsMontre';

function App() {
  // 2. Création de l'état de chargement
  const [loading, setLoading] = useState(true);

  // 3. Lancement du timer de 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Nettoyage
  }, []);

  // 4. Affichage de la page d'attente
 if (loading) {
  return (
    <div className="splash-screen min-h-screen flex flex-col items-center justify-center z-30 bg-gradient-to-tr from-[#745903] via-[#dbbc0e] to-black 
    animate-gradient bg-[length:300%_300%]">
      {/* Conteneur pour l'image avec un petit effet d'ombre dorée */}
      <div className="relative mb-6">
        <img 
          src="/img/Evahh.jpeg" 
          className="loader-logo h-25 w-20 rounded-full object-cover border-4 border-white z-50 shadow-3xl animate-pulse" 
          alt="Logo EvaStore" 
        />

      </div>
      
      <h1 className="text-2xl md:text-4xl z-50 text-center font-bold text-white drop-shadow-md tracking-widest animate-pulse uppercase">
        Bienvenue chez <span className="text-black animate-bounce">EvaStore</span>
      </h1>
      
      {/* Petit indicateur de chargement discret */}
      <div className="mt-4 w-24 h-1 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full bg-black animate-progress"></div>
      </div>
    </div>
  );
}


  // 5. Affichage normal du site après 3 secondes
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
