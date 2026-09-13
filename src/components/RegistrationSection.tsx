import React, { useState, useEffect } from 'react';
import { JalurType, PesertaSPMB } from '../types';
import { KUOTA_JALUR_LIST, INFO_SEKOLAH } from '../data/mockData';
import { 
  UserPlus, 
  CheckCircle2, 
  AlertTriangle, 
  Upload, 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Camera, 
  HelpCircle, 
  Download, 
  Calendar, 
  ShieldAlert, 
  Sparkles,
  QrCode,
  Search,
  ExternalLink
} from 'lucide-react';

interface RegistrationSectionProps {
  pesertaList: PesertaSPMB[];
  onTambahPeserta: (peserta: PesertaSPMB) => void;
  onOpenStatusModal: () => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ 
  pesertaList, 
  onTambahPeserta,
  onOpenStatusModal
}) => {
  // Wizard steps: 1: Jalur, 2: Data Siswa, 3: Data Ortu, 4: Berkas, 5: Konfirmasi, 6: Bukti
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedToken, setCopiedToken] = useState<boolean>(false);
  const [registeredResult, setRegisteredResult] = useState<PesertaSPMB | null>(null);

  // Form states
  const [jalur, setJalur] = useState<JalurType>('domisili');
  // Data Siswa
  const [nik, setNik] = useState('');
  const [nisn, setNisn] = useState('');
  const [namaLengkap, setNamaLengkap] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState<'L' | 'P'>('L');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [asalSekolah, setAsalSekolah] = useState('');
  const [agama, setAgama] = useState('Islam');
  // Data Ortu
  const [namaAyah, setNamaAyah] = useState('');
  const [namaIbu, setNamaIbu] = useState('');
  const [pekerjaanOrtu, setPekerjaanOrtu] = useState('');
  const [noWhatsapp, setNoWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [alamatKK, setAlamatKK] = useState('');
  const [rtRw, setRtRw] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [tanggalTerbitKK, setTanggalTerbitKK] = useState('');
  // Khusus jalur
  const [jarakRumah, setJarakRumah] = useState<number>(650);
  const [nilaiRapor, setNilaiRapor] = useState<number>(90.5);
  const [namaPrestasi, setNamaPrestasi] = useState('');
  const [noKip, setNoKip] = useState('');
  const [instansiMutasi, setInstansiMutasi] = useState('');
  // Berkas Simulation
  const [fileKK, setFileKK] = useState<string | null>(null);
  const [fileAkta, setFileAkta] = useState<string | null>(null);
  const [fileSPTJM, setFileSPTJM] = useState<string | null>(null);
  const [fileFoto, setFileFoto] = useState<string | null>(null);
  // Checkbox consent
  const [consent, setConsent] = useState(false);
  // Warning notification
  const [formError, setFormError] = useState<string | null>(null);

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('spmb_registration_draft');
      if (saved) {
        const draft = JSON.parse(saved);
        if (draft.namaLengkap) setNamaLengkap(draft.namaLengkap);
        if (draft.nik) setNik(draft.nik);
        if (draft.nisn) setNisn(draft.nisn);
        if (draft.jalur) setJalur(draft.jalur);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Fill Demo Preset Data for easy PKM presentation / test
  const fillDemoData = () => {
    setJalur('domisili');
    setNik('3507011809130007');
    setNisn('0137788990');
    setNamaLengkap('Kurnia Ananda Pratama');
    setJenisKelamin('L');
    setTempatLahir('Malang');
    setTanggalLahir('2013-09-18');
    setAsalSekolah('SD Negeri 3 Darusalah');
    setAgama('Islam');
    setNamaAyah('Bambang Pratama, S.T.');
    setNamaIbu('Dewi Anggraeni');
    setPekerjaanOrtu('Wiraswasta');
    setNoWhatsapp('081234567899');
    setEmail('kurnia.pratama@gmail.com');
    setAlamatKK('Jl. Darusalah Timur No. 28');
    setRtRw('002/004');
    setKelurahan('Darusalah');
    setKecamatan('Kedungkandang');
    setTanggalTerbitKK('2024-05-10'); // > 1 year valid
    setJarakRumah(720);
    setFileKK('scan_kk_kurnia_ananda.pdf');
    setFileAkta('akta_kelahiran_kurnia.pdf');
    setFileSPTJM('sptjm_bermeterai_kurnia.pdf');
    setFileFoto('pasfoto_kurnia_3x4.jpg');
    setConsent(true);
    setFormError(null);
  };

  // Step Validation
  const validateStep1 = () => {
    return true;
  };

  const validateStep2 = () => {
    if (!nik || nik.length < 16) {
      setFormError('NIK Calon Murid wajib 16 digit angka sesuai Kartu Keluarga.');
      return false;
    }
    if (!nisn || nisn.length < 10) {
      setFormError('NISN wajib 10 digit angka dari sekolah asal SD/MI.');
      return false;
    }
    if (!namaLengkap || !tempatLahir || !tanggalLahir || !asalSekolah) {
      setFormError('Harap lengkapi semua kolom identitas calon murid.');
      return false;
    }
    setFormError(null);
    return true;
  };

  const validateStep3 = () => {
    if (!namaAyah || !namaIbu || !noWhatsapp || !alamatKK || !kelurahan || !kecamatan || !tanggalTerbitKK) {
      setFormError('Harap lengkapi data orang tua, nomor WhatsApp, alamat, dan tanggal terbit KK.');
      return false;
    }
    // Check KK date validity
    const tgl = new Date(tanggalTerbitKK);
    const cutoff = new Date('2025-06-01');
    if (tgl > cutoff && jalur === 'domisili') {
      // warning only, but allow with note
    }
    setFormError(null);
    return true;
  };

  const validateStep4 = () => {
    if (!fileKK || !fileAkta || !fileSPTJM || !fileFoto) {
      setFormError('Harap unggah seluruh dokumen wajib (KK, Akta, SPTJM, Pas Foto). Anda dapat menggunakan tombol simulasi jika belum memiliki file.');
      return false;
    }
    setFormError(null);
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 3 && validateStep3()) {
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 4 && validateStep4()) {
      setCurrentStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setFormError(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setFormError('Anda wajib menyetujui pernyataan keabsahan dokumen dan integritas data.');
      return;
    }

    // Generate unique registration code and token
    const randomNum = Math.floor(100 + Math.random() * 900);
    const prefix = jalur === 'domisili' ? 'DOM' : jalur === 'afirmasi' ? 'AFI' : jalur === 'prestasi' ? 'PRE' : 'MUT';
    const noPeserta = `2026-${prefix}-00${randomNum}`;
    const pinToken = String(Math.floor(100000 + Math.random() * 900000));
    const now = new Date().toLocaleString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }) + ' WIB';

    const newPeserta: PesertaSPMB = {
      noPeserta,
      pinToken,
      nik,
      nisn,
      namaLengkap,
      jenisKelamin,
      tempatLahir,
      tanggalLahir,
      asalSekolah,
      agama,
      namaAyah,
      namaIbu,
      pekerjaanOrtu: pekerjaanOrtu || 'Wiraswasta',
      noWhatsapp,
      email: email || `${namaLengkap.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      alamatKK,
      rtRw: rtRw || '001/001',
      kelurahan,
      kecamatan,
      tanggalTerbitKK,
      jalur,
      jarakRumahMeter: jalur === 'domisili' ? jarakRumah : undefined,
      nilaiRaporRataRata: jalur === 'prestasi' ? nilaiRapor : undefined,
      namaPrestasi: jalur === 'prestasi' ? namaPrestasi : undefined,
      noKipOrDtks: jalur === 'afirmasi' ? noKip : undefined,
      instansiMutasi: jalur === 'mutasi' ? instansiMutasi : undefined,
      berkasKK: fileKK || 'kk_terunggah.pdf',
      berkasAkta: fileAkta || 'akta_terunggah.pdf',
      berkasSPTJM: fileSPTJM || 'sptjm_terunggah.pdf',
      berkasFoto: fileFoto || 'pasfoto_terunggah.jpg',
      statusVerifikasi: 'MENUNGGU',
      catatanVerifikator: 'Berkas berhasil didaftarkan secara daring. Berada dalam antrean pemeriksaan panitia verifikator sekolah (Maksimal 2x24 Jam).',
      statusKelulusan: 'DALAM_PROSES',
      rankingScore: jalur === 'domisili' ? `Jarak: ${jarakRumah} meter` : `Skor: ${nilaiRapor || 90}`,
      waktuPendaftaran: now
    };

    onTambahPeserta(newPeserta);
    setRegisteredResult(newPeserta);
    setCurrentStep(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clear local storage draft
    localStorage.removeItem('spmb_registration_draft');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2500);
  };

  const currentJalurInfo = KUOTA_JALUR_LIST.find(j => j.id === jalur);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Info */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/80 border border-sky-400/40 text-sky-200 text-xs font-semibold">
            <UserPlus className="w-3.5 h-3.5 text-sky-300" />
            <span>Formulir Pendaftaran Online Mandiri</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Registrasi SPMB Online {INFO_SEKOLAH.nama}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Ikuti alur pendaftaran langkah demi langkah di bawah ini. Pastikan seluruh identitas diisi sesuai dokumen resmi kependudukan yang sah.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={fillDemoData}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition"
              title="Isi otomatis data contoh untuk demo tugas PKM"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Isi Contoh Data Demo (Cepat)</span>
            </button>

            <button
              onClick={onOpenStatusModal}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition"
            >
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span>Sudah Daftar? Cek Status Berkas</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Wizard Progress Bar (Tahap 1 - 5) */}
        {currentStep < 6 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm mb-6">
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {[
                { num: 1, label: 'Jalur Seleksi' },
                { num: 2, label: 'Data Siswa' },
                { num: 3, label: 'Data Ortu' },
                { num: 4, label: 'Unggah Berkas' },
                { num: 5, label: 'Konfirmasi' }
              ].map((step) => {
                const isCurrent = currentStep === step.num;
                const isDone = currentStep > step.num;
                return (
                  <div key={step.num} className="flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                        isDone 
                          ? 'bg-emerald-600 text-white shadow-sm' 
                          : isCurrent 
                            ? 'bg-sky-600 text-white ring-4 ring-sky-100 shadow' 
                            : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isDone ? <Check className="w-4 h-4" /> : step.num}
                    </div>
                    <span className={`text-[11px] font-semibold mt-1.5 hidden sm:block ${
                      isCurrent ? 'text-sky-700 font-bold' : isDone ? 'text-slate-800' : 'text-slate-400'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* Visual Line */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
              <div 
                className="bg-sky-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Error Notification Alert */}
        {formError && (
          <div className="bg-red-50 border border-red-300 rounded-2xl p-4 text-red-900 text-xs flex items-start gap-3 shadow-sm mb-6 animate-shake">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-bold block text-sm">Peringatan Validasi:</span>
              <p className="mt-0.5">{formError}</p>
            </div>
          </div>
        )}

        {/* ================= STEP 1: PILIH JALUR SELEKSI ================= */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wide bg-sky-50 px-2.5 py-0.5 rounded">
                Langkah 1 dari 5
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Pilih 1 (Satu) Jalur Pendaftaran
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Pilih jalur seleksi yang paling sesuai dengan kondisi dan dokumen kependudukan calon murid.
              </p>
            </div>

            {/* 4 Jalur Radio Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KUOTA_JALUR_LIST.map((j) => {
                const isSelected = jalur === j.id;
                return (
                  <div
                    key={j.id}
                    onClick={() => setJalur(j.id)}
                    className={`cursor-pointer rounded-2xl p-5 border-2 transition-all ${
                      isSelected 
                        ? 'border-sky-600 bg-sky-50/40 shadow-sm ring-1 ring-sky-600' 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${j.warnaBadge}`}>
                          KUOTA {j.persentase}% ({j.kuotaTotal} Kursi)
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-1.5">
                          {j.nama}
                        </h3>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {j.deskripsi}
                    </p>

                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                      <p className="font-semibold text-slate-700">Syarat Kunci:</p>
                      {j.syaratUtama.slice(0, 2).map((syarat, idx) => (
                        <p key={idx}>• {syarat}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Parameter Khusus Berdasarkan Jalur yang Dipilih */}
            {currentJalurInfo && (
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-3">
                <span className="font-bold text-slate-900 block">
                  Detail Tambahan Jalur {currentJalurInfo.nama}:
                </span>

                {jalur === 'domisili' && (
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">
                      Perkiraan Jarak Rumah ke SMP Darusalah (dalam meter):
                    </label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="range" 
                        min="100" 
                        max="3500" 
                        step="50"
                        value={jarakRumah}
                        onChange={(e) => setJarakRumah(Number(e.target.value))}
                        className="flex-1 accent-sky-600 cursor-pointer"
                      />
                      <span className="font-mono font-bold text-sky-700 bg-white px-3 py-1 rounded-lg border border-slate-200 text-xs">
                        {jarakRumah} meter ({(jarakRumah / 1000).toFixed(2)} km)
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      *Jarak akan diverifikasi secara akurat oleh tim verifikator berdasarkan titik koordinat Kartu Keluarga.
                    </p>
                  </div>
                )}

                {jalur === 'afirmasi' && (
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">
                      Nomor Kartu Indonesia Pintar (KIP) / ID DTKS Kemensos:
                    </label>
                    <input 
                      type="text"
                      value={noKip}
                      onChange={(e) => setNoKip(e.target.value)}
                      placeholder="Contoh: KIP-2024-35070199 atau ID DTKS"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                    <p className="text-[10px] text-slate-500">
                      *SKTM kelurahan dan BPJS tidak dapat digunakan sebagai pengganti KIP/DTKS.
                    </p>
                  </div>
                )}

                {jalur === 'prestasi' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Rata-rata Nilai Rapor 5 Semester (Skala 0 - 100):
                      </label>
                      <input 
                        type="number"
                        min="70"
                        max="100"
                        step="0.1"
                        value={nilaiRapor}
                        onChange={(e) => setNilaiRapor(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Nama Kejuaraan / Piagam Tambahan (Bila Ada):
                      </label>
                      <input 
                        type="text"
                        value={namaPrestasi}
                        onChange={(e) => setNamaPrestasi(e.target.value)}
                        placeholder="Contoh: Juara 1 OSN IPA Tk. Kota"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {jalur === 'mutasi' && (
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700">
                      Nama Instansi / Perusahaan Penugasan Orang Tua:
                    </label>
                    <input 
                      type="text"
                      value={instansiMutasi}
                      onChange={(e) => setInstansiMutasi(e.target.value)}
                      placeholder="Contoh: Kantor Wilayah BUMN / TNI-Polri / Dinas Provinsi"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow transition"
              >
                <span>Lanjut ke Data Calon Murid</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: DATA CALON MURID ================= */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 flex justify-between items-center">
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wide bg-sky-50 px-2.5 py-0.5 rounded">
                  Langkah 2 dari 5
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">
                  Data Identitas Calon Murid
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Isi data calon siswa sesuai dengan Akta Kelahiran dan Kartu Keluarga (KK).
                </p>
              </div>
              <span className="text-xs text-slate-500 hidden sm:block">
                Jalur: <strong className="text-sky-700 capitalize">{jalur}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  NIK Calon Murid (16 Digit) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  maxLength={16}
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
                  placeholder="Contoh: 3507010405130003"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">Tercantum pada baris nama anak di Kartu Keluarga.</p>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  NISN dari SD/MI Asal (10 Digit) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  maxLength={10}
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value.replace(/\D/g, ''))}
                  placeholder="Contoh: 0134567890"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">Dapat dilihat pada rapor SD atau ijazah.</p>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1">
                  Nama Lengkap Calon Murid (Sesuai Akta Kelahiran) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  placeholder="Nama lengkap anak tanpa singkatan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Jenis Kelamin <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="jk" 
                      checked={jenisKelamin === 'L'} 
                      onChange={() => setJenisKelamin('L')}
                      className="accent-sky-600"
                    />
                    <span>Laki-Laki</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="jk" 
                      checked={jenisKelamin === 'P'} 
                      onChange={() => setJenisKelamin('P')}
                      className="accent-sky-600"
                    />
                    <span>Perempuan</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Agama <span className="text-red-500">*</span>
                </label>
                <select
                  value={agama}
                  onChange={(e) => setAgama(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Islam">Islam</option>
                  <option value="Kristen">Kristen</option>
                  <option value="Katolik">Katolik</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddha">Buddha</option>
                  <option value="Khonghucu">Khonghucu</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Tempat Lahir <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                  placeholder="Kota / Kabupaten Kelahiran"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Tanggal Lahir <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date"
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">Maksimal berusia 15 tahun per 1 Juli 2026.</p>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1">
                  Asal Sekolah Dasar (SD / MI) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={asalSekolah}
                  onChange={(e) => setAsalSekolah(e.target.value)}
                  placeholder="Contoh: SDN 1 Darusalah / SDIT Al-Ihsan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow transition"
              >
                <span>Lanjut ke Data Orang Tua</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: DATA ORANG TUA & DOMISILI ================= */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wide bg-sky-50 px-2.5 py-0.5 rounded">
                Langkah 3 dari 5
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Data Orang Tua &amp; Alamat Domisili Sesuai KK
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Pastikan nama orang tua sama persis dengan yang tertera pada Kartu Keluarga dan Akta Kelahiran.
              </p>
            </div>

            {/* Fraud alert banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-900 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Ketentuan Integritas Dokumen (Permendikdasmen No. 3/2025):</span>
                <p className="mt-0.5 text-[11px]">
                  Penerbitan Kartu Keluarga minimal telah berusia 1 tahun (diterbitkan sebelum 1 Juni 2025). Jika KK baru diterbitkan karena penambahan anggota keluarga atau pindah pecah KK, wajib menyertakan surat keterangan dari Dispendukcapil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nama Ayah Kandung / Wali <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={namaAyah}
                  onChange={(e) => setNamaAyah(e.target.value)}
                  placeholder="Nama lengkap ayah"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nama Ibu Kandung <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={namaIbu}
                  onChange={(e) => setNamaIbu(e.target.value)}
                  placeholder="Nama lengkap ibu kandung"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Pekerjaan Orang Tua / Wali
                </label>
                <input 
                  type="text"
                  value={pekerjaanOrtu}
                  onChange={(e) => setPekerjaanOrtu(e.target.value)}
                  placeholder="Contoh: Karyawan Swasta / Wiraswasta / PNS"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nomor WhatsApp Aktif Wali <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel"
                  value={noWhatsapp}
                  onChange={(e) => setNoWhatsapp(e.target.value.replace(/\D/g, ''))}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">Sangat penting untuk menerima notifikasi status verifikasi.</p>
              </div>

              <div className="sm:col-span-2">
                <label className="block font-bold text-slate-700 mb-1">
                  Alamat Lengkap Sesuai Kartu Keluarga (KK) <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={2}
                  value={alamatKK}
                  onChange={(e) => setAlamatKK(e.target.value)}
                  placeholder="Nama jalan, gang, nomor rumah"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none text-xs"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  RT / RW <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={rtRw}
                  onChange={(e) => setRtRw(e.target.value)}
                  placeholder="Contoh: 003/005"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Kelurahan / Desa <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={kelurahan}
                  onChange={(e) => setKelurahan(e.target.value)}
                  placeholder="Nama kelurahan tempat tinggal"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Kecamatan <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  value={kecamatan}
                  onChange={(e) => setKecamatan(e.target.value)}
                  placeholder="Nama kecamatan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Tanggal Diterbitkan Kartu Keluarga (KK) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date"
                  value={tanggalTerbitKK}
                  onChange={(e) => setTanggalTerbitKK(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-500 mt-1">
                  Batas tanggal minimal: terbit sebelum <strong>01 Juni 2025</strong> (&ge; 1 tahun).
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow transition"
              >
                <span>Lanjut ke Unggah Berkas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 4: UNGGAH BERKAS PERSYARATAN ================= */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 flex flex-wrap justify-between items-center gap-2">
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wide bg-sky-50 px-2.5 py-0.5 rounded">
                  Langkah 4 dari 5
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">
                  Unggah Dokumen Persyaratan Digital
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Foto dokumen asli menggunakan smartphone atau scan file PDF (Maksimal 2 MB per file).
                </p>
              </div>

              {/* Download SPTJM format button */}
              <button
                type="button"
                onClick={() => alert('Mengunduh Format SPTJM (Surat Pernyataan Tanggung Jawab Mutlak) Bermeterai Rp 10.000...')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs hover:bg-sky-100 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Format SPTJM (DOCX)</span>
              </button>
            </div>

            {/* Tips for parents unfamiliar with uploading */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-700 space-y-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-sky-600" />
                Tips Mengambil Foto Dokumen dari Smartphone:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-600">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Letakkan dokumen di tempat terang dan rata (meja).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pastikan tulisan, tanda tangan, dan stempel terbaca jelas.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Jangan sampai tanggal terbit KK terpotong frame kamera.</span>
                </li>
              </ul>
            </div>

            {/* 4 File Upload Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* File 1: KK */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-sky-300 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      1. Scan / Foto Kartu Keluarga (KK) <span className="text-red-500">*</span>
                    </h4>
                    <p className="text-[10px] text-slate-400">Asli &amp; terbit min. 1 tahun</p>
                  </div>
                  {fileKK && <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Terunggah</span>}
                </div>
                <div className="mt-2">
                  <input 
                    type="file" 
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileKK(e.target.files[0].name);
                      }
                    }}
                    className="text-[11px] w-full cursor-pointer text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                  />
                </div>
                {fileKK && (
                  <p className="text-[10px] text-slate-500 mt-2 font-mono truncate">
                    File: {fileKK}
                  </p>
                )}
              </div>

              {/* File 2: Akta */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-sky-300 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      2. Scan / Foto Akta Kelahiran <span className="text-red-500">*</span>
                    </h4>
                    <p className="text-[10px] text-slate-400">Asli untuk validasi usia anak</p>
                  </div>
                  {fileAkta && <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Terunggah</span>}
                </div>
                <div className="mt-2">
                  <input 
                    type="file" 
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileAkta(e.target.files[0].name);
                      }
                    }}
                    className="text-[11px] w-full cursor-pointer text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                  />
                </div>
                {fileAkta && (
                  <p className="text-[10px] text-slate-500 mt-2 font-mono truncate">
                    File: {fileAkta}
                  </p>
                )}
              </div>

              {/* File 3: SPTJM */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-sky-300 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      3. SPTJM Bermeterai Rp 10.000 <span className="text-red-500">*</span>
                    </h4>
                    <p className="text-[10px] text-slate-400">Pernyataan keabsahan dokumen</p>
                  </div>
                  {fileSPTJM && <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Terunggah</span>}
                </div>
                <div className="mt-2">
                  <input 
                    type="file" 
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileSPTJM(e.target.files[0].name);
                      }
                    }}
                    className="text-[11px] w-full cursor-pointer text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                  />
                </div>
                {fileSPTJM && (
                  <p className="text-[10px] text-slate-500 mt-2 font-mono truncate">
                    File: {fileSPTJM}
                  </p>
                )}
              </div>

              {/* File 4: Pas Foto */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-sky-300 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      4. Pas Foto Berwarna Siswa 3x4 <span className="text-red-500">*</span>
                    </h4>
                    <p className="text-[10px] text-slate-400">Seragam SD latar merah/biru</p>
                  </div>
                  {fileFoto && <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Terunggah</span>}
                </div>
                <div className="mt-2">
                  <input 
                    type="file" 
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileFoto(e.target.files[0].name);
                      }
                    }}
                    className="text-[11px] w-full cursor-pointer text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                  />
                </div>
                {fileFoto && (
                  <p className="text-[10px] text-slate-500 mt-2 font-mono truncate">
                    File: {fileFoto}
                  </p>
                )}
              </div>

            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-2 shadow transition"
              >
                <span>Lanjut ke Review &amp; Konfirmasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 5: REVIEW & KONFIRMASI ================= */}
        {currentStep === 5 && (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wide bg-sky-50 px-2.5 py-0.5 rounded">
                Langkah 5 dari 5
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Periksa Kembali Ringkasan Pendaftaran
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Pastikan data tidak ada yang salah ketik sebelum formulir resmi dikirimkan ke sistem panitia sekolah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-xs block border-b border-slate-200 pb-1">
                  1. Jalur &amp; Identitas Siswa
                </span>
                <p><span className="text-slate-500">Jalur Seleksi:</span> <strong className="uppercase text-sky-700">{jalur}</strong></p>
                <p><span className="text-slate-500">Nama Siswa:</span> <strong>{namaLengkap}</strong></p>
                <p><span className="text-slate-500">NIK:</span> <span className="font-mono">{nik}</span></p>
                <p><span className="text-slate-500">NISN:</span> <span className="font-mono">{nisn}</span></p>
                <p><span className="text-slate-500">Tempat, Tgl Lahir:</span> {tempatLahir}, {tanggalLahir}</p>
                <p><span className="text-slate-500">Asal SD:</span> {asalSekolah}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-xs block border-b border-slate-200 pb-1">
                  2. Data Orang Tua &amp; Kontak
                </span>
                <p><span className="text-slate-500">Nama Ayah:</span> {namaAyah}</p>
                <p><span className="text-slate-500">Nama Ibu:</span> {namaIbu}</p>
                <p><span className="text-slate-500">WhatsApp:</span> <strong className="font-mono text-emerald-700">{noWhatsapp}</strong></p>
                <p><span className="text-slate-500">Alamat KK:</span> {alamatKK}, RT/RW {rtRw}</p>
                <p><span className="text-slate-500">Kel/Kec:</span> {kelurahan}, {kecamatan}</p>
                <p><span className="text-slate-500">Tgl Terbit KK:</span> {tanggalTerbitKK}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 md:col-span-2">
                <span className="font-bold text-slate-900 text-xs block border-b border-slate-200 pb-1">
                  3. Berkas Digital yang Disertakan
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] pt-1">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">KK: {fileKK}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Akta: {fileAkta}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">SPTJM: {fileSPTJM}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Pas Foto: {fileFoto}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Checkbox consent */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex items-start gap-3">
              <input 
                type="checkbox"
                id="consent-check"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded text-sky-600 focus:ring-sky-500 h-4 w-4"
                required
              />
              <label htmlFor="consent-check" className="text-xs text-slate-700 leading-snug cursor-pointer">
                <strong>Pernyataan Integritas &amp; Kebenaran Data:</strong> <br />
                Saya selaku orang tua/wali menyatakan bahwa seluruh data yang diisikan dan dokumen yang diunggah adalah <strong>benar, sah, dan dapat dipertanggungjawabkan</strong> sesuai UU PDP No. 27/2022 dan Permendikdasmen No. 3/2025. Apabila di kemudian hari ditemukan pemalsuan data, kami bersedia menerima sanksi pembatalan status penerimaan murid baru.
              </label>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-2 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Kirim Pendaftaran &amp; Terbitkan Kartu</span>
              </button>
            </div>
          </form>
        )}

        {/* ================= STEP 6: KARTU PESERTA RESMI (TANDA BUKTI AKHIR) ================= */}
        {currentStep === 6 && registeredResult && (
          <div className="space-y-6">
            
            {/* Success notification banner */}
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 text-emerald-950 flex items-start gap-3 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-extrabold text-base">
                  Pendaftaran SPMB Berhasil Dikirimkan!
                </h3>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Tanda Bukti Pendaftaran telah diterbitkan secara resmi oleh sistem. Harap simpan <strong>Nomor Peserta</strong> dan <strong>PIN Token</strong> Anda untuk keperluan login dan pemantauan hasil seleksi.
                </p>
              </div>
            </div>

            {/* Printable Slip Card */}
            <div 
              id="printable-slip" 
              className="bg-white rounded-2xl border-2 border-slate-800 p-6 sm:p-8 shadow-xl relative"
            >
              {/* Header Slip */}
              <div className="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center font-bold">
                    <QrCode className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                      KARTU TANDA BUKTI PENDAFTARAN SPMB
                    </h2>
                    <p className="text-xs font-semibold text-sky-800">
                      {INFO_SEKOLAH.nama} • TAHUN PELAJARAN {INFO_SEKOLAH.tahunAjaran}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      NPSN: {INFO_SEKOLAH.npsn} • {INFO_SEKOLAH.alamat}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1 rounded border border-emerald-300 inline-block">
                    STATUS: TERDAFTAR
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">Dokumen Sah Digital</p>
                </div>
              </div>

              {/* Card Body Information */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-xs">
                
                {/* Left: Identitas Resmi */}
                <div className="md:col-span-8 space-y-2.5">
                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">Nomor Peserta</span>
                    <span className="col-span-2 font-mono font-extrabold text-base text-sky-900">
                      {registeredResult.noPeserta}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">Nama Calon Siswa</span>
                    <span className="col-span-2 font-bold text-slate-900 uppercase">
                      {registeredResult.namaLengkap}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">NIK / NISN</span>
                    <span className="col-span-2 font-mono text-slate-800">
                      {registeredResult.nik} / {registeredResult.nisn}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">Tempat, Tgl Lahir</span>
                    <span className="col-span-2 text-slate-800">
                      {registeredResult.tempatLahir}, {registeredResult.tanggalLahir}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">Asal Sekolah SD</span>
                    <span className="col-span-2 text-slate-800">
                      {registeredResult.asalSekolah}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">Nama Orang Tua / Wali</span>
                    <span className="col-span-2 text-slate-800">
                      {registeredResult.namaAyah} / {registeredResult.namaIbu}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1 border-b border-slate-100">
                    <span className="text-slate-500">Jalur Pendaftaran</span>
                    <span className="col-span-2 font-bold uppercase text-sky-800">
                      Jalur {registeredResult.jalur} {registeredResult.rankingScore ? `(${registeredResult.rankingScore})` : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-1">
                    <span className="text-slate-500">Waktu Pendaftaran</span>
                    <span className="col-span-2 text-slate-600 font-mono text-[11px]">
                      {registeredResult.waktuPendaftaran}
                    </span>
                  </div>
                </div>

                {/* Right: Secret PIN & Barcode Box */}
                <div className="md:col-span-4 flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="space-y-2 text-center">
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded uppercase">
                      KODE PIN / TOKEN RAHASIA
                    </span>
                    <p className="font-mono text-2xl font-extrabold text-amber-600 tracking-widest pt-1">
                      {registeredResult.pinToken}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      Gunakan PIN ini bersama Nomor Peserta untuk login ke dashboard siswa &amp; cek status.
                    </p>
                  </div>

                  {/* QR Box Visual */}
                  <div className="my-3 p-3 bg-white rounded-xl border border-slate-300 flex flex-col items-center text-center">
                    <QrCode className="w-16 h-16 text-slate-800 mb-1" />
                    <span className="text-[9px] font-mono text-slate-400">VERIFIKASI SISTEM SPMB</span>
                  </div>

                  <div className="text-[10px] text-slate-500 text-center">
                    Posko Pelayanan: Ruang PTSP SPMB SMP Darusalah
                  </div>
                </div>

              </div>

              {/* Footer Slip Rules */}
              <div className="mt-5 pt-3 border-t border-slate-200 text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
                <span>
                  *Simpan kartu ini sebagai bukti resmi. Panitia akan memverifikasi berkas dalam 1x24 jam kerja.
                </span>
                <span className="font-semibold text-slate-700">
                  Tahun Pelajaran {INFO_SEKOLAH.tahunAjaran}
                </span>
              </div>
            </div>

            {/* Action Bar (No Print) */}
            <div className="flex flex-wrap justify-end gap-3 no-print">
              <button
                type="button"
                onClick={() => copyToClipboard(`No Peserta: ${registeredResult.noPeserta} | PIN: ${registeredResult.pinToken}`)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition"
              >
                {copiedToken ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copiedToken ? 'Disalin ke Clipboard!' : 'Salin No & Token'}</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow transition"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Kartu Peserta (PDF / Print)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setRegisteredResult(null);
                }}
                className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition"
              >
                <span>Daftarkan Siswa Lain</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
