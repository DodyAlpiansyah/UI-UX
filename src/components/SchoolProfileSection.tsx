import React, { useState } from 'react';
import { INFO_SEKOLAH, FASILITAS_LIST, EKSKUL_LIST } from '../data/mockData';
import { ActiveTab } from '../types';
import { 
  School, 
  Award, 
  BookOpen, 
  Trophy, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Users, 
  Laptop, 
  FlaskConical, 
  Compass, 
  HeartPulse, 
  ChevronRight,
  ShieldCheck,
  Building,
  UserPlus
} from 'lucide-react';

interface SchoolProfileSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const SchoolProfileSection: React.FC<SchoolProfileSectionProps> = ({ setActiveTab }) => {
  const [activeFasilitasTab, setActiveFasilitasTab] = useState<string>('all');

  const getFasilitasIcon = (ikon: string) => {
    switch (ikon) {
      case 'Laptop': return <Laptop className="w-5 h-5 text-sky-600" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-purple-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      default: return <School className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/60 border border-sky-400/30 text-sky-300 text-xs font-semibold">
              <School className="w-3.5 h-3.5" />
              <span>Profil Lembaga Pendidikan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Profil {INFO_SEKOLAH.nama}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mewujudkan generasi penerus yang berakhlak karimah, unggul dalam sains dan teknologi, serta berdaya saing global melalui kurikulum holistik dan fasilitas terpadu.
            </p>
            <div className="flex flex-wrap gap-4 text-xs pt-2 text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Akreditasi A Unggul (BAN-S/M)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>NPSN: {INFO_SEKOLAH.npsn}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-400" />
                <span>Sekolah Adiwiyata &amp; Ramah Anak</span>
              </span>
            </div>

            {/* Quick Link to PMB */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => { setActiveTab('beranda'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition"
              >
                <UserPlus className="w-4 h-4" />
                <span>Buka Info &amp; Kuota PMB TP {INFO_SEKOLAH.tahunAjaran}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sambutan Kepala Sekolah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Foto Avatar Kepala Sekolah */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-tr from-sky-800 to-sky-600 p-1 shadow-lg">
                <div className="w-full h-full rounded-2xl bg-slate-100 flex flex-col items-center justify-center text-slate-700 overflow-hidden relative">
                  <School className="w-16 h-16 text-sky-700 opacity-60 mb-2" />
                  <span className="text-[11px] font-bold text-slate-600">Foto Kepala Sekolah</span>
                </div>
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mt-3">
                {INFO_SEKOLAH.kepalaSekolah}
              </h3>
              <p className="text-xs text-sky-700 font-semibold">
                Kepala {INFO_SEKOLAH.nama}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Pembina Tk. I / IV-b
              </p>
            </div>

            {/* Pesan Sambutan */}
            <div className="md:col-span-8 space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t md:border-t-0 md:border-l border-slate-100 md:pl-8">
              <div className="inline-block bg-sky-100 text-sky-800 font-bold text-[10px] px-2.5 py-0.5 rounded uppercase">
                Kata Sambutan
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Selamat Datang di Portal SPMB Online TP {INFO_SEKOLAH.tahunAjaran}
              </h2>
              <p>
                <em>Assalamu’alaikum Warahmatullahi Wabarakatuh,</em>
              </p>
              <p>
                Puji syukur ke hadirat Allah SWT. Dalam rangka menyongsong era digitalisasi pendidikan dan memberikan pelayanan prima bagi masyarakat luas, {INFO_SEKOLAH.nama} dengan bangga menghadirkan sistem pendaftaran peserta didik baru secara online.
              </p>
              <p>
                Jika pada tahun-tahun sebelumnya orang tua harus hadir secara fisik mengantre di posko sekolah, kini seluruh rangkaian pendaftaran dapat diselesaikan secara fleksibel dari rumah Anda. Kami berkomitmen menjunjung tinggi prinsip <strong>objektivitas, transparansi, keadilan, dan akuntabilitas</strong> tanpa diskriminasi.
              </p>
              <p>
                Bagi Bapak/Ibu yang masih membutuhkan bantuan teknis dalam penggunaan sistem ini, jangan berkecil hati. Posko Pelayanan Sekolah kami selalu terbuka untuk mendampingi Bapak/Ibu dengan tulus.
              </p>
              <p className="font-semibold text-slate-900 pt-1">
                <em>Wassalamu’alaikum Warahmatullahi Wabarakatuh.</em>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Visi, Misi & Karakter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visi */}
          <div className="bg-sky-900 text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-800 border border-sky-600 text-sky-200 text-xs font-bold mb-4">
                <Compass className="w-3.5 h-3.5" />
                <span>VISI SEKOLAH</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-extrabold leading-snug italic text-sky-100">
                "{INFO_SEKOLAH.visi}"
              </blockquote>
            </div>
            <div className="pt-6 mt-6 border-t border-sky-800 text-xs text-sky-300 flex items-center justify-between">
              <span>Kurikulum Merdeka Mandiri Berbagi</span>
              <span className="font-bold">SMP Rujukan Kota</span>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>MISI SEKOLAH</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {INFO_SEKOLAH.misi.map((misi, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fasilitas Sekolah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Sarana &amp; Prasarana
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
            Fasilitas Pembelajaran Modern
          </h2>
          <p className="text-slate-600 text-xs mt-1">
            Didukung sarana prasarana lengkap dan terawat untuk kenyamanan belajar peserta didik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FASILITAS_LIST.map((fas, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-sky-300 transition group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-sky-50 flex items-center justify-center transition">
                  {getFasilitasIcon(fas.ikon)}
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded group-hover:bg-sky-100 group-hover:text-sky-800 transition">
                  {fas.highlight}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-sky-700 transition">
                {fas.nama}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                {fas.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ekstrakurikuler & Prestasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950 px-2.5 py-1 rounded-full border border-sky-800">
                Pengembangan Bakat
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1.5">
                Ekstrakurikuler &amp; Prestasi Unggulan
              </h2>
              <p className="text-slate-400 text-xs mt-0.5">
                Mewadahi minat non-akademik siswa dengan bimbingan pelatih profesional.
              </p>
            </div>

            <button
              onClick={() => { setActiveTab('registrasi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center gap-1.5 transition"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Daftar ke SMP Darusalah</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EKSKUL_LIST.map((ekskul, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 space-y-2 hover:border-slate-600 transition"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-white text-xs sm:text-sm">
                    {ekskul.nama}
                  </h4>
                  <span className="text-[10px] font-semibold text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800/60 whitespace-nowrap">
                    {ekskul.bidang}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {ekskul.deskripsi}
                </p>
                <div className="pt-2 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-amber-300 font-medium">
                  <Trophy className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{ekskul.prestasi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informasi Lokasi & Posko Bantuan Offline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-7 space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                Lokasi &amp; Kontak Posko
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Posko Pelayanan SPMB Tatap Muka
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Bagi orang tua yang terkendala perangkat atau ingin konsultasi berkas langsung dengan panitia penerimaan:
              </p>

              <div className="space-y-2 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Alamat Sekolah:</span>
                    <span>{INFO_SEKOLAH.alamat} (Kode Pos: {INFO_SEKOLAH.kodePos})</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Jam Operasional Posko:</span>
                    <span>Senin s/d Sabtu, Pukul 08.00 - 14.00 WIB</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-slate-900">Telepon / WhatsApp Panitia:</span>
                    <span>{INFO_SEKOLAH.telepon} • WA: {INFO_SEKOLAH.whatsappHelpdesk}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20SPMB%20SMP%20Darussalam,%20saya%20ingin%20berkonsultasi%20mengenai%20syarat%20pendaftaran`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hubungi Tim Panitia di WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Simulated Map Visual */}
            <div className="md:col-span-5">
              <div className="bg-slate-100 rounded-2xl border border-slate-300 p-4 text-center space-y-3">
                <div className="h-44 rounded-xl bg-slate-200 flex flex-col items-center justify-center text-slate-500 relative overflow-hidden border border-slate-300">
                  <MapPin className="w-8 h-8 text-sky-600 animate-bounce mb-1" />
                  <span className="font-bold text-slate-800 text-xs">Peta Lokasi SMP Darussalam</span>
                  <span className="text-[10px] text-slate-500">Koordinat: -7.98234, 112.63412</span>
                  <div className="absolute inset-0 bg-sky-900/5 pointer-events-none"></div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Berlokasi strategis di dekat poros jalan utama kota, mudah dijangkau angkutan umum &amp; kendaraan pribadi.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
