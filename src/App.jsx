import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";

function App() {
  const data = {
    title: "About Macbook",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  };

  const [count, setCount] = useState(0); //state

  // count = 0 -> 1 -> 2
  // setCount = 2

  const handleOnClick = () => {
    setCount(count + 11);
  };

  return (
    <>
      <Navbar />
      <div className="my-4 mx-8 flex gap-16">
        <ProductCard props={data} />

        <div>
          <button
            onClick={handleOnClick}
            className="bg-blue-700 p-4 rounded-md text-white font-semibold cursor-pointer"
          >
            Click to increase
          </button>
          <h1>{count}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;