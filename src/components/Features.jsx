import React from "react";
import { Cpu, Activity, Zap, Droplets, TrendingUp, Shield } from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "24/7", label: "AI Monitoring" },
  { value: "99%", label: "IoT Uptime" },
  { value: "100%", label: "Solar Powered" },
  { value: "Real-time", label: "Data Update" },
];

const PROBLEMS = [
  "AI prediksi hasil panen & optimasi otomatis",
  "IoT sensor network real-time 24/7",
  "Operasional ramah lingkungan dengan solar power",
  "Pemberian nutrisi presisi dengan smart dosing",
];

const FEATURES = [
  {
    icon: Cpu,
    title: "Analisis AI Secara Langsung",
    desc: "Kecerdasan buatan membaca data tanaman setiap saat dan langsung memberikan saran agar tanaman tumbuh dengan baik.",
  },
  {
    icon: Activity,
    title: "Sensor Pintar 24 Jam",
    desc: "Sensor memantau keasaman air (pH), kadar nutrisi, suhu, kelembapan, dan level air — tidak pernah berhenti.",
  },
  {
    icon: Zap,
    title: "Tenaga Matahari",
    desc: "Seluruh sistem berjalan dari energi surya. Hemat listrik, ramah lingkungan, dan tetap menyala meski mati listrik.",
  },
  {
    icon: Droplets,
    title: "Pemberian Nutrisi Otomatis",
    desc: "AI mengatur takaran air dan pupuk secara tepat. Tidak ada yang terbuang, tanaman mendapat asupan yang pas.",
  },
  {
    icon: TrendingUp,
    title: "Prediksi Hasil Panen",
    desc: "Sistem bisa memperkirakan kapan dan berapa banyak panen yang akan didapat — membantu petani merencanakan lebih baik.",
  },
  {
    icon: Shield,
    title: "Pantau dari Mana Saja",
    desc: "Kendali penuh lewat smartphone. Lihat kondisi tanaman dan atur sistem dari rumah atau dari jauh, kapan saja.",
  },
];

const TECHNOLOGIES = [
  { name: "TensorFlow Lite",        category: "AI / Machine Learning" },
  { name: "ESP32",                   category: "IoT Mikrokontroler" },
  { name: "Panel Surya 100W",        category: "Energi Terbarukan" },
  { name: "Sensor pH HH-828",        category: "Sensor IoT" },
  { name: "Sensor EC/TDS V1.0",      category: "Sensor IoT" },
  { name: "Sensor Suhu DHT22",       category: "Sensor IoT" },
  { name: "MPPT Charge Controller",  category: "Manajemen Surya" },
  { name: "Baterai LiFePO4",         category: "Penyimpan Energi" },
  { name: "Model Prediksi AI",       category: "Machine Learning" },
  { name: "Pompa Peristaltik",       category: "Smart Dosing" },
  { name: "Protokol MQTT",           category: "Komunikasi IoT" },
  { name: "Bot Telegram",            category: "Kontrol Jarak Jauh" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionBadge({ children }) {
  return (
    <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-5">
      {children}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-emerald-400 to-teal-500 bg-clip-text text-transparent leading-tight">
        {value}
      </span>
      <span className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(16,185,129,0.12)] hover:border-emerald-400/40">
      <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-5 transition-transform group-hover:scale-105">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 leading-snug">
        {title}
      </h3>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function TechCard({ name, category }) {
  return (
    <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-5 text-center hover:border-emerald-400/40 hover:-translate-y-0.5 transition-all duration-200">
      <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1.5 leading-tight">
        {name}
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-500 leading-tight">
        {category}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

function Features() {
  return (
    <>
      {/* ── Stats Strip ── */}
      <section className="py-6 px-6 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 dark:divide-white/5">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── Masalah yang Kami Selesaikan ── */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div>
            <SectionBadge>Masalah yang Kami Selesaikan</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight text-slate-800 dark:text-slate-100">
              Pertanian Modern untuk{" "}
              <span className="bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Ketahanan Pangan
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Di tengah tantangan ketahanan pangan dan krisis iklim, Agri-Smart menghadirkan
              solusi next generation dengan tiga pilar teknologi: AI untuk optimasi cerdas, IoT
              untuk presisi tinggi, dan energi terbarukan untuk keberlanjutan.
            </p>
            <ul className="space-y-3">
              {PROBLEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-base">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 rounded-3xl blur-2xl opacity-60" />
            <div className="relative bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              {/* Skeleton bars */}
              <div className="space-y-3 mb-6">
                <div className="h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full w-full opacity-80" />
                <div className="h-3 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full w-4/5 opacity-60" />
                <div className="h-3 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full w-3/5 opacity-40" />
              </div>
              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-white/10 rounded-2xl p-5 border border-slate-100 dark:border-white/10">
                  <div className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">pH 6.2</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Optimal</div>
                </div>
                <div className="bg-white dark:bg-white/10 rounded-2xl p-5 border border-slate-100 dark:border-white/10">
                  <div className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">EC 950</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">μS/cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fitur Unggulan ── */}
      <section
        id="fitur"
        className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/60 dark:to-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <SectionBadge>Fitur Unggulan</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-800 dark:text-slate-100">
              Apa yang Membuat{" "}
              <span className="bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Agri-Smart Berbeda?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Setiap fitur dirancang agar mudah dipahami dan digunakan oleh siapa saja — pelajar, petani, hingga orang tua.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Teknologi ── */}
      <section
        id="teknologi"
        className="py-28 px-6 bg-white dark:bg-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionBadge>Teknologi yang Digunakan</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-800 dark:text-slate-100">
              <span className="bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                AI · IoT · Energi Surya
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Perpaduan teknologi terkini yang bekerja bersama — dari sensor kecil di ladang hingga kecerdasan buatan di sistem.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {TECHNOLOGIES.map((t) => (
              <TechCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;