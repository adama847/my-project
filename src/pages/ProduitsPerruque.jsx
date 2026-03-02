import react from "react";
import { Link } from "react-router-dom";
export default function ProduitsPerruque() {
    const phoneNumber = "221786632036";
    const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} voici le produit ${product.image}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };


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
    return (
        <div className="min-h-screen flex flex-col justify-center bg-[#0F0F0F]">
            <h1 className="text-4xl mt-5 font-bold text-center text-[#D4AF37]">Page des Bracelets</h1>
            <section className="px-8 py-20">
                <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-14">
                    Nos Best Sellers
                </h3>
                <p className="text-center text-white mb-10"> <Link to="/home">retour</Link></p>
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

                            <h4 className="text-xl font-semibold text-white">{product.name}</h4>

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
        </div>


    );
};