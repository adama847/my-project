     const phoneNumber = "221786632036";

 const handleWhatsApp = (product) => {
        const message = `Bonjour, je veux commander ${product.name} à ${product.price} voici le produit ${product.image}`;
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };
   