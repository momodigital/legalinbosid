# LegalinBossIDd Consultant Pro - Landing Page

https://img.shields.io/badge/Legal-Consultant-gold
https://img.shields.io/badge/Responsive-Mobile%20First-blue
https://img.shields.io/badge/Deploy-Vercel-success

Landing page profesional untuk jasa konsultasi legalitas dan perizinan bisnis. Dibangun dengan desain modern, tema gelap elegan, dan fully responsive di semua perangkat.

https://via.placeholder.com/1200x600/0B0F17/C9A96E?text=Legal+Consultant+Pro+Preview

📋 Daftar Isi

· Fitur Utama
· Teknologi
· Struktur Project
· Instalasi & Setup
· Deploy ke Vercel
· Kustomisasi
· Screenshot
· Kontak
· Lisensi

✨ Fitur Utama

· 🎨 Desain Premium - Tema gelap dengan aksen emas yang elegan
· 📱 Mobile Friendly - Responsif di semua ukuran layar (smartphone, tablet, desktop)
· ⚡ Fast Loading - Optimasi dengan CSS dan JavaScript ringan
· 🏛️ Informasi Lengkap - Menampilkan semua layanan legalitas dan perizinan
· 📞 Call to Action - Nomor kontak yang mudah diakses
· 🏷️ Special Offers - Banner promosi untuk penawaran spesial
· 🔍 SEO Friendly - Struktur HTML semantic
· 🎯 Animasi Halus - Fade-in effects untuk pengalaman pengguna yang lebih baik

🛠️ Teknologi

· HTML5 - Struktur semantic
· CSS3 - Flexbox, Grid, Custom Properties, Animations
· JavaScript - Manipulasi DOM dinamis
· Font Awesome 6 - Ikon-ikon profesional
· Google Fonts - Poppins & Playfair Display
· Vercel - Deployment & hosting

📁 Struktur Project

```
legal-consultant-pro/
│
├── index.html              # File utama landing page
├── README.md               # Dokumentasi project
├── vercel.json             # Konfigurasi deployment Vercel
├── .gitignore              # File yang diabaikan Git
│
├── assets/
│   ├── images/
│   │   ├── favicon.ico     # Ikon website
│   │   ├── logo.png        # Logo perusahaan (opsional)
│   │   └── og-image.jpg    # Preview untuk social media
│   │
│   └── fonts/              # Font lokal (jika diperlukan)
│
└── docs/                   # Dokumentasi tambahan
```

🚀 Instalasi & Setup

1. Clone Repository

```bash
git clone https://github.com/username/legal-consultant-pro.git
cd legal-consultant-pro
```

2. Buka di Browser

Buka file index.html langsung di browser atau gunakan live server:

```bash
# Dengan Python
python -m http.server 8000

# Dengan Node.js (live-server)
npx live-server
```

3. Kustomisasi

Edit file index.html untuk menyesuaikan:

· Nomor telepon (ganti 0877 1537 3601)
· Nama perusahaan
· Daftar layanan
· Warna tema (variabel CSS di :root)

🌐 Deploy ke Vercel

Opsi 1: Deploy dengan 1 Klik

https://vercel.com/button

Opsi 2: Deploy Manual

1. Install Vercel CLI
   ```bash
   npm i -g vercel
   ```
2. Deploy
   ```bash
   vercel
   ```
3. Follow instruksi yang muncul di terminal

Konfigurasi Vercel (vercel.json)

```json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "devCommand": null,
  "installCommand": null
}
```

🎨 Kustomisasi

Mengubah Warna Tema

Edit variabel CSS di bagian :root:

```css
:root {
    --bg-primary: #0B0F17;      /* Background utama */
    --bg-secondary: #121926;     /* Background sekunder */
    --accent-gold: #C9A96E;      /* Warna aksen (emas) */
    --text-primary: #F0F4FA;     /* Warna teks utama */
    --text-secondary: #B0C0D0;   /* Warna teks sekunder */
}
```

Menambahkan Logo

1. Letakkan file logo di assets/images/logo.png
2. Tambahkan kode berikut di navbar:

```html
<div class="logo">
    <img src="assets/images/logo.png" alt="Legal Consultant Pro" height="40">
    <span>SOLUSI LEGALITAS BISNIS</span>
</div>
```

Mengubah Daftar Layanan

Edit array di bagian JavaScript:

```javascript
const mainServices = [
    "Pendirian dan Perubahan Badan Usaha",
    "Contractor Safety Management System (CSMS)",
    // Tambah/hapus sesuai kebutuhan
];
```

📸 Screenshot

Desktop Mobile
https://via.placeholder.com/800x400/0B0F17/C9A96E?text=Desktop+View https://via.placeholder.com/300x600/0B0F17/C9A96E?text=Mobile+View

📞 Kontak

Untuk pertanyaan dan konsultasi:

· Telepon/WhatsApp: 0877 1537 3601
· Email: info@legalconsultantpro.com
· Website: https://legal-consultant-pro.vercel.app
· Jam Operasional: Senin - Jumat, 09.00 - 18.00 WIB

📄 Lisensi

Hak Cipta © 2024 Legal Consultant Pro. Seluruh hak cipta dilindungi.

---

Dibuat dengan ❤️ untuk solusi legalitas bisnis Indonesia

https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg
