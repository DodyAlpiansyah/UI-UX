import { KuotaJalur, PengumumanItem, PesertaSPMB, FasilitasSekolah, Ekstrakurikuler } from '../types';

export const INFO_SEKOLAH = {
  nama: 'SMP DARUSSALAM',
  npsn: '20512345',
  akreditasi: 'A (Unggul) - BAN-S/M',
  alamat: 'Jl. Darussalam No. 45, Kecamatan Kedungkandang, Kota Malang, Jawa Timur',
  kodePos: '65136',
  telepon: '(0341) 555-789',
  whatsappHelpdesk: '0812-3456-7890',
  email: 'spmb@smpdarussalam.sch.id',
  website: 'https://smpdarussalam.sch.id',
  kepalaSekolah: 'Drs. H. Ahmad Fauzi, M.Pd.',
  tahunAjaran: '2026/2027',
  totalDayaTampung: 320,
  jumlahRombel: 10,
  siswaPerRombel: 32,
  visi: 'Terwujudnya Generasi yang Berakhlak Mulia, Cerdas, Berprestasi, dan Berwawasan Lingkungan Global.',
  misi: [
    'Menumbuhkembangkan penghayatan ajaran agama dan budi pekerti luhur dalam kehidupan sehari-hari.',
    'Menyelenggarakan proses pembelajaran aktif, kreatif, efektif, dan berbasis teknologi digital modern.',
    'Mengembangkan potensi, bakat, dan minat peserta didik melalui kegiatan intrakurikuler dan ekstrakurikuler unggulan.',
    'Mewujudkan lingkungan sekolah yang bersih, sehat, asri, ramah anak, dan bebas perundungan.',
    'Menjalin kemitraan sinergis dengan orang tua murid, masyarakat, dan dunia industri pendidikan.'
  ]
};

export const KUOTA_JALUR_LIST: KuotaJalur[] = [
  {
    id: 'domisili',
    nama: 'Jalur Domisili (Zonasi)',
    persentase: 50,
    kuotaTotal: 160,
    terisi: 112,
    deskripsi: 'Diperuntukkan bagi calon murid yang berdomisili di dalam wilayah zonasi sekolah berdasarkan alamat Kartu Keluarga (KK).',
    syaratUtama: [
      'KK diterbitkan paling singkat 1 tahun sebelum tanggal pendaftaran.',
      'Nama orang tua/wali wajib sama dengan yang tercantum di Akta Kelahiran/Rapor.',
      'Prioritas pemeringkatan: Jarak tempat tinggal terdekat ke sekolah, kemudian usia yang lebih tua.'
    ],
    warnaBadge: 'bg-sky-100 text-sky-800 border-sky-300'
  },
  {
    id: 'afirmasi',
    nama: 'Jalur Afirmasi',
    persentase: 20,
    kuotaTotal: 64,
    terisi: 42,
    deskripsi: 'Diperuntukkan bagi calon murid dari keluarga ekonomi tidak mampu dan penyandang disabilitas.',
    syaratUtama: [
      'Memiliki Kartu Indonesia Pintar (KIP) atau terdaftar dalam DTKS Kemensos RI.',
      'Surat keterangan disabilitas dari dokter/fasyankes resmi (khusus disabilitas).',
      'Catatan penting: SKTM kelurahan dan kartu BPJS mandiri tidak berlaku sebagai bukti afirmasi.'
    ],
    warnaBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  },
  {
    id: 'prestasi',
    nama: 'Jalur Prestasi',
    persentase: 25,
    kuotaTotal: 80,
    terisi: 68,
    deskripsi: 'Berdasarkan akumulasi nilai rapor 5 semester terakhir serta sertifikat atau piagam kejuaraan akademik maupun non-akademik.',
    syaratUtama: [
      'Nilai rapor kelas 4 (sem 1-2), kelas 5 (sem 1-2), dan kelas 6 (sem 1) mapel PKn, B. Indo, MTK, IPA.',
      'Sertifikat/piagam kejuaraan berjenjang (Kab/Kota, Provinsi, Nasional, Internasional) maksimal 3 tahun terakhir.',
      'Portofolio kejuaraan tahfidz, olahraga, seni, atau kepemimpinan OSIS/Pramuka.'
    ],
    warnaBadge: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    id: 'mutasi',
    nama: 'Jalur Perpindahan Tugas Orang Tua',
    persentase: 5,
    kuotaTotal: 16,
    terisi: 10,
    deskripsi: 'Bagi calon murid yang mengikuti perpindahan tugas kedinasan orang tua/wali, serta kuota anak pendidik/tenaga kependidikan.',
    syaratUtama: [
      'Surat Keputusan (SK) penugasan resmi dari instansi/lembaga/BUMN paling lama 1 tahun sebelum pendaftaran.',
      'Surat keterangan domisili baru dari kelurahan setempat.',
      'Surat tugas orang tua sebagai pendidik/tendik di SMP Darussalam (khusus kuota anak guru).'
    ],
    warnaBadge: 'bg-purple-100 text-purple-800 border-purple-300'
  }
];

export const INITIAL_PESERTA_LIST: PesertaSPMB[] = [
  {
    noPeserta: '2026-DOM-00128',
    pinToken: '748291',
    nik: '3507010405130003',
    nisn: '0134567890',
    namaLengkap: 'Muhammad Azzam Fathoni',
    jenisKelamin: 'L',
    tempatLahir: 'Malang',
    tanggalLahir: '2013-05-14',
    asalSekolah: 'SDN 1 Darussalam',
    agama: 'Islam',
    namaAyah: 'H. Ridwan Santoso',
    namaIbu: 'Siti Aminah',
    pekerjaanOrtu: 'Wiraswasta',
    noWhatsapp: '081234567891',
    email: 'azzam.fathoni@gmail.com',
    alamatKK: 'Jl. Darussalam Gang 2 No. 14, RT 03 / RW 05',
    rtRw: '003/005',
    kelurahan: 'Darussalam',
    kecamatan: 'Kedungkandang',
    tanggalTerbitKK: '2024-08-14',
    jalur: 'domisili',
    jarakRumahMeter: 650,
    statusVerifikasi: 'TERVERIFIKASI',
    catatanVerifikator: 'Seluruh berkas fisik dan digital lengkap dan sah. Tanggal KK memenuhi syarat > 1 tahun. Berkas masuk dalam kuota perankingan.',
    statusKelulusan: 'LOLOS',
    rankingScore: 'Jarak: 650 meter',
    waktuPendaftaran: '03 Juni 2026, 09:15 WIB'
  },
  {
    noPeserta: '2026-DOM-00042',
    pinToken: '319402',
    nik: '3507011210130005',
    nisn: '0139876543',
    namaLengkap: 'Hadi Santoso',
    jenisKelamin: 'L',
    tempatLahir: 'Malang',
    tanggalLahir: '2013-10-12',
    asalSekolah: 'SDN 2 Darussalam',
    agama: 'Islam',
    namaAyah: 'Santoso Wijaya',
    namaIbu: 'Endang Lestari',
    pekerjaanOrtu: 'Karyawan Swasta',
    noWhatsapp: '081398765432',
    email: 'keluarga.santoso@gmail.com',
    alamatKK: 'Jl. Danau Toba B-4 No. 12',
    rtRw: '002/008',
    kelurahan: 'Sawojajar',
    kecamatan: 'Kedungkandang',
    tanggalTerbitKK: '2025-11-20',
    jalur: 'domisili',
    jarakRumahMeter: 1200,
    statusVerifikasi: 'PERLU_REVISI',
    catatanVerifikator: 'Masa penerbitan Kartu Keluarga terdeteksi 7 bulan (kurang dari 1 tahun). Sesuai juknis, silakan upload Surat Keterangan Pengganti dari Dispendukcapil atau SPTJM tambahan dalam masa sanggah 2x24 jam.',
    statusKelulusan: 'CADANGAN',
    rankingScore: 'Masa Sanggah Revisi KK',
    waktuPendaftaran: '05 Juni 2026, 11:30 WIB'
  },
  {
    noPeserta: '2026-PRE-00045',
    pinToken: '824105',
    nik: '3507015504130002',
    nisn: '0138765432',
    namaLengkap: 'Bagus Setyawan',
    jenisKelamin: 'L',
    tempatLahir: 'Surabaya',
    tanggalLahir: '2013-04-15',
    asalSekolah: 'SDN 2 Darussalam',
    agama: 'Islam',
    namaAyah: 'Ir. Budi Setyawan',
    namaIbu: 'Rina Marlina, S.Pd.',
    pekerjaanOrtu: 'PNS',
    noWhatsapp: '081987654321',
    email: 'bagus.setyawan@gmail.com',
    alamatKK: 'Jl. Kembang Turi No. 8',
    rtRw: '001/002',
    kelurahan: 'Darussalam',
    kecamatan: 'Kedungkandang',
    tanggalTerbitKK: '2023-05-10',
    jalur: 'prestasi',
    nilaiRaporRataRata: 94.2,
    namaPrestasi: 'Juara 1 Olimpiade Matematika OSN Tingkat Provinsi Jawa Timur 2025',
    statusVerifikasi: 'TERVERIFIKASI',
    catatanVerifikator: 'Nilai rapor 5 semester dan piagam kejuaraan OSN sah terverifikasi dengan Puspresnas Kemdikbudristek.',
    statusKelulusan: 'LOLOS',
    rankingScore: 'Skor Rapor 94.2 + Piagam Prov',
    waktuPendaftaran: '04 Juni 2026, 14:20 WIB'
  },
  {
    noPeserta: '2026-AFI-00012',
    pinToken: '492817',
    nik: '3507014207130001',
    nisn: '0137654321',
    namaLengkap: 'Dimas Ramadhan',
    jenisKelamin: 'L',
    tempatLahir: 'Malang',
    tanggalLahir: '2013-07-02',
    asalSekolah: 'SDIT Al-Ihsan',
    agama: 'Islam',
    namaAyah: 'Sukardi',
    namaIbu: 'Maryati',
    pekerjaanOrtu: 'Buruh Harian',
    noWhatsapp: '085234567890',
    email: 'dimas.ramadhan13@gmail.com',
    alamatKK: 'Jl. Ki Ageng Gribig RT 04 RW 02',
    rtRw: '004/002',
    kelurahan: 'Madyopuro',
    kecamatan: 'Kedungkandang',
    tanggalTerbitKK: '2023-01-18',
    jalur: 'afirmasi',
    noKipOrDtks: 'KIP-2024-35070199',
    statusVerifikasi: 'TERVERIFIKASI',
    catatanVerifikator: 'Status KIP aktif dan sinkron dengan DTKS Kemensos. Berhak atas fasilitas perlengkapan seragam gratis sekolah.',
    statusKelulusan: 'LOLOS',
    rankingScore: 'KIP Valid (Jarak 1.1 km)',
    waktuPendaftaran: '06 Juni 2026, 10:05 WIB'
  },
  {
    noPeserta: '2026-DOM-00095',
    pinToken: '615243',
    nik: '3507012009130004',
    nisn: '0136543210',
    namaLengkap: 'Ahmad Fauzan',
    jenisKelamin: 'L',
    tempatLahir: 'Malang',
    tanggalLahir: '2013-09-20',
    asalSekolah: 'SDN 1 Darussalam',
    agama: 'Islam',
    namaAyah: 'Fauzi Rahman',
    namaIbu: 'Nur Hasanah',
    pekerjaanOrtu: 'Pedagang',
    noWhatsapp: '087812345678',
    email: 'fauzan.ahmad@gmail.com',
    alamatKK: 'Jl. Mayjen Sungkono No. 33',
    rtRw: '005/003',
    kelurahan: 'Buring',
    kecamatan: 'Kedungkandang',
    tanggalTerbitKK: '2024-03-12',
    jalur: 'domisili',
    jarakRumahMeter: 890,
    statusVerifikasi: 'MENUNGGU',
    catatanVerifikator: 'Berkas dalam antrean verifikasi petugas loket digital. Estimasi verifikasi selesai dalam 1x24 jam kerja.',
    statusKelulusan: 'DALAM_PROSES',
    rankingScore: 'Menunggu Hasil Verifikasi',
    waktuPendaftaran: '08 Juni 2026, 13:45 WIB'
  },
  {
    noPeserta: '2026-MUT-00003',
    pinToken: '903412',
    nik: '3507016212130006',
    nisn: '0135432109',
    namaLengkap: 'Eka Wahyuni Putri',
    jenisKelamin: 'P',
    tempatLahir: 'Jakarta',
    tanggalLahir: '2013-12-22',
    asalSekolah: 'SDN 4 Menteng Jakarta',
    agama: 'Islam',
    namaAyah: 'Kolonel Bambang Wahyudi',
    namaIbu: 'Dra. Sri Wahyuni',
    pekerjaanOrtu: 'TNI-AD',
    noWhatsapp: '081298765432',
    email: 'eka.wahyuni.p@gmail.com',
    alamatKK: 'Asrama Militer Yonif 512 No. C-15',
    rtRw: '001/004',
    kelurahan: 'Kedungkandang',
    kecamatan: 'Kedungkandang',
    tanggalTerbitKK: '2025-10-01',
    jalur: 'mutasi',
    instansiMutasi: 'Korem 083 / Baladhika Jaya',
    statusVerifikasi: 'TERVERIFIKASI',
    catatanVerifikator: 'SK penugasan dinas resmi TNI dan surat keterangan domisili asrama lengkap dan sah.',
    statusKelulusan: 'LOLOS',
    rankingScore: 'SK Mutasi TNI (Valid)',
    waktuPendaftaran: '07 Juni 2026, 08:30 WIB'
  }
];

export const INITIAL_PENGUMUMAN_LIST: PengumumanItem[] = [
  {
    id: '1',
    noPeserta: '2026-DOM-00128',
    namaMasking: 'MUHAMMAD AZZAM F****',
    nikMasking: '350701****0003',
    asalSekolah: 'SDN 1 Darussalam',
    jalur: 'domisili',
    parameterSeleksi: 'Jarak 650 m (Skor 98.5)',
    status: 'LOLOS',
    skorRanking: 98.5
  },
  {
    id: '2',
    noPeserta: '2026-PRE-00045',
    namaMasking: 'BAGUS SETYA****',
    nikMasking: '350701****0002',
    asalSekolah: 'SDN 2 Darussalam',
    jalur: 'prestasi',
    parameterSeleksi: 'Rapor 94.2 + Piagam OSN Prov',
    status: 'LOLOS',
    skorRanking: 97.8
  },
  {
    id: '3',
    noPeserta: '2026-DOM-00084',
    namaMasking: 'CITRA DEWI ANGG****',
    nikMasking: '350701****9012',
    asalSekolah: 'SDN 1 Darussalam',
    jalur: 'domisili',
    parameterSeleksi: 'Jarak 780 m (Skor 96.0)',
    status: 'LOLOS',
    skorRanking: 96.0
  },
  {
    id: '4',
    noPeserta: '2026-AFI-00012',
    namaMasking: 'DIMAS RAMAD****',
    nikMasking: '350701****0001',
    asalSekolah: 'SDIT Al-Ihsan',
    jalur: 'afirmasi',
    parameterSeleksi: 'KIP Aktif (Jarak 1.1 km)',
    status: 'LOLOS',
    skorRanking: 95.0
  },
  {
    id: '5',
    noPeserta: '2026-MUT-00003',
    namaMasking: 'EKA WAHYUNI PU****',
    nikMasking: '350701****0006',
    asalSekolah: 'SDN 4 Menteng Jakarta',
    jalur: 'mutasi',
    parameterSeleksi: 'SK Tugas Korem (Valid)',
    status: 'LOLOS',
    skorRanking: 94.5
  },
  {
    id: '6',
    noPeserta: '2026-DOM-00031',
    namaMasking: 'FADHILAH NUR AY****',
    nikMasking: '350701****4567',
    asalSekolah: 'SDN 3 Darussalam',
    jalur: 'domisili',
    parameterSeleksi: 'Jarak 820 m (Skor 93.8)',
    status: 'LOLOS',
    skorRanking: 93.8
  },
  {
    id: '7',
    noPeserta: '2026-DOM-00042',
    namaMasking: 'HADI SANT****',
    nikMasking: '350701****0005',
    asalSekolah: 'SDN 2 Darussalam',
    jalur: 'domisili',
    parameterSeleksi: 'Jarak 1.200 m (Masa Sanggah KK)',
    status: 'CADANGAN',
    skorRanking: 81.2
  },
  {
    id: '8',
    noPeserta: '2026-DOM-00210',
    namaMasking: 'FAJAR HIDAY****',
    nikMasking: '350701****2345',
    asalSekolah: 'SDN 5 Sukun',
    jalur: 'domisili',
    parameterSeleksi: 'Jarak 2.450 m (Luar Batas Zonasi)',
    status: 'TIDAK_LOLOS',
    skorRanking: 62.0
  },
  {
    id: '9',
    noPeserta: '2026-PRE-00115',
    namaMasking: 'GILANG PRASET****',
    nikMasking: '350701****6789',
    asalSekolah: 'SD Brawijaya Smart School',
    jalur: 'prestasi',
    parameterSeleksi: 'Rata-rata Rapor 82.1 (Over Kuota)',
    status: 'TIDAK_LOLOS',
    skorRanking: 74.5
  }
];

export const FASILITAS_LIST: FasilitasSekolah[] = [
  {
    nama: 'Laboratorium Komputer & Multimedia',
    kategori: 'Teknologi & Digital',
    deskripsi: 'Dilengkapi 40 unit PC All-in-One berkecepatan tinggi, koneksi fiber optik 100 Mbps, dan smart projector untuk pembelajaran coding & ANBK.',
    ikon: 'Laptop',
    highlight: 'Full AC & Smart Board'
  },
  {
    nama: 'Laboratorium IPA Modern',
    kategori: 'Sains & Riset',
    deskripsi: 'Fasilitas mikroskop binokuler elektrik, perlengkapan eksperimen fisika-kimia-biologi berstandar keamanan laboratorium nasional.',
    ikon: 'FlaskConical',
    highlight: 'Standar K3 Nasional'
  },
  {
    nama: 'Perpustakaan Digital "Cahaya Ilmu"',
    kategori: 'Literasi & Riset',
    deskripsi: 'Koleksi 12.000+ buku fisik dan akses e-library dengan tablet interaktif, ruang baca lesehan berkarpet empuk yang nyaman.',
    ikon: 'BookOpen',
    highlight: 'Koleksi 12.000+ Judul'
  },
  {
    nama: 'Lapangan Olahraga Multi-Fungsi',
    kategori: 'Kebugaran & Olahraga',
    deskripsi: 'Lapangan futsal rumput sintetis, lapangan basket standar PERBASI, lapangan voli, dan arena bulutangkis indoor.',
    ikon: 'Trophy',
    highlight: 'Standar PERBASI & Futsal'
  },
  {
    nama: 'Masjid Sekolah "Al-Hikmah"',
    kategori: 'Spiritual & Karakter',
    deskripsi: 'Masjid dua lantai berkapasitas 800 jamaah untuk sholat dhuha berjamaah, sholat jumat, dan pembinaan tahfidz Al-Qur\'an.',
    ikon: 'Compass',
    highlight: 'Kapasitas 800 Jamaah'
  },
  {
    nama: 'Ruang UKS & Konseling Ramah Anak',
    kategori: 'Kesehatan & Bimbingan',
    deskripsi: 'Dilengkapi dokter mitra Puskesmas, ruang istirahat terpisah putra/putri, serta bilik konsultasi psikologis anak.',
    ikon: 'HeartPulse',
    highlight: 'Mitra Dokter Puskesmas'
  }
];

export const EKSKUL_LIST: Ekstrakurikuler[] = [
  {
    nama: 'Pramuka Penggalang (Gudep Inti)',
    bidang: 'Kepemimpinan & Karakter',
    deskripsi: 'Membina kedisiplinan, kemandirian, dan keterampilan survival outdoor.',
    prestasi: 'Juara Umum Jambore Ranting 2025'
  },
  {
    nama: 'Robotika & Coding IoT',
    bidang: 'Sains & Teknologi Digital',
    deskripsi: 'Eksplorasi sensor Arduino, pemrograman Scratch, dan perakitan robot line-follower.',
    prestasi: 'Juara 2 National Youth Robot Games 2025'
  },
  {
    nama: 'Tahfidz & Tartil Qur\'an',
    bidang: 'Keagamaan',
    deskripsi: 'Bimbingan intensif hafalan juz 30, juz 29, serta tartil dengan sanad bersertifikat.',
    prestasi: 'Meluluskan 45 Santri Tahfidz 3 Juz di 2025'
  },
  {
    nama: 'PMR (Palang Merah Remaja)',
    bidang: 'Kemanusiaan & Medis',
    deskripsi: 'Pelatihan pertolongan pertama pada kecelakaan (P3K) dan kesiapsiagaan bencana.',
    prestasi: 'PMR Madya Berprestasi Kota Malang'
  },
  {
    nama: 'Futsal & Bola Basket',
    bidang: 'Olahraga Prestasi',
    deskripsi: 'Latihan taktik dan fisik bersama pelatih berlisensi nasional.',
    prestasi: 'Juara 1 Liga Pelajar SMP se-Kota Malang'
  },
  {
    nama: 'Seni Musik Tradisional & Modern',
    bidang: 'Kesenian & Budaya',
    deskripsi: 'Paduan gamelan Jawa kontemporer, ansambel band sekolah, dan vokal grup.',
    prestasi: 'Penampil Terbaik FLS2N Tingkat Kota 2025'
  }
];

export const FAQ_LIST = [
  {
    q: 'Apakah pendaftaran SPMB online ini berbayar?',
    a: 'TIDAK. Pendaftaran SPMB di SMP Darussalam 100% GRATIS dan bebas dari segala bentuk pungutan biaya, sesuai Permendikdasmen No. 3/2025.'
  },
  {
    q: 'Bagaimana jika orang tua belum terbiasa mendaftar online?',
    a: 'Jangan khawatir! Kami menyediakan Posko Bantuan SPMB Offline di ruang pelayanan sekolah (Senin - Sabtu, 08.00 - 14.00 WIB). Tim panitia dan tim relawan mahasiswa PKM kami akan memandu langkah demi langkah mengisi sistem online.'
  },
  {
    q: 'Berkas apa saja yang wajib disiapkan sebelum mengisi formulir?',
    a: 'Cukup siapkan: (1) Kartu Keluarga asli (terbit minimal 1 tahun), (2) Akta Kelahiran anak, (3) Pas foto 3x4 berwarna, dan (4) Surat SPTJM yang formatnya bisa diunduh di portal ini.'
  },
  {
    q: 'Bolehkah mendaftar lebih dari 1 jalur?',
    a: 'Setiap calon siswa hanya dapat memilih 1 (satu) jalur seleksi utama pada satu waktu. Jika di jalur domisili tidak lolos sebelum penutupan, sistem mengizinkan pindah ke jalur prestasi/afirmasi jika syarat terpenuhi.'
  },
  {
    q: 'Apa itu Masa Sanggah 2x24 jam?',
    a: 'Masa sanggah adalah waktu toleransi resmi bagi orang tua murid apabila berkas dinyatakan "Perlu Revisi" (misalnya foto KK buram atau tanggal terbit KK butuh surat keterangan dari Dispendukcapil) untuk mengunggah berkas perbaikan sebelum perankingan final ditutup.'
  }
];
