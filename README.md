# 🕋 El Massa Tour & Travel - Portal Itinerary Resmi 1448 H

Portal web itinerary dan katalog perjalanan ibadah Umrah resmi untuk **El Massa Tour & Travel** (PPIU Resmi Kementerian Agama RI).

---

## 🌐 Daftar Link Resmi Live Vercel

### 📱 Katalog Digital
* **Katalog Utama**: https://elmassa-itinerarynew.vercel.app

---

### 🗺️ Link Itinerary Direct Setiap Paket
* **Paket November 2026 (10 Hari Direct Saudia)**:  
  https://elmassa-itinerarynew.vercel.app/paket-november2026
* **Paket Umrah bersama Ust. Hanan Attaki (Landing Madinah)**:  
  https://elmassa-itinerarynew.vercel.app/paket-hanan-attaki
* **Paket Akhir Tahun / Desember 2026 (9 Hari)**:  
  https://elmassa-itinerarynew.vercel.app/paket-akhir-tahun
* **Paket Umrah bersama Ust. Dr. H. Muhammad Kurnia (11 Hari)**:  
  https://elmassa-itinerarynew.vercel.app/paket-ustadkurnia
* **Paket Umrah Sayang Orang Tua (Fasilitas 0 km Dekat Haram - 11 Hari)**:  
  https://elmassa-itinerarynew.vercel.app/paket-orang-tua

---

## ✨ Fitur Utama
1. **Katalog Paket Umrah Lengkap**:
   - *Umrah Special November 2026 (Direct Flight Saudia)*
   - *Umrah Special Bersama Ustadz Hanan Attaki (Landing Madinah)*
   - *Umrah Nyaman Akhir Tahun (Desember 2026)*
   - *Umrah Special Bersama Ust. Dr. H. Muhammad Kurnia, Lc., M.Ag.*
   - *Umrah Sayang Orang Tua (Fasilitas 0 km Dekat Haram)*
   - *Paket Musim Lanjutan (Ramadan, Syawal, Muharram, Liburan Sekolah)*
2. **Halaman Detail Itinerary Terpisah & Direct URLs**:
   - Rute penerbangan, hotel bintang 5 (*Daar El Naeem & Grand Al Massa / Olayan Ajyad*), dan agenda hari demi hari.
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
Akses di browser melalui: `http://localhost:3001` atau `http://localhost:3003`

---

## 📁 Struktur Folder
```
├── index.html                  # Halaman Utama / Portal Itinerary
├── paket-detail.html           # Halaman Detail Itinerary Universal
├── paket-november2026.html     # Direct Static Page November 2026
├── paket-hanan-attaki.html     # Direct Static Page Ust. Hanan Attaki
├── paket-akhir-tahun.html      # Direct Static Page Akhir Tahun
├── paket-ustadkurnia.html      # Direct Static Page Ust. Dr. Muhammad Kurnia
├── paket-orang-tua.html        # Direct Static Page Sayang Orang Tua
├── server.js                   # Node.js Static Server
├── vercel.json                 # Vercel Clean URL Rewrites
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
