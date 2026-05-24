import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Loader2 } from "lucide-react";

export default function ProduitsBracelet() {
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const secureUrl = (url) => {
        if (!url) return "";
        const isLocal =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";
        return isLocal ? url : url.replace("http://", "https://");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const API_URL =
                    import.meta.env.VITE_API_URL || "http://127.0.0.1";

                const response = await fetch(
                    `${API_URL}/products?category=bestseller`
                );

                if (!response.ok)
                    throw new Error(`Erreur HTTP : ${response.status}`);

                const data = await response.json();
                setBestSellers(data || []);
            } catch (err) {
                setError(err.message || "Erreur");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ✅ ANIMATION SCROLL (fade + rise)
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [bestSellers]);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";
        const message = `Bonjour, je veux commander ${product.name} (${product.price} FCFA)`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
            )}`,
            "_blank"
        );
    };

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center p-20 gap-3">
                <Loader2 className="h-10 w-10 animate-spin text-black" />
                <span className="text-[#D4AF37] animate-pulse">
                    Chargement...
                </span>
            </div>
        );

    if (error)
        return (
            <div className="p-10 text-center text-red-500 font-bold">
                {error}
            </div>
        );

    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">
            <section className="px-4 md:px-8 py-10">
                {/* BACK */}
                <Link
                    to="/home"
                    className="flex items-center gap-2 text-black hover:text-[#D4AF37] transition mb-8"
                >
                    <IoArrowBackCircle className="text-3xl" />
                    <span className="text-lg">Retour</span>
                </Link>

                {/* TITLE */}
                <h3 className="text-3xl font-bold text-center text-black mb-2 font-serif uppercase tracking-widest">
                    Nos Best Sellers
                </h3>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="reveal bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transform transition duration-500 hover:scale-[1.03] hover:shadow-xl"
                        >
                            {/* IMAGE / VIDEO */}
                            {product.is_video ? (
                                <video
                                    src={secureUrl(product.image_url)}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-44 md:h-70 object-cover"
                                />
                            ) : (
                                <img
                                    src={secureUrl(product.image_url)}
                                    alt={product.name}
                                    className="w-full h-44 md:h-70 object-cover"
                                />
                            )}

                            {/* INFO (sans padding excessif comme demandé) */}
                            <div className="p-3 md:p-4">
                                <h4 className="text-sm md:text-xl font-bold text-black truncate">
                                    {product.name}
                                </h4>

                                <p className="text-[#D4AF37] font-bold mt-1 text-sm md:text-lg">
                                    {product.price}{" "}
                                    <span className="text-[10px]">FCFA</span>
                                </p>

                                <button
                                    onClick={() => handleWhatsApp(product)}
                                    className="mt-4 w-full bg-[#D4AF37] text-black py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-[#D4AF37] transition"
                                >
                                    <FaWhatsapp />
                                    Commander
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EMPTY */}
                {bestSellers.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">
                        Aucun produit trouvé.
                    </p>
                )}
            </section>

            {/* CSS ANIMATION */}
            <style>{`
                .reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 0.7s ease;
                }

                .reveal.show {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
        </div>
    );
}