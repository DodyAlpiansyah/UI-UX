import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { INFO_SEKOLAH } from '../data/mockData';
import { 
  GraduationCap, 
  Home, 
  School, 
  UserPlus, 
  Megaphone, 
  LogIn, 
  Menu, 
  X, 
  Search
} from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenStatusModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenStatusModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
    { id: 'profil', label: 'Profil Sekolah', icon: <School className="w-4 h-4" /> },
    { id: 'registrasi', label: 'Registrasi', icon: <UserPlus className="w-4 h-4" />, badge: 'Online' },
    { id: 'pengumuman', label: 'Pengumuman', icon: <Megaphone className="w-4 h-4" /> },
    { id: 'login', label: 'Login', icon: <LogIn className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: ActiveTab) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
          {/* Logo & School Name */}
          <button 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-700 to-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                  {INFO_SEKOLAH.nama}
                </span>
                <span className="bg-sky-50 text-sky-700 border border-sky-200 font-bold text-[10px] px-1.5 py-0.5 rounded">
                  NPSN {INFO_SEKOLAH.npsn}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Sistem Penerimaan Murid Baru (SPMB) TP {INFO_SEKOLAH.tahunAjaran}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/30'
                      : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                      isActive ? 'bg-white text-sky-700' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              id="btn-cek-status-nav"
              onClick={onOpenStatusModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition"
              title="Cek Status Berkas Pendaftaran"
            >
              <Search className="w-3.5 h-3.5 text-slate-600" />
              <span>Cek Status</span>
            </button>

            <button
              id="btn-mulai-daftar-nav"
              onClick={() => handleNavClick('registrasi')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-600/30 transition"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Daftar Sekarang</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={onOpenStatusModal}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              title="Cek Status"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 text-sm font-semibold shadow-xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition ${
                  isActive
                    ? 'bg-sky-50 text-sky-700 font-bold border border-sky-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStatusModal();
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 text-xs"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Cek Status Berkas Pendaftaran</span>
            </button>
            <button
              onClick={() => handleNavClick('registrasi')}
              className="w-full py-2.5 px-3 rounded-xl bg-sky-600 text-white font-bold flex items-center justify-center gap-2 text-xs shadow"
            >
              <UserPlus className="w-4 h-4" />
              <span>Mulai Pendaftaran Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
