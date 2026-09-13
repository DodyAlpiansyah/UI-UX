import React, { useState } from 'react';
import { PesertaSPMB } from '../types';
import { 
  Search, 
  X, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Printer, 
  FileText,
  ArrowRight
} from 'lucide-react';

interface StatusCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  pesertaList: PesertaSPMB[];
}

export const StatusCheckModal: React.FC<StatusCheckModalProps> = ({ 
  isOpen, 
  onClose,
  pesertaList 
}) => {
  const [keyword, setKeyword] = useState<string>('2026-DOM-00128');
  const [searchResult, setSearchResult] = useState<PesertaSPMB | null>(pesertaList[0]);
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = keyword.trim().toLowerCase();
    const found = pesertaList.find(
      p => p.noPeserta.toLowerCase() === query || p.nik.includes(query)
    );
    setSearchResult(found || null);
    setHasSearched(true);
  };

  const handleSelectPreset = (no: string) => {
    setKeyword(no);
    const found = pesertaList.find(p => p.noPeserta === no);
    setSearchResult(found || null);
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 max-h-[90vh] overflow-y-auto">
        
        {/* Header Modal */}
        <div className="flex justify-between items-start border-b border-slate-100 pb-3">
          <div>
            <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded uppercase">
              Layanan Cek Mandiri
            </span>
            <h3 className="font-extrabold text-slate-900 text-lg mt-1">
              Cek Status Pendaftaran &amp; Verifikasi Berkas
            </h3>
            <p className="text-xs text-slate-500">
              Pantau status verifikasi dokumen tanpa perlu login penuh.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <input 
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Masukkan Nomor Peserta (Contoh: 2026-DOM-00128) atau NIK"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-sky-500 focus:outline-none"
              required
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow transition"
          >
            Cari Status
          </button>
        </form>

        {/* Preset chips for fast testing */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
          <span>Preset simulasi:</span>
          <button 
            type="button"
            onClick={() => handleSelectPreset('2026-DOM-00128')}
            className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold hover:bg-emerald-200"
          >
            #00128 (Terverifikasi)
          </button>
          <button 
            type="button"
            onClick={() => handleSelectPreset('2026-DOM-00042')}
            className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold hover:bg-red-200"
          >
            #00042 (Perlu Sanggah)
          </button>
          <button 
            type="button"
            onClick={() => handleSelectPreset('2026-DOM-00095')}
            className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold hover:bg-amber-200"
          >
            #00095 (Menunggu)
          </button>
        </div>

        {/* Search Results Display */}
        {hasSearched && (
          <div>
            {searchResult ? (
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 text-xs">
                <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900">
                      {searchResult.namaLengkap}
                    </h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">
                      No. Peserta: <strong className="font-mono text-sky-800">{searchResult.noPeserta}</strong> • Asal SD: {searchResult.asalSekolah}
                    </p>
                  </div>

                  <div>
                    {searchResult.statusVerifikasi === 'TERVERIFIKASI' && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        BERKAS TERVERIFIKASI
                      </span>
                    )}
                    {searchResult.statusVerifikasi === 'PERLU_REVISI' && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-red-100 text-red-800 border border-red-300">
                        PERLU REVISI / SANGGAH
                      </span>
                    )}
                    {searchResult.statusVerifikasi === 'MENUNGGU' && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
                        MENUNGGU VERIFIKATOR
                      </span>
                    )}
                  </div>
                </div>

                {/* Status Timeline Mini */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[9px]">1. Pendaftaran</span>
                    <span className="font-bold text-emerald-700">Lengkap</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[9px]">2. Verifikasi Berkas</span>
                    <span className="font-bold text-slate-800">
                      {searchResult.statusVerifikasi === 'TERVERIFIKASI' ? 'Disetujui' : searchResult.statusVerifikasi === 'PERLU_REVISI' ? 'Perlu Sanggah' : 'Diproses'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[9px]">3. Jalur Seleksi</span>
                    <span className="font-bold uppercase text-sky-700">{searchResult.jalur}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-400 block text-[9px]">4. Pengumuman Akhir</span>
                    <span className="font-bold text-slate-800">27 Juni 2026</span>
                  </div>
                </div>

                {/* Catatan Verifikator */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">
                    Catatan Tim Verifikator Panitia:
                  </span>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    {searchResult.catatanVerifikator || 'Berkas Anda sedang menunggu verifikasi oleh petugas loket daring.'}
                  </p>
                </div>

                <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                  <span>Waktu Daftar: {searchResult.waktuPendaftaran}</span>
                  <button
                    onClick={() => {
                      onClose();
                      window.print();
                    }}
                    className="font-bold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Cetak Lembar Status</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="font-bold text-slate-800">Nomor Peserta / NIK Tidak Ditemukan</p>
                <p className="mt-1">
                  Pastikan nomor yang Anda ketikkan sesuai dengan bukti pendaftaran atau lakukan registrasi akun baru terlebih dahulu.
                </p>
              </div>
            )}
          </div>
        )}

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
