export type ActiveTab = 'beranda' | 'profil' | 'registrasi' | 'pengumuman' | 'login';

export type JalurType = 'domisili' | 'afirmasi' | 'prestasi' | 'mutasi';

export type StatusKelulusan = 'LOLOS' | 'CADANGAN' | 'TIDAK_LOLOS' | 'DALAM_PROSES';

export type StatusVerifikasi = 'MENUNGGU' | 'TERVERIFIKASI' | 'PERLU_REVISI';

export interface PesertaSPMB {
  noPeserta: string;
  pinToken: string;
  nik: string;
  nisn: string;
  namaLengkap: string;
  jenisKelamin: 'L' | 'P';
  tempatLahir: string;
  tanggalLahir: string;
  asalSekolah: string;
  agama: string;
  namaAyah: string;
  namaIbu: string;
  pekerjaanOrtu: string;
  noWhatsapp: string;
  email: string;
  alamatKK: string;
  rtRw: string;
  kelurahan: string;
  kecamatan: string;
  tanggalTerbitKK: string;
  jalur: JalurType;
  // Khusus jalur
  jarakRumahMeter?: number;
  nilaiRaporRataRata?: number;
  namaPrestasi?: string;
  noKipOrDtks?: string;
  instansiMutasi?: string;
  // Berkas
  berkasKK?: string;
  berkasAkta?: string;
  berkasSPTJM?: string;
  berkasFoto?: string;
  berkasTambahan?: string;
  // Status
  statusVerifikasi: StatusVerifikasi;
  catatanVerifikator?: string;
  statusKelulusan: StatusKelulusan;
  rankingScore?: string;
  waktuPendaftaran: string;
}

export interface KuotaJalur {
  id: JalurType;
  nama: string;
  persentase: number;
  kuotaTotal: number;
  terisi: number;
  deskripsi: string;
  syaratUtama: string[];
  warnaBadge: string;
}

export interface PengumumanItem {
  id: string;
  noPeserta: string;
  namaMasking: string;
  nikMasking: string;
  asalSekolah: string;
  jalur: JalurType;
  parameterSeleksi: string;
  status: StatusKelulusan;
  skorRanking: number;
}

export interface FasilitasSekolah {
  nama: string;
  kategori: string;
  deskripsi: string;
  ikon: string;
  highlight: string;
}

export interface Ekstrakurikuler {
  nama: string;
  bidang: string;
  deskripsi: string;
  prestasi: string;
}
