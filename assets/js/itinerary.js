/**
 * EL MASSA TOUR & TRAVEL - OFFICIAL ITINERARY PORTAL ENGINE
 * Multi-view (List/Timeline Itinerary & Grid Cards), Filter System, Live Search & Schedule Matrix
 */

// Official Packages Database with Full Itinerary Specifications
const PACKAGES_DATA = [
  {
    id: "november",
    slug: "november",
    url: "paket-november2026",
    title: "Umrah Special November 2026 (10 Hari Tanpa Transit)",
    shortTitle: "Umrah Special November",
    category: "november",
    seasonBadge: "Paling Favorit",
    poster: "assets/images/poster-november-reguler.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari",
    departureDay: "03 – 13",
    departureMonthYear: "NOV 2026",
    dates: "03 - 13 November 2026",
    airline: "Saudia Airlines (Direct / Tanpa Transit)",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Free City Tour Thaif & Pabrik Parfum + Bimbingan Sesuai Sunnah"
  },
  {
    id: "hanan-attaki",
    slug: "hanan-attaki",
    url: "paket-hanan-attaki",
    title: "Umrah Special Bersama Ustadz Hanan Attaki",
    shortTitle: "Umrah Ust. Hanan Attaki",
    category: "ustadz",
    seasonBadge: "Spesial Ustadz",
    poster: "assets/images/poster-november-hanan-attaki.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari",
    departureDay: "17 – 26",
    departureMonthYear: "NOV 2026",
    dates: "17 - 26 November 2026",
    airline: "Saudia Airlines (SV821 Landing Madinah)",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Madinah (MED) | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
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
    seasonBadge: "Akhir Tahun",
    poster: "assets/images/poster-desember-akhir-tahun.jpg",
    hasFlyer: true,
    isLocked: false,
    duration: "9 Hari",
    departureDay: "14 – 22",
    departureMonthYear: "DES 2026",
    dates: "14 - 22 Desember 2026",
    airline: "Saudia Airlines Direct Flight",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Jeddah/Madinah | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Sawaed Al Khaer (Pilihan Upgrade ★5: Makkah Tower)",
    bonus: "Bonus Free City Tour Thaif + D'Prima Hotel Transit PP + Air Zamzam 5L"
  },
  {
    id: "nisfu-syaban",
    slug: "nisfu-syaban",
    url: "paket-nisfu-syaban",
    title: "Umrah Nisfu Sya'ban di Makkah (11 Hari)",
    shortTitle: "Umrah Nisfu Sya'ban di Makkah",
    category: "syaban",
    seasonBadge: "Nisfu Sya'ban",
    poster: "assets/images/poster-nisfu-syaban.png",
    hasFlyer: true,
    isLocked: false,
    duration: "11 Hari",
    departureDay: "20 – 30",
    departureMonthYear: "JAN 2027",
    dates: "20 - 30 Januari 2027",
    airline: "Garuda Indonesia Direct Flight",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Jeddah | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Ibadah Malam Nisfu Sya'ban di Ka'bah + Free City Tour Thaif + Hotel Transit PP"
  },
  {
    id: "ramadan",
    slug: "ramadan",
    url: "paket-ramadan",
    title: "Umrah Istimewa Awal Ramadan di Makkah (10 Hari)",
    shortTitle: "Umrah Awal Ramadan di Makkah",
    category: "ramadan-syawal",
    seasonBadge: "Awal Ramadan",
    poster: "assets/images/poster-ramadan.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari",
    departureDay: "05 – 15",
    departureMonthYear: "FEB 2027",
    dates: "05 - 15 Februari 2027",
    airline: "Saudia Airlines (SV821 / SV826)",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Jeddah/Madinah | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Pahala Umrah Ramadan Setara Haji + Free City Tour Thaif + D'Prima Transit PP"
  },
  {
    id: "ustadkurnia",
    slug: "ustadkurnia",
    url: "paket-ustadkurnia",
    title: "Umrah Special Bersama Ust. Dr. H. Muhammad Kurnia, Lc., M.Ag.",
    shortTitle: "Umrah Ust. Dr. Muhammad Kurnia",
    category: "ustadz",
    seasonBadge: "Spesial Ustadz",
    poster: "assets/images/poster-muhammad-kurnia.png",
    hasFlyer: true,
    isLocked: false,
    duration: "11 Hari",
    departureDay: "16 – 27",
    departureMonthYear: "MAR 2027",
    dates: "16 - 27 Maret 2027",
    airline: "Saudia Airlines (SV821/SV818) & Garuda (GA136)",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Madinah (MED) | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Olayan Ajyad (0 km ± 1 menit ke Haram)",
    bonus: "Kajian Tematik Bersama Ust. Dr. Muhammad Kurnia + Free Thaif + D'Prima Transit PP"
  },
  {
    id: "orang-tua",
    slug: "orang-tua",
    url: "paket-orang-tua",
    title: "Umrah Sayang Orang Tua (Fasilitas 0 km Dekat Haram)",
    shortTitle: "Umrah Sayang Orang Tua",
    category: "ramadan-syawal",
    seasonBadge: "Ramah Lansia 0 km",
    poster: "assets/images/poster-sayang-orang-tua.png",
    hasFlyer: true,
    isLocked: false,
    duration: "11 Hari",
    departureDay: "16 – 27",
    departureMonthYear: "MAR 2027",
    dates: "16 - 27 Maret 2027",
    airline: "Saudia Airlines (SV821/SV818) & Garuda (GA136)",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Madinah (MED) | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Olayan Ajyad (0 km ± 1 menit ke Pelataran Haram)",
    bonus: "Akses Super Dekat Khusus Lansia & Kursi Roda + Free Thaif + D'Prima Transit PP"
  },
  {
    id: "syawal",
    slug: "syawal",
    url: "paket-syawal",
    title: "Umrah Lebih Nyaman Syawal (Program 9 & 12 Hari)",
    shortTitle: "Umrah Nyaman Syawal",
    category: "ramadan-syawal",
    seasonBadge: "Bulan Syawal",
    poster: "assets/images/poster-nyaman-syawal.png",
    hasFlyer: true,
    isLocked: false,
    duration: "9 Hari / 12 Hari",
    departureDay: "Syawal",
    departureMonthYear: "MAR 2027",
    dates: "Maret 2027 (Bulan Syawal 1448 H)",
    airline: "Saudia Airlines / Garuda Indonesia",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta & Pangkal Pinang",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Suasana Hari Raya Syawal di Depan Ka'bah + Free City Tour Thaif"
  },
  {
    id: "muharram",
    slug: "muharram",
    url: "paket-muharram",
    title: "Umrah Muharram Awal Musim Baru 1449 H",
    shortTitle: "Umrah Muharram Awal Musim",
    category: "liburan",
    seasonBadge: "Musim Baru 1449 H",
    poster: "assets/images/poster-muharram-awal-musim.png",
    hasFlyer: true,
    isLocked: false,
    duration: "9 Hari",
    departureDay: "Awal",
    departureMonthYear: "JUN 2027",
    dates: "Awal Juni 2027 (Tahun Baru Hijriah)",
    airline: "Saudia Airlines / Garuda Indonesia",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta & Pangkal Pinang",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Pembukaan Musim Baru Umrah 1449 H yang Tenang & Khusyuk + Free Thaif"
  },
  {
    id: "liburan-9h",
    slug: "liburan-9h",
    url: "paket-liburan-9h",
    title: "Umrah Liburan Sekolah (Program 9 Hari)",
    shortTitle: "Umrah Liburan Sekolah 9 Hari",
    category: "liburan",
    seasonBadge: "Liburan Sekolah",
    poster: "assets/images/poster-liburan-sekolah-9h.png",
    hasFlyer: true,
    isLocked: false,
    duration: "9 Hari",
    departureDay: "Akhir",
    departureMonthYear: "JUN 2027",
    dates: "Akhir Juni 2027",
    airline: "Garuda Indonesia / Saudia Airlines",
    flightRoute: "Pangkal Pinang ➔ Jakarta ➔ Madinah/Jeddah | Jeddah ➔ Jakarta ➔ PGK",
    departureCity: "Pangkal Pinang & Jakarta",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Program Edukasi Sejarah Islam untuk Anak & Remaja + Free City Tour Thaif"
  },
  {
    id: "liburan-12h",
    slug: "liburan-12h",
    url: "paket-liburan-12h",
    title: "Umrah Liburan Sekolah (Program 12 Hari Lengkap)",
    shortTitle: "Umrah Liburan Sekolah 12 Hari",
    category: "liburan",
    seasonBadge: "Liburan 12 Hari",
    poster: "assets/images/poster-liburan-sekolah-12h.png",
    hasFlyer: true,
    isLocked: false,
    duration: "12 Hari",
    departureDay: "Akhir",
    departureMonthYear: "JUN 2027",
    dates: "Akhir Juni 2027",
    airline: "Qatar Airways / Etihad Airways",
    flightRoute: "Jakarta (CGK) ➔ Doha/Abu Dhabi ➔ Madinah | Jeddah ➔ CGK",
    departureCity: "Jakarta & Pangkal Pinang",
    hotelMadinah: "Daar El Naeem (★5, 50m Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Haram)",
    bonus: "Waktu Ibadah Lebih Panjang 12 Hari + Bimbingan Manasik Keluarga + Free Thaif"
  }
];

// Current State
let currentViewMode = "list"; // "list" (default) or "grid"
let currentFilteredData = PACKAGES_DATA;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderItineraryPackages(currentFilteredData, currentViewMode);
  renderScheduleSummaryTable(PACKAGES_DATA);
  setupViewModeSwitching();
  setupCategoryFilter();
  setupLiveSearch();
  setupWhatsAppConsultation();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Render Main Itinerary Packages Container (List or Grid)
function renderItineraryPackages(packages, mode = "list") {
  const container = document.getElementById("packages-grid-container");
  const countBadge = document.getElementById("itinerary-count-badge");
  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${packages.length} Jadwal`;
  }

  if (packages.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 bg-white rounded-3xl border border-[#f3e8ee] p-6">
        <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-[#fff0f5] flex items-center justify-center text-[#d83b7d]">
          <i data-lucide="search-x" class="w-6 h-6 stroke-[1.8]"></i>
        </div>
        <h4 class="text-base font-bold text-[#3b2216]">Jadwal Itinerary Tidak Ditemukan</h4>
        <p class="text-xs text-[#765039] mt-1">Coba gunakan kata kunci pencarian lain atau klik tab 'Semua Jadwal'.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  if (mode === "list") {
    // Mode Daftar / Timeline Itinerary
    container.className = "space-y-4 sm:space-y-5";
    let html = "";
    packages.forEach(pkg => {
      const targetUrl = pkg.url || `paket-detail.html?slug=${pkg.slug}`;
      html += `
        <div class="itinerary-row-card p-4 sm:p-5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6 group">
          
          <!-- Left: Date Block & Flyer Preview Thumbnail -->
          <div class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            
            <!-- Date Block -->
            <div class="itinerary-date-block w-24 sm:w-28 py-3 px-2 text-center rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-inner">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#d83b7d]">${pkg.departureMonthYear}</span>
              <span class="text-lg sm:text-xl font-black text-[#3b2216] tracking-tight tabular my-0.5">${pkg.departureDay}</span>
              <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#3b2216] text-white">${pkg.duration}</span>
            </div>
            
            <!-- Flyer Thumbnail Preview -->
            <a href="${targetUrl}" class="relative w-20 sm:w-24 h-24 sm:h-28 rounded-xl overflow-hidden bg-[#faf7f5] border border-[#f0e8eb] flex-shrink-0 block shadow-sm">
              <img src="${pkg.poster}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='assets/images/flyer-coming-soon.svg'">
              <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
            </a>

          </div>

          <!-- Middle: Rich Schedule & Experience Details -->
          <div class="flex-1 min-w-0 space-y-2">
            
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#fff0f5] text-[#d83b7d] border border-[#fce7f3]">
                ${pkg.seasonBadge}
              </span>
              <span class="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                <i data-lucide="map-pin" class="w-3 h-3 text-[#d83b7d]"></i>
                ${pkg.departureCity}
              </span>
              <span class="text-[11px] text-slate-400 font-medium">
                • ${pkg.dates}
              </span>
            </div>

            <h3 class="text-base sm:text-lg font-extrabold text-[#3b2216] group-hover:text-[#d83b7d] transition-colors leading-snug">
              <a href="${targetUrl}">${pkg.title}</a>
            </h3>

            <!-- Route Pipeline Pill -->
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#faf7f5] border border-[#f0e8eb] text-[11px] text-[#765039] font-medium max-w-full overflow-hidden truncate">
              <i data-lucide="plane" class="w-3 h-3 text-[#d83b7d] flex-shrink-0"></i>
              <span class="truncate">${pkg.flightRoute}</span>
            </div>

            <!-- Key Specifications Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#765039] pt-1">
              <div class="flex items-center gap-1.5 truncate">
                <span class="text-slate-400 font-semibold text-[11px] flex-shrink-0">Maskapai:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.airline}</span>
              </div>
              <div class="flex items-center gap-1.5 truncate">
                <span class="text-slate-400 font-semibold text-[11px] flex-shrink-0">Hotel ★5:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.hotelMakkah} / ${pkg.hotelMadinah}</span>
              </div>
              <div class="flex items-center gap-1.5 sm:col-span-2 truncate text-[#d83b7d] font-semibold text-[11px] pt-0.5">
                <i data-lucide="sparkles" class="w-3 h-3 flex-shrink-0"></i>
                <span class="truncate">${pkg.bonus}</span>
              </div>
            </div>

          </div>

          <!-- Right: Action CTA Buttons -->
          <div class="flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-2 flex-shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#f3e8ee]">
            <a href="${targetUrl}" class="px-4 py-2.5 rounded-full bg-[#3b2216] hover:bg-[#d83b7d] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 text-center shadow-sm">
              <span>Buka Detail Itinerary</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 stroke-[2.5]"></i>
            </a>
            <button class="btn-wa-single px-4 py-2 rounded-full bg-white hover:bg-[#fff0f5] text-[#765039] hover:text-[#d83b7d] border border-[#f0e8eb] text-xs font-semibold transition-all flex items-center justify-center gap-1.5" data-title="${pkg.title}">
              <i data-lucide="message-circle" class="w-3.5 h-3.5 text-[#25D366] stroke-[2]"></i>
              <span>Konsultasi Jadwal Ini</span>
            </button>
          </div>

        </div>
      `;
    });
    container.innerHTML = html;
  } else {
    // Mode Grid Visual
    container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6";
    let html = "";
    packages.forEach(pkg => {
      const targetUrl = pkg.url || `paket-detail.html?slug=${pkg.slug}`;
      html += `
        <div class="elm-white-card p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 select-none">
          
          <div>
            <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf7f5] mb-3.5 border border-[#f0e8eb]">
              <img src="${pkg.poster}" alt="${pkg.title}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" onerror="this.src='assets/images/flyer-coming-soon.svg'">
              <div class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-white/95 backdrop-blur-md text-[#d83b7d] shadow-sm">
                ${pkg.seasonBadge}
              </div>
              <div class="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#3b2216]/90 text-white backdrop-blur-md">
                ${pkg.duration}
              </div>
            </div>

            <div class="text-xs font-semibold text-[#d83b7d] mb-1 flex items-center justify-between">
              <span>${pkg.dates}</span>
            </div>

            <h3 class="text-base font-bold text-[#3b2216] group-hover:text-[#d83b7d] transition-colors leading-snug line-clamp-2">
              <a href="${targetUrl}">${pkg.title}</a>
            </h3>

            <div class="mt-3 space-y-1.5 text-xs text-[#765039]">
              <div class="flex items-center gap-2">
                <span class="text-slate-400 text-[11px]">Maskapai:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.airline}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-slate-400 text-[11px]">Hotel ★5:</span>
                <span class="font-medium text-[#3b2216] truncate">${pkg.hotelMakkah}</span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3.5 border-t border-[#f3e8ee] flex items-center justify-between">
            <span class="text-[11px] text-slate-500 font-medium">${pkg.departureCity}</span>
            <a href="${targetUrl}" class="text-xs font-bold text-[#d83b7d] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Detail Rute <i data-lucide="arrow-right" class="w-3.5 h-3.5 stroke-[2.5]"></i>
            </a>
          </div>

        </div>
      `;
    });
    container.innerHTML = html;
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Render Summary Table at Bottom
function renderScheduleSummaryTable(packages) {
  const tableBody = document.getElementById("itinerary-table-body");
  if (!tableBody) return;

  let html = "";
  packages.forEach((pkg, index) => {
    const targetUrl = pkg.url || `paket-detail.html?slug=${pkg.slug}`;
    const bgRow = index % 2 === 0 ? "bg-white" : "bg-[#faf7f5]";
    html += `
      <tr class="${bgRow} hover:bg-[#fff0f5] transition-colors">
        <td class="py-3 px-4 font-bold text-[#3b2216]">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#d83b7d]"></span>
            <span>${pkg.shortTitle}</span>
          </div>
        </td>
        <td class="py-3 px-4 font-medium text-[#765039] whitespace-nowrap">${pkg.dates}</td>
        <td class="py-3 px-4 font-semibold text-[#3b2216] whitespace-nowrap">${pkg.duration}</td>
        <td class="py-3 px-4 text-slate-600">${pkg.airline}</td>
        <td class="py-3 px-4 text-slate-600">${pkg.hotelMakkah} / ${pkg.hotelMadinah}</td>
        <td class="py-3 px-4 text-center whitespace-nowrap">
          <a href="${targetUrl}" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#3b2216] hover:bg-[#d83b7d] text-white text-[11px] font-bold transition-all">
            <span>Buka Itinerary</span>
            <i data-lucide="arrow-right" class="w-3 h-3 stroke-[2.5]"></i>
          </a>
        </td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

// View Mode Switching (List vs Grid)
function setupViewModeSwitching() {
  const btnList = document.getElementById("view-mode-list");
  const btnGrid = document.getElementById("view-mode-grid");

  if (btnList && btnGrid) {
    btnList.addEventListener("click", () => {
      currentViewMode = "list";
      btnList.classList.add("active", "bg-[#3b2216]", "text-white");
      btnList.classList.remove("text-[#765039]");
      btnGrid.classList.remove("active", "bg-[#3b2216]", "text-white");
      btnGrid.classList.add("text-[#765039]");
      renderItineraryPackages(currentFilteredData, currentViewMode);
    });

    btnGrid.addEventListener("click", () => {
      currentViewMode = "grid";
      btnGrid.classList.add("active", "bg-[#3b2216]", "text-white");
      btnGrid.classList.remove("text-[#765039]");
      btnList.classList.remove("active", "bg-[#3b2216]", "text-white");
      btnList.classList.add("text-[#765039]");
      renderItineraryPackages(currentFilteredData, currentViewMode);
    });
  }
}

// Category Filter Handling
function setupCategoryFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-[#3b2216]", "text-white");
        b.classList.add("bg-white", "text-[#3b2216]");
      });
      btn.classList.add("active", "bg-[#3b2216]", "text-white");
      btn.classList.remove("bg-white", "text-[#3b2216]");

      const filterVal = btn.getAttribute("data-filter");

      if (filterVal === "all") {
        currentFilteredData = PACKAGES_DATA;
      } else if (filterVal === "ustadz") {
        currentFilteredData = PACKAGES_DATA.filter(p => p.category === "ustadz");
      } else if (filterVal === "november") {
        currentFilteredData = PACKAGES_DATA.filter(p => p.category === "november" || p.id === "hanan-attaki");
      } else if (filterVal === "akhir-tahun") {
        currentFilteredData = PACKAGES_DATA.filter(p => p.category === "akhir-tahun");
      } else if (filterVal === "syaban") {
        currentFilteredData = PACKAGES_DATA.filter(p => p.category === "syaban");
      } else if (filterVal === "ramadan-syawal") {
        currentFilteredData = PACKAGES_DATA.filter(p => p.category === "ramadan-syawal" || p.id === "ustadkurnia");
      } else if (filterVal === "liburan") {
        currentFilteredData = PACKAGES_DATA.filter(p => p.category === "liburan");
      }

      renderItineraryPackages(currentFilteredData, currentViewMode);
    });
  });
}

// Live Search Handling
function setupLiveSearch() {
  const searchInput = document.getElementById("itinerary-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      currentFilteredData = PACKAGES_DATA;
      renderItineraryPackages(currentFilteredData, currentViewMode);
      return;
    }

    currentFilteredData = PACKAGES_DATA.filter(pkg => {
      return (
        pkg.title.toLowerCase().includes(q) ||
        pkg.shortTitle.toLowerCase().includes(q) ||
        pkg.dates.toLowerCase().includes(q) ||
        pkg.departureMonthYear.toLowerCase().includes(q) ||
        pkg.airline.toLowerCase().includes(q) ||
        pkg.flightRoute.toLowerCase().includes(q) ||
        pkg.departureCity.toLowerCase().includes(q) ||
        pkg.hotelMakkah.toLowerCase().includes(q) ||
        pkg.hotelMadinah.toLowerCase().includes(q) ||
        pkg.bonus.toLowerCase().includes(q)
      );
    });

    renderItineraryPackages(currentFilteredData, currentViewMode);
  });
}

// WhatsApp Direct Consultation Handling
function setupWhatsAppConsultation() {
  // General button
  document.querySelectorAll(".btn-share-wa").forEach(btn => {
    btn.addEventListener("click", () => {
      const text = encodeURIComponent(
        `Assalamu'alaikum Warahmatullahi Wabarakatuh,\n\nSaya ingin konsultasi mengenai jadwal dan rincian itinerary perjalanan Umrah Resmi El Massa Tour & Travel. Mohon dibantu informasi selengkapnya. Terima kasih!`
      );
      window.open(`https://wa.me/6281171715125?text=${text}`, "_blank");
    });
  });

  // Specific package button in list view
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-wa-single");
    if (btn) {
      const pkgTitle = btn.getAttribute("data-title") || "Umrah El Massa";
      const text = encodeURIComponent(
        `Assalamu'alaikum Warahmatullahi Wabarakatuh,\n\nSaya tertarik dengan jadwal dan rangkaian perjalanan *${pkgTitle}* di El Massa Tour & Travel. Mohon info ketersediaan seat dan rincian perjalanannya. Terima kasih!`
      );
      window.open(`https://wa.me/6281171715125?text=${text}`, "_blank");
    }
  });
}
