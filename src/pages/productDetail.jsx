import axios from "axios";
import { Loader2, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    setError(false);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "https://fakestoreapi.com";
      const res = await axios.get(`${apiUrl}/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#1B2431]">
        <Loader2 className="w-10 h-10 animate-spin text-white" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-20 bg-[#1B2431] min-h-screen">
        Failed to load product
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="bg-[#1B2431] py-10 lg:py-22 text-white font-sans min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          
          {/* Left Side: Product Image & Action Buttons */}
          {/* បន្ថែម max-w-md ដើម្បីឱ្យប៊ូតុង និងរូបភាពមានទទឹងស៊ីគ្នាស្អាត */}
          <div className="w-full max-w-md flex flex-col">
            <div className="bg-[#D1D5DB] rounded-lg h-[450px] w-full flex items-center justify-center p-8 shadow-xl overflow-hidden mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Action Buttons: ប្រើ w-full និង flex-1 ដើម្បីឱ្យវាស្មើគ្នា និងស្មើគែមរូបភាព */}
            <div className="flex flex-row gap-4 w-full">
              <button className="flex-1 bg-[#4B5563] hover:bg-gray-500 text-white py-3 rounded-lg font-bold transition-all active:scale-95 text-[12px] sm:text-sm md:text-base whitespace-nowrap px-2">
                Add to Cart
              </button>
              <button className="flex-1 bg-[#374151] hover:bg-gray-600 text-white py-3 rounded-lg font-bold transition-all active:scale-95 text-[12px] sm:text-sm md:text-base border border-gray-600 whitespace-nowrap px-2">
                Add to Wishlist
              </button>
            </div>
          </div>

          {/* Right Side: Product Information */}
          <div className="flex-1 flex flex-col justify-start w-full">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
              {product.title}
            </h1>

            <p className="text-gray-300 text-lg mb-4 capitalize">
              {product.category}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center">
                <span className="text-gray-300 font-bold mr-2">Price:</span>
                <span className="text-xl">${product.price}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300 font-bold mr-2">Availability:</span>
                <span className="text-green-500 font-semibold">In Stock</span>
              </div>
            </div>

            {/* Star Rating Section */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.round(product.rating?.rate || 0) ? "currentColor" : "none"}
                    className={i < Math.round(product.rating?.rate || 0) ? "" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-bold px-2.5 py-1 rounded-md">
                {product.rating?.rate}
              </span>
            </div>

            {/* Select Color */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-300 mb-3">Select Color:</h3>
              <div className="flex gap-3">
                <button className="w-6 h-6 rounded-full bg-white ring-2 ring-transparent hover:ring-blue-500 transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-red-600 ring-2 ring-transparent hover:ring-blue-500 transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-blue-600 ring-2 ring-transparent hover:ring-blue-500 transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-orange-600 ring-2 ring-transparent hover:ring-blue-500 transition-all"></button>
              </div>
            </div>

            {/* Select Size */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-300 mb-3">Select Size:</h3>
              <div className="flex gap-2 flex-wrap">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="w-11 h-11 flex items-center justify-center bg-[#2D3748] hover:bg-[#4A5568] rounded-full font-bold transition-all text-sm border border-gray-700"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="mt-4 border-t border-gray-700 pt-6">
              <h3 className="font-bold text-gray-300 mb-2">Product Description:</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}