import react from "react";
import { Link } from "react-router-dom";
export default function ProduitsMontre() {
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