import axios from "axios";
import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";

const StarRating = memo(({ rate }) => {
  const fullStars = Math.floor(rate || 0);
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < fullStars ? "fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="ml-1.5 bg-blue-50 text-blue-600 text-[11px] font-bold px-2 py-0.5 ">
        {rate?.toFixed(1) || "0.0"}
      </span>
    </div>
  );
});

const ProductSkeleton = () => (
  <div className="bg-white rounded-xl p-5 border border-gray-100 animate-pulse">
    <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
    <div className="flex justify-between items-center mt-auto">
      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/3"></div>
    </div>
  </div>
);

export default function Products() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: null });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_API_URL || "https://fakestoreapi.com";
        const { data } = await axios.get(`${apiUrl}/products`);

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }

        setStatus({ loading: false, error: null });
      } catch (err) {
        setStatus({ loading: false, error: err.message });
      }
    };
    fetchProducts();
  }, []);

  if (status.error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 font-bold bg-[#E5E7EB]">
        Error: {status.error}
      </div>
    );
  }

  return (
    <div className="bg-[#E5E7EB] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {status.loading
            ? [...Array(10)].map((_, i) => <ProductSkeleton key={i} />)
            : products?.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="p-6 flex justify-center items-center h-[260px] bg-white"
                  >
                    <img
                      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>

                  <div className="p-5 flex flex-col flex-grow">
                    <h5 className="text-[16px] font-bold text-gray-900 line-clamp-1 mb-2 leading-tight">
                      {product.title}
                    </h5>

                    <p className="text-gray-600 text-[13px] line-clamp-2 mb-4 flex-grow leading-snug">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <StarRating rate={product.rating?.rate} />
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <Link
                        to={`/products/${product.id}`}
                        className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-[4px] text-sm transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
