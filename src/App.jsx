import "./App.css";

function App() {
  return (
    <>
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-white font-bold text-5xl leading-tight mb-6">
                Welcome to <br /> P-Service
              </h1>
              <p className="text-white text-xl mb-8">
                We have many service for customers, we sell many products like
                T-Shirt, Shoes, ...
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200"
              >
                Shop now
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7"
                alt="Coffee beans"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Top Sell Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Single Origin Blend
                </h3>
                <p className="text-gray-700 text-base">
                  Our most popular blend, featuring beans from a single farm in
                  Ethiopia. Notes of chocolate, berries, and citrus.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">$14.99</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dark Roast Blend
                </h3>
                <p className="text-gray-700 text-base">
                  A bold and flavorful blend of beans from Brazil, Colombia, and
                  Indonesia. Notes of caramel, nuts, and tobacco.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">$12.99</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7"
                alt="Coffee"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dark Roast Blend
                </h3>
                <p className="text-gray-700 text-base">
                  A bold and flavorful blend of beans from Brazil, Colombia, and
                  Indonesia. Notes of caramel, nuts, and tobacco.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">$12.99</span>
                  <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Proved by Customer
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Cutomer Feedbacks
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img
                      src="https://i.pinimg.com/1200x/c7/ec/41/c7ec41bee1fcf06db4d5cd43af9ce801.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Nile Gomez
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    🌟 Your Online Brand Matters More Than Ever! 🌟 Are you
                    making these 5 common branding mistakes? 😱 From
                    inconsistent messaging to ignoring your audience, these
                    pitfalls could be holding you back. But don't worry—we've
                    got solutions! ✅
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img
                      src="https://i.pinimg.com/1200x/65/61/d8/6561d8f83a64e476caadedbcc1449f5c.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Ai Daily Updates
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Seize the opportunity! With 80% market share in data center
                    GPUs and unmatched AI dominance, NVIDIA offers incredible
                    long-term growth potential despite recent price dips ⬇️
                    Smart investors recognize value when they see it! Tap to
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img
                      src="https://i.pinimg.com/736x/73/e0/97/73e097a9cb54c95c56385d629762be35.jpg"
                      alt=""
                      className="rounded-full w-8 h-8"
                    />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">
                    Neptune
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    I analyzed the top five blog posts ranking for “Originality
                    AI Review”. They all repeat: pricing, accuracy, chrome
                    extension. None answer the real beginner pain points: Which
                    real-world niches still throw high false-positives like
                    travel blogs
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
