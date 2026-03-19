import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ProduitsMontre() {
    const [bracelets, setBracelets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // États pour la pagination
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Sécurisation HTTPS
    const secureUrl = (url) => url ? url.replace("http://", "https://") : "";

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const API_URL = import.meta.env.VITE_API_URL || "https://evahstore-backend-production.up.railway.app";
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

    // --- LOGIQUE DE DÉFILEMENT AUTOMATIQUE ---
    useEffect(() => {
        // On ne lance le défilement que s'il y a plus de 6 produits
        if (bracelets.length <= productsPerPage) return;

        const totalPages = Math.ceil(bracelets.length / productsPerPage);
        
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage >= totalPages ? 1 : prevPage + 1));
        }, 5000); // Change toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage à la fermeture
    }, [bracelets]);

    // Calculs de pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = bracelets.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(bracelets.length / productsPerPage);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} FCFA. Image : ${product.image_url}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    if (loading) return <div className="p-20 text-center font-bold">Chargement...</div>;
    if (error) return <div className="p-6 text-red-600 text-center">⚠️ Erreur : {error}</div>;

    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">
            <section className="px-4 md:px-8 py-10">
                
                <Link to="/home" className="flex items-center gap-2 text-black hover:text-[#D4AF37] transition mb-6">
                    <IoArrowBackCircle className="text-3xl" />
                    <span className="text-lg">Retour</span>
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-2 font-serif">
                    Fétiche & Bracelet
                </h3>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                {/* Grille avec transition douce lors du changement de page */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 pb-6 transition-opacity duration-500">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden border border-gray-100 animate-fadeIn"
                        >
                            {product.badge && (
                                <span className={`absolute top-3 left-3 z-20 text-black text-[10px] px-2 py-1 rounded-full font-bold ${
                                    product.badge === "Nouveau" ? "bg-[#D4AF37]" : "bg-red-500 text-white"
                                }`}>
                                    {product.badge}
                                </span>
                            )}

                            <div className="relative group overflow-hidden">
                                {product.is_video ? (
                                    <video
                                        src={secureUrl(product.image_url)}
                                        autoPlay muted loop playsInline
                                        className="w-full h-44 md:h-80 object-cover"
                                    />
                                ) : (
                                    <img
                                        src={secureUrl(product.image_url)}
                                        alt={product.name}
                                        className="w-full h-44 md:h-80 object-cover"
                                    />
                                )}
                            </div>

                            <div className="p-3 md:p-5">
                                <h4 className="text-sm md:text-xl font-bold text-black truncate">{product.name}</h4>
                                <p className="text-[#D4AF37] font-bold mt-1 text-sm md:text-lg">{product.price} FCFA</p>

                                <button
                                    onClick={() => handleWhatsApp(product)}
                                    className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-xl text-[10px] md:text-sm font-bold flex items-center justify-center gap-1 hover:bg-black hover:text-[#D4AF37] transition duration-300 shadow-sm"
                                >
                                    <FaWhatsapp className="text-base" />
                                    Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicateurs (Dots) de pagination automatique */}
                {totalPages > 1 && (
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
