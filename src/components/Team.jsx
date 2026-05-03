import React from "react";
import { Cpu, Code, Sparkles, LineChart, Wrench, BookOpen, Users } from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────

const TEAM_MEMBERS = [
  {
    name: "Imam Daffa",
    role: "Project Manager",
    icon: Cpu,
    desc: "Memimpin, mengatur strategi, serta mengoordinasikan seluruh tim dalam pengembangan proyek Agri-Smart agar berjalan sesuai target.",
  },
  {
    name: "Ahmad Fahrezy",
    role: "Quality Assurance",
    icon: Sparkles,
    desc: "Memastikan kualitas sistem melalui pengujian, evaluasi, dan validasi agar produk berjalan optimal dan minim kesalahan.",
  },
  {
    name: "M. Azzam Mustafidz",
    role: "Lead Engineer",
    icon: Wrench,
    desc: "Merancang dan mengembangkan perangkat keras serta perangkat lunak sebagai inti dari sistem Agri-Smart.",
  },
  {
    name: "Thoriq M Ahyan",
    role: "Assistant Engineer",
    icon: Code,
    desc: "Mendukung pengembangan sistem dengan membantu implementasi teknis, penulisan kode, serta kolaborasi dengan Lead engineer.",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function MemberCard({ name, role, icon: Icon, desc }) {
  return (
    <div className="group bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(16,185,129,0.15)] hover:border-emerald-400/50">
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 border-2 border-emerald-200 dark:border-emerald-500/25 mb-5 transition-transform group-hover:scale-105">
        <Icon className="w-8 h-8" />
      </div>

      {/* Info */}
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 leading-snug">
        {name}
      </h3>
      <div className="text-sm font-bold text-emerald-500 uppercase tracking-wide mb-3">
        {role}
      </div>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

function Team() {
  return (
    <section id="tim" className="py-28 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-5">
            Tim Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight text-slate-800 dark:text-slate-100">
            Team{" "}
            <span className="bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Agri Smart
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Dikembangkan oleh tim Khwarizmi dari Sekolah Impian sebagai kontribusi nyata untuk ketahanan pangan nasional.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* About the Project */}
        <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Team Agri Smart
              </p>
              <p className="text-base text-slate-500 dark:text-slate-400">
                PT. Khwarizmi — Sekolah Impian
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Agri-Smart menggabungkan tiga kekuatan teknologi:{" "}
            <strong className="text-emerald-500 font-semibold">Kecerdasan Buatan (AI)</strong> untuk analisis dan prediksi,{" "}
            <strong className="text-emerald-500 font-semibold">Internet of Things (IoT)</strong> untuk pemantauan real-time, serta{" "}
            <strong className="text-emerald-500 font-semibold">Energi Terbarukan</strong> untuk operasional yang ramah lingkungan.
          </p>

          {/* Ayat */}
          <div className="border-t border-slate-200 dark:border-white/10 pt-6">
            <p className="text-base md:text-lg italic text-slate-500 dark:text-slate-400 leading-relaxed">
              "Dan janganlah kamu membuat kerusakan di muka bumi setelah (Allah) memperbaikinya."
              <br />
              <span className="text-emerald-500 font-semibold not-italic">
                — QS. Al-A'raf: 56
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;