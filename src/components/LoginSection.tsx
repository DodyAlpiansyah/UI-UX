import React, { useState } from 'react';
import { PesertaSPMB, StatusVerifikasi } from '../types';
import { INFO_SEKOLAH } from '../data/mockData';
import { 
  LogIn, 
  UserCheck, 
  ShieldCheck, 
  Key, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  FileText, 
  Printer, 
  HelpCircle, 
  Eye, 
  AlertTriangle,
  Upload,
  ArrowRight
} from 'lucide-react';

interface LoginSectionProps {
  pesertaList: PesertaSPMB[];
  onUpdateStatusPeserta: (noPeserta: string, status: StatusVerifikasi, catatan: string) => void;
}

export const LoginSection: React.FC<LoginSectionProps> = ({ 
  pesertaList,
  onUpdateStatusPeserta
}) => {
  const [activeRole, setActiveRole] = useState<'siswa' | 'operator'>('siswa');
  
  // Siswa Login State
  const [loginNoPeserta, setLoginNoPeserta] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const [loggedInSiswa, setLoggedInSiswa] = useState<PesertaSPMB | null>(null);
  const [siswaLoginError, setSiswaLoginError] = useState<string | null>(null);
  const [showSanggahForm, setShowSanggahForm] = useState(false);
  const [sanggahSukses, setSanggahSukses] = useState(false);

  // Operator State
  const [operatorEmail, setOperatorEmail] = useState('verifikator@smpdarusalah.sch.id');
  const [operatorPassword, setOperatorPassword] = useState('admin123');
  const [isOperatorLoggedIn, setIsOperatorLoggedIn] = useState(false);
  const [selectedVerifPeserta, setSelectedVerifPeserta] = useState<PesertaSPMB>(pesertaList[0]);
  const [templateAlasan, setTemplateAlasan] = useState('ok');
  const [catatanVerif, setCatatanVerif] = useState('Semua berkas lengkap & valid sesuai persyaratan domisili.');
  const [operatorNotif, setOperatorNotif] = useState<string | null>(null);

  // Quick fill student credentials for demo
  const fillSiswaPreset = (no: string, pin: string) => {
    setLoginNoPeserta(no);
    setLoginPin(pin);
    setSiswaLoginError(null);
  };

  const handleSiswaLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const found = pesertaList.find(
      p => (p.noPeserta.toLowerCase() === loginNoPeserta.trim().toLowerCase() || p.nik === loginNoPeserta.trim())
    );

    if (found) {
      setLoggedInSiswa(found);
      setSiswaLoginError(null);
    } else {
      setSiswaLoginError('Nomor Peserta atau NIK tidak ditemukan. Pastikan data sudah terdaftar di sistem.');
    }
  };

  const handleOperatorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (operatorPassword.length >= 4) {
      setIsOperatorLoggedIn(true);
    }
  };

  const handlePilihTemplateAlasan = (val: string) => {
    setTemplateAlasan(val);
    if (val === 'ok') {
      setCatatanVerif('Semua berkas lengkap & valid sesuai persyaratan domisili.');
    } else if (val === 'kk-buram') {
      setCatatanVerif('Foto KK buram / terpotong tanggal terbitnya. Harap upload ulang scan KK asli yang jelas.');
    } else if (val === 'kk-kurang') {
      setCatatanVerif('Masa penerbitan KK kurang dari 1 tahun. Wajib melampirkan surat keterangan pengganti dari Dispendukcapil.');
    } else if (val === 'nama-beda') {
      setCatatanVerif('Nama orang tua di formulir berbeda dengan akta kelahiran anak.');
    } else if (val === 'sptjm-meterai') {
      setCatatanVerif('SPTJM belum dibubuhi meterai Rp 10.000 asli.');
    }
  };

  const handleEksekusiVerifikasi = (status: StatusVerifikasi) => {
    if (!selectedVerifPeserta) return;
    onUpdateStatusPeserta(selectedVerifPeserta.noPeserta, status, catatanVerif);
    
    // Update local selected state
    setSelectedVerifPeserta({
      ...selectedVerifPeserta,
      statusVerifikasi: status,
      catatanVerifikator: catatanVerif
    });

    setOperatorNotif(`Status berkas peserta ${selectedVerifPeserta.namaLengkap} berhasil diperbarui menjadi: ${status}`);
    setTimeout(() => setOperatorNotif(null), 3500);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/80 border border-sky-400/40 text-sky-200 text-xs font-semibold">
            <LogIn className="w-3.5 h-3.5" />
            <span>Portal Masuk SPMB Online</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Login Siswa &amp; Panitia Verifikator
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Akses dashboard pribadi untuk memantau berkas pendaftaran calon murid atau login verifikator untuk panitia sekolah.
          </p>

          {/* Role Switcher */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setActiveRole('siswa');
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition ${
                  activeRole === 'siswa' 
                    ? 'bg-sky-600 text-white shadow' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Calon Siswa / Wali Murid</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveRole('operator');
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition ${
                  activeRole === 'operator' 
                    ? 'bg-sky-600 text-white shadow' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Panitia / Verifikator Sekolah</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* ROLE 1: LOGIN & DASHBOARD CALON SISWA */}
        {/* ========================================================================= */}
        {activeRole === 'siswa' && (
          <div>
            {!loggedInSiswa ? (
              /* Siswa Login Form */
              <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-5">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-2">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Masuk Akun Calon Murid
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Gunakan Nomor Peserta dan PIN Token yang tertera di Tanda Bukti Pendaftaran.
                  </p>
                </div>

                {siswaLoginError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{siswaLoginError}</span>
                  </div>
                )}

                <form onSubmit={handleSiswaLogin} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Nomor Peserta atau NIK Calon Siswa
                    </label>
                    <input 
                      type="text"
                      value={loginNoPeserta}
                      onChange={(e) => setLoginNoPeserta(e.target.value)}
                      placeholder="Contoh: 2026-DOM-00128"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Kode PIN / Token Rahasia
                    </label>
                    <input 
                      type="password"
                      value={loginPin}
                      onChange={(e) => setLoginPin(e.target.value)}
                      placeholder="6 digit PIN token"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition"
                  >
                    Masuk ke Dashboard Siswa
                  </button>
                </form>

                {/* Quick Simulation Presets for Demo */}
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <span className="font-semibold text-slate-700 block text-[11px]">
                    Preset Akun Simulasi Cepat (Demo Tugas PKM):
                  </span>
                  <div className="space-y-1.5 text-[11px]">
                    <button
                      type="button"
                      onClick={() => fillSiswaPreset('2026-DOM-00128', '748291')}
                      className="w-full p-2 text-left rounded-lg bg-emerald-50 text-emerald-900 font-medium hover:bg-emerald-100 flex justify-between items-center"
                    >
                      <span>1. Azzam (Berkas Terverifikasi Lolos)</span>
                      <span className="font-mono text-[10px] bg-emerald-200 px-1.5 py-0.5 rounded">Isi Otomatis</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fillSiswaPreset('2026-DOM-00042', '319402')}
                      className="w-full p-2 text-left rounded-lg bg-red-50 text-red-900 font-medium hover:bg-red-100 flex justify-between items-center"
                    >
                      <span>2. Hadi (Perlu Sanggah / Revisi KK)</span>
                      <span className="font-mono text-[10px] bg-red-200 px-1.5 py-0.5 rounded">Isi Otomatis</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => fillSiswaPreset('2026-DOM-00095', '615243')}
                      className="w-full p-2 text-left rounded-lg bg-amber-50 text-amber-900 font-medium hover:bg-amber-100 flex justify-between items-center"
                    >
                      <span>3. Fauzan (Menunggu Verifikator)</span>
                      <span className="font-mono text-[10px] bg-amber-200 px-1.5 py-0.5 rounded">Isi Otomatis</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Siswa Dashboard View */
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
                
                {/* Header User */}
                <div className="flex flex-wrap justify-between items-start gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {loggedInSiswa.namaLengkap}
                      </h3>
                      {loggedInSiswa.statusVerifikasi === 'TERVERIFIKASI' && (
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-300">
                          TERVERIFIKASI
                        </span>
                      )}
                      {loggedInSiswa.statusVerifikasi === 'PERLU_REVISI' && (
                        <span className="bg-red-100 text-red-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-red-300">
                          PERLU SANGGAH / REVISI
                        </span>
                      )}
                      {loggedInSiswa.statusVerifikasi === 'MENUNGGU' && (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-amber-300">
                          ANTREAN VERIFIKASI
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      No. Peserta: <strong className="font-mono text-sky-800">{loggedInSiswa.noPeserta}</strong> • Asal Sekolah: {loggedInSiswa.asalSekolah}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setLoggedInSiswa(null);
                      setShowSanggahForm(false);
                    }}
                    className="px-3.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs"
                  >
                    Keluar Akun
                  </button>
                </div>

                {/* Catatan Verifikator Box */}
                <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                  loggedInSiswa.statusVerifikasi === 'PERLU_REVISI'
                    ? 'bg-red-50 border-red-200 text-red-900'
                    : loggedInSiswa.statusVerifikasi === 'TERVERIFIKASI'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}>
                  <span className="font-bold block mb-1">
                    Catatan Resmi Tim Verifikator Panitia:
                  </span>
                  <p>{loggedInSiswa.catatanVerifikator || 'Belum ada catatan verifikator.'}</p>
                </div>

                {/* Form Sanggah jika Perlu Revisi */}
                {loggedInSiswa.statusVerifikasi === 'PERLU_REVISI' && (
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-300 space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Upload className="w-4 h-4 text-red-600" />
                        Unggah Dokumen Perbaikan Masa Sanggah (2x24 Jam)
                      </span>
                      <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
                        Sisa Waktu: 38 Jam
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Silakan upload Surat Pengganti dari Dispendukcapil / Akta pembaharuan atau SPTJM klarifikasi:
                    </p>

                    {sanggahSukses ? (
                      <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl font-bold">
                        ✓ Berkas sanggah berhasil diunggah! Petugas akan meninjau ulang dalam 1x24 jam.
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <input 
                          type="file" 
                          className="text-xs file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-sky-100 file:text-sky-800"
                        />
                        <button
                          type="button"
                          onClick={() => setSanggahSukses(true)}
                          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs"
                        >
                          Kirim Dokumen Sanggah
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Grid Data Siswa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">NIK &amp; NISN</span>
                    <span className="font-bold text-slate-800 font-mono">{loggedInSiswa.nik} / {loggedInSiswa.nisn}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Jalur Seleksi</span>
                    <span className="font-bold text-slate-800 uppercase">Jalur {loggedInSiswa.jalur}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Nomor WhatsApp Ortu</span>
                    <span className="font-bold text-slate-800 font-mono">{loggedInSiswa.noWhatsapp}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Nama Orang Tua</span>
                    <span className="font-bold text-slate-800">{loggedInSiswa.namaAyah} / {loggedInSiswa.namaIbu}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Tanggal Terbit KK</span>
                    <span className="font-bold text-slate-800">{loggedInSiswa.tanggalTerbitKK}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">Waktu Pengajuan</span>
                    <span className="font-bold text-slate-800 text-[11px]">{loggedInSiswa.waktuPendaftaran}</span>
                  </div>
                </div>

                {/* Print button */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Cetak Ulang Bukti Pendaftaran</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* ROLE 2: LOGIN & DASHBOARD OPERATOR VERIFIKATOR (M5 Split-Screen) */}
        {/* ========================================================================= */}
        {activeRole === 'operator' && (
          <div>
            {!isOperatorLoggedIn ? (
              /* Operator Login Form */
              <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md space-y-5">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-2">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Login Panitia SPMB Sekolah
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Akses modul verifikasi berkas daring &amp; pemeringkatan pendaftar.
                  </p>
                </div>

                <form onSubmit={handleOperatorLogin} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email Petugas Panitia
                    </label>
                    <input 
                      type="email"
                      value={operatorEmail}
                      onChange={(e) => setOperatorEmail(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Password Petugas
                    </label>
                    <input 
                      type="password"
                      value={operatorPassword}
                      onChange={(e) => setOperatorPassword(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs shadow-md transition"
                  >
                    Masuk ke Panel Verifikator
                  </button>
                </form>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                  <span>Demo Kredensial Pengujian:</span>
                  <p className="font-mono text-slate-700 mt-0.5">Email: <strong>verifikator@smpdarusalah.sch.id</strong></p>
                  <p className="font-mono text-slate-700">Password: <strong>admin123</strong></p>
                </div>
              </div>
            ) : (
              /* Operator Split-Screen Verification Panel (M5 Wireframe) */
              <div className="space-y-6">
                
                {/* Top status bar */}
                <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-wrap justify-between items-center gap-3 text-xs">
                  <div>
                    <span className="bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px]">
                      MODUL VERIFIKASI M5
                    </span>
                    <h3 className="text-base font-extrabold mt-1">
                      Panel Pemeriksaan Berkas Fisik &amp; Digital Calon Murid
                    </h3>
                    <p className="text-slate-400 text-[11px]">
                      Sesuai spesifikasi wireframe M5: Dokumen Scanned di sisi kiri vs Formulir Isian di sisi kanan.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsOperatorLoggedIn(false)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
                  >
                    Logout Petugas
                  </button>
                </div>

                {operatorNotif && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{operatorNotif}</span>
                  </div>
                )}

                {/* Queue Selector Bar */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-slate-700">Pilih Berkas Antrean:</span>
                  {pesertaList.map((p) => {
                    const isSelected = selectedVerifPeserta.noPeserta === p.noPeserta;
                    return (
                      <button
                        key={p.noPeserta}
                        onClick={() => {
                          setSelectedVerifPeserta(p);
                          setCatatanVerif(p.catatanVerifikator || 'Semua berkas lengkap & valid sesuai persyaratan.');
                        }}
                        className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition ${
                          isSelected 
                            ? 'bg-sky-600 text-white shadow' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {p.noPeserta} ({p.namaLengkap.split(' ')[0]})
                      </button>
                    );
                  })}
                </div>

                {/* Split-Screen: Left Doc Scan vs Right Form Data */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs items-start">
                  
                  {/* Sisi Kiri: Scan Dokumen Asli */}
                  <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-sky-600" />
                        PREVIEW DOKUMEN SCANNED (KIRI)
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {selectedVerifPeserta.berkasKK || 'scan_kk.pdf'}
                      </span>
                    </div>

                    {/* Simulated Document Preview */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono space-y-2 text-[11px] leading-relaxed">
                      <div className="text-center border-b border-slate-200 pb-2">
                        <p className="font-bold text-slate-900">REPUBLIK INDONESIA - KARTU KELUARGA</p>
                        <p className="text-[10px] text-slate-500">No. KK: 3507012345678901</p>
                        <p className="text-[10px] text-slate-500">
                          Tanggal Diterbitkan: <strong>{selectedVerifPeserta.tanggalTerbitKK}</strong>
                        </p>
                      </div>

                      <div className="space-y-1">
                        <p>Kepala Keluarga: <strong>{selectedVerifPeserta.namaAyah}</strong></p>
                        <p>Alamat: {selectedVerifPeserta.alamatKK}, RT/RW {selectedVerifPeserta.rtRw}</p>
                        <p>Kelurahan / Kecamatan: {selectedVerifPeserta.kelurahan}, {selectedVerifPeserta.kecamatan}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-200">
                        <p className="font-bold text-slate-900">Daftar Anggota Keluarga Tertera:</p>
                        <p>1. {selectedVerifPeserta.namaAyah} (Kepala Keluarga)</p>
                        <p>2. {selectedVerifPeserta.namaIbu} (Istri)</p>
                        <p className="bg-sky-100 text-sky-900 p-1 rounded font-bold">
                          3. {selectedVerifPeserta.namaLengkap.toUpperCase()} (Anak) - NIK: {selectedVerifPeserta.nik}
                        </p>
                      </div>

                      {/* Automated Check Tag */}
                      <div className="mt-3 p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Flag Sistem: Masa Berlaku KK &gt; 1 Tahun (Terbit {selectedVerifPeserta.tanggalTerbitKK}).</span>
                      </div>
                    </div>
                  </div>

                  {/* Sisi Kanan: Ketikan Formulir & Aksi Petugas */}
                  <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        ISIAN FORMULIR SISWA (KANAN)
                      </span>
                      <span className="text-[10px] font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded uppercase">
                        Jalur {selectedVerifPeserta.jalur}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Nama Calon Murid</span>
                        <span className="font-bold text-slate-800">{selectedVerifPeserta.namaLengkap}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">NIK &amp; NISN</span>
                        <span className="font-bold text-slate-800 font-mono">{selectedVerifPeserta.nik}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Nama Ibu Kandung</span>
                        <span className="font-bold text-slate-800">{selectedVerifPeserta.namaIbu}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg">
                        <span className="text-slate-400 block text-[10px]">Asal SD</span>
                        <span className="font-bold text-slate-800">{selectedVerifPeserta.asalSekolah}</span>
                      </div>
                    </div>

                    {/* Keputusan Verifikasi */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <label className="block font-bold text-slate-700">
                        Pilih Template Catatan Verifikasi:
                      </label>
                      <select 
                        value={templateAlasan}
                        onChange={(e) => handlePilihTemplateAlasan(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="ok">Semua berkas lengkap &amp; valid sesuai persyaratan</option>
                        <option value="kk-buram">Foto KK buram / terpotong tanggal terbitnya</option>
                        <option value="kk-kurang">Masa penerbitan KK kurang dari 1 tahun</option>
                        <option value="nama-beda">Nama orang tua di formulir berbeda dengan akta</option>
                        <option value="sptjm-meterai">SPTJM belum dibubuhi meterai Rp 10.000 asli</option>
                      </select>

                      <textarea 
                        rows={2}
                        value={catatanVerif}
                        onChange={(e) => setCatatanVerif(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => handleEksekusiVerifikasi('PERLU_REVISI')}
                          className="py-2.5 rounded-xl border border-red-300 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs transition"
                        >
                          [ Minta Revisi Berkas ]
                        </button>

                        <button
                          type="button"
                          onClick={() => handleEksekusiVerifikasi('TERVERIFIKASI')}
                          className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition"
                        >
                          [ Setujui &amp; Verifikasi ]
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
