import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";


export default function ProduitsMontre() {
    const [bracelets, setBracelets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // États pour la pagination et l'affichage
    const [currentPage, setCurrentPage] = useState(1);
    const [showAll, setShowAll] = useState(false); // Masque la pagination au début
    const productsPerPage = 6;

    // FIX ERREUR CONNECTION CLOSED : Ne force le HTTPS que si on n'est pas en local
    const secureUrl = (url) => {
        if (!url) return "";
        const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        if (isLocal) return url; // Garde http:// en local
        return url.replace("http://", "https://"); // Force https en ligne (Railway)
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
                const response = await fetch(`${API_URL}/products?category=bracelet`);
                if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
                const data = await response.json();
                setBracelets(data || []);
            } catch (err) {
                setError(err.message || "Une erreur est survenue");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // --- LOGIQUE DÉFILEMENT AUTO (uniquement si showAll est activé) ---
    useEffect(() => {
        if (!showAll || bracelets.length <= productsPerPage) return;
        const totalPages = Math.ceil(bracelets.length / productsPerPage);
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [showAll, bracelets]);

    // Calculs d'affichage
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    
    // Si showAll est faux, on ne montre que les 6 premiers sans pagination
    const currentProducts = showAll 
        ? bracelets.slice(indexOfFirstProduct, indexOfLastProduct) 
        : bracelets.slice(0, 6);

    const totalPages = Math.ceil(bracelets.length / productsPerPage);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} FCFA.`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

if (loading) return (
  <div className="flex flex-col items-center justify-center p-20 gap-3">
    <Loader2 className="h-10 w-10 animate-spin text-[#0a0904]" />
    <span className="text-[#dbbc0e] font-medium animate-pulse">Un instant...</span>
  </div>
);
    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">
            <section className="px-4 md:px-8 py-10">
                
                <Link to="/home" className="flex items-center gap-2 text-black hover:text-[#D4AF37] transition mb-6">
                    <IoArrowBackCircle className="text-3xl" />
                    <span className="text-lg">Retour</span>
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-2 font-serif">Fétiche & Bracelet</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 pb-6">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden border border-gray-100">
                            <div className="relative group overflow-hidden">
                                {product.is_video ? (
                                    <video src={secureUrl(product.image_url)} autoPlay muted loop playsInline className="w-full h-44 md:h-80 object-cover" />
                                ) : (
                                    <img src={secureUrl(product.image_url)} alt={product.name} className="w-full h-44 md:h-80 object-cover" />
                                )}
                            </div>
                            <div className="p-3 md:p-5">
                                <h4 className="text-sm md:text-xl font-bold text-black truncate">{product.name}</h4>
                                <p className="text-[#D4AF37] font-bold mt-1 text-sm md:text-lg">{product.price} FCFA</p>
                                <button onClick={() => handleWhatsApp(product)} className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-xl text-[10px] md:text-sm font-bold flex items-center justify-center gap-1 hover:bg-black hover:text-[#D4AF37] transition duration-300 shadow-sm">
                                    <FaWhatsapp className="text-base" /> Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOUTON VOIR PLUS : Masque la pagination au début */}
                {!showAll && bracelets.length > 6 && (
                    <div className="flex justify-center mt-10">
                        <button 
                            onClick={() => setShowAll(true)}
                            className="px-10 py-3 bg-black text-[#D4AF37] border-2 border-[#D4AF37] rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-xl"
                        >
                            VOIR TOUS LES PRODUITS
                        </button>
                    </div>
                )}

                {/* PAGINATION : Apparaît seulement après avoir cliqué sur Voir Plus */}
                {showAll && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentPage === i + 1 ? "bg-[#D4AF37] w-8" : "bg-gray-400 w-2"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
