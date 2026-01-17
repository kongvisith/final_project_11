import React from "react";
import { Loader2, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // បន្ថែមនេះ

const Service = () => {
  const navigate = useNavigate(); // បន្ថែមនេះ
  const Service1 = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://i.pinimg.com/1200x/f4/b2/89/f4b289b33ed4d549b74434990aa0c280.jpg",
      text: '"This platform transformed our business. The ease of use combined with powerful features is unmatched in the industry."',
      borderColor: "border-l-blue-500",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      image: "https://i.pinimg.com/736x/75/ef/83/75ef8366fca2cfed75ae0be5f6c60c18.jpg",
      text: '"The customer support is exceptional. They helped us migrate our entire infrastructure with zero downtime."',
      borderColor: "border-l-purple-500",
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      image: "https://i.pinimg.com/736x/4c/7e/47/4c7e4760d3661c995e1101df2f11e7db.jpg",
      text: '"We\'ve seen a 300% increase in conversions since implementing their solution. Simply game-changing!"',
      borderColor: "border-l-pink-500",
    },
  ];

  return (
    <div className="font-sans">
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h4 className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-20">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {Service1.map((item, index) => (
              <div key={index} className={`bg-white p-10 rounded-3xl shadow-2xl border-l-[6px] ${item.borderColor} transition-all duration-300 hover:scale-105 active:scale-95`}>
                <div className="flex items-center gap-5 mb-6">
                  <img src={item.image} className="w-16 h-16 rounded-full object-cover shadow-md" alt={item.name} />
                  <div>
                    <h5 className="font-bold text-xl text-gray-900 leading-tight">{item.name}</h5>
                    <p className="text-blue-600 font-semibold">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-10 text-lg opacity-90">Join thousands of satisfied customers who are already building the future with our platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate("/products")} // ចុចទៅ Products
              className="bg-white text-blue-700 px-8 py-5 rounded-lg font-bold hover:bg-gray-100 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-lg font-bold transition-transform duration-200 hover:scale-105 active:scale-95">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="p-6">
    <div className="text-5xl font-bold mb-2">{value}</div>
    <div className="text-indigo-200 font-medium">{label}</div>
  </div>
);

function FeatureCard({ imageSrc, title, desc }) {
  const navigate = useNavigate(); // បន្ថែមនេះ
  return (
    <div className="bg-white rounded-2xl shadow-lg p-1 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-indigo-100">
      <div className="h-[200px] overflow-hidden mb-6 rounded-t-xl">
        <img src={imageSrc} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className="px-6 pb-8">
        <h4 className="text-xl font-bold mb-6 group-hover:text-indigo-600 transition-colors">{title}</h4>
        <p className="text-gray-500 text-[18px] leading-relaxed mb-4">{desc}</p>
        <button 
          onClick={() => navigate("/products")} // ចុចទៅ Products
          className="text-blue-600 font-bold text-sm flex items-center gap-2 group/btn"
        >
          Explore <i className="fas fa-arrow-right transition-transform group-hover/btn:translate-x-1"></i>
        </button>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate(); // បន្ថែមនេះ
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Build Amazing <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Products Experiences</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">Our platform helps you create stunning websites and applications with minimal effort and maximum creativity.</p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate("/products")} // ចុចទៅ Products
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all transform hover:scale-105 shadow-xl"
                >
                  Get Started Free
                </button>
                <button onClick={() => navigate("/about")} className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all border border-white/30">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img src="https://i.pinimg.com/1200x/7d/a9/71/7da97180d730fde550ce8c33774afb18.jpg" alt="Professional Businessman" className="relative z-10 w-full max-w-lg mx-auto shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Features</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Everything You Need to Succeed</h3>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard imageSrc="https://i.pinimg.com/1200x/90/15/ac/9015acfe289387d3407945fbd843b90b.jpg" title="Lightning Fast" desc="Optimized for performance with instant load times and smooth animations." />
          <FeatureCard imageSrc="https://i.pinimg.com/736x/62/04/36/620436c360d04427d642e90dc6fa878b.jpg" title="Beautiful Design" desc="Stunning templates and customization options to make your project stand out." />
          <FeatureCard imageSrc="https://i.pinimg.com/1200x/91/51/e9/9151e900b1e14a7a22bcc4b1b93206fa.jpg" title="Secure & Reliable" desc="Enterprise-grade security and 99.9% uptime guarantee for your business." />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-inner">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem label="Happy Customers" value="10K+" />
          <StatItem label="Uptime" value="99.9%" />
          <StatItem label="Daily Requests" value="5M+" />
          <StatItem label="Support" value="24/7" />
        </div>
      </section>

      <Service />
    </div>
  );
}

export default App;