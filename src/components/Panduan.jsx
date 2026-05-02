import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Book, Cpu, Wrench, Activity, AlertTriangle, 
  ChevronRight, ArrowLeft, Droplets, CheckCircle2, XCircle
} from "lucide-react";

function Panduan() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("intro");

  const sections = [
    { id: "intro", label: "Pendahuluan", icon: <Book size={18}/> },
    { id: "sistem", label: "Cara Kerja", icon: <Activity size={18}/> },
    { id: "hardware", label: "Komponen", icon: <Cpu size={18}/> },
    { id: "rakit", label: "Merakit", icon: <Wrench size={18}/> },
    { id: "rawat", label: "Perawatan", icon: <Droplets size={18}/> },
    { id: "trouble", label: "Perbaikan", icon: <AlertTriangle size={18}/> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row text-slate-900 dark:text-slate-50">
      <aside className="w-full md:w-80 bg-white dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10 flex flex-col sticky top-0 md:h-screen z-50">
        <div className="p-4 md:p-8 flex items-center justify-between md:block">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 md:mb-8 transition-colors group shrink-0"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
            <span className="font-bold hidden md:inline">Kembali</span>
          </button>
          <div className="text-right md:text-left">
            <h2 className="text-lg md:text-2xl font-black tracking-tighter md:mb-2">BUKU PANDUAN</h2>
            <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-widest text-emerald-500">Agri-Smart</p>
          </div>
        </div>

        <nav className="flex md:flex-col gap-2 px-4 pb-4 md:pb-0 md:space-y-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`shrink-0 md:w-full flex items-center justify-between px-4 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all font-bold ${
                activeTab === section.id 
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" 
                : "text-slate-500 bg-slate-100/50 md:bg-transparent hover:bg-slate-200 dark:hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <span className="text-sm md:text-base">{section.label}</span>
              </div>
              <ChevronRight size={16} className={`hidden md:block ${activeTab === section.id ? "opacity-100" : "opacity-0"}`}/>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-12 lg:p-16 max-w-6xl mx-auto overflow-y-auto w-full">
        {activeTab === "intro" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Apa itu Agri-Smart?</h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-10 leading-relaxed">
              Agri-Smart adalah sistem <strong className="text-slate-900 dark:text-white">smart farming</strong> berbasis IoT dan AI yang dirancang untuk mengelola hidroponik secara efisien, presisi, dan minim kesalahan manusia [cite: 18-20].
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                <h3 className="font-black text-emerald-500 mb-4 text-xl">Latar Belakang</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" size={20}/> Gagal panen akibat monitoring manual yang tidak akurat [cite: 22-23].</li>
                  <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" size={20}/> Human error dalam dosis nutrisi[cite: 24].</li>
                  <li className="flex gap-3"><XCircle className="text-red-500 shrink-0" size={20}/> Produktivitas rendah karena bergantung pada manusia[cite: 25].</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                <h3 className="font-black text-emerald-500 mb-4 text-xl">Pengguna Target</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={20}/> Petani hidroponik pemula [cite: 31-32].</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={20}/> Pelajar dan mahasiswa pertanian/teknologi[cite: 33].</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-emerald-500 shrink-0" size={20}/> Pesantren yang mengembangkan kemandirian pangan[cite: 36].</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "sistem" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Alur Kerja Sistem</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-10">
              {[
                { step: "01", title: "Pengambilan Data", desc: "Sensor memantau pH, EC, dan ketinggian air secara real-time [cite: 55-68]." },
                { step: "02", title: "Pengolahan ESP32", desc: "Mengumpulkan data sensor dan mengirimkannya ke dashboard via WiFi [cite: 71-76]." },
                { step: "03", title: "Analisis AI", desc: "Membaca pola nutrisi dan memprediksi kebutuhan tanaman [cite: 92-105]." },
                { step: "04", title: "Smart Recommendation", desc: "Menghasilkan rekomendasi bahasa manusia (misal: 'Tambahkan 3 ml AB Mix') [cite: 108-111]." },
                { step: "05", title: "Human-in-the-Loop", desc: "Otomatisasi berjalan setelah persetujuan pengguna untuk menghindari kesalahan [cite: 118-125]." },
                { step: "06", title: "Eksekusi Aktuator", desc: "Pompa peristaltik dan solenoid valve bekerja sesuai instruksi [cite: 126-136]." },
              ].map((item) => (
                <div key={item.step} className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden group">
                  <span className="absolute -top-4 -right-4 text-7xl md:text-8xl font-black text-slate-50 dark:text-slate-800/50 group-hover:text-emerald-500/10 transition-colors z-0">{item.step}</span>
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-black mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "hardware" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Komponen Inti</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: "ESP32", func: "Otak sistem. Membaca sensor dan mengontrol relay via WiFi [cite: 157-161]." },
                { name: "Sensor pH", func: "Mengukur tingkat keasaman larutan (Ideal: 5.5-6.5) [cite: 165-168]." },
                { name: "Sensor EC", func: "Mengukur konsentrasi garam/nutrisi terlarut [cite: 170-175]." },
                { name: "Ultrasonic HC-SR04", func: "Mendeteksi ketinggian air di tandon [cite: 180-184]." },
                { name: "Pompa Peristaltik", func: "Menginjeksi Nutrisi A dan B tanpa kontaminasi [cite: 194-201]." },
                { name: "Solenoid Valve 12V", func: "Mengisi tandon otomatis saat batas air minimum [cite: 202-206]." },
              ].map((comp) => (
                <div key={comp.name} className="p-6 md:p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm hover:border-emerald-500/50 transition-colors">
                  <h3 className="font-black text-lg md:text-xl mb-3 text-emerald-500">{comp.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">{comp.func}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "rakit" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Panduan Merakit</h1>
            <div className="space-y-6 md:space-y-8">
              <div className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                <h3 className="font-black text-xl md:text-2xl mb-4 text-emerald-500">1. Persiapan Peralatan</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">Siapkan obeng kecil, tang potong, solder (jika menggunakan PCB), dan gelas ukur 5-10 ml untuk kalibrasi pompa [cite: 243-248].</p>
              </div>

              <div className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                <h3 className="font-black text-xl md:text-2xl mb-4 text-emerald-500">2. Merakit Unit Kontrol</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc pl-5 text-sm md:text-base">
                  <li>Hubungkan buck converter 12V ke 5V untuk power input ESP32 [cite: 273-275].</li>
                  <li>Pasang Relay Module: VCC ke 5V, GND ke GND. Hubungkan IN1, IN2, IN3 ke pin digital ESP32 (misal: GPIO 23, 22, 21) [cite: 276-278].</li>
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm">
                <h3 className="font-black text-xl md:text-2xl mb-4 text-emerald-500">3. Sensor & Aktuator</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc pl-5 text-sm md:text-base">
                  <li>Sensor pH & EC: Hubungkan VCC ke 5V, GND ke GND, dan pin AO ke pin Analog ESP32 [cite: 282-292]. Wajib gunakan signal conditioner.</li>
                  <li>Solenoid Valve: Sambungkan ke Relay CH2 (Relay NO) dan Power 12V+ [cite: 307-311].</li>
                  <li>Peristaltic Pump: Pasang tiap pompa ke channel relay berbeda. Input selang ke botol nutrisi, output ke tandon [cite: 323-324].</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rawat" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Perawatan Berkala</h1>
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 min-w-[500px]">
                <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                  <tr>
                    <th className="p-4 md:p-6 font-black uppercase text-xs md:text-sm tracking-widest text-slate-500 w-1/4">Frekuensi</th>
                    <th className="p-4 md:p-6 font-black uppercase text-xs md:text-sm tracking-widest text-slate-500">Aktivitas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/10">
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-emerald-500 align-top">Harian</td>
                    <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 text-sm md:text-base">Cek visual kebocoran selang, cek level air tandon, dan validasi data dashboard (pH/EC normal) [cite: 505-520].</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-emerald-500 align-top">Mingguan</td>
                    <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 text-sm md:text-base">Bilas sensor pH dan EC dengan air bersih (jangan digosok). Uji coba aktuator (pompa dan solenoid) secara manual [cite: 524-538].</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-emerald-500 align-top">Bulanan</td>
                    <td className="p-4 md:p-6 text-slate-600 dark:text-slate-400 text-sm md:text-base">Kalibrasi ulang sensor pH menggunakan cairan buffer 4.0 & 7.0. Kalibrasi ulang ml/detik pada peristaltic pump [cite: 541-558].</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "trouble" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight">Troubleshooting</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {[
                { issue: "Sistem Tidak Menyala", desc: "Power supply mati atau tegangan tidak sesuai. Cek stop kontak, ukur tegangan power supply (12V), dan pastikan kabel ESP32 terpasang benar [cite: 602-615]." },
                { issue: "Data Dashboard Kosong", desc: "ESP32 kehilangan koneksi. Cek WiFi ESP32, restart board, dan pastikan server database aktif [cite: 616-630]." },
                { issue: "Data Sensor Error (pH 0/14)", desc: "Sensor belum dikalibrasi atau kotor. Bersihkan sensor, kalibrasi ulang, dan pisahkan kabel sensor dari kabel pompa [cite: 644-657]." },
                { issue: "Pompa Tidak Menyala", desc: "Relay rusak atau tegangan tidak cukup. Tes pompa langsung ke listrik dan cek output relay [cite: 658-670]." },
                { issue: "Solenoid Valve Macet", desc: "Tegangan tidak sesuai atau tersumbat. Bersihkan valve dan pastikan spesifikasi voltase terpenuhi [cite: 671-683]." },
                { issue: "Sistem Restart Terus", desc: "Short circuit atau power drop. Pisahkan power pompa dengan ESP32 dan gunakan adaptor yang memadai [cite: 749-760]." },
              ].map((item, index) => (
                <div key={index} className="p-6 md:p-8 bg-white dark:bg-white/5 rounded-3xl border border-red-200 dark:border-red-500/20 shadow-sm">
                  <h3 className="font-black text-lg md:text-xl mb-3 text-red-500 flex items-start md:items-center gap-2">
                    <AlertTriangle size={20} className="shrink-0 mt-1 md:mt-0"/> 
                    <span>{item.issue}</span>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Panduan;