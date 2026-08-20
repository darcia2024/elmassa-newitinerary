# 🕋 El Massa Tour & Travel - Portal Itinerary Resmi 1448 H

Portal web itinerary dan katalog perjalanan ibadah Umrah resmi untuk **El Massa Tour & Travel** (PPIU Resmi Kementerian Agama RI).

---

## ✨ Fitur Utama
1. **Katalog 10 Paket Umrah Lengkap**:
   - *Umrah Special November 2026 (Direct Flight Saudia)*
   - *Umrah Special Bersama Ustadz Hanan Attaki (Landing Madinah)*
   - *Umrah Nyaman Akhir Tahun (Desember 2026)*
   - *Umrah Nisfu Sya'ban di Makkah*
   - *Umrah Istimewa Awal Ramadan*
   - *Umrah Sayang Orang Tua (Fasilitas 0 km Dekat Haram)*
   - *Umrah Lebih Nyaman Syawal*
   - *Umrah Muharram Awal Musim Baru 1449 H*
   - *Umrah Liburan Sekolah (9 & 12 Hari)*
2. **Halaman Detail Itinerary Terpisah (`paket-detail.html`)**:
   - Rute penerbangan, hotel bintang 5 (*Daar El Naeem & Grand Al Massa*), dan agenda hari demi hari.
   - Panduan lengkap kehidupan & ibadah di Arab Saudi (*Etika Masjid, Cuaca, Uang, SIM Card, Colokan, Kuliner*).
   - Panduan 4 Rukun Umrah sesuai Sunnah.
   - Transparansi Fasilitas (*Include / Exclude*).
   - Checklist perlengkapan jamaah interaktif dengan penyimpanan otomatis (*LocalStorage*).
3. **Desain & Tipografi Luxury Editorial**:
   - Palet warna hangat: *Warm Chocolate Brown (`#3b2216`)* & *El Massa Brand Pink (`#d83b7d`)*.
   - Bebas dari badge AI-slop (*Clean Typography*).
   - Outline vector icons (*Lucide Icons*).
   - Mobile-first UX dengan *Sticky WhatsApp Drawer* dan *Horizontal Snap Scrolling*.

---

## 🚀 Menjalankan Project Secara Lokal
```bash
# Menjalankan preview server
node server.js
```
Akses di browser melalui: `http://localhost:3003`

---

## 📁 Struktur Folder
```
├── index.html                  # Halaman Utama / Portal Itinerary
├── paket-detail.html           # Halaman Detail Itinerary & Panduan Saudi
├── server.js                   # Node.js Static Server
├── assets/
│   ├── css/
│   │   └── itinerary.css       # Global stylesheet & design tokens
│   ├── js/
│   │   ├── itinerary.js        # Engine katalog, filter, & search
│   │   └── package-detail.js   # Engine itinerary harian & checklist
│   └── images/                 # Foto hotel, logo, & flyer resmi
└── components/
    └── ItinerarySection.jsx    # Komponen React / Next.js
```

---
© 2026 El Massa Tour & Travel. Hak Cipta Dilindungi.
