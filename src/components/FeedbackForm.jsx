import React, { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

// ── Config ────────────────────────────────────────────────────────────────────

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxGnFXwpZK_drYC2H_qGi-xD0bqxVJ2lLC9Qxvn6tLLmqPKVoT_vmKDYez7crP4cBtQEw/exec";

const INITIAL_FORM = { name: "", email: "", message: "" };
const INITIAL_STATUS = { loading: false, success: false, error: "" };

// ── Sub-components ────────────────────────────────────────────────────────────

function FormField({ label, hint, children }) {
  return (
    <div>
      <label className="block mb-1.5 text-base font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>
      {hint && (
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{hint}</p>
      )}
      {children}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

function FeedbackForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(INITIAL_STATUS);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
        }),
      });

      // no-cors tidak mengembalikan respons — asumsikan berhasil
      setStatus({ loading: false, success: true, error: "" });
      setForm(INITIAL_FORM);

      // Reset pesan sukses setelah 6 detik
      setTimeout(() => setStatus(INITIAL_STATUS), 6000);
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: "Gagal mengirim pesan. Coba lagi atau hubungi kami langsung.",
      });
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 text-base bg-slate-50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow";

  return (
    <section
      id="feedback"
      className="py-28 px-6 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-5">
            Kritik & Saran
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-800 dark:text-slate-100">
            Bantu Kami Jadi{" "}
            <span className="bg-gradient-to-br from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Lebih Baik
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Masukan dari kamu sangat berarti untuk pengembangan Agri-Smart ke depannya.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-6">

              {/* Nama */}
              <FormField
                label="Nama Kamu"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: Budi Santoso"
                  className={inputClass}
                />
              </FormField>

              {/* Email */}
              <FormField
                label="Alamat Email"
              >
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="nama@email.com"
                  className={inputClass}
                />
              </FormField>

              {/* Pesan */}
              <FormField
                label="Pesan, Kritik, atau Saran"
              >
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tuliskan pendapatmu di sini..."
                  className={`${inputClass} resize-y min-h-[140px]`}
                />
              </FormField>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading || status.success}
                className={`w-full py-4 rounded-xl text-lg font-bold text-white flex items-center justify-center gap-3 transition-all duration-200 ${
                  status.success
                    ? "bg-emerald-600 cursor-default"
                    : status.loading
                    ? "bg-emerald-400 cursor-not-allowed opacity-80"
                    : "bg-gradient-to-br from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
                }`}
              >
                {status.loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : status.success ? (
                  <>
                    <Check className="w-6 h-6" />
                    Terkirim! Terima kasih 
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Masukan
                  </>
                )}
              </button>

              {/* Error Message */}
              {status.error && (
                <div className="flex items-start gap-3 px-4 py-3.5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-base">
                  <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Success Message */}
              {status.success && (
                <div className="px-4 py-3.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl text-emerald-700 dark:text-emerald-400 text-base font-medium text-center">
                  Masukan kamu sudah kami terima dan simpan. Terima kasih sudah membantu!
                </div>
              )}

            </div>
          </form>
        </div>

        {/* Contact alternative */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-500 mt-6">
          Atau hubungi kami langsung via{" "}
          <a
            href="https://wa.me/6285250860859"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-500 font-semibold hover:underline"
          >
            WhatsApp
          </a>{" "}
          atau{" "}
          <a
            href="mailto:azzammustafidh@gmail.com"
            className="text-emerald-500 font-semibold hover:underline"
          >
            Email
          </a>
          .
        </p>

      </div>
    </section>
  );
}

export default FeedbackForm;