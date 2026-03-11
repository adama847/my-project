import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

export default function ProduitsBracelet() {

    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    
     useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // On utilise l'URL de l'API depuis l'environnement
                const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
                const response = await fetch(`${API_URL}/products?category=bestseller`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setBestSellers(data);
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

    const phoneNumber = "221786632036";

    const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} voici le produit ${product.image}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="min-h-screen flex flex-col justify-center bg-[#f0eeee]">
            <section className="px-8 py-20">

                <p className="text-start text-xl text-black mb-5">
                    <IoArrowBackCircle className="absolute left-2 mt-1 text-2xl" />
                    <Link to="/home"> retour</Link>
                </p>

                <h3 className="text-3xl font-bold text-center text-[#000000] mb-14">
                    Nos Best Sellers
                </h3>

                <div className="grid justify-center md:grid-cols-3 gap-10">
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#ffffff] rounded-3xl shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
                        >

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
                                    className="rounded-xl w-full h-100 mb-5 object-cover hover:scale-105 transition-transform duration-700"
                                />
                            )}


                            <h4 className="text-xl font-semibold ml-5 text-black">
                                {product.name}
                            </h4>

                            <p className="text-[#D4AF37] ml-5 font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 mb-3 w-full bg-[#D4AF37] text-black py-2 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
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
}