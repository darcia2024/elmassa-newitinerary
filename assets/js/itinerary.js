/**
 * EL MASSA TOUR & TRAVEL - OFFICIAL 10 PACKAGES CATALOG ENGINE
 * Simple Direct URLs & Editorial Design
 */

// Official 10 Packages Catalog Database with Direct Clean URLs
const PACKAGES_DATA = [
  {
    id: "november",
    slug: "november",
    url: "paket-november2026",
    title: "Umrah Special November 2026 (10 Hari Tanpa Transit)",
    shortTitle: "Umrah Special November",
    category: "direct",
    poster: "assets/images/poster-november-reguler.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari",
    dates: "03 - 13 November 2026",
    airline: "Saudia Airlines (Direct / Tanpa Transit)",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Free City Tour Thaif & Pabrik Parfum + Bimbingan Sunnah"
  },
  {
    id: "hanan-attaki",
    slug: "hanan-attaki",
    url: "paket-hanan-attaki",
    title: "Umrah Special Bersama Ustadz Hanan Attaki",
    shortTitle: "Umrah Ust. Hanan Attaki",
    category: "ustadz",
    poster: "assets/images/poster-november-hanan-attaki.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari (Landing Madinah)",
    dates: "17 - 26 November 2026",
    airline: "Saudia Airlines (Landing Madinah SV821)",
    departure: "Pangkal Pinang (PGK) & Jakarta (CGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa / Upgrade Sofwah/Zamzam Tower (★5)",
    bonus: "Kajian Eksklusif Tematik di Madinah & Makkah + Free Thaif + D'Prima Transit"
  },
  {
    id: "akhir-tahun",
    slug: "akhir-tahun",
    url: "paket-akhir-tahun",
    title: "Umrah Nyaman Akhir Tahun (Program 9 Hari)",
    shortTitle: "Umrah Nyaman Akhir Tahun",
    category: "akhir-tahun",
    poster: "assets/images/poster-desember-akhir-tahun.jpg",
    hasFlyer: true,
    isLocked: false,
    duration: "9 Hari",
    dates: "14 - 22 Desember 2026",
    airline: "Saudia Airlines Direct",
    departure: "Pangkal Pinang (PGK) & Jakarta (CGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Sawaed Al Khaer (Upgrade ★5: Makkah Tower Hotel)",
    bonus: "Free City Tour Thaif + D'Prima Hotel Transit PP + Air Zamzam 5L"
  },
  {
    id: "nisfu-syaban",
    slug: "nisfu-syaban",
    url: "paket-nisfu-syaban",
    title: "Umrah Nisfu Sya'ban di Makkah (9 Hari)",
    shortTitle: "Umrah Nisfu Sya'ban",
    category: "syaban",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari",
    dates: "20 - 30 Januari 2026",
    airline: "Saudia Airlines / Garuda Indonesia Direct",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Ibadah Malam Nisfu Sya'ban di Depan Ka'bah + Free City Tour Thaif"
  },
  {
    id: "ramadan",
    slug: "ramadan",
    url: "paket-ramadan",
    title: "Umrah Istimewa Awal Ramadan di Makkah (9 Hari)",
    shortTitle: "Umrah Awal Ramadan",
    category: "ramadan",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari",
    dates: "Awal Februari 2027",
    airline: "Qatar Airways / Etihad / Oman Air",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Pahala Umrah Setara Ibadah Haji Bersama Nabi SAW + Free Thaif"
  },
  {
    id: "orang-tua",
    slug: "orang-tua",
    url: "paket-orang-tua",
    title: "Umrah Sayang Orang Tua (Fasilitas 0 km Dekat Haram)",
    shortTitle: "Umrah Sayang Orang Tua",
    category: "syawal",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "10 Hari",
    dates: "Maret 2027 (Bulan Syawal)",
    airline: "Garuda Indonesia / Saudia Airlines",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Olayan Ajyad (0 km ± 1 menit ke Haram)",
    bonus: "Akses Super Dekat Khusus Lansia & Kursi Roda + Free City Tour Thaif"
  },
  {
    id: "syawal",
    slug: "syawal",
    url: "paket-syawal",
    title: "Umrah Lebih Nyaman Syawal (Program 9 & 12 Hari)",
    shortTitle: "Umrah Nyaman Syawal",
    category: "syawal",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari / 12 Hari",
    dates: "Maret 2027 (Bulan Syawal)",
    airline: "Saudia Airlines / Garuda Indonesia",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Suasana Hari Raya Syawal di Depan Ka'bah + Free City Tour Thaif"
  },
  {
    id: "muharram",
    slug: "muharram",
    url: "paket-muharram",
    title: "Umrah Muharram Awal Musim Baru 1449 H",
    shortTitle: "Umrah Muharram Awal Musim",
    category: "awal-musim",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari",
    dates: "Awal Juni 2027 (Tahun Baru Hijriah)",
    airline: "Saudia Airlines / Garuda Indonesia",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Pembukaan Musim Baru Umrah 1449 H yang Tenang & Khusyuk + Free Thaif"
  },
  {
    id: "liburan-9h",
    slug: "liburan-9h",
    url: "paket-liburan-9h",
    title: "Umrah Liburan Sekolah (Program 9 Hari)",
    shortTitle: "Umrah Liburan Sekolah 9 Hari",
    category: "liburan",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari",
    dates: "Akhir Juni 2027",
    airline: "Qatar Airways / Etihad Airways",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Program Edukasi Sejarah Islam untuk Anak & Remaja + Free City Tour Thaif"
  },
  {
    id: "liburan-12h",
    slug: "liburan-12h",
    url: "paket-liburan-12h",
    title: "Umrah Liburan Sekolah (Program 12 Hari Lengkap)",
    shortTitle: "Umrah Liburan Sekolah 12 Hari",
    category: "liburan",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "12 Hari",
    dates: "Akhir Juni 2027",
    airline: "Qatar Airways / Etihad Airways",
    departure: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5)",
    hotelMakkah: "Grand Al Massa (★5)",
    bonus: "Waktu Ibadah Lebih Panjang 12 Hari + Bimbingan Manasik Keluarga + Free Thaif"
  }
];

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderPackageCards(PACKAGES_DATA);
  setupCategoryFilter();
  setupLiveSearch();
  setupWhatsAppDirect();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Render Main Package Cards
function renderPackageCards(packages) {
  const container = document.getElementById("packages-grid-container");
  if (!container) return;

  if (packages.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-[#f3e8ee]">
        <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-[#fff0f5] flex items-center justify-center text-[#d83b7d]">
          <i data-lucide="search-x" class="w-6 h-6 stroke-[1.8]"></i>
        </div>
        <h4 class="text-base font-bold text-[#3b2216]">Paket tidak ditemukan</h4>
        <p class="text-xs text-[#765039] mt-1">Coba kata kunci lain atau pilih tab filter 'Semua'.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  let html = '';
  packages.forEach((pkg) => {
    if (pkg.isLocked) {
      // Locked Card
      html += `
        <div class="elm-white-card p-4 sm:p-5 flex flex-col justify-between select-none opacity-90 border border-[#f0e8eb] cursor-default">
          
          <div>
            <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf7f5] mb-4 border border-[#f0e8eb]">
              <img src="${pkg.poster}" alt="${pkg.title}" class="w-full h-full object-cover" onerror="this.src='assets/images/flyer-coming-soon.svg'">
            </div>

            <div class="text-xs font-semibold text-[#765039] mb-1.5 flex items-center justify-between">
              <span>${pkg.duration}</span>
              <span class="text-slate-400 font-medium text-[11px]">${pkg.dates}</span>
            </div>

            <h3 class="text-base font-bold text-[#3b2216] leading-snug line-clamp-2">
              ${pkg.title}
            </h3>

            <div class="mt-3.5 space-y-1.5 text-xs text-[#765039]">
              <div class="flex items-center gap-2">
                <span class="text-slate-400 text-[11px]">Maskapai:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.airline}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-400 text-[11px]">Hotel:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.hotelMakkah}</span>
              </div>
            </div>
          </div>

          <div class="mt-5 pt-3.5 border-t border-[#f3e8ee] flex items-center justify-between text-xs">
            <span class="text-[11px] text-slate-400 font-medium">${pkg.departure}</span>
            <span class="inline-flex items-center gap-1.5 text-slate-500 font-semibold text-xs py-1 px-3 rounded-full bg-[#faf7f5] border border-[#f0e8eb]">
              <i data-lucide="lock" class="w-3.5 h-3.5 stroke-[2] text-[#765039]"></i>
              <span>Segera Rilis</span>
            </span>
          </div>

        </div>
      `;
    } else {
      // Unlocked Official Card with clean direct URL
      const targetUrl = pkg.url || `paket-detail.html?slug=${pkg.slug}`;
      html += `
        <a href="${targetUrl}" class="elm-white-card p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 block select-none">
          
          <div>
            <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf7f5] mb-4 border border-[#f0e8eb]">
              <img src="${pkg.poster}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" onerror="this.src='assets/images/flyer-coming-soon.svg'">
            </div>

            <div class="text-xs font-semibold text-[#d83b7d] mb-1.5 flex items-center justify-between">
              <span>${pkg.duration}</span>
              <span class="text-[#765039] font-medium text-[11px]">${pkg.dates}</span>
            </div>

            <h3 class="text-base font-bold text-[#3b2216] group-hover:text-[#d83b7d] transition-colors leading-snug line-clamp-2">
              ${pkg.title}
            </h3>

            <div class="mt-3.5 space-y-1.5 text-xs text-[#765039]">
              <div class="flex items-center gap-2">
                <span class="text-slate-400 text-[11px]">Maskapai:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.airline}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-400 text-[11px]">Hotel:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.hotelMakkah}</span>
              </div>
            </div>
          </div>

          <div class="mt-5 pt-3.5 border-t border-[#f3e8ee] flex items-center justify-between">
            <span class="text-[11px] text-slate-500 font-medium">${pkg.departure}</span>
            <span class="text-xs font-bold text-[#d83b7d] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Lihat Rute <i data-lucide="arrow-right" class="w-3.5 h-3.5 stroke-[2.5]"></i>
            </span>
          </div>

        </a>
      `;
    }
  });

  container.innerHTML = html;
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Category Filter Handling
function setupCategoryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#3b2216]', 'text-white');
        b.classList.add('bg-white', 'text-[#3b2216]');
      });
      btn.classList.add('active', 'bg-[#3b2216]', 'text-white');
      btn.classList.remove('bg-white', 'text-[#3b2216]');

      const filterVal = btn.getAttribute('data-filter');
      let filtered = PACKAGES_DATA;

      if (filterVal === 'direct') {
        filtered = PACKAGES_DATA.filter(p => p.category === 'direct');
      } else if (filterVal === 'ustadz') {
        filtered = PACKAGES_DATA.filter(p => p.category === 'ustadz');
      } else if (filterVal === 'akhir-tahun') {
        filtered = PACKAGES_DATA.filter(p => p.category === 'akhir-tahun');
      } else if (filterVal === 'syawal' || filterVal === 'ramadan' || filterVal === 'syaban') {
        filtered = PACKAGES_DATA.filter(p => p.category === 'syawal' || p.category === 'ramadan' || p.category === 'syaban');
      } else if (filterVal === 'liburan') {
        filtered = PACKAGES_DATA.filter(p => p.category === 'liburan');
      }

      renderPackageCards(filtered);
    });
  });
}

// Live Search Handling
function setupLiveSearch() {
  const searchInput = document.getElementById('itinerary-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderPackageCards(PACKAGES_DATA);
      return;
    }

    const filtered = PACKAGES_DATA.filter(pkg => {
      return (
        pkg.title.toLowerCase().includes(q) ||
        pkg.shortTitle.toLowerCase().includes(q) ||
        pkg.slug.toLowerCase().includes(q) ||
        (pkg.url && pkg.url.toLowerCase().includes(q)) ||
        pkg.airline.toLowerCase().includes(q) ||
        pkg.departure.toLowerCase().includes(q) ||
        pkg.hotelMakkah.toLowerCase().includes(q) ||
        pkg.hotelMadinah.toLowerCase().includes(q) ||
        pkg.bonus.toLowerCase().includes(q)
      );
    });

    renderPackageCards(filtered);
  });
}

// Direct WhatsApp Consultation
function setupWhatsAppDirect() {
  document.querySelectorAll('.btn-share-wa').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = encodeURIComponent(
        `Assalamu'alaikum Warahmatullahi Wabarakatuh,\n\nSaya ingin konsultasi rincian itinerary & jadwal keberangkatan untuk paket Umrah Resmi El Massa Tour & Travel. Mohon info lengkapnya. Terima kasih!`
      );
      window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    });
  });
}
