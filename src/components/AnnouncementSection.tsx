import React, { useState } from 'react';
import { PengumumanItem, JalurType, StatusKelulusan } from '../types';
import { INFO_SEKOLAH } from '../data/mockData';
import { 
  Megaphone, 
  Search, 
  FileDown, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Calendar, 
  Filter, 
  Printer, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

interface AnnouncementSectionProps {
  pengumumanList: PengumumanItem[];
  onOpenStatusModal: () => void;
}

export const AnnouncementSection: React.FC<AnnouncementSectionProps> = ({ 
  pengumumanList,
  onOpenStatusModal
}) => {
  const [selectedJalur, setSelectedJalur] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [showSKModal, setShowSKModal] = useState<boolean>(false);

  // Filter list
  const filteredData = pengumumanList.filter((item) => {
    const matchJalur = selectedJalur === 'all' || item.jalur === selectedJalur;
    const matchStatus = selectedStatus === 'all' || item.status === selectedStatus;
    const keyword = searchKeyword.toLowerCase();
    const matchSearch = 
      !keyword || 
      item.namaMasking.toLowerCase().includes(keyword) || 
      item.noPeserta.toLowerCase().includes(keyword) ||
      item.asalSekolah.toLowerCase().includes(keyword);

    return matchJalur && matchStatus && matchSearch;
  });

  const countLolos = pengumumanList.filter(p => p.status === 'LOLOS').length;
  const countCadangan = pengumumanList.filter(p => p.status === 'CADANGAN').length;
  const countTidakLolos = pengumumanList.filter(p => p.status === 'TIDAK_LOLOS').length;

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/80 border border-sky-400/40 text-sky-200 text-xs font-semibold">
            <Megaphone className="w-3.5 h-3.5 text-amber-300" />
            <span>Transparansi Sesuai Permendikdasmen No. 3/2025 Pasal 49</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Pengumuman Hasil Seleksi SPMB TP {INFO_SEKOLAH.tahunAjaran}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Daftar resmi penetapan hasil seleksi penerimaan murid baru {INFO_SEKOLAH.nama}. Seluruh data NIK dan nama calon siswa disensor demi kepatuhan UU No. 27/2022 tentang Perlindungan Data Pribadi (PDP).
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-2 text-xs">
            <button
              onClick={() => setShowSKModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow transition"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Unduh SK Penetapan Kelulusan (PDF)</span>
            </button>

            <button
              onClick={onOpenStatusModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition"
            >
              <Search className="w-3.5 h-3.5 text-sky-400" />
              <span>Cek Status Pribadi via No. Peserta</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Metric Overview Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-[11px] text-slate-500 font-medium">Total Terdata</span>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">{pengumumanList.length}</p>
            <span className="text-[10px] text-slate-400">Calon Murid</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm text-center">
            <span className="text-[11px] text-emerald-700 font-bold">Dinyatakan LOLOS</span>
            <p className="text-xl sm:text-2xl font-extrabold text-emerald-600 mt-0.5">{countLolos}</p>
            <span className="text-[10px] text-emerald-700">Lanjut Daftar Ulang</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm text-center">
            <span className="text-[11px] text-amber-800 font-bold">CADANGAN / SANGGAH</span>
            <p className="text-xl sm:text-2xl font-extrabold text-amber-600 mt-0.5">{countCadangan}</p>
            <span className="text-[10px] text-amber-700">Masa Sanggah 2x24 Jam</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
            <span className="text-[11px] text-slate-500 font-medium">TIDAK LOLOS</span>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-600 mt-0.5">{countTidakLolos}</p>
            <span className="text-[10px] text-slate-400">Melampaui Batas Kuota</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          
          {/* Jalur Filter */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedJalur('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                selectedJalur === 'all' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semua Jalur
            </button>
            <button
              onClick={() => setSelectedJalur('domisili')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                selectedJalur === 'domisili' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Domisili (50%)
            </button>
            <button
              onClick={() => setSelectedJalur('afirmasi')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                selectedJalur === 'afirmasi' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Afirmasi (20%)
            </button>
            <button
              onClick={() => setSelectedJalur('prestasi')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                selectedJalur === 'prestasi' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Prestasi (25%)
            </button>
            <button
              onClick={() => setSelectedJalur('mutasi')}
              className={`px-3 py-1.5 rounded-lg font-bold transition ${
                selectedJalur === 'mutasi' ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Mutasi (5%)
            </button>
          </div>

          {/* Search box & Status filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700 focus:ring-2 focus:ring-sky-500 focus:outline-none"
            >
              <option value="all">Semua Status</option>
              <option value="LOLOS">Hanya Lolos</option>
              <option value="CADANGAN">Cadangan / Sanggah</option>
              <option value="TIDAK_LOLOS">Tidak Lolos</option>
            </select>

            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Cari nama / no. peserta..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold uppercase border-b border-slate-200">
                <tr>
                  <th className="p-3.5">No. Peserta</th>
                  <th className="p-3.5">Nama Calon Siswa (Sensor)</th>
                  <th className="p-3.5">NIK Masking</th>
                  <th className="p-3.5">Asal Sekolah SD</th>
                  <th className="p-3.5">Jalur</th>
                  <th className="p-3.5">Parameter / Skor Seleksi</th>
                  <th className="p-3.5 text-center">Status Kelulusan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-500">
                      Tidak ditemukan calon siswa yang sesuai dengan filter atau kata kunci pencarian.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item) => {
                    let statusBadge = (
                      <span className="px-2.5 py-1 rounded-full font-extrabold text-[10px] bg-slate-100 text-slate-600 border border-slate-200">
                        TIDAK LOLOS
                      </span>
                    );
                    if (item.status === 'LOLOS') {
                      statusBadge = (
                        <span className="px-2.5 py-1 rounded-full font-extrabold text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300">
                          LOLOS
                        </span>
                      );
                    } else if (item.status === 'CADANGAN') {
                      statusBadge = (
                        <span className="px-2.5 py-1 rounded-full font-extrabold text-[10px] bg-amber-100 text-amber-800 border border-amber-300">
                          CADANGAN / SANGGAH
                        </span>
                      );
                    }

                    return (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-sky-900">
                          {item.noPeserta}
                        </td>
                        <td className="p-3.5 font-bold text-slate-900">
                          {item.namaMasking}
                        </td>
                        <td className="p-3.5 font-mono text-slate-500">
                          {item.nikMasking}
                        </td>
                        <td className="p-3.5 text-slate-600">
                          {item.asalSekolah}
                        </td>
                        <td className="p-3.5">
                          <span className="text-[10px] uppercase font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            {item.jalur}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-700 font-medium">
                          {item.parameterSeleksi}
                        </td>
                        <td className="p-3.5 text-center">
                          {statusBadge}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informasi Tahap Selanjutnya: Daftar Ulang & Masa Sanggah */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Card Daftar Ulang */}
          <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Petunjuk Bagi yang Dinyatakan LOLOS</span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Selamat bagi calon murid yang dinyatakan LOLOS. Silakan melakukan proses <strong>Daftar Ulang</strong> pada tanggal <strong>29 Juni - 03 Juli 2026</strong> (08.00 - 14.00 WIB) di Ruang Panitia SPMB {INFO_SEKOLAH.nama}.
            </p>
            <ul className="text-[11px] text-emerald-800 space-y-1 pt-1 border-t border-emerald-200">
              <li>• Membawa Kartu Tanda Bukti Pendaftaran asli (telah dicetak).</li>
              <li>• Membawa fotokopi KK &amp; Akta Kelahiran yang telah dilegalisir / asli.</li>
              <li>• Mengisi formulir biodata induk dan pengukuran seragam sekolah.</li>
            </ul>
          </div>

          {/* Card Masa Sanggah */}
          <div className="bg-amber-50/60 rounded-2xl border border-amber-200 p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>Layanan Masa Sanggah 2x24 Jam</span>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              Bagi calon murid yang berstatus <strong>CADANGAN</strong> atau berkas terdapat kendala administratif (misal verifikasi KK &lt; 1 tahun atau nama akta), panitia membuka masa sanggah resmi selama <strong>2x24 jam kerja (27 - 28 Juni 2026)</strong>.
            </p>
            <ul className="text-[11px] text-amber-800 space-y-1 pt-1 border-t border-amber-200">
              <li>• Bawa surat keterangan resmi dari Dispendukcapil jika ada pembaharuan KK.</li>
              <li>• Atau hubungi Helpdesk WhatsApp panitia: <strong>{INFO_SEKOLAH.whatsappHelpdesk}</strong></li>
              <li>• Sanggahan yang diterima akan dimasukkan ke perankingan ulang kuota sisa.</li>
            </ul>
          </div>

        </div>

      </div>

      {/* SK Download Preview Modal */}
      {showSKModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">
                  Surat Keputusan (SK) Hasil Seleksi SPMB
                </h3>
                <p className="text-xs text-slate-500">
                  Nomor: 421.3 / 184 / SPMB / SMP-DRS / VI / 2026
                </p>
              </div>
              <button 
                onClick={() => setShowSKModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-3 text-slate-700 leading-relaxed">
              <p>
                Kepala {INFO_SEKOLAH.nama}, menimbang hasil seleksi verifikasi dokumen kependudukan, pemeringkatan jarak domisili zonasi, afirmasi keluarga tidak mampu, prestasi akademik, serta mutasi kedinasan orang tua, dengan ini menetapkan:
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">
                  1. Mengesahkan nama-nama calon murid yang tercantum dalam Lampiran I Surat Keputusan ini sebagai Murid Baru Kelas VII TP {INFO_SEKOLAH.tahunAjaran}.
                </p>
                <p>
                  2. Calon murid yang berstatus LOLOS wajib melakukan daftar ulang selambat-lambatnya 03 Juli 2026 pukul 14.00 WIB.
                </p>
                <p>
                  3. Keputusan ini bersifat final dan mengikat sesuai Permendikdasmen No. 3/2025.
                </p>
              </div>

              <div className="pt-4 flex justify-between items-center text-[11px] text-slate-500">
                <span>Ditetapkan di: Kota Malang</span>
                <div className="text-right">
                  <p>Kepala {INFO_SEKOLAH.nama}</p>
                  <p className="font-bold text-slate-900 mt-8">{INFO_SEKOLAH.kepalaSekolah}</p>
                  <p>NIP. 19740514 199903 1 002</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setShowSKModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  window.print();
                  setShowSKModal(false);
                }}
                className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1.5 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Salinan SK (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
