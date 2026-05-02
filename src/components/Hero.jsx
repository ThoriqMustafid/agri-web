import React from "react";
import Dashboard from "./Dashboard";
import { Leaf, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [isDemoOpen, setIsDemoOpen] = React.useState(false);
  
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-[28px] flex items-center justify-center shadow-[0_16px_48px_rgba(16,185,129,0.35)]">
            <Leaf className="w-12 h-12 text-white" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {["Kelompok Al-Jazari", "TDA Sekolah Impian"].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-600 dark:text-emerald-400"
            >
              {label}
            </span>
          ))}
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Hidroponik Pintar
          <br />
          <span className="bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            untuk Semua
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-3xl mx-auto">
          Sistem pertanian hidroponik yang dikendalikan oleh{" "}
          <strong className="text-slate-800 dark:text-slate-200 font-semibold">
            kecerdasan buatan (AI)
          </strong>
          , sensor pintar (IoT), dan{" "}
          <strong className="text-slate-800 dark:text-slate-200 font-semibold">
            tenaga matahari
          </strong>
          .
        </p>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          Lebih hemat, lebih efisien, dan ramah lingkungan — cocok untuk masa depan pertanian Indonesia.
        </p>

        <div className="max-w-2xl mx-auto mb-10 px-6 py-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl text-base md:text-lg italic text-slate-600 dark:text-slate-400 leading-relaxed">
          "Dan Dialah yang menurunkan air dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan…"
          <br />
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold not-italic">
            — QS. Al-An'am: 99
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button
          onClick={() => navigate("/panduan")} // Ubah ini
          className="px-8 py-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full text-lg font-bold text-white shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
        >
          Pelajari Lebih Lanjut
        </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full text-lg font-bold hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
          >
            Lihat Demo
          </button>
        </div>

        <div className="mt-16 flex justify-center animate-bounce">
          <ChevronDown className="w-7 h-7 text-slate-400" />
        </div>
      </div>

      {isDemoOpen && <Dashboard onClose={() => setIsDemoOpen(false)} />}
    </section>
  );
}

export default Hero;