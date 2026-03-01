import React, { useState, useEffect } from "react";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Menu, X } from "lucide-react";
import img from "../assets/img/Evahh.jpeg";

export default function Home() {

    const phoneNumber = "221774186116";

    const products = [
        {
            id: 1,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "https://i.pinimg.com/1200x/4f/f7/ea/4ff7ea7fcccb5374e1edb6457936c30d.jpg",
            badge: "Nouveau",
        },
        {
            id: 2,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "https://i.pinimg.com/736x/fd/5a/4c/fd5a4c9f89a25b1d5f1e4d50801ace17.jpg",
            badge: "",
        },
        {
            id: 3,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "https://i.pinimg.com/736x/a6/1b/9e/a61b9edd36c14fe473e08d33258848ab.jpg",
            badge: "Promo",
        },
        {
            id: 4,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "https://i.pinimg.com/1200x/82/b3/9c/82b39c7533883fee651ce222749a4237.jpg",
            badge: "Nouveau",
        },
        {
            id: 5,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "https://i.pinimg.com/736x/72/40/5f/72405f7620a918959665677e45b8ad7c.jpg",
            badge: "",
        },
        {
            id: 6,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "https://i.pinimg.com/736x/f1/e4/39/f1e43910448bdcf7f783ffb36a5b00ad.jpg",
            badge: "Promo",
        }
    ];

    const products2 = [
        {
            id: 1,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "https://i.pinimg.com/1200x/fe/20/a3/fe20a3e9e2a80854d19d6083833c1351.jpg",
            badge: "Nouveau",
        },
        {
            id: 2,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "https://i.pinimg.com/736x/1b/e6/bd/1be6bd532e42e365677e8a819ef4a565.jpg",
            badge: "",
        },
        {
            id: 3,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "https://i.pinimg.com/736x/f4/43/de/f443de3308bfe234d2d59e0946d5851f.jpg",
            badge: "Promo",
        },
        {
            id: 4,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "https://i.pinimg.com/736x/f8/62/35/f862356e618cc50de91703d617ebc70a.jpg",
            badge: "Nouveau",
        },
        {
            id: 5,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "https://i.pinimg.com/736x/01/bd/51/01bd51635ee667d3753ef67689627ced.jpg",
            badge: "",
        },
        {
            id: 6,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "https://i.pinimg.com/736x/5e/7e/d5/5e7ed5289db06bb5fd1d716e8f657437.jpg",
            badge: "Promo",
        }
    ];


     const products3 = [
        {
            id: 1,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "/video/video-perruque1.mp4",
            badge: "Nouveau",
        },
        {
            id: 2,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "/video/video-perruque2.mp4",
            badge: "",
        },
        {
            id: 3,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "/video/video-perruque3.mp4",
            badge: "Promo",
        },
        {
            id: 4,
            name: "Montre Élégance Or",
            price: "15 000 FCFA",
            image: "/video/video-perruque4.mp4",
            badge: "Nouveau",
        },
        {
            id: 5,
            name: "Collier Queen Gold",
            price: "8 000 FCFA",
            image: "/video/video-perruque5.mp4",
            badge: "",
        },
        {
            id: 6,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "/video/video-perruque6.mp4",
            badge: "Promo",
        },
         {
            id: 7,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "/video/video-perruque7.mp4",
            badge: "Promo",
        },
         {
            id: 8,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "/video/video-perruque8.mp4",
            badge: "Promo",
        },
        {
            id: 9,
            name: "Perruque Luxe Wave",
            price: "35 000 FCFA",
            image: "/video/video-perruque9.mp4",
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

    const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} voici le produit ${product.image}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };
   

    return (
        <div className="bg-[#0F0F0F] min-h-screen text-white">

            {/* NAVBAR */}
           <nav className="fixed w-full z-50 bg-black border-b border-[#D4AF37]/30">
      <div className="flex justify-between items-center px-6 md:px-8 py-4">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={img} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl md:text-2xl font-bold text-[#D4AF37] tracking-widest">
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
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{
                            backgroundImage: `url(${slides[current].src})`,
                            backgroundSize: "cover",
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
                                className="rounded-xl w-full h-130 mb-5"
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
<section className="relative h-[100vh]  overflow-hidden" id="collection">

                {slides[current].type === "image" ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{
                            backgroundImage: `url(${slides[current].src})`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
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

                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6" id="accessoires">

                    <h2 className="text-5xl md:text-6xl font-bold">
                        {slides[current].title}
                    </h2>

                    <p className="mt-6 text-gray-300 max-w-xl">
                        {slides[current].text}
                    </p>

                    <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition" >
                        accessoires
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
                    Nos Best Sellers
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                    {products2.map((product) => (
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
                                className="rounded-xl w-full h-130 mb-5"
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
            <section className="relative h-[100vh]  overflow-hidden" id="collection">

                {slides2[current1].type === "image" ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
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
                        className="absolute w-full h-full object-cover"
                    />
                )}

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6" id="Blog">

                    <h2 className="text-5xl md:text-6xl font-bold">
                        {slides2[current1].title}
                    </h2>

                    <p className="mt-6 text-gray-300 max-w-xl">
                        {slides2[current1].text}
                    </p>

                    <button className="mt-10 bg-[#D4AF37] text-black px-10 py-3 rounded-full hover:bg-black hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37] transition" id="accessoires">
                        Blog
                    </button>

                </div>

                {/* Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides2.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent1(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                current1 === index ? "bg-[#D4AF37]" : "bg-white/40"
                            }`}
                        />
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
                    {products3.map((product) => (
  <div
    key={product.id}
    className="bg-[#1A1A1A] rounded-3xl p-6 shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition duration-300 relative"
  >
    {product.badge && (
      <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-bold">
        {product.badge}
      </span>
    )}

    {/* IMAGE OU VIDEO */}
    {product.image.endsWith(".mp4") ? (
      <video
        src={product.image}
        autoPlay
        muted
        loop
        playsInline
        className="rounded-xl mb-5 w-full h-130 object-cover"
      />
    ) : (
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl mb-5 w-full h-104 object-cover"
      />
    )}

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
                        <p className="text-gray-400 text-center">786632038</p>
                       
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