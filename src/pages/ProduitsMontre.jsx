import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function ProduitsMontre() {
    const [bracelets, setBracelets] = useState([]);
    const [loading, setLoading] = useState(true);

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
                const API_URL =
                    import.meta.env.VITE_API_URL ||
                    "http://127.0.0.1:8000/api";

                const res = await fetch(
                    `${API_URL}/products?category=bracelet`
                );

                const data = await res.json();
                setBracelets(data || []);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // ✅ ANIMATION SAFE (ne cache jamais les images)
    useEffect(() => {
        const items = document.querySelectorAll(".reveal-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show-card");
                    }
                });
            },
            { threshold: 0.1 }
        );

        items.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [bracelets]);

    const handleWhatsApp = (product) => {
        const phoneNumber = "221786632036";
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} FCFA.`;

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
                <span className="text-yellow-500 animate-pulse">
                    Chargement...
                </span>
            </div>
        );

    return (
        <div className="min-h-screen bg-[#f0eeee] pb-20">

            {/* STYLE ANIMATION (IMPORTANT) */}
            <style>
                {`
                .reveal-card {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s ease;
                }

                .reveal-card.show-card {
                    opacity: 1;
                    transform: translateY(0);
                }
                `}
            </style>

            <section className="px-4 md:px-8 py-10">

                <Link
                    to="/home"
                    className="flex items-center gap-2 text-black mb-6 hover:text-[#D4AF37]"
                >
                    <IoArrowBackCircle className="text-3xl" />
                    Retour
                </Link>

                <h3 className="text-3xl font-bold text-center text-black mb-2">
                    Fétiche & Bracelet
                </h3>

                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-10" />

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

                    {bracelets.map((product) => (
                        <div
                            key={product.id}
                            className="reveal-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        >

                            {product.is_video ? (
                                <video
                                    src={secureUrl(product.image_url)}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-44 md:h-80 object-cover"
                                />
                            ) : (
                                <img
                                    src={secureUrl(product.image_url)}
                                    alt={product.name}
                                    className="w-full h-44 md:h-80 object-cover"
                                    onError={(e) =>
                                        (e.target.src =
                                            "https://via.placeholder.com/400")
                                    }
                                />
                            )}

                            <div className="p-4">
                                <h4 className="font-bold truncate">
                                    {product.name}
                                </h4>

                                <p className="text-[#D4AF37] font-bold">
                                    {product.price} FCFA
                                </p>

                                <button
                                    onClick={() => handleWhatsApp(product)}
                                    className="mt-3 w-full bg-[#D4AF37] text-black py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-black hover:text-[#D4AF37]"
                                >
                                    <FaWhatsapp />
                                    Commander
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
}