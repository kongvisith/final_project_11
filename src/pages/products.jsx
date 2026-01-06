import axios from "axios";
import { useEffect, useState } from "react";

export default function products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  console.log("error", error);
  console.log("products", products);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
      });
  }, []);
  return (
    <>
      {error && (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="text-center">
            <h3>{errorMessage}</h3>
            <div className="flex justify-center mt-2">
              <button className="py-2 px-6 bg-red-500 text-white rounded-md cursor-pointer">
                Refresh
              </button>
            </div>
          </div>
        </div>
      )}
      {!error && (
        <div className="flex flex-wrap gap-4 justify-evenly my-20 mx-12">
          {products.map((product, index) => (
            <div key={index}>
              <div class="w-full max-w-sm  border border-gray-200 rounded-lg shadow-sm ">
                <a href="#" className="flex justify-center">
                  <img
                    class="p-8 w-60 h-70 rounded-t-lg"
                    src={product.image}
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight truncate w-65">
                      {product.title}
                    </h5>
                    <p className="line-clamp-2">{product.description}</p>
                  </a>
                  <div class="flex items-center justify-between mt-6">
                    <span class="text-3xl font-bold">${product.price}</span>
                    <button class="button bg-blue-700 p-2 rounded-md text-white">
                      <span class="label">+ Add to card</span>
                      <span class="gradient-container">
                        <span class="gradient"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
