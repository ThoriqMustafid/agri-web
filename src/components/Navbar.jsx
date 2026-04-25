import React, { useState, useEffect } from "react";
import { Leaf, Sun, Moon, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "beranda",   label: "Beranda" },
  { id: "fitur",     label: "Fitur" },
  { id: "teknologi", label: "Teknologi" },
  { id: "tim",       label: "Tim Kami" },
  { id: "feedback",  label: "Beri Saran" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Desktop */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("beranda")}
          className="flex items-center gap-3 group"
          aria-label="Kembali ke halaman utama"
        >
          <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-emerald-500/30 transition-shadow">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Agri-Smart
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-base font-semibold text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
            >
              {label}
            </button>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo("feedback")}
            className="px-5 py-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-base font-bold rounded-full shadow hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all"
          >
            Beri Masukan
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 px-6 py-6 flex flex-col gap-2">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 py-3 border-b border-slate-100 dark:border-white/5 last:border-0 transition-colors"
            >
              {label}
            </button>
          ))}

          <div className="flex items-center justify-between pt-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {darkMode ? "Mode Gelap Aktif" : "Mode Terang Aktif"}
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors"
              aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;