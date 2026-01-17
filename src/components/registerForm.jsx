import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:3001/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Registration failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Create Account</h2>
        
        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-600" onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-600" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-600" onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
            {isLoading ? "Processing..." : "Register Now"}
          </button>
        </form>
        <p className="mt-6 text-center text-slate-600">Already have an account? <Link to="/login" className="text-blue-600 font-bold">Sign In</Link></p>
      </div>
    </div>
  );
}

export default RegisterForm;