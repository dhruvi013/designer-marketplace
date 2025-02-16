import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";

export default function LatestCollection() {
  const products = [
    {
      name: "Ranjika-Kumud: The Lotus Bloom Gown",
      price: "₹2125",
      originalPrice: "₹2500",
      discount: "15% off",
      save: "Save ₹375",
      image: "https://images.textilecatalog.in/images/800/catalog/20240907/17257020492055723443-17256999101056642099-Fashion-Talk-Iba-Vol-1-Rayon-Designer-Kurti-Collection-003.jpeg",
    },
    {
      name: "Charulata-Morbagh: The Peacock Garden Gown",
      price: "₹1440",
      originalPrice: "₹1600",
      discount: "10% off",
      save: "Save ₹160",
      image: "https://www.saree.com/media/catalog/product/cache/ffb77357475b6012440b67efacc9e4db/k/r/krteh1558a-cream-paisley-and-floral-printed-anarkali-kurti-with-palazzo-in-muslin.jpg",
    },
    {
      name: "Kamakshi-Kanak: The Golden Grace Gown",
      price: "₹1260",
      originalPrice: "₹1400",
      discount: "10% off",
      save: "Save ₹140",
      image: "https://fabvilla.in/cdn/shop/files/image_fb338048-2ac4-4595-9f55-f92ecc4af2fc.jpg?v=1683386285",
    },
    {
      name: "Bhavisha-Rajnigandha: The Night Bloom Gown",
      price: "₹1530",
      originalPrice: "₹1800",
      discount: "15% off",
      save: "Save ₹270",
      image: "https://www.textileinfomedia.com/img/fdpe/ladies-multicolor-designer-party-wear-gown-full.jpeg",
    },
    {
      name: "Divyani-Sitara: The Starlit Radiance Gown",
      price: "₹640",
      originalPrice: "₹800",
      discount: "20% off",
      save: "Save ₹160",
      image: "https://www.studio149fashion.com/cdn/shop/files/ATHUL-1-1.jpg?v=1714812817&width=600",
    },
  ];

  return (
    <section className="py-12 px-6 mt-20">
      <h2 className="text-4xl font-bold text-center mb-4">Latest Collection</h2>
      <p className="text-lg text-gray-500 text-center mb-8">
        Discover the Latest Collection with a variety of styles.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

function Card({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative w-[220px] bg-white rounded-lg shadow-lg transition-all duration-300 ${
        hover ? "scale-105 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[280px] object-cover object-top "
      />

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="text-md font-bold">
          {product.price}{" "}
          <span className="text-gray-500 line-through">{product.originalPrice}</span>{" "}
          <span className="text-green-500">{product.discount}</span>
        </p>
        <p className="text-green-500 text-sm">{product.save}</p>
      </div>

      {/* Wishlist & Cart Buttons (Shown on Hover) */}
      <div
        className={`absolute top-3 right-3 flex gap-2 transition-opacity duration-200 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
          <FavoriteBorder fontSize="small" />
        </button>
        <button className="p-1 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
          <ShoppingCart fontSize="small" />
        </button>
      </div>
    </div>
  );
}
