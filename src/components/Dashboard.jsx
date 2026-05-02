import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity, Droplets, Thermometer, Wind, Zap, Power,
  LayoutDashboard, Database, Settings, Bell, Search,
  ChevronRight, AlertCircle, Calendar, ArrowUpRight, ArrowDownRight
} from "lucide-react";

function ProfessionalDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // 1. State untuk menampung data riil dari ESP32
  const [sensorData, setSensorData] = useState({
    ph: 0,
    ec: 0,
    temp: 0,
    hum: 0,
    nutrient: 0,
    phUp: 0,
    phDown: 0,
    mode: "DISCONNECTED",
    waitingApproval: 0,
    stats: { nutrient: 0, totalML: 0, phUp: 0, phDown: 0 }
  });
  
  // State untuk status koneksi WebSocket
  const [isConnected, setIsConnected] = useState(false);

  // 2. Membuka koneksi WebSocket ke ESP32 saat komponen dimuat
  useEffect(() => {
    // GANTI IP INI SESUAI DENGAN IP ADDRESS ESP32 KAMU (Misal: IP SoftAP 192.168.4.1 atau IP dari Router WiFi)
    const ws = new WebSocket("ws://192.168.4.1:81/");

    ws.onopen = () => {
      console.log("Connected to ESP32 WebSocket");
      setIsConnected(true);
    };

    ws.onclose = () => {
      console.log("Disconnected from ESP32 WebSocket");
      setIsConnected(false);
    };

    // 4. Tangkap pesan JSON dari ESP32 dan masukkan ke dalam state
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setSensorData(data); // Memperbarui layar secara otomatis
      } catch (e) {
        console.error("Error parsing WebSocket data:", e);
      }
    };

    // Bersihkan koneksi jika komponen ditutup
    return () => {
      ws.close();
    };
  }, []);

  // 3. Mengganti variabel stats yang hardcoded menjadi dinamis dari sensorData
  const stats = [
    { label: "pH Level", value: sensorData.ph.toFixed(2), change: "Real-time", trend: "neutral", icon: <Activity className="text-emerald-500" />, unit: "pH" },
    { label: "Nutrisi (EC)", value: sensorData.ec.toFixed(0), change: "Real-time", trend: "neutral", icon: <Zap className="text-yellow-500" />, unit: "µS/cm" },
    { label: "Suhu Udara", value: sensorData.temp.toFixed(1), change: "Real-time", trend: "neutral", icon: <Thermometer className="text-red-500" />, unit: "°C" },
    { label: "Kelembapan", value: sensorData.hum.toFixed(1), change: "Real-time", trend: "neutral", icon: <Wind className="text-blue-500" />, unit: "%" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row font-sans text-slate-900 dark:text-slate-50 overflow-hidden">
      <aside className="hidden md:flex w-72 flex-col border-r border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">Agri-Smart <span className="text-xs text-emerald-500 block">Pro Control</span></span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: "overview", label: "Overview", icon: <LayoutDashboard size={20}/> },
            { id: "analytics", label: "Analytics", icon: <Database size={20}/> },
            { id: "logs", label: "System Logs", icon: <AlertCircle size={20}/> },
            { id: "settings", label: "Settings", icon: <Settings size={20}/> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === item.id
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-200 dark:border-white/10">
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 border border-slate-300 dark:border-white/10 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-all"
          >
            Exit Dashboard
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-20 border-b border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
            <input type="text" placeholder="Search sensors..." className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-white/5 border-none rounded-lg w-64 focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div className="flex items-center gap-6">
             {/* Indikator Koneksi WebSocket */}
             <div className={`flex items-center gap-2 px-3 py-1 border rounded-full ${isConnected ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isConnected ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
              <span className={`text-xs font-bold uppercase tracking-widest ${isConnected ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {isConnected ? 'System Online' : 'Disconnected'}
              </span>
            </div>
            <button className="relative p-2 text-slate-500 hover:text-emerald-500 transition-colors">
              <Bell size={24}/>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border border-slate-300 dark:border-white/20"></div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Environmental Overview</h1>
              <p className="text-slate-500">Mode: {sensorData.mode}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl font-semibold shadow-sm">
              <Calendar size={18}/> May 2, 2026
            </button>
          </div>

          {/* Alert jika menunggu persetujuan (approval) */}
          {sensorData.waitingApproval === 1 && (
             <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-700 rounded-2xl flex items-center gap-3">
               <AlertCircle className="text-yellow-600 dark:text-yellow-400" size={24}/>
               <span className="text-yellow-800 dark:text-yellow-200 font-bold">Menunggu persetujuan manual melalui Telegram...</span>
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                    {stat.icon}
                  </div>
                  <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-lg bg-slate-500/10 text-slate-500`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-extrabold mb-1">{stat.value} <span className="text-sm font-medium text-slate-400">{stat.unit}</span></div>
                <div className="text-sm text-slate-500 font-medium tracking-tight uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold">Growth Performance</h3>
                <select className="bg-slate-100 dark:bg-white/5 border-none rounded-lg text-sm px-3 py-1 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} className="flex-1 group relative">
                    <div
                      style={{ height: `${h}%` }}
                      className="bg-emerald-500/20 group-hover:bg-emerald-500 rounded-t-lg transition-all duration-500 relative"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </div>
                    <div className="mt-4 text-[10px] text-center font-bold text-slate-400 uppercase">Day {i+1}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Statistik Dosis Pompa */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Database size={20}/> Pump Statistics</h3>
                <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl">
                      <span className="font-bold text-sm">Dosis Nutrisi</span>
                      <span className="text-sm font-bold">{sensorData.stats.nutrient}x (~{sensorData.stats.totalML.toFixed(1)} mL)</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl">
                      <span className="font-bold text-sm">Dosis pH Up</span>
                      <span className="text-sm font-bold">{sensorData.stats.phUp}x</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl">
                      <span className="font-bold text-sm">Dosis pH Down</span>
                      <span className="text-sm font-bold">{sensorData.stats.phDown}x</span>
                   </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Settings size={20}/> Status Aktuator</h3>
                <div className="space-y-4">
                  {[
                    { name: "Pompa Nutrisi A+B", status: sensorData.nutrient === 1 ? 'Active' : 'Idle' },
                    { name: "Pompa pH Up", status: sensorData.phUp === 1 ? 'Active' : 'Idle' },
                    { name: "Pompa pH Down", status: sensorData.phDown === 1 ? 'Active' : 'Idle' },
                  ].map((device, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl">
                      <span className="font-bold text-sm">{device.name}</span>
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${device.status === 'Active' ? 'text-emerald-500' : 'text-slate-400'}`}>
                          {device.status}
                        </span>
                        <div className="w-10 h-5 bg-slate-200 dark:bg-white/10 rounded-full relative cursor-pointer">
                          <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${device.status === 'Active' ? 'right-1 bg-emerald-500' : 'left-1 bg-slate-400'}`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfessionalDashboard;