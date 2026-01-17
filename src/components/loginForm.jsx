import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      if (response.data === "Success") {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/products", { replace: true });
      } else {
        setErrorMessage("Invalid response from server.");
      }
    } catch (err) {
      setErrorMessage(
        err.response?.data || "Login failed. Please check your connection.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
          <p className="text-slate-500 mt-2 text-sm">
            Welcome back! Please enter your details.
          </p>
        </div>
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-600"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-600"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 active:scale-95"
          >
            {isLoading ? "Checking..." : "Sign In"}
          </button>
        </form>
        <div className="mt-8 text-center pt-6 border-t border-slate-50">
          <p className="text-slate-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
