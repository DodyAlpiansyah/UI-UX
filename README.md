# Portal SPMB Online SMP Darussalam
> **Sistem Penerimaan Murid Baru (SPMB) Berbasis Web untuk Transformasi Digital dari Sistem Konvensional (Offline) ke Sistem Online**  
> *Proyek Inovasi Digitalisasi Layanan Pendidikan & Pengabdian Masyarakat (PKM)*

---

## 📌 1. Latar Belakang & Tujuan Proyek

Aplikasi **Portal SPMB Online SMP Darussalam** dikembangkan sebagai solusi atas permasalahan antrean panjang, penumpukan berkas fisik rawan hilang/rusak, dan keterbatasan jam operasional pada proses pendaftaran peserta didik baru sistem konvensional (tatap muka/offline).

Aplikasi ini mengedepankan **prinsip UI/UX yang human-centered**, dirancang khusus agar mudah digunakan oleh orang tua murid yang belum terbiasa dengan aplikasi digital rumit, sekaligus mematuhi regulasi pendidikan terbaru:
- **Permendikdasmen No. 3 Tahun 2025**: Pembagian 4 jalur resmi (Domisili 50%, Afirmasi 20%, Prestasi 25%, dan Mutasi 5%).
- **UU No. 27 Tahun 2022 (Pelindungan Data Pribadi - PDP)**: Penyensoran (*masking*) NIK dan nama pada daftar pengumuman publik untuk mencegah penyalahgunaan data kependudukan.
- **Transparansi & Akuntabilitas**: Fasilitas masa sanggah 2x24 jam serta pelacakan status verifikasi berkas secara real-time.

---

## ✨ 2. Fitur-Fitur Utama Aplikasi

### A. Modul Beranda (Pusat Informasi Terpadu)
- **Ringkasan Kuota Real-Time**: Kuota terisi vs sisa kursi untuk 4 jalur resmi.
- **Komparasi Manfaat "Beralih ke Online"**: Edukasi bagi wali murid mengenai penghematan biaya transportasi, efisiensi waktu, dan fleksibilitas pendaftaran 24 jam.
- **Infografis Alur Pendaftaran**: Panduan 4 langkah mudah (Pilih Jalur ➔ Isi Formulir ➔ Cetak Bukti ➔ Pengumuman).
- **Jadwal Tahapan Seleksi**: Kalender resmi pelaksanaan dari pendaftaran hingga masa daftar ulang.
- **FAQ Interaktif**: Jawaban praktis atas pertanyaan umum wali murid terkait persyaratan dokumen.

### B. Modul Profil Sekolah
- Sambutan Kepala Sekolah mengenai komitmen digitalisasi layanan sekolah.
- Identitas resmi sekolah (NPSN: 20512345, Akreditasi A Unggul, Kurikulum Nasional & Karakter Islami).
- Visi & Misi lembaga pendidikan.
- Galeri sarana & prasarana (Lab Komputer, Lab IPA, Perpustakaan Digital, Lapangan Olahraga, Masjid, UKS).
- Program ekstrakurikuler unggulan & prestasi siswa.
- Informasi lokasi serta jam operasional **Posko Layanan Pendampingan Offline** bagi orang tua yang membutuhkan panduan langsung.

### C. Modul Registrasi Murid Baru (Multi-Step Wizard)
- **Alur 5 Langkah Terarah**:
  1. **Pilih Jalur Seleksi**: Informasi persyaratan dokumen & parameter seleksi (jarak meter, nilai rapor, kartu bantuan sosial).
  2. **Data Identitas Calon Siswa**: Validasi NIK 16 digit, NISN 10 digit, nama sesuai akta kelahiran, tempat & tanggal lahir, serta asal sekolah SD/MI.
  3. **Data Orang Tua / Wali**: Nama ayah/ibu, nomor WhatsApp aktif untuk notifikasi sistem, alamat lengkap domisili, dan tanggal terbit Kartu Keluarga (validasi $\ge$ 1 tahun).
  4. **Unggah Dokumen Digital**: Fitur upload foto/scan KK, Akta Kelahiran, Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) bermeterai, dan pas foto 3x4 dengan panduan pengambilan gambar yang jelas.
  5. **Review & Konfirmasi**: Ringkasan lengkap data sebelum dikirim guna mencegah kesalahan pengisian.
- **Fitur Tombol Demo Cepat**: Mengisi form secara otomatis untuk memudahkan demonstrasi dan pengujian sistem.
- **Penerbitan Bukti Pendaftaran Instan**:
  - Nomor Peserta unik (format resmi `2026-JALUR-NOMOR`).
  - Kode PIN Token rahasia 6 digit untuk akses dashboard siswa.
  - QR Code verifikasi digital.
  - Tombol **Cetak / Unduh Kartu Tanda Bukti Registrasi (PDF / Print-Friendly)**.

### D. Modul Pengumuman Hasil Seleksi
- Papan pengumuman penetapan hasil seleksi resmi.
- Kategori status: **LOLOS**, **CADANGAN / SANGGAH**, dan **TIDAK LOLOS**.
- Perlindungan privasi data pribadi (NIK dan nama disensor parsial).
- Filter pencarian berdasarkan jalur seleksi, status kelulusan, dan nomor/nama peserta.
- Pratinjau dan cetak **Surat Keputusan (SK) Kelulusan Kepala Sekolah**.
- Informasi petunjuk teknis **Daftar Ulang** dan **Masa Sanggah 2x24 Jam**.

### E. Modul Portal Login & Dashboard
- **Portal Calon Siswa / Wali Murid**:
  - Masuk menggunakan Nomor Peserta / NIK dan PIN Token.
  - Menampilkan status berkas terkini (*Terverifikasi*, *Perlu Revisi/Sanggah*, *Antrean Verifikasi*).
  - Menampilkan catatan resmi dari tim verifikator panitia.
  - Form unggah berkas perbaikan sanggahan jika terdapat kendala dokumen.
- **Portal Panitia / Operator Verifikator (M5 Split-Screen)**:
  - Tampilan verifikasi berdampingan: Pratinjau scan dokumen asli di sisi kiri vs data isian siswa di sisi kanan.
  - Pilihan cepat template catatan alasan revisi (contoh: foto KK buram, masa berlaku KK < 1 tahun, nama orang tua tidak sesuai akta).
  - Eksekusi status verifikasi berkas secara langsung (*Setujui* atau *Minta Revisi*).

### F. Fitur Aksesibilitas Khusus
- **Cek Status Cepat (Modal)**: Memeriksa status berkas langsung dari header tanpa harus login penuh.
- **Floating WhatsApp Helpdesk**: Tombol bantuan cepat yang mengarahkan langsung ke WhatsApp panitia untuk membantu orang tua yang awam teknologi.

---

## 🛠️ 3. Teknologi yang Digunakan

- **Frontend Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Motion
- **Build Tool**: Vite 6
- **Print Engine**: Native CSS Print Media Query (dioptimalkan untuk format cetak lembar bukti A4)

---

## 🚀 4. Cara Menjalankan Aplikasi di Komputer Lokal

Untuk menjalankan kode sumber aplikasi ini di lingkungan lokal Anda (VS Code, Cursor, WebStorm, dsb.):

### Prasyarat
- Pastikan komputer Anda telah terpasang **Node.js** (versi 18 ke atas) dan **npm** (atau bun / yarn / pnpm).
  - Cek versi Node: `node -v`
  - Cek versi npm: `npm -v`

### Langkah-Langkah Instalasi:

1. **Buka Terminal** di direktori proyek yang telah diekstrak:
   ```bash
   cd spmb-smp-darussalam
   ```

2. **Pasang Dependensi (Install Dependencies)**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Buka peramban Anda dan akses URL:
   ```text
   http://localhost:3000
   ```
   *(Atau port lain yang ditampilkan di terminal jika port 3000 sedang digunakan)*.

### Langkah Build untuk File HTML Statis Siap Pakai (Production):

Jika Anda ingin menghasilkan bundel file statis HTML, CSS, dan JavaScript murni:

1. **Jalankan Perintah Build**:
   ```bash
   npm run build
   ```
2. Hasil kompilasi akan berada di folder **`/dist`**.
3. Folder `/dist` berisi:
   - `index.html` (File HTML utama)
   - `/assets` (File bundle JavaScript dan stylesheet Tailwind CSS yang telah dikompresi)
4. Anda dapat menjalankan pratinjau hasil build dengan perintah:
   ```bash
   npm run preview
   ```
   Atau mengunggah isi folder `/dist` ke layanan hosting apa pun (GitHub Pages, Netlify, Vercel, Firebase Hosting, cPanel sekolah, dll.).

---

## 🐙 5. Panduan Menyimpan / Push ke GitHub

Anda dapat mengekspor dan menyimpan aplikasi ini ke akun GitHub dengan dua cara:

### Cara 1: Menggunakan Fitur Otomatis Google AI Studio (Paling Mudah)
1. Pada antarmuka AI Studio di pojok kanan atas, klik ikon **Settings** (ikon gerigi ⚙️).
2. Pilih opsi **"Export to GitHub"**.
3. Otorisasikan akun GitHub Anda jika diminta, dan tentukan nama repositori (misalnya `spmb-smp-darussalam-pkm`).
4. Seluruh kode sumber beserta file `README.md` ini akan otomatis ter-push ke akun GitHub Anda.

### Cara 2: Push Manual via Git Terminal (Lokal)
Jika Anda telah mengunduh ZIP proyek dan membukanya di komputer lokal:

1. Inisialisasi Git:
   ```bash
   git init
   ```
2. Tambahkan semua file:
   ```bash
   git add .
   ```
3. Buat commit pertama:
   ```bash
   git commit -m "feat: Implementasi Sistem SPMB Online SMP Darussalam untuk PKM"
   ```
4. Hubungkan ke repositori GitHub Anda:
   ```bash
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO-ANDA.git
   ```
5. Push ke GitHub:
   ```bash
   git push -u origin main
   ```

---

## 📂 6. Struktur Direktori Proyek

```text
├── public/                 # Aset statis publik
├── src/
│   ├── components/         # Komponen UI modular
│   │   ├── Navbar.tsx             # Navigasi utama responsif & tombol Cek Status
│   │   ├── Footer.tsx             # Informasi kontak, posko offline & hak cipta
│   │   ├── HomeSection.tsx        # Halaman Beranda (Kuota, Alur, Jadwal, FAQ)
│   │   ├── SchoolProfileSection.tsx # Profil sekolah, fasilitas, visi misi, prestasi
│   │   ├── RegistrationSection.tsx# Formulir pendaftaran multi-step & cetak bukti
│   │   ├── AnnouncementSection.tsx# Pengumuman kelulusan, sensor PDP, unduh SK
│   │   ├── LoginSection.tsx       # Login siswa & panel verifikator M5 split-screen
│   │   └── StatusCheckModal.tsx   # Modal pencarian cepat status berkas peserta
│   ├── data/
│   │   └── mockData.ts     # Data profil sekolah, kuota jalur, dan data pendaftar simulasi
│   ├── types.ts            # Definisi TypeScript interface data pendaftaran & seleksi
│   ├── App.tsx             # Root component penghubung seluruh modul state
│   ├── main.tsx            # Entry point React
│   └── index.css           # Global Tailwind CSS imports
├── index.html              # Entry point dokumen HTML aplikasi
├── metadata.json           # Metadata resmi aplikasi
├── package.json            # Daftar dependensi & script build/dev
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md               # Dokumentasi lengkap penggunaan, fitur, dan instalasi
```

---

## 👨‍🎓 Kredensial Akun Simulasi untuk Presentasi / Pengujian:

Untuk memudahkan pengujian dan penilaian:

1. **Login Siswa**:
   - Peserta 1 (Terverifikasi Lolos): `2026-DOM-00128` | PIN: `748291`
   - Peserta 2 (Perlu Sanggah / Revisi): `2026-DOM-00042` | PIN: `319402`
   - Peserta 3 (Antrean Verifikasi): `2026-DOM-00095` | PIN: `615243`
   *(Tersedia tombol satu-klik isi otomatis di form login)*

2. **Login Panitia Verifikator**:
   - Email: `verifikator@smpdarussalam.sch.id`
   - Password: `admin123`
