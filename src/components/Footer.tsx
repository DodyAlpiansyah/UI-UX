import React from 'react';
import { ActiveTab } from '../types';
import { INFO_SEKOLAH } from '../data/mockData';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-800 text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: School Identity */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold shadow-md shadow-sky-600/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white block">
                  {INFO_SEKOLAH.nama}
                </span>
                <span className="text-[11px] text-sky-400 font-semibold">
                  Akreditasi {INFO_SEKOLAH.akreditasi}
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Portal Resmi Sistem Penerimaan Murid Baru (SPMB) Tahun Pelajaran {INFO_SEKOLAH.tahunAjaran}. 
              Inovasi transformasi pendaftaran dari sistem konvensional/offline menjadi online yang transparan, akuntabel, dan ramah pengguna baru.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-950/80 border border-sky-800/60 text-sky-300 text-[10px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Sesuai Permendikdasmen No. 3/2025</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3.5 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <span>Navigasi Menu</span>
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button 
                  onClick={() => { setActiveTab('profil'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">•</span> Beranda (Profil Sekolah)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('beranda'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">•</span> PMB &amp; Kuota Jalur
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('registrasi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">•</span> Formulir Registrasi Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('pengumuman'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">•</span> Pengumuman Hasil Seleksi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('login'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">•</span> Login Siswa &amp; Verifikator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Posko Bantuan Offline (Sangat penting bagi transisi dari offline!) */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3.5 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Posko Pendampingan Offline</span>
            </h4>
            <div className="space-y-2 text-slate-400 text-[11px] leading-relaxed">
              <p>
                Bagi orang tua/wali murid yang membutuhkan bimbingan langsung atau kesulitan perangkat, silakan hadir di posko sekolah:
              </p>
              <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80 space-y-1 text-slate-300">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Senin - Sabtu: 08.00 - 14.00 WIB</span>
                </div>
                <p className="text-slate-400 text-[10px]">
                  Lokasi: Ruang Pelayanan Terpadu Satu Pintu (PTSP) SPMB SMP Darusalah
                </p>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Disediakan komputer &amp; scanner gratis</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>Didampingi fasilitator mahasiswa tim PKM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Kontak & Helpdesk */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3.5 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Kontak &amp; Layanan Bantuan</span>
            </h4>
            <div className="space-y-2.5 text-slate-400 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{INFO_SEKOLAH.alamat}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Telepon: {INFO_SEKOLAH.telepon}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {INFO_SEKOLAH.whatsappHelpdesk}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: {INFO_SEKOLAH.email}</span>
              </div>

              <div className="pt-2">
                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20SPMB,%20saya%20butuh%20panduan%20pendaftaran%20online`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 {INFO_SEKOLAH.nama}. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Project PKM: Inovasi UI/UX Sistem SPMB Ramah Pengguna Baru</span>
            <span className="hidden md:inline">• UU No. 27/2022 (PDP)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
