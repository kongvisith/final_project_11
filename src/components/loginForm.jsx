import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      if (res.data === "Success") {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data || "Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-10">
        <h2 className="text-4xl font-black text-center text-slate-800 mb-11">
          Sign In
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-sm border-l-4 border-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full px-5 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={isLoading}
            className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 active:scale-95 transition-all"
          >
            {isLoading ? "Signing In..." : "Login"}
          </button>
        </form>

        <p className="mt-8 text-center text-slate-600">
          New here?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-bold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
