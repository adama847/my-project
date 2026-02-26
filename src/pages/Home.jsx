import React, { useState, useEffect } from "react";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

import img from "../assets/img/Evahh.jpeg";

export default function Home() {

    const phoneNumber = "22178663236";

    const products = [
        {
            id: 1,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "https://via.placeholder.com/300x300",
            badge: "Nouveau",
        },
        {
            id: 2,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "https://via.placeholder.com/300x300",
            badge: "",
        },
        {
            id: 3,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "https://via.placeholder.com/300x300",
            badge: "Promo",
        }
    ];

    const slides = [
        {
            id: 1,
            type: "image",
            src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200",
            title: "L’élégance en Or",
            text: "Bijoux haut de gamme pour femmes modernes."
        },
        {
            id: 2,
            type: "image",
            src: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200",
            title: "Montres de Luxe",
            text: "Des montres élégantes pour sublimer votre style."
        },
        {
            id: 3,
            type: "video",
            src: "public/video/WhatsApp Video 2026-02-24 at 20.41.43.mp4",
            title: "Beauté & Perruques",
            text: "Perruques premium pour une allure irrésistible."
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <div className="bg-[#0F0F0F] min-h-screen text-white">

            {/* NAVBAR */}
            <nav className="flex justify-between fixed w-full z-50 bg-black items-center px-8 py-5 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-3">
                    <img src={img} alt="Logo" className="w-12 h-12 rounded-full" />
                    <h1 className="text-2xl font-bold text-[#D4AF37] tracking-widest">
                        EvahStore
                    </h1>
                </div>
                <div>
                    <a href="#collection" className="mx-4 hover:text-[#D4AF37] transition">
                        Collection
                    </a>
                    <a href="#best-sellers" className="mx-4 hover:text-[#D4AF37] transition">
                        Best Sellers
                    </a>
                </div>
            </nav>

            {/* HERO SLIDER */}
            <section className="relative h-[100vh] overflow-hidden" id="collection">

                {slides[current].type === "image" ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{
                            backgroundImage: `url(${slides[current].src})`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover"
                        }}
                    />
                ) : (
                    <video
                        src={slides[current].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute w-full h-full object-cover"
                    />
                )}

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">

                    <h2 className="text-5xl md:text-6xl font-bold">
                        {slides[current].title}
                    </h2>

                    <p className="mt-6 text-gray-300 max-w-xl">
                        {slides[current].text}
                    </p>

                    <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition">
                        Voir la collection
                    </button>

                </div>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                current === index ? "bg-[#D4AF37]" : "bg-white/40"
                            }`}
                        />
                    ))}
                </div>

            </section>

   

            {/* PRODUITS */}
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-14">
                    Accesoire pour main
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1A1A1A] rounded-3xl p-6 shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
                        >
                            {product.badge && (
                                <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-bold">
                                    {product.badge}
                                </span>
                            )}

                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl mb-5"
                            />

                            <h4 className="text-xl font-semibold">{product.name}</h4>

                            <p className="text-[#D4AF37] font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 w-full bg-[#D4AF37] text-black py-2 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUITS */}
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-14">
                    Nos Best Sellers
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1A1A1A] rounded-3xl p-6 shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
                        >
                            {product.badge && (
                                <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-bold">
                                    {product.badge}
                                </span>
                            )}

                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl mb-5"
                            />

                            <h4 className="text-xl font-semibold">{product.name}</h4>

                            <p className="text-[#D4AF37] font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 w-full bg-[#D4AF37] text-black py-2 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUITS */}
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-14">
                    Nos Best Sellers
                </h3>
               <div className="flex mt-0 justify-center">
                <hr className="border-r-8 border-white w-30 mb-8  my-0" />
                 </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1A1A1A] rounded-3xl p-6 shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
                        >
                            {product.badge && (
                                <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-bold">
                                    {product.badge}
                                </span>
                            )}

                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl mb-5"
                            />

                            <h4 className="text-xl font-semibold">{product.name}</h4>

                            <p className="text-[#D4AF37] font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 w-full bg-[#D4AF37] text-black py-2 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHATSAPP FLOATING BUTTON */}
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#D4AF37] text-black px-5 py-3 rounded-full shadow-lg font-bold hover:bg-white transition"
            >
                WhatsApp
            </a>

            {/* FOOTER */}
            <footer className="bg-black border-t border-[#D4AF37]/30 p-3  py-10">
<div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-10">                    <div className="flex flex-col">
                    <p className="text-[#D4AF37] text-2xl font-semibold ">
                        EvahStore
                    </p>
                    <p className="text-gray-400">suivez-nour sur</p>
                    <div className="flex items-center mt-3">
                        <a href="https://www.instagram.com/evahstore" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare className="text-[#ffffff] hover:text-[#D4AF37] text-2xl mr-4" />
                        </a>
                        <a href="https://www.facebook.com/evahstore" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-[#ffffff] hover:text-[#D4AF37] text-2xl " />
                        </a>
                        <a href="https://www.tiktok.com/@evahstore" target="_blank" rel="noopener noreferrer">
                            <AiFillTikTok className="text-[#ffffff] hover:text-[#D4AF37] text-3xl ml-4" />
                        </a>

                    </div>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">About us</p>
                       
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">contact us</p>
                        <p className="text-gray-400 text-center">776632038</p>
                       
                    </div>
                </div>
                <div className="flex justify-center">
                <hr className="border-r-8 border-gray-700  w-md my-3" />
                 </div>
                 <p className="text-gray-400 mt-4 text-center">
                            © 2024 EvahStore. Tous droits réservés.
                        </p>
                <p className="text-gray-400 mt-2 text-center">
                    Livraison rapide • Paiement à la livraison • Disponible 7j/7
                </p>
            </footer>

        </div>
    );
}