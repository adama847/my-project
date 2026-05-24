import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Loader2 } from "lucide-react";

export default function ProduitsPerruque() {
    const [perruques, setPerruques] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const secureUrl = (url) => {
        if (!url) return "";
        const isLocal =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";

        return isLocal ? url : url.replace("http://", "https://");
    };

    /* FETCH DATA */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL =
                    import.meta.env.VITE_API_URL || "http://127.0.0.1";

                const res = await fetch(
                    `${API_URL}/products?category=perruque`
                );
                const data = await res.json();

                setPerruques(data || []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    /* ANIMATION SCROLL REVEAL */
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
    }, [perruques, showAll]);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";

        const message = `Bonjour, je souhaite commander la perruque : ${product.name} (${product.price} FCFA)`;

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center p-20 gap-3">
                <Loader2 className="h-10 w-10 animate-spin text-black" />
                <span className="text-yellow-600 animate-pulse">
                    Chargement...
                </span>
            </div>
        );

    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">

            {/* HEADER */}
            <section className="px-4 md:px-8 py-10">

                <Link
                    to="/home"
                    className="flex items-center gap-2 text-black mb-8 hover:text-[#D4AF37] transition"
                >
                    <IoArrowBackCircle className="text-3xl" />
                    <span>Retour</span>
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-2">
                    Perruques Premium
                </h3>

                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                    {(showAll ? perruques : perruques.slice(0, 6)).map(
                        (product, i) => (
                            <div
                                key={product.id}
                                className="reveal bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                <div className="overflow-hidden">
                                    {product.is_video ? (
                                        <video
                                            src={secureUrl(product.image_url)}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-44 md:h-80 object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    ) : (
                                        <img
                                            src={secureUrl(product.image_url)}
                                            alt={product.name}
                                            className="w-full h-44 md:h-80 object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    )}
                                </div>

                                <div className="p-4">

                                    <h4 className="font-bold text-black truncate">
                                        {product.name}
                                    </h4>

                                    <p className="text-[#D4AF37] font-bold">
                                        {product.price} FCFA
                                    </p>

                                    <button
                                        onClick={() => handleWhatsApp(product)}
                                        className="mt-3 w-full bg-[#D4AF37] text-black py-2 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-[#D4AF37] transition"
                                    >
                                        <FaWhatsapp />
                                        Commander
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* BOUTON VOIR PLUS */}
                {!showAll && perruques.length > 6 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-8 py-3 bg-black text-[#D4AF37] border border-[#D4AF37] rounded-full font-bold hover:bg-[#D4AF37] hover:text-black transition"
                        >
                            Voir plus
                        </button>
                    </div>
                )}
            </section>

            {/* ANIMATIONS CSS */}
            <style>
                {`
                .reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 0.7s ease;
                }

                .reveal.show {
                    opacity: 1;
                    transform: translateY(0);
                }
                `}
            </style>
        </div>
    );
}