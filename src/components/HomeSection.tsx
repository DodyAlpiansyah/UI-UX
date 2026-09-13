import React, { useState } from 'react';
import { ActiveTab, KuotaJalur } from '../types';
import { INFO_SEKOLAH, KUOTA_JALUR_LIST, FAQ_LIST } from '../data/mockData';
import { 
  UserPlus, 
  Search, 
  School, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Check,
  X,
  Laptop,
  Users,
  Award
} from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenStatusModal: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab, onOpenStatusModal }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const totalTerisi = KUOTA_JALUR_LIST.reduce((acc, curr) => acc + curr.terisi, 0);
  const persentaseTotal = Math.round((totalTerisi / INFO_SEKOLAH.totalDayaTampung) * 100);

  return (
    <div className="space-y-14 pb-16">
      {/* Notice Banner: Fraud & Document Integrity */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-3 text-xs text-amber-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-white px-2 py-0.5 rounded font-bold uppercase text-[10px] tracking-wide shrink-0">
              PENTING
            </span>
            <span className="leading-snug">
              Pastikan nama orang tua dan tanggal lahir calon murid <strong>sama persis</strong> dengan Akta Kelahiran dan Kartu Keluarga (KK). Pendaftaran daring bebas pungutan biaya (100% Gratis).
            </span>
          </div>
          <span className="text-amber-800 font-bold text-[11px] whitespace-nowrap">
            Masa Pendaftaran: 01 - 20 Juni 2026
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white pt-12 pb-16 lg:py-20">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-sky-500 filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500 filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Main Presentation */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/70 border border-sky-400/30 text-sky-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Portal Resmi SPMB SMP TP {INFO_SEKOLAH.tahunAjaran}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Penerimaan Murid Baru <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-100 to-amber-300">
                  {INFO_SEKOLAH.nama}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Transformasi sistem pendaftaran dari <strong>offline ke online</strong> yang lebih cepat, transparan, dan dapat diakses dari rumah. Dirancang dengan alur intuitif dan ramah untuk orang tua murid baru.
              </p>

              {/* 3 Main Action CTAs */}
              <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
                <button
                  id="hero-btn-daftar"
                  onClick={() => { setActiveTab('registrasi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/30 hover:scale-[1.02] transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Daftar Sekarang (Online)</span>
                </button>

                <button
                  id="hero-btn-cek-status"
                  onClick={onOpenStatusModal}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700 transition"
                >
                  <Search className="w-4 h-4 text-sky-400" />
                  <span>Cek Status Berkas</span>
                </button>

                <button
                  id="hero-btn-profil"
                  onClick={() => { setActiveTab('profil'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700/60 transition"
                >
                  <School className="w-4 h-4" />
                  <span>Profil Sekolah</span>
                </button>
              </div>

              {/* Live Status Quick Metrics */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Total Daya Tampung</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">{INFO_SEKOLAH.totalDayaTampung}</p>
                  <p className="text-[10px] text-sky-400 font-semibold">{INFO_SEKOLAH.jumlahRombel} Rombel (@32 Siswa)</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Pendaftar Masuk</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-amber-300 mt-0.5">{totalTerisi}</p>
                  <p className="text-[10px] text-slate-400">Tahap Verifikasi</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Kuota Terisi</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-emerald-300 mt-0.5">{persentaseTotal}%</p>
                  <p className="text-[10px] text-slate-400">Live Kuota</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Sisa Kuota</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">{INFO_SEKOLAH.totalDayaTampung - totalTerisi}</p>
                  <p className="text-[10px] text-sky-400 font-semibold">Tersedia</p>
                </div>
              </div>
            </div>

            {/* Right Col: Kuota 4 Jalur Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 text-slate-900 shadow-2xl border border-slate-200">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-600" />
                      Status Kuota 4 Jalur Resmi
                    </h3>
                    <p className="text-[11px] text-slate-500">Permendikdasmen No. 3/2025</p>
                  </div>
                  <span className="text-[10px] font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded border border-sky-200">
                    Live Real-Time
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  {KUOTA_JALUR_LIST.map((jalur) => {
                    const percent = Math.round((jalur.terisi / jalur.kuotaTotal) * 100);
                    return (
                      <div key={jalur.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex justify-between items-center font-bold mb-1.5">
                          <span className="text-slate-800 text-xs">{jalur.nama} ({jalur.persentase}%)</span>
                          <span className="text-sky-700 font-mono text-xs">{jalur.terisi} / {jalur.kuotaTotal} Kursi</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-2.5 rounded-full transition-all duration-500 ${
                              percent > 80 ? 'bg-amber-500' : 'bg-sky-600'
                            }`}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1">
                          <span>Sisa kuota: {jalur.kuotaTotal - jalur.terisi} kursi</span>
                          <span className="font-semibold text-slate-700">{percent}% Terisi</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">Belum mendaftar?</span>
                  <button
                    onClick={() => { setActiveTab('registrasi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="text-sky-700 font-bold hover:underline flex items-center gap-1 text-xs"
                  >
                    <span>Mulai Isi Formulir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Perbandingan: Mengapa Beralih dari Offline ke Online? (Penting untuk konteks PKM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Inovasi Digital PKM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Pendaftaran Sekarang Jauh Lebih Mudah
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Meninggalkan kerumitan antrean manual di sekolah dan beralih ke sistem pendaftaran digital yang transparan, akuntabel, dan nyaman bagi semua kalangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Sebelum (Offline Lama) */}
          <div className="bg-white rounded-2xl border border-red-200/80 p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-50 text-red-700 font-bold text-[10px] px-3 py-1 rounded-bl-xl border-l border-b border-red-200">
              SISTEM LAMA (OFFLINE)
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Pendaftaran Manual di Sekolah</h3>
                <p className="text-[11px] text-slate-500">Membawa map fisik &amp; berkas fotokopi</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Harus datang pagi-pagi dan mengantre berjam-jam di sekolah dengan nomor antrean manual.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Jika ada dokumen kurang atau salah tanggal KK, harus bolak-balik pulang ke rumah.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Risiko berkas fisik tercecer, rusak, atau salah rekap data oleh panitia manual.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">✕</span>
                <span>Hasil seleksi hanya ditempel di papan pengumuman sekolah, memicu kerumunan.</span>
              </li>
            </ul>
          </div>

          {/* Card Sesudah (Online Baru) */}
          <div className="bg-white rounded-2xl border-2 border-sky-300 p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-sky-600 text-white font-bold text-[10px] px-3 py-1 rounded-bl-xl">
              SISTEM BARU (ONLINE SPMB)
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Pendaftaran Digital Mandiri</h3>
                <p className="text-[11px] text-sky-700 font-semibold">Cukup dari smartphone atau laptop</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bisa mendaftar kapan saja 24 jam secara mandiri tanpa harus berpanas-panasan mengantre.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unggah foto dokumen langsung pakai kamera HP dengan panduan panduan foto jelas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Status verifikasi berkas terpantau secara transparan secara real-time (lengkap dengan masa sanggah).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tetap disediakan <strong>Posko Asistensi di Sekolah</strong> bagi yang butuh bantuan perangkat.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Alur Registrasi 4 Langkah Mudah (Sesuai Permintaan Alur Intuitif) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
              Panduan Pemula
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Alur Pendaftaran 4 Langkah Mudah
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Ikuti 4 langkah sederhana ini untuk mendaftarkan putra-putri Anda ke {INFO_SEKOLAH.nama}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center text-base shadow">
                1
              </div>
              <h3 className="font-bold text-sm text-white">Siapkan Berkas Dokumen</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Siapkan foto asli Kartu Keluarga (KK min. 1 thn), Akta Kelahiran, Pas Foto 3x4, dan formulir SPTJM bermeterai.
              </p>
              <div className="pt-2 text-[11px] text-sky-400 font-semibold flex items-center gap-1">
                <span>Foto pakai HP juga bisa</span>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center text-base shadow">
                2
              </div>
              <h3 className="font-bold text-sm text-white">Isi Formulir &amp; Pilih Jalur</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pilih 1 jalur (Domisili, Afirmasi, Prestasi, atau Mutasi). Masukkan NIK, NISN, dan data identitas orang tua dengan benar.
              </p>
              <div className="pt-2 text-[11px] text-sky-400 font-semibold flex items-center gap-1">
                <span>Ada tombol contoh data</span>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center text-base shadow">
                3
              </div>
              <h3 className="font-bold text-sm text-white">Cetak Kartu Peserta</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Setelah mengirim formulir, sistem akan langsung menerbitkan Tanda Bukti Pendaftaran &amp; Kode PIN/Token resmi.
              </p>
              <div className="pt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <span>Bisa disimpan PDF / Print</span>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-base shadow">
                4
              </div>
              <h3 className="font-bold text-sm text-white">Pantau Status &amp; Pengumuman</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Panitia sekolah memverifikasi dokumen Anda dalam 24 jam. Cek status di menu Pengumuman atau Cek Status.
              </p>
              <div className="pt-2 text-[11px] text-amber-300 font-semibold flex items-center gap-1">
                <span>Ada masa sanggah jika revisi</span>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <button
              onClick={() => { setActiveTab('registrasi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg transition"
            >
              <span>Mulai Pendaftaran Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Timeline & Jadwal Pelaksanaan Resmi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-600" />
                Jadwal &amp; Timeline Resmi SPMB 2026/2027
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Surat Edaran Dirjen PAUD Dikdasmen No. 0301/2026
              </p>
            </div>
            <span className="text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1 rounded-lg">
              Tahun Ajaran 2026/2027
            </span>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold uppercase border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Tahapan Kegiatan</th>
                  <th className="p-3.5">Tanggal</th>
                  <th className="p-3.5">Waktu</th>
                  <th className="p-3.5">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                    Pendaftaran Akun &amp; Unggah Berkas Daring
                  </td>
                  <td className="p-3.5 font-medium text-slate-700">01 - 20 Juni 2026</td>
                  <td className="p-3.5 text-slate-600">24 Jam (Online)</td>
                  <td className="p-3.5 text-slate-500">Mendapatkan Nomor Registrasi &amp; PIN Token</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                    Verifikasi Keabsahan Dokumen oleh Panitia
                  </td>
                  <td className="p-3.5 font-medium text-slate-700">02 - 22 Juni 2026</td>
                  <td className="p-3.5 text-slate-600">08.00 - 15.00 WIB</td>
                  <td className="p-3.5 text-slate-500">Pemeriksaan masa berlaku KK (&ge; 1 thn) &amp; Akta</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                    Masa Sanggah &amp; Perbaikan Berkas (2x24 Jam)
                  </td>
                  <td className="p-3.5 font-medium text-slate-700">23 - 25 Juni 2026</td>
                  <td className="p-3.5 text-slate-600">08.00 - 14.00 WIB</td>
                  <td className="p-3.5 text-slate-500">Bagi calon murid yang berkasnya butuh perbaikan</td>
                </tr>
                <tr className="bg-sky-50/60 font-semibold">
                  <td className="p-3.5 font-bold text-sky-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Pengumuman Penetapan Hasil Seleksi Akhir
                  </td>
                  <td className="p-3.5 font-bold text-sky-900">27 Juni 2026</td>
                  <td className="p-3.5 font-bold text-sky-900">10.00 WIB</td>
                  <td className="p-3.5 text-sky-800">Diumumkan Lolos, Cadangan, &amp; Tidak Lolos</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Daftar Ulang Murid Baru
                  </td>
                  <td className="p-3.5 font-medium text-slate-700">29 Juni - 03 Juli 2026</td>
                  <td className="p-3.5 text-slate-600">08.00 - 14.00 WIB</td>
                  <td className="p-3.5 text-slate-500">Penyerahan fisik &amp; pencocokan seragam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
            Tanya Jawab
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-slate-600 text-xs mt-1">
            Informasi penting seputar pendaftaran SPMB online di {INFO_SEKOLAH.nama}.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex justify-between items-center gap-3 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
