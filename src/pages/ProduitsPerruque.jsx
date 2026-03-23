import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Loader2 } from "lucide-react";
export default function ProduitsPerruque() {
    const [perruques, setPerruques] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [showAll, setShowAll] = useState(false); // État pour masquer/afficher tout
    const productsPerPage = 6;

    // FIX : Ne force le HTTPS que hors du mode local pour éviter ERR_CONNECTION_CLOSED
    const secureUrl = (url) => {
        if (!url) return "";
        const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        if (isLocal) return url;
        return url.replace("http://", "https://");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Utilisation de l'URL d'API locale par défaut si disponible
                const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1";
                const response = await fetch(`${API_URL}/products?category=perruque`);
                const data = await response.json();
                setPerruques(data || []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // --- LOGIQUE DU DÉFILEMENT AUTO (Seulement si showAll est actif) ---
    useEffect(() => {
        if (!showAll || perruques.length <= productsPerPage) return;

        const totalPages = Math.ceil(perruques.length / productsPerPage);
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [showAll, perruques]);

    // Calcul des produits à afficher
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    
    // On ne montre que 6 produits tant que l'utilisateur n'a pas cliqué sur "Voir plus"
    const currentProducts = showAll 
        ? perruques.slice(indexOfFirstProduct, indexOfLastProduct) 
        : perruques.slice(0, 6);

    const totalPages = Math.ceil(perruques.length / productsPerPage);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";
        const message = `Bonjour, je souhaite commander la perruque : ${product.name} (${product.price} FCFA)`;
        window.open(`https://wa.me{phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
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
                <Link to="/home" className="flex items-center gap-2 text-black mb-8 hover:text-[#D4AF37] transition">
                    <IoArrowBackCircle className="text-3xl" /> <span className="text-lg">Retour</span>
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-2 font-serif">Perruques Premium</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 pb-6 transition-all duration-500">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden border border-gray-100 animate-fadeIn">
                            <div className="relative">
                                {product.is_video ? (
                                    <video src={secureUrl(product.image_url)} autoPlay muted loop playsInline className="w-full h-44 md:h-80 object-cover" />
                                ) : (
                                    <img src={secureUrl(product.image_url)} alt={product.name} className="w-full h-44 md:h-80 object-cover" />
                                )}
                            </div>
                            <div className="p-3 md:p-5">
                                <h4 className="text-sm md:text-xl font-bold text-black truncate">{product.name}</h4>
                                <p className="text-[#D4AF37] font-bold text-sm md:text-lg">{product.price} FCFA</p>
                                <button 
                                    onClick={() => handleWhatsApp(product)}
                                    className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-xl text-[10px] md:text-sm font-bold flex items-center justify-center gap-1 hover:bg-black hover:text-[#D4AF37] transition duration-300"
                                >
                                    <FaWhatsapp className="text-base" /> Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOUTON VOIR PLUS */}
                {!showAll && perruques.length > 6 && (
                    <div className="flex justify-center mt-10">
                        <button 
                            onClick={() => setShowAll(true)}
                            className="px-10 py-3 bg-black text-[#D4AF37] border-2 border-[#D4AF37] rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-xl"
                        >
                            VOIR TOUTES LES PERRUQUES
                        </button>
                    </div>
                )}

                {/* INDICATEURS DE PAGINATION (Dots) : Apparaissent après clic sur Voir Plus */}
                {showAll && totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentPage === i + 1 ? "bg-[#D4AF37] w-8" : "bg-gray-300 w-2"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
