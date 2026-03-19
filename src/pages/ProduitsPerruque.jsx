import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

export default function ProduitsPerruque() {
    const [perruques, setPerruques] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const secureUrl = (url) => url ? url.replace("http://", "https://") : "";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || "https://evahstore-backend-production.up.railway.app";
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

    // --- LOGIQUE DU DÉFILEMENT AUTOMATIQUE ---
    useEffect(() => {
        if (perruques.length <= productsPerPage) return;

        const totalPages = Math.ceil(perruques.length / productsPerPage);
        
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage >= totalPages ? 1 : prevPage + 1));
        }, 5000); // Change de page toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage du timer
    }, [perruques]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const currentProducts = perruques.slice(indexOfLastProduct - productsPerPage, indexOfLastProduct);
    const totalPages = Math.ceil(perruques.length / productsPerPage);

    if (loading) return <div className="p-20 text-center font-bold">Chargement...</div>;

    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">
            <section className="px-4 md:px-8 py-10">
                <Link to="/home" className="flex items-center gap-2 text-black mb-8">
                    <IoArrowBackCircle className="text-3xl" /> <span className="text-lg">Retour</span>
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-10 font-serif">Perruques Premium</h3>

                {/* Grille avec animation de transition douce */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 transition-all duration-500 ease-in-out">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden animate-fadeIn">
                            <div className="relative">
                                {product.is_video ? (
                                    <video src={secureUrl(product.image_url)} autoPlay muted loop playsInline className="w-full h-44 md:h-80 object-cover" />
                                ) : (
                                    <img src={secureUrl(product.image_url)} alt={product.name} className="w-full h-44 md:h-80 object-cover" />
                                )}
                            </div>
                            <div className="p-3">
                                <h4 className="text-sm md:text-xl font-bold text-black truncate">{product.name}</h4>
                                <p className="text-[#D4AF37] font-bold text-sm md:text-lg">{product.price} FCFA</p>
                                <button className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-xl text-[10px] md:text-sm font-bold flex items-center justify-center gap-1">
                                    <FaWhatsapp /> Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicateurs visuels (Petits points) */}
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(totalPages)].map((_, i) => (
                            <div 
                                key={i} 
                                className={`h-2 w-2 rounded-full transition-all ${currentPage === i + 1 ? "bg-[#D4AF37] w-6" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
