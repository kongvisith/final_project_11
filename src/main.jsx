import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/layouts/layout.jsx";
import Login from "./components/loginForm.jsx";
import RegisterForm from "./components/registerForm.jsx";
import App from "./App.jsx";
import Products from "./pages/products.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import ProductDetail from "./pages/productDetail.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <RegisterForm /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);