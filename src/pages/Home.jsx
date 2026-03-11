import React, { useState, useEffect } from "react";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Menu, X } from "lucide-react";
import img from "../assets/img/Evahh.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {



    const phoneNumber = "221786632036";

  const [bracelets, setBracelets] = useState([]);
const [bestSellers, setBestSellers] = useState([]);
const [perruques, setPerruques] = useState([]);

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);

            const API_URL = import.meta.env.VITE_API_URL;
console.log("API URL:", API_URL);
            const [braceletRes, bestSellerRes, perruqueRes] = await Promise.all([
                fetch(`${API_URL}/products?category=bracelet`),
                fetch(`${API_URL}/products?category=bestseller`),
                fetch(`${API_URL}/products?category=perruque`)
            ]);

            if (!braceletRes.ok || !bestSellerRes.ok || !perruqueRes.ok) {
                throw new Error("Erreur lors du chargement des produits");
            }

            const braceletData = await braceletRes.json();
            const bestSellerData = await bestSellerRes.json();
            const perruqueData = await perruqueRes.json();

            setBracelets(braceletData);
            setBestSellers(bestSellerData);
            setPerruques(perruqueData);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, []);
    

    const slides = [
        {
            id: 1,
            type: "image",
            src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200",
            title: "Shine.Style.Slay",
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
            src: "/video/WhatsApp Video 2026-02-24 at 20.41.43.mp4",
            title: "Beauté & Perruques",
            text: "Perruques premium pour une allure irrésistible."
        }
    ];
    const [open, setOpen] = useState(false);

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slides2 = [
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
            src: "/video/video-perruque7.mp4",
            title: "Beauté & Perruques",
            text: "Perruques premium pour une allure irrésistible."
        }
    ];


    const slides3 = [
        {
            id: 1,
            type: "image",
            src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200",
            title: "L’élégance en Or",
            text: "Bijoux haut de gamme pour femmes modernes."
        },
        {
            id: 2,
            type: "video",
            src: "/video/video-perruque4.mp4",
            title: "Montres de Luxe",
            text: "Des montres élégantes pour sublimer votre style."
        },
        {
            id: 3,
            type: "video",
            src: "/video/video-perruque7.mp4",
            title: "Beauté & Perruques",
            text: "Perruques premium pour une allure irrésistible."
        }
    ];
 

    const [current1, setCurrent1] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent1(prev => (prev + 1) % slides2.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const [current2, setCurrent2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent2(prev => (prev + 1) % slides3.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} voici le produit ${product.image}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    if (loading) return <div className="p-6 text-center">Chargement...</div>;
  if (error)
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-red-600">
        ⚠️ Erreur : {error}
      </div>
    );

    return (
        <div className="bg-[#f0eeee] min-h-screen text-white">

            {/* NAVBAR */}
            <nav className="fixed w-full z-50 bg-black border-b border-[#D4AF37]/30">
                <div className="flex justify-between items-center px-6 md:px-8 py-4">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">
                        <img src={img} alt="Logo" className="w-10 h-10 rounded-full" />
                        <h1 className=" sm:text-2xl font-extralight text-[#D4AF37] text-4xl text-gold-gradient animate-gold tracking-widest">
                            EvahStore
                        </h1>
                    </div>

                    {/* MENU DESKTOP */}
                    <div className="hidden md:flex items-center">
                        <a href="#collection" className="mx-4 hover:text-[#D4AF37] transition">
                            Collection
                        </a>
                        <a href="#accessoires" className="mx-4 hover:text-[#D4AF37] transition">
                            Accessoires
                        </a>
                        <a href="#cou" className="mx-4 hover:text-[#D4AF37] transition">
                            Blog
                        </a>
                    </div>

                    {/* MENU MOBILE BUTTON */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden bg-black px-6 pb-6 space-y-4 text-center">
                        <a
                            href="#collection"
                            className="block hover:text-[#D4AF37] transition"
                            onClick={() => setOpen(false)}
                        >
                            Collection
                        </a>
                        <a
                            href="#accessoires"
                            className="block hover:text-[#D4AF37] transition"
                            onClick={() => setOpen(false)}
                        >
                            Accessoires
                        </a>
                        <a
                            href="#Blog"
                            className="block hover:text-[#D4AF37] transition"
                            onClick={() => setOpen(false)}
                        >
                            Blog
                        </a>
                    </div>
                )}
            </nav>


            {/* HERO SLIDER */}
            <section className="relative h-[100vh] overflow-hidden" id="collection">

                {slides[current].type === "image" ? (
                    <div
                        key={current}
                        className="absolute inset-0 w-full h-full bg-cover bg-center animate-fadeZoom"
                        style={{
                            backgroundImage: `url(${slides[current].src})`,
                        }}
                    />
                ) : (
                    <video
                        key={current}
                        src={slides[current].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover animate-fadeZoom"
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div
                    key={current + "-content"}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center"
                >

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
                        {slides[current].title}
                    </h2>

                    <p
                        className="text-white/80 text-lg sm:text-xl max-w-xl mb-8 animate-fade-in"
                        style={{ animationDelay: "0.3s" }}
                    >
                        {slides[current].text}
                    </p>

                    <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-300 animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                    >
                        Voir la collection
                    </button>

                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${current === index ? "bg-[#D4AF37] scale-125" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>

            </section>

            <section className="py-30 px-4 sm:px-6 lg:px-8 bg-[#e4dede]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-black text-3xl sm:text-4xl font-bold text-secondary-foreground mb-5 animate-slide-up">
                        À propos de nous
                    </h2>
                    <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-5" />
                    <p className="font-body text-gray-600 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto animate-slide-up">
                        Evahstore est une marque dédiée aux femmes qui aiment la simplicité chic.
                        Des bijoux intemporels, des accessoires modernes et des perruques soigneusement
                        sélectionnées pour compléter parfaitement votre beauté naturelle.
                    </p>
                </div>
            </section>

            {/* PRODUITS */}
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#000000] mb-5 animate-slide-up">
                    Fétiche & Bracelet
                </h3>
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-8" />

                <div className="grid justify-center md:grid-cols-3  gap-10">
                    {bracelets.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#fffefe] justify-center rounded-3xl   shadow-xl hover:shadow-[#D4AF37]/40   transition duration-300 relative"
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

                            <h4 className="text-xl ml-5 font-semibold text-black">{product.name}</h4>

                            <p className="text-[#D4AF37] ml-5 font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 w-full bg-[#D4AF37] text-black py-2 mb-5 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                <FaWhatsapp className="inline-block text-lg mb-1 mr-1" />
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}


                </div>
                <div className="flex  mt-15 w-full items-center justify-center">
                    <h3 className="text-center text-[#D4AF37] font-stretch-50% bg-transparent border border-[#D4AF37] py-2 px-4 rounded-4xl hover:text-[#fffefc] hover:bg-[#D4AF37] hover:border hover:border-[#D4AF37]  transition duration-300"><Link to="/produits-montre">voir tous les produits</Link></h3>
                </div>
            </section>
            <section className="relative h-[100vh]  overflow-hidden" id="collection">

                {slides2[current1].type === "image" ? (
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center animate-fadeZoom"
                        style={{
                            backgroundImage: `url(${slides2[current1].src})`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                        }}
                    />
                ) : (
                    <video
                        src={slides2[current1].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover animate-fadeZoom"
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div key={current1 + "-content"} className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center" id="accessoires">

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-slideUp">
                        {slides2[current1].title}
                    </h2>

                    <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-8 animate-fadeIn"
                        style={{ animationDelay: "0.3s" }}>
                        {slides2[current1].text}
                    </p>

                    <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-300 animate-fadeIn"
                        style={{ animationDelay: "0.6s" }} >
                        accessoires
                    </button>

                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 ">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent1(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${current1 === index ? "bg-[#D4AF37] scale-125" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>

            </section>
            {/* PRODUITS */}
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-5  animate-slide-up">
                    Nos Best Sellers
                </h3>
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-5" />


                <div className="grid justify-center md:grid-cols-3  gap-10">
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#fffefe] rounded-3xl animate-fadeup p shadow-xl hover:shadow-[#D4AF37]/40  transition duration-300 relative"
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
                                    className="rounded-xl w-100 h-100 mb-5 object-cover hover:scale-105 transition-transform duration-700"
                                />
                            )}


                            <h4 className="text-xl font-semibold ml-5 text-black">{product.name}</h4>

                            <p className="text-[#D4AF37] font-bold mt-2 ml-5 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 mb-5 w-full bg-[#D4AF37] text-black py-2 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                <FaWhatsapp className="inline-block text-lg mr-1 mb-1" />
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex  mt-15 w-full items-center justify-center">
                    <h3 className="text-center text-[#D4AF37] font-stretch-50% bg-transparent border border-[#D4AF37] py-2 px-4 rounded-4xl hover:text-[#fffefc] hover:bg-[#D4AF37] hover:border hover:border-[#D4AF37]  transition duration-300"><Link to="/produits-bracelet ">voir tous les produits</Link></h3>
                </div>
            </section>
            <section className="relative h-[100vh]  overflow-hidden" id="collection">

                {slides3[current2].type === "image" ? (
                    <div
                        key={current2}
                        className="absolute inset-0 w-full h-full bg-cover bg-center animate-fadeZoom"
                        style={{
                            backgroundImage: `url(${slides3[current2].src})`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                        }}
                    />
                ) : (
                    <video
                        key={current2}
                        src={slides3[current2].src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover animate-fadeZoom "
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div
                    key={current2 + "-content"}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 text-center" id="Blog">

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-Up">
                        {slides3[current2].title}
                    </h2>

                    <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-8 animate-fade-In"
                        style={{ animationDelay: "0.3s" }}>
                        {slides3[current2].text}
                    </p>

                    <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition duration-300 animate-fadeIn" id="accessoires"
                        style={{ animationDelay: "0.6s" }}>
                        Blog
                    </button>

                </div>

                {/* Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides3.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent2(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${current2 === index ? "bg-[#D4AF37] scale-125" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>

            </section>

            {/* PRODUITS */}
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#000000] mb-5">
                    Perruques Premium
                </h3>
                <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-8" />


                <div className="grid justify-center md:grid-cols-3 gap-10">
                    {perruques.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#f8f6f6] rounded-3xl  shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
                        >
                            {product.badge && (
                                <span
                                    className={`absolute top-0 left-0 text-black text-xs px-3 py-1 rounded-full font-bold ${product.badge === "Nouveau"
                                        ? "bg-[#D4AF37]"
                                        : "bg-[#f51c1c]"
                                        }`}
                                >
                                    {product.badge}
                                </span>
                            )}

                            {/* IMAGE OU VIDEO */}
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


                            <h4 className="text-xl font-semibold ml-5 text-black">{product.name}</h4>

                            <p className="text-[#D4AF37] ml-5 font-bold mt-2 text-lg">
                                {product.price}
                            </p>

                            <button
                                onClick={() => handleWhatsApp(product)}
                                className="mt-6 mb-5 w-full bg-[#D4AF37] text-black py-2 rounded-full font-semibold hover:bg-black hover:text-[#D4AF37] hover:border hover:border-[#D4AF37] transition duration-300"
                            >
                                <FaWhatsapp className="inline-block text-lg mr-1 mb-1" />
                                Commander sur WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex  mt-15 w-full items-center justify-center">
                    <button className="text-center text-[#D4AF37] font-stretch-50% bg-transparent border border-[#D4AF37] py-2 px-4 rounded-4xl hover:text-[#fffefc] hover:bg-[#D4AF37] hover:border hover:border-[#D4AF37]  transition duration-300"><Link to="/produits-perruque">voir tous les produits</Link></button>
                </div>
            </section>

            {/* WHATSAPP FLOATING BUTTON */}
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-400 text-black px-5 py-3 rounded-full shadow-lg font-bold hover:bg-green-600 transition"
            >
                <FaWhatsapp className="text-3xl text-white rounded-full" />
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
                        <p className="text-2xl text-center font-semibold">About us</p>
                        <p className="text-center text-gray-400">Marque dédiée à la beauté et à l'élégance féminine.</p>

                    </div>

                    <div>
                        <p className="text-2xl font-semibold">contact us</p>
                        <p className="text-gray-400 text-center">786632036</p>

                    </div>
                </div>
                <div className="flex justify-center">
                    <hr className="border-r-8 border-gray-700  w-md my-3" />
                </div>
                <p className="text-gray-400 mt-4 text-center">
                    © 2026 EvahStore. Tous droits réservés.
                </p>
                <p className="text-gray-400 mt-2 text-center">
                    Livraison rapide • Paiement à la livraison • Disponible 7j/7
                </p>
            </footer>

        </div>
    );
}