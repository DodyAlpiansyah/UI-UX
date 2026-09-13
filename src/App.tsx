import React, { useState } from 'react';
import { ActiveTab, PesertaSPMB, PengumumanItem, StatusVerifikasi } from './types';
import { INITIAL_PESERTA_LIST, INITIAL_PENGUMUMAN_LIST, INFO_SEKOLAH } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { SchoolProfileSection } from './components/SchoolProfileSection';
import { RegistrationSection } from './components/RegistrationSection';
import { AnnouncementSection } from './components/AnnouncementSection';
import { LoginSection } from './components/LoginSection';
import { StatusCheckModal } from './components/StatusCheckModal';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profil');
  const [pesertaList, setPesertaList] = useState<PesertaSPMB[]>(INITIAL_PESERTA_LIST);
  const [pengumumanList, setPengumumanList] = useState<PengumumanItem[]>(INITIAL_PENGUMUMAN_LIST);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);

  // Add new candidate from registration wizard
  const handleTambahPeserta = (newPeserta: PesertaSPMB) => {
    setPesertaList(prev => [newPeserta, ...prev]);

    // Also inject into announcement list
    const maskedName = newPeserta.namaLengkap.length > 8
      ? newPeserta.namaLengkap.substring(0, 8).toUpperCase() + '****'
      : newPeserta.namaLengkap.toUpperCase() + '****';

    const maskedNik = newPeserta.nik.substring(0, 6) + '****' + newPeserta.nik.substring(12);

    const newPengumuman: PengumumanItem = {
      id: String(Date.now()),
      noPeserta: newPeserta.noPeserta,
      namaMasking: maskedName,
      nikMasking: maskedNik,
      asalSekolah: newPeserta.asalSekolah,
      jalur: newPeserta.jalur,
      parameterSeleksi: newPeserta.rankingScore || 'Dalam Proses Verifikasi',
      status: 'DALAM_PROSES',
      skorRanking: 90
    };

    setPengumumanList(prev => [newPengumuman, ...prev]);
  };

  // Update verification status from operator panel
  const handleUpdateStatusPeserta = (noPeserta: string, status: StatusVerifikasi, catatan: string) => {
    setPesertaList(prev => prev.map(p => {
      if (p.noPeserta === noPeserta) {
        return {
          ...p,
          statusVerifikasi: status,
          catatanVerifikator: catatan,
          statusKelulusan: status === 'TERVERIFIKASI' ? 'LOLOS' : status === 'PERLU_REVISI' ? 'CADANGAN' : 'DALAM_PROSES'
        };
      }
      return p;
    }));

    // Update announcement item status
    setPengumumanList(prev => prev.map(item => {
      if (item.noPeserta === noPeserta) {
        return {
          ...item,
          status: status === 'TERVERIFIKASI' ? 'LOLOS' : status === 'PERLU_REVISI' ? 'CADANGAN' : 'DALAM_PROSES'
        };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-sky-600 selection:text-white">
      
      {/* Primary Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenStatusModal={() => setIsStatusModalOpen(true)} 
      />

      {/* Main Content Areas based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <HomeSection 
            setActiveTab={setActiveTab} 
            onOpenStatusModal={() => setIsStatusModalOpen(true)} 
          />
        )}

        {activeTab === 'profil' && (
          <SchoolProfileSection 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'registrasi' && (
          <RegistrationSection 
            pesertaList={pesertaList}
            onTambahPeserta={handleTambahPeserta}
            onOpenStatusModal={() => setIsStatusModalOpen(true)}
          />
        )}

        {activeTab === 'pengumuman' && (
          <AnnouncementSection 
            pengumumanList={pengumumanList}
            onOpenStatusModal={() => setIsStatusModalOpen(true)}
          />
        )}

        {activeTab === 'login' && (
          <LoginSection 
            pesertaList={pesertaList}
            onUpdateStatusPeserta={handleUpdateStatusPeserta}
          />
        )}
      </main>

      {/* Floating WhatsApp Helpdesk button for parents */}
      <aside aria-label="Bantuan WhatsApp" className="fixed bottom-5 right-5 z-30 no-print">
        <a
          href={`https://wa.me/6281234567890?text=Halo%20Admin%20SPMB%20SMP%20Darussalam,%20saya%20butuh%20bantuan%20pendaftaran%20online`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all group"
          title="Bantuan WhatsApp Panitia SPMB"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">Butuh Bantuan? Chat Panitia</span>
          <span className="sm:hidden">Helpdesk</span>
        </a>
      </aside>

      {/* Status Lookup Quick Modal */}
      <StatusCheckModal 
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        pesertaList={pesertaList}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
