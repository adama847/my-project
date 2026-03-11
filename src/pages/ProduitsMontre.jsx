import react from "react";
import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"
import { IoArrowBackCircle } from "react-icons/io5";
;
import { Link } from "react-router-dom";
export default function ProduitsMontre() {
    const phoneNumber = "221786632036";

    const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} voici le produit ${product.image}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };
    const [bracelets, setBracelets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

     useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);

            // Récupère l'URL de l'API depuis la variable d'environnement
            const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

            // On ne met pas "api" en plus si l'API l'ajoute déjà
            const response = await fetch(`${API_URL}/products?category=bracelet`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setBracelets(data);
        } catch (err) {
            setError(err.message || "Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);

    if (loading) return <div className="p-6 text-center">Chargement...</div>;
    if (error)
        return (
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-red-600">
                ⚠️ Erreur : {error}
            </div>
        );



    return (
        <div className="min-h-screen flex flex-col justify-center bg-[#f0eeee]">
            <section className="px-8 py-20">
                <p className="text-start text-xl text-black mb-10"> <IoArrowBackCircle className="absolute left-2 mt-1 text-2xl" /> <Link to="/home">retour</Link></p>

                <h3 className="text-3xl font-bold text-center text-[#000000] mb-5">
                    Fétiche & Bracelet
                </h3>
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-8" />




                <div className="grid justify-center md:grid-cols-3 gap-10">
                    {bracelets.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#fffefe] rounded-3xl p-0 shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
                        >
                            {product.badge && (
                                <span
                                    className={`absolute top-4 left-4 text-black text-xs px-3 py-1 rounded-full font-bold ${product.badge === "Nouveau"
                                        ? "bg-[#D4AF37]"
                                        : "bg-[#f51c1c]"
                                        }`}
                                >
                                    {product.badge}
                                </span>
                            )}

                            {/* IMAGE OU VIDEO */}
                            {product.badge && (
                                <span
                                    className={`absolute top-4 left-4 text-black text-xs px-3 py-1 rounded-full font-bold ${product.badge === "Nouveau"
                                        ? "bg-[#D4AF37]"
                                        : "bg-[#f51c1c]"
                                        }`}
                                >
                                    {product.badge}
                                </span>
                            )}

                            {product.is_video ? (
                                <video
                                    src={product.image_url}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="rounded-xl w-100 h-100 mb-5 object-cover hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="rounded-xl w-100 h-100 mb-5 object-cover hover:scale-105 transition-transform duration-700"
                                />
                            )}

                            <h4 className="text-xl ml-5 text-black font-semibold">{product.name}</h4>

                            <p className="text-[#D4AF37] ml-5 font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 w-full bg-[#D4AF37] text-black py-2 mb-3 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                <FaWhatsapp className="inline-block text-lg mr-1 mb-1" />
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>


    );
};