import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ចំណាំ៖ ពេល Deploy ត្រូវប្តូរ URL នេះទៅជា Link Backend របស់អ្នក (ឧទាហរណ៍៖ https://api.yourdomain.com/login)
  const API_URL = "https://your-backend-api.onrender.com/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(API_URL, { email, password });

      // រក្សាទុកទិន្នន័យ Login ក្នុង localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful!");
      navigate("/products"); // ចូលទៅកាន់ទំព័រ Products ភ្លាមៗ
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-slate-50 p-4 font-sans">
      <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-100 my-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sign In
          </h2>
          <p className="text-slate-500 mt-2 text-sm italic">
            Welcome back! Please enter your details.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-base"
              placeholder="name@company.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 tracking-widest">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              className="w-full px-4 py-3.5 bg-slate-50 rounded-2xl border border-slate-200 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-base"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-4"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-slate-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline transition-all"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
