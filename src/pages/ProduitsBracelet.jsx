import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

export default function ProduitsBracelet() {
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // États pour la gestion d'affichage
    const [currentPage, setCurrentPage] = useState(1);
    const [showAll, setShowAll] = useState(false); // État pour masquer/afficher tout
    const productsPerPage = 6;

    // FIX : Sécurité intelligente pour localhost vs production
    const secureUrl = (url) => {
        if (!url) return "";
        const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        if (isLocal) return url;
        return url.replace("http://", "https://");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1";
                const response = await fetch(`${API_URL}/products?category=bestseller`);

                if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);

                const data = await response.json();
                setBestSellers(data || []);
            } catch (err) {
                setError(err.message || "Une erreur est survenue");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // --- LOGIQUE DU DÉFILEMENT AUTO (Seulement si showAll est actif) ---
    useEffect(() => {
        if (!showAll || bestSellers.length <= productsPerPage) return;

        const totalPages = Math.ceil(bestSellers.length / productsPerPage);
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [showAll, bestSellers]);

    // Calculs pour l'affichage
    const totalPages = Math.ceil(bestSellers.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Affiche 6 produits par défaut, ou la page courante si showAll est vrai
    const currentProducts = showAll 
        ? bestSellers.slice(indexOfFirstProduct, indexOfLastProduct) 
        : bestSellers.slice(0, 6);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";
        const message = `Bonjour, je veux commander le Best Seller : ${product.name} (${product.price} FCFA)`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    if (loading) return <div className="p-20 text-center font-bold">Chargement de la collection...</div>;
    if (error) return <div className="p-10 text-center text-red-500 font-bold">{error}</div>;

    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">
            <section className="px-4 md:px-8 py-10">
                
                <Link to="/home" className="flex items-center gap-2 text-black hover:text-[#D4AF37] transition mb-8">
                    <IoArrowBackCircle className="text-3xl" />
                    <span className="text-lg">Retour</span>
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-2 font-serif uppercase tracking-widest">
                    Nos Best Sellers
                </h3>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 pb-6 transition-all duration-700 ease-in-out">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md flex flex-col justify-between overflow-hidden border border-gray-100 transform transition duration-500 hover:scale-[1.02] animate-fadeIn"
                        >
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
                                <p className="text-[#D4AF37] font-bold mt-1 text-sm md:text-lg">
                                    {product.price} <span className="text-[10px]">FCFA</span>
                                </p>

                                <button
                                    onClick={() => handleWhatsApp(product)}
                                    className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-xl text-[10px] md:text-base font-bold flex items-center justify-center gap-1 hover:bg-black hover:text-[#D4AF37] transition duration-300"
                                >
                                    <FaWhatsapp className="text-sm md:text-lg" />
                                    Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOUTON VOIR PLUS */}
                {!showAll && bestSellers.length > 6 && (
                    <div className="flex justify-center mt-10">
                        <button 
                            onClick={() => setShowAll(true)}
                            className="px-10 py-3 bg-black text-[#D4AF37] border-2 border-[#D4AF37] rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-xl tracking-widest"
                        >
                            VOIR TOUTE LA COLLECTION
                        </button>
                    </div>
                )}

                {/* INDICATEURS DE PAGINATION (Dots) : Uniquement si showAll est actif */}
                {showAll && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentPage === i + 1 ? "bg-[#D4AF37] w-10" : "bg-gray-300 w-2"
                                }`}
                            />
                        ))}
                    </div>
                )}

                {bestSellers.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">Aucun produit trouvé.</p>
                )}
            </section>
        </div>
    );
}
