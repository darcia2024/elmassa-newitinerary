/**
 * EL MASSA TOUR & TRAVEL - OFFICIAL 10 PACKAGES DETAIL ENGINE
 * 100% Focused on Itinerary, Hotel Specs, Flight Routes, Amenities & Saudi Guide (No Prices)
 */

// Helper to create a comprehensive standard daily itinerary tailored to city & duration
function createTailoredItinerary(pkgName, daysCount, madinahNights, makkahNights, airlineName, bonusThaif, specialNote) {
  const list = [];

  // Day 1: Departure
  list.push({
    day: 1,
    city: "Pangkal Pinang ➔ Jakarta ➔ Madinah/Jeddah",
    title: `Keberangkatan Menuju Tanah Suci (${airlineName})`,
    agenda: [
      { time: "Pagi", title: "Berkumpul di Bandara", desc: "Jemaah berkumpul di Bandara Depati Amir Pangkal Pinang / Soekarno-Hatta Jakarta, proses bagasi & penyerahan paspor." },
      { time: "Siang/Sore", title: "Penerbangan Menuju Tanah Suci", desc: `Penerbangan dengan maskapai ${airlineName}. Menikmati in-flight meals dan istirahat di pesawat.` },
      { time: "Malam", title: "Tiba di Tanah Suci & Transfer Hotel", desc: "Mendarat di bandara tujuan, fast-track imigrasi, dan perjalanan bus VIP menuju hotel bintang 5 Madinah." }
    ],
    highlight: `Penerbangan nyaman bersama ${airlineName} dan istirahat di hotel bintang 5 dekat masjid.`,
    sunnahAmalan: "Membaca doa safar dan melantunkan sholawat atas Nabi SAW.",
    dressCode: "Batik resmi El Massa saat berangkat."
  });

  // Madinah Days
  for (let d = 2; d <= madinahNights + 1; d++) {
    if (d === 2) {
      list.push({
        day: d,
        city: "Madinah Munawwarah",
        title: "Masuk Raudhah Sesuai Tasreh & Ziarah Makam Rasulullah SAW",
        agenda: [
          { time: "Subuh - Pagi", title: "Masuk Raudhah Asy-Syarifah", desc: "Bermunajat di taman surga Raudhah sesuai jadwal Tasreh resmi dari aplikasi Nusuk yang diatur oleh tim El Massa." },
          { time: "08:00 LT", title: "Ziarah Sekitar Masjid Nabawi", desc: "Pengenalan Saqifah Bani Sa'idah, Makam Rasulullah SAW, Makam Abu Bakar RA & Umar RA, Masjid Ali, dan Pemakaman Baqi'." },
          { time: "Sore/Malam", title: "Kajian Fiqih Ibadah", desc: specialNote || "Kajian pemantapan rukun ihram dan fiqih umrah bersama Ustadz Pembimbing di hotel." }
        ],
        highlight: "Bermunajat di Raudhah (Taman Surga) tempat mustajab berdoa.",
        sunnahAmalan: "Memperbanyak sholawat dan sholat sunnah di Raudhah.",
        dressCode: "Gamis putih bersih / busana muslim rapi."
      });
    } else if (d === 3) {
      list.push({
        day: d,
        city: "Madinah Munawwarah",
        title: "City Tour Jejak Sejarah Islam Madinah (Masjid Quba & Uhud)",
        agenda: [
          { time: "07:00 LT", title: "Ziarah Masjid Quba", desc: "Mengambil wudhu dari hotel dan sholat sunnah 2 rakaat di Masjid Quba (Pahala setara 1 kali Umrah sempurna)." },
          { time: "09:00 LT", title: "Napak Tilas Jabal Uhud & Makam Syuhada", desc: "Ziarah ke makam Sayyidina Hamzah RA dan para syuhada perang Uhud." },
          { time: "10:30 LT", title: "Kunjungan Kebun Kurma Al-Madinah", desc: "Mencicipi kurma Ajwa Nabi, Sukari, dan oleh-oleh khas Madinah." },
          { time: "Siang - Malam", title: "I'tikaf di Masjid Nabawi", desc: "Memperbanyak ibadah mandiri, tilawah Al-Qur'an, dan sholat 5 waktu berjamaah." }
        ],
        highlight: "Meraih pahala 1x umrah di Masjid Quba & tadabbur sejarah para sahabat.",
        sunnahAmalan: "Menjaga wudhu sejak dari kamar hotel menuju Masjid Quba.",
        dressCode: "Pakaian sopan kasual muslim & kacamata hitam."
      });
    } else {
      list.push({
        day: d,
        city: "Madinah Munawwarah",
        title: "I'tikaf & Memperbanyak Ibadah di Masjid Nabawi",
        agenda: [
          { time: "03:30 LT", title: "Qiyamul Lail di Masjid Nabawi", desc: "Sholat tahajud, witir, dan munajat di pelataran Nabawi." },
          { time: "Sepanjang Hari", title: "Ibadah Mandiri & Dzikir", desc: "Memperbanyak sholawat, tadarus Al-Qur'an dan sholat berjamaah di Nabawi." }
        ],
        highlight: "Kekhusyukan ibadah di Masjid Nabawi berjarak hanya 50m dari hotel.",
        sunnahAmalan: "Memperbanyak membaca Al-Qur'an dan sholawat.",
        dressCode: "Pakaian muslim rapi."
      });
    }
  }

  // Journey to Makkah (Miqat Day)
  const miqatDay = madinahNights + 2;
  list.push({
    day: miqatDay,
    city: "Madinah ➔ Miqat Bir Ali ➔ Makkah",
    title: "Check-out Madinah, Miqat di Bir Ali & Pelaksanaan Umrah Pertama",
    agenda: [
      { time: "09:00 LT", title: "Mandi Sunnah Ihram di Hotel", desc: "Mengenakan kain ihram (pria) / pakaian ihram syar'i (wanita). Koper disiapkan di depan kamar." },
      { time: "14:00 LT", title: "Singgah di Masjid Bir Ali (Dzulhulaifah)", desc: "Sholat sunnah ihram 2 rakaat dan melafadzkan niat Umrah bersama dipandu Muthawwif." },
      { time: "Perjalanan", title: "Melantunkan Talbiyah Sepanjang Safar", desc: "Membaca Talbiyah 'Labbaikallahumma Labbaik' selama perjalanan menuju kota Makkah." },
      { time: "Malam", title: "Pelaksanaan Rukun Umrah Pertama (Wajib)", desc: "Setibanya di Makkah langsung menuju Masjidil Haram melaksanakan Thawaf 7 putaran, Sa'i Shafa-Marwah, dan Tahallul." }
    ],
    highlight: "Niat sakral di Miqat Bir Ali dan pelaksanaan rukun Umrah pertama di depan Ka'bah.",
    sunnahAmalan: "Melantunkan Talbiyah tanpa henti sepanjang perjalanan.",
    dressCode: "Pakaian Ihram."
  });

  // Makkah Days
  let makkahDayStart = miqatDay + 1;
  const departureHomeDay = daysCount;

  for (let d = makkahDayStart; d < departureHomeDay - 1; d++) {
    if (d === makkahDayStart) {
      list.push({
        day: d,
        city: "Makkah Mukarramah",
        title: "Memperbanyak Ibadah di Masjidil Haram & Thawaf Sunnah",
        agenda: [
          { time: "03:00 LT", title: "Qiyamul Lail di Depan Ka'bah", desc: "Sholat tahajud dan munajat di pelataran mataf Ka'bah." },
          { time: "Siang/Sore", title: "Thawaf Sunnah & Kajian", desc: "Thawaf sunnah mengitari Ka'bah dan berdoa di Multazam serta Hijir Ismail." }
        ],
        highlight: "Meraih pahala 100.000x lipat di Masjidil Haram.",
        sunnahAmalan: "Thawaf sunnah dan meminum air Zamzam.",
        dressCode: "Pakaian muslim bersih."
      });
    } else if (d === makkahDayStart + 1) {
      list.push({
        day: d,
        city: "Makkah Mukarramah",
        title: "City Tour Jejak Sejarah Makkah & Miqat Ji'ranah (Umrah ke-2)",
        agenda: [
          { time: "07:00 LT", title: "Ziarah Sejarah Makkah", desc: "Napak tilas Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, dan Mina." },
          { time: "10:30 LT", title: "Miqat di Masjid Ji'ranah", desc: "Mengambil niat umrah bagi jamaah yang berniat Umrah ke-2 / Badal Umrah." },
          { time: "Siang", title: "Pelaksanaan Umrah ke-2", desc: "Prosesi Thawaf, Sa'i, dan Tahallul umrah kedua didampingi pembimbing." }
        ],
        highlight: "Napak tilas di Padang Arafah & kesempatan ibadah Umrah Badal.",
        sunnahAmalan: "Mendoakan orang tua dan sanak keluarga di Arafah.",
        dressCode: "Pakaian Ihram bagi yang berniat umrah ke-2."
      });
    } else if (d === makkahDayStart + 2) {
      list.push({
        day: d,
        city: "Makkah ➔ Thaif ➔ Makkah",
        title: "Bonus City Tour Thaif Gratis dari El Massa & Peluang Umrah ke-3",
        agenda: [
          { time: "07:30 LT", title: "Perjalanan Menuju Pegunungan Thaif", desc: "Menikmati udara sejuk Thaif, mengunjungi Masjid Ibnu Abbas, kebun mawar, dan cable car." },
          { time: "12:30 LT", title: "Makan Siang Nasi Mandhi Khas Arab", desc: "Santap siang bersama menikmati hidangan khas pegunungan Thaif." },
          { time: "Sore", title: "Melewati Miqat Qarnul Manazil", desc: "Singgah di tempat Miqat bagi jamaah yang ingin berihram untuk Umrah ke-3." }
        ],
        highlight: "Bonus eksklusif: Wisata sejarah pegunungan sejuk Thaif dan pabrik parfum mawar.",
        sunnahAmalan: "Tadabbur kesabaran dakwah baginda Rasulullah SAW di Thaif.",
        dressCode: "Pakaian kasual muslim dan jaket hangat."
      });
    } else {
      list.push({
        day: d,
        city: "Makkah Mukarramah",
        title: "Ibadah Khusyuk di Masjidil Haram & Persiapan Kepulangan",
        agenda: [
          { time: "Sepanjang Hari", title: "I'tikaf & Thawaf Sunnah", desc: "Keleluasaan waktu bagi jamaah untuk beribadah mandiri di depan Ka'bah." }
        ],
        highlight: "Kekhusyukan ibadah di depan Ka'bah Baitullah.",
        sunnahAmalan: "Khataman Al-Qur'an dan sedekah.",
        dressCode: "Pakaian muslim rapi."
      });
    }
  }

  // Day before last: Thawaf Wada & Jeddah
  list.push({
    day: daysCount - 1,
    city: "Makkah ➔ Thawaf Wada' ➔ Jeddah ➔ Bandara",
    title: "Thawaf Wada' (Perpisahan), City Tour Jeddah & Penerbangan",
    agenda: [
      { time: "Pagi", title: "Thawaf Wada' (Perpisahan)", desc: "Melaksanakan Thawaf Perpisahan 7 putaran penuh haru di depan Ka'bah." },
      { time: "Siang/Sore", title: "Check-out & Transfer ke Jeddah", desc: "Perjalanan bus VIP menuju kota pesisir Jeddah, melihat Masjid Terapung Laut Merah dan Corniche." },
      { time: "Malam", title: "Proses Check-in di Bandara Jeddah", desc: "Proses bagasi, penyerahan air Zamzam 5L resmi, dan boarding penerbangan pulang." }
    ],
    highlight: "Momen perpisahan haru dengan Ka'bah dan menikmati pesona Laut Merah Jeddah.",
    sunnahAmalan: "Menatap Ka'bah dengan penuh cinta memohon agar diundang kembali ke Baitullah.",
    dressCode: "Batik resmi El Massa."
  });

  // Final Day: Arrival Home
  list.push({
    day: daysCount,
    city: "Jakarta ➔ Pangkal Pinang",
    title: "Tiba di Tanah Air - Pembagian Zamzam 5L & Penutupan",
    agenda: [
      { time: "Pagi/Siang", title: "Mendarat di Tanah Air", desc: "Tiba di Bandara Soekarno-Hatta Jakarta / Bandara Depati Amir Pangkal Pinang dengan selamat." },
      { time: "Selesai", title: "Penyerahan Bagasi & Air Zamzam 5L", desc: "Pembagian koper utuh, galon air Zamzam resmi 5 Liter, dan bingkisan kenang-kenangan." }
    ],
    highlight: "Kembali ke tanah air dengan membawa predikat Umrah Mabrur & Maqbullah.",
    sunnahAmalan: "Melakukan sujud syukur setibanya di tanah air.",
    dressCode: "Pakaian bebas rapi."
  });

  return list;
}

// Comprehensive 10 Packages Database
const ALL_PACKAGES = {
  // 1. UMRAH SPECIAL NOVEMBER 2026
  "november": {
    id: "november",
    slug: "november",
    title: "Umrah Special November 2026 (10 Hari Tanpa Transit)",
    shortTitle: "Umrah Special November",
    category: "direct",
    badge: "Paling Favorit",
    poster: "assets/images/poster-november-reguler.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari (03 - 13 Nov 2026)",
    departureDate: "03 November 2026",
    returnDate: "13 November 2026",
    airline: "Saudia Airlines (Direct Flight / Tanpa Transit)",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 25,
    leadUstadz: "Ustadz Pembimbing Bersertifikat Kemenag RI & Muthawwif Mukim",
    bonus: "Free City Tour Thaif & Pabrik Parfum + Bimbingan Ibadah Sesuai Sunnah",
    itineraryDays: createTailoredItinerary("Umrah Special November", 10, 3, 4, "Saudia Airlines Direct", true, "Kajian fiqih umrah & sunnah ihram bersama pembimbing di hotel.")
  },

  // 2. UMRAH SPECIAL BERSAMA USTADZ HANAN ATTAKI
  "hanan-attaki": {
    id: "hanan-attaki",
    slug: "hanan-attaki",
    title: "Umrah Special Bersama Ustadz Hanan Attaki",
    shortTitle: "Umrah Ust. Hanan Attaki",
    category: "ustadz",
    badge: "Spesial Ustadz",
    poster: "assets/images/poster-november-hanan-attaki.png",
    hasFlyer: true,
    isLocked: false,
    duration: "10 Hari (17 - 26 Nov 2026)",
    departureDate: "17 November 2026",
    returnDate: "26 November 2026",
    airline: "Saudia Airlines SV821 (Landing Madinah)",
    flightRoute: "Pangkal Pinang (PGK) ➔ Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta ➔ Pangkal Pinang",
    departureCity: "Pangkal Pinang (Bandara Depati Amir) & Jakarta (CGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5) / Pilihan Upgrade: Sofwah / Zamzam Tower (★5)",
    seatsAvailable: 25,
    leadUstadz: "Ustadz Hanan Attaki, Lc. (Founder Shift Pemuda Hijrah) & Muthawwif Mukim",
    bonus: "Kajian Eksklusif Tematik di Madinah & Makkah + Free City Tour Thaif + D'Prima Hotel Transit",
    itineraryDays: createTailoredItinerary("Umrah Ust. Hanan Attaki", 10, 3, 4, "Saudia Airlines (Landing Madinah)", true, "Kajian Khusus Tematik Bersama Ustadz Hanan Attaki di Madinah & Makkah.")
  },

  // 3. UMRAH NYAMAN AKHIR TAHUN
  "akhir-tahun": {
    id: "akhir-tahun",
    slug: "akhir-tahun",
    title: "Umrah Nyaman Akhir Tahun (Program 9 Hari)",
    shortTitle: "Umrah Nyaman Akhir Tahun",
    category: "akhir-tahun",
    badge: "Akhir Tahun",
    poster: "assets/images/poster-desember-akhir-tahun.jpg",
    hasFlyer: true,
    isLocked: false,
    duration: "9 Hari (14 - 22 Des 2026)",
    departureDate: "14 Desember 2026",
    returnDate: "22 Desember 2026",
    airline: "Saudia Airlines Direct",
    flightRoute: "Pangkal Pinang (PGK) ➔ Jakarta (CGK) ➔ Jeddah/Madinah | Jeddah ➔ Jakarta ➔ Pangkal Pinang",
    departureCity: "Pangkal Pinang (Bandara Depati Amir) & Jakarta (CGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Sawaed Al Khaer (Pilihan Upgrade Bintang 5: Makkah Tower Hotel)",
    seatsAvailable: 36,
    leadUstadz: "Dewan Pembimbing Ibadah Senior El Massa & Muthawwif Mukim",
    bonus: "Bonus City Tour Thaif Gratis dari El Massa + D'Prima Hotel Transit PP + Air Zamzam 5L",
    itineraryDays: createTailoredItinerary("Umrah Nyaman Akhir Tahun", 9, 3, 3, "Saudia Airlines Direct", true, "Kajian muhasabah dan tausiyah akhir tahun di Masjid Nabawi.")
  },

  // 4. UMRAH NISFU SYA'BAN DI MEKKAH
  "nisfu-syaban": {
    id: "nisfu-syaban",
    slug: "nisfu-syaban",
    title: "Umrah Nisfu Sya'ban di Makkah (9 Hari)",
    shortTitle: "Umrah Nisfu Sya'ban",
    category: "syaban",
    badge: "Nisfu Sya'ban",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari (20 - 30 Jan 2026)",
    departureDate: "20 Januari 2026",
    returnDate: "30 Januari 2026",
    airline: "Saudia Airlines / Garuda Indonesia Direct",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 30,
    leadUstadz: "Ustadz Pembimbing Ibadah Senior El Massa",
    bonus: "Ibadah Malam Nisfu Sya'ban di Depan Ka'bah + Free City Tour Thaif",
    itineraryDays: createTailoredItinerary("Umrah Nisfu Sya'ban", 9, 3, 3, "Saudia Airlines / Garuda Indonesia", true, "Doa & munajat khusus malam Nisfu Sya'ban di depan Ka'bah.")
  },

  // 5. UMRAH AWAL RAMADAN
  "ramadan": {
    id: "ramadan",
    slug: "ramadan",
    title: "Umrah Istimewa Awal Ramadan di Makkah (9 Hari)",
    shortTitle: "Umrah Awal Ramadan",
    category: "ramadan",
    badge: "Awal Ramadan",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari (Awal Feb 2027)",
    departureDate: "Awal Februari 2027",
    returnDate: "Februari 2027",
    airline: "Qatar Airways / Etihad / Oman Air",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 30,
    leadUstadz: "Ustadz Pembimbing Ibadah Ramadan El Massa",
    bonus: "Pahala Umrah Setara Ibadah Haji Bersama Nabi SAW + Free Thaif",
    itineraryDays: createTailoredItinerary("Umrah Awal Ramadan", 9, 3, 3, "Qatar / Etihad Airways", true, "Menikmati indahnya sholat Tarawih berjamaah di Masjidil Haram & Nabawi.")
  },

  // 6. UMRAH SAYANG ORANG TUA
  "orang-tua": {
    id: "orang-tua",
    slug: "orang-tua",
    title: "Umrah Sayang Orang Tua (Fasilitas 0 km Dekat Haram)",
    shortTitle: "Umrah Sayang Orang Tua",
    category: "syawal",
    badge: "Ramah Lansia 0 km",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "10 Hari (Maret 2027)",
    departureDate: "Maret 2027 (Bulan Syawal)",
    returnDate: "Maret 2027",
    airline: "Garuda Indonesia / Saudia Airlines",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Olayan Ajyad (0 km ± 1 Menit ke Pelataran Haram)",
    seatsAvailable: 25,
    leadUstadz: "Tim Medis & Ustadz Pembimbing Ramah Lansia",
    bonus: "Akses Super Dekat Khusus Lansia & Kursi Roda + Free City Tour Thaif",
    itineraryDays: createTailoredItinerary("Umrah Sayang Orang Tua", 10, 3, 4, "Garuda Indonesia / Saudia", true, "Fasilitas kursi roda, bimbingan khusus lansia, dan hotel 0 km.")
  },

  // 7. UMRAH NYAMAN SYAWAL
  "syawal": {
    id: "syawal",
    slug: "syawal",
    title: "Umrah Lebih Nyaman Syawal (Program 9 & 12 Hari)",
    shortTitle: "Umrah Nyaman Syawal",
    category: "syawal",
    badge: "Bulan Syawal",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari / 12 Hari",
    departureDate: "Maret 2027 (Bulan Syawal)",
    returnDate: "Maret 2027",
    airline: "Saudia Airlines / Garuda Indonesia",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 35,
    leadUstadz: "Ustadz Pembimbing Ibadah Syawal El Massa",
    bonus: "Suasana Hari Raya Syawal di Depan Ka'bah + Free City Tour Thaif",
    itineraryDays: createTailoredItinerary("Umrah Nyaman Syawal", 9, 3, 3, "Saudia Airlines / Garuda", true, "Ibadah tenang pasca puncak musim haji di Masjidil Haram.")
  },

  // 8. UMRAH MUHARRAM AWAL MUSIM BARU
  "muharram": {
    id: "muharram",
    slug: "muharram",
    title: "Umrah Muharram Awal Musim Baru 1449 H",
    shortTitle: "Umrah Muharram Awal Musim",
    category: "awal-musim",
    badge: "Musim Baru 1449 H",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari (Awal Juni 2027)",
    departureDate: "Awal Juni 2027 (Tahun Baru Hijriah)",
    returnDate: "Juni 2027",
    airline: "Saudia Airlines / Garuda Indonesia",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 35,
    leadUstadz: "Ustadz Pembimbing Hijriah El Massa",
    bonus: "Pembukaan Musim Baru Umrah 1449 H yang Tenang & Khusyuk + Free Thaif",
    itineraryDays: createTailoredItinerary("Umrah Muharram Awal Musim", 9, 3, 3, "Saudia Airlines / Garuda", true, "Suasana baru pembukaan pintu umrah musim 1449 H.")
  },

  // 9. UMRAH LIBURAN SEKOLAH (9 HARI)
  "liburan-9h": {
    id: "liburan-9h",
    slug: "liburan-9h",
    title: "Umrah Liburan Sekolah (Program 9 Hari)",
    shortTitle: "Umrah Liburan Sekolah 9 Hari",
    category: "liburan",
    badge: "Liburan 9 Hari",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "9 Hari (Akhir Juni 2027)",
    departureDate: "Akhir Juni 2027",
    returnDate: "Juli 2027",
    airline: "Qatar Airways / Etihad Airways",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 35,
    leadUstadz: "Ustadz Pembimbing Edukasi Keluarga El Massa",
    bonus: "Program Edukasi Sejarah Islam untuk Anak & Remaja + Free City Tour Thaif",
    itineraryDays: createTailoredItinerary("Umrah Liburan Sekolah 9 Hari", 9, 3, 3, "Qatar Airways / Etihad", true, "Bimbingan manasik ramah anak dan remaja.")
  },

  // 10. UMRAH LIBURAN SEKOLAH (12 HARI)
  "liburan-12h": {
    id: "liburan-12h",
    slug: "liburan-12h",
    title: "Umrah Liburan Sekolah (Program 12 Hari Lengkap)",
    shortTitle: "Umrah Liburan Sekolah 12 Hari",
    category: "liburan",
    badge: "Liburan 12 Hari",
    poster: "assets/images/flyer-coming-soon.svg",
    hasFlyer: false,
    isLocked: true,
    duration: "12 Hari (Akhir Juni 2027)",
    departureDate: "Akhir Juni 2027",
    returnDate: "Juli 2027",
    airline: "Qatar Airways / Etihad Airways (Transit Singkat)",
    flightRoute: "Jakarta (CGK) ➔ Madinah (MED) | Jeddah (JED) ➔ Jakarta (CGK)",
    departureCity: "Jakarta (CGK) & Pangkal Pinang (PGK)",
    hotelMadinah: "Daar El Naeem (★5, 50m ke Nabawi)",
    hotelMakkah: "Grand Al Massa (★5, Dekat Pelataran Haram)",
    seatsAvailable: 35,
    leadUstadz: "Ustadz Pembimbing Edukasi Keluarga El Massa",
    bonus: "Waktu Ibadah Lebih Panjang 12 Hari + Bimbingan Manasik Keluarga + Free Thaif",
    itineraryDays: createTailoredItinerary("Umrah Liburan Sekolah 12 Hari", 12, 4, 5, "Qatar Airways / Etihad Airways", true, "Waktu leluasa 12 hari untuk ibadah mendalam dan edukasi keluarga muslim.")
  }
};

// Aliases mapping for backward compatibility and clean root URLs
const SLUG_ALIASES = {
  "paket-november2026": "november",
  "paket-november": "november",
  "november2026": "november",
  "umrah-special-november-2026": "november",
  "umrah-special-november": "november",
  "paket-hanan-attaki": "hanan-attaki",
  "paket-hananattaki": "hanan-attaki",
  "umrah-spesial-ustadz-hanan-attaki": "hanan-attaki",
  "umrah-hanan-attaki": "hanan-attaki",
  "paket-akhir-tahun": "akhir-tahun",
  "paket-akhirtahun": "akhir-tahun",
  "paket-desember": "akhir-tahun",
  "umrah-nyaman-akhir-tahun-desember-2026": "akhir-tahun",
  "umrah-akhir-tahun": "akhir-tahun",
  "desember": "akhir-tahun",
  "paket-nisfu-syaban": "nisfu-syaban",
  "umrah-nisfu-syaban-januari-2026": "nisfu-syaban",
  "umrah-nisfu-syaban": "nisfu-syaban",
  "paket-ramadan": "ramadan",
  "umrah-awal-ramadan-2027": "ramadan",
  "umrah-awal-ramadan": "ramadan",
  "paket-orang-tua": "orang-tua",
  "umrah-sayang-orang-tua-syawal-2027": "orang-tua",
  "umrah-sayang-orang-tua": "orang-tua",
  "paket-syawal": "syawal",
  "umrah-nyaman-syawal-2027": "syawal",
  "umrah-nyaman-syawal": "syawal",
  "paket-muharram": "muharram",
  "umrah-muharram-awal-musim-1449h": "muharram",
  "umrah-muharram-awal-musim": "muharram",
  "paket-liburan-9h": "liburan-9h",
  "umrah-liburan-sekolah-9-hari": "liburan-9h",
  "umrah-liburan-sekolah-9h": "liburan-9h",
  "paket-liburan-12h": "liburan-12h",
  "umrah-liburan-sekolah-12-hari": "liburan-12h",
  "umrah-liburan-sekolah-12h": "liburan-12h"
};

// Populate aliases in ALL_PACKAGES
Object.keys(SLUG_ALIASES).forEach(alias => {
  const target = SLUG_ALIASES[alias];
  if (ALL_PACKAGES[target]) {
    ALL_PACKAGES[alias] = ALL_PACKAGES[target];
  }
});

// Extract active package from URL slug, query params, or default to November
function getActivePackageFromURL() {
  const params = new URLSearchParams(window.location.search);
  let rawSlug = params.get('slug') || params.get('id');

  // Also support pathname extraction e.g. /paket-november2026, /paket-november, /paket/november
  if (!rawSlug) {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && lastPart !== 'paket-detail.html' && lastPart !== 'paket-detail') {
      rawSlug = lastPart.replace('.html', '');
    }
  }

  // Normalize slug
  let normalizedSlug = rawSlug ? rawSlug.toLowerCase().trim() : '';

  // Resolve alias if any
  const resolvedSlug = SLUG_ALIASES[normalizedSlug] || normalizedSlug;
  const pkg = ALL_PACKAGES[resolvedSlug] || ALL_PACKAGES["november"];

  // If locked, redirect to catalog section
  if (pkg && pkg.isLocked) {
    window.location.href = "index.html#katalog-section";
    return ALL_PACKAGES["november"];
  }

  return pkg;
}

let activePackage = getActivePackageFromURL();

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderDedicatedPackagePage();
  setupBookingFormWA();
  setupSaudiTabs();
  setupChecklistPersistence();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Render the Entire Dedicated Detail Page (No Prices - 100% Itinerary & Experience Focus)
function renderDedicatedPackagePage() {
  const pkg = activePackage;
  if (!pkg) return;

  // Header Titles & Meta
  const elTitle = document.getElementById("pkg-main-title");
  const elSubtitle = document.getElementById("pkg-subtitle");
  const elAirline = document.getElementById("pkg-airline-text");
  const elHotelMad = document.getElementById("pkg-hotel-madinah-text");
  const elHotelMak = document.getElementById("pkg-hotel-makkah-text");
  const elLead = document.getElementById("pkg-lead-ustadz-text");
  const elBonus = document.getElementById("pkg-bonus-text");
  const elPosterImg = document.getElementById("pkg-poster-img");

  if (elTitle) elTitle.innerText = pkg.title;
  if (elSubtitle) elSubtitle.innerText = `Program ${pkg.duration} • ${pkg.departureDate} - ${pkg.returnDate} • Keberangkatan ${pkg.departureCity}`;
  if (elAirline) elAirline.innerText = pkg.airline;
  if (elHotelMad) elHotelMad.innerText = pkg.hotelMadinah;
  if (elHotelMak) elHotelMak.innerText = pkg.hotelMakkah;
  if (elLead) elLead.innerText = pkg.leadUstadz;
  if (elBonus) elBonus.innerText = pkg.bonus;
  if (elPosterImg) elPosterImg.src = pkg.poster;

  // Section 4 Hotel Titles & Descriptions
  const elSecHotelMadTitle = document.getElementById("section-hotel-madinah-title");
  const elSecHotelMadDesc = document.getElementById("section-hotel-madinah-desc");
  const elSecHotelMakTitle = document.getElementById("section-hotel-makkah-title");
  const elSecHotelMakDesc = document.getElementById("section-hotel-makkah-desc");
  const elSecHotelMadImg = document.getElementById("section-hotel-madinah-img");
  const elSecHotelMakImg = document.getElementById("section-hotel-makkah-img");

  if (elSecHotelMadTitle) elSecHotelMadTitle.innerText = `${pkg.hotelMadinah.split('(')[0].trim()} ★★★★★`;
  if (elSecHotelMadDesc) elSecHotelMadDesc.innerText = `Akomodasi Bintang 5 Madinah: ${pkg.hotelMadinah}`;
  if (elSecHotelMakTitle) elSecHotelMakTitle.innerText = `${pkg.hotelMakkah.split('(')[0].trim()} ★★★★★`;
  if (elSecHotelMakDesc) elSecHotelMakDesc.innerText = `Akomodasi Bintang 5 Makkah: ${pkg.hotelMakkah}`;
  if (elSecHotelMadImg) elSecHotelMadImg.src = "assets/images/daar-el-naeem.jpg";
  if (elSecHotelMakImg) elSecHotelMakImg.src = "assets/images/grand-al-massa.jpg";

  // Render Daily Itinerary Accordions
  renderItineraryAccordionList(pkg.itineraryDays);
}

// Render Daily Itinerary List on Dedicated Page
function renderItineraryAccordionList(days) {
  const container = document.getElementById("itinerary-days-container");
  if (!container) return;

  let html = '';
  days.forEach((item, index) => {
    const isExpanded = index === 0;
    const isSpecialDay = item.day === 2 || item.day === 4 || item.day === 6 || item.day === 8;

    html += `
      <div class="day-accordion-card bg-white rounded-2xl md:rounded-3xl border ${isSpecialDay ? 'border-pink-300 shadow-sm' : 'border-[#fce7f3]'} overflow-hidden transition-all duration-300" data-day="${item.day}">
        
        <!-- Accordion Header -->
        <div onclick="toggleDedicatedDayAccordion(${item.day})" class="cursor-pointer p-3.5 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 select-none ${isSpecialDay ? 'bg-gradient-to-r from-[#fff0f5] via-white to-[#fff8f6]' : 'bg-[#fff8f6]/70'} hover:bg-[#fff0f5] transition-colors">
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${isSpecialDay ? 'bg-[#d83b7d] text-white font-extrabold shadow-md' : 'bg-[#3b2216] text-white font-bold'} flex flex-col items-center justify-center text-xs shadow-xs tabular flex-shrink-0">
              <span class="text-[9px] sm:text-[10px] opacity-80 font-normal">HARI</span>
              <span class="text-xs sm:text-sm font-black leading-none">${item.day}</span>
            </div>
            <div>
              <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold text-[#765039]">
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-[#fce7f3] text-[#d83b7d]">
                  <i data-lucide="map-pin" class="w-3 h-3 stroke-[2]"></i>
                  <span>${item.city}</span>
                </span>
                ${item.date ? `<span class="px-2 py-0.5 rounded-md bg-[#fff7f9] text-[#765039] font-semibold">${item.date}</span>` : ''}
              </div>
              <h3 class="text-xs sm:text-base font-bold text-[#3b2216] mt-0.5 leading-snug">${item.title}</h3>
            </div>
          </div>

          <div class="day-chevron-icon w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#fce7f3] flex items-center justify-center text-[#d83b7d] text-xs font-bold transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#fff0f5]' : ''}">
            <i data-lucide="chevron-down" class="w-4 h-4 stroke-[2.5]"></i>
          </div>
        </div>

        <!-- Accordion Body Content -->
        <div id="day-body-${item.day}" class="p-4 sm:p-7 border-t border-[#fce7f3] bg-white ${isExpanded ? 'block' : 'hidden'} space-y-4 sm:space-y-5 text-xs">
          
          <!-- Highlight Banner -->
          <div class="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#3b2216] to-[#4a2e22] text-white flex items-start gap-2.5 sm:gap-3 shadow-xs">
            <i data-lucide="sparkles" class="w-4 h-4 sm:w-5 sm:h-5 text-[#f472b6] stroke-[2] flex-shrink-0 mt-0.5"></i>
            <div class="text-xs leading-relaxed"><strong class="text-[#f472b6]">Highlight Utama:</strong> ${item.highlight}</div>
          </div>

          <!-- Agenda List -->
          <div class="space-y-2.5 pt-1">
            <div class="text-[10px] sm:text-[11px] font-bold text-[#765039] uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-[#d83b7d] stroke-[2]"></i>
              <span>Rangkaian Agenda & Waktu Kegiatan</span>
              <span class="h-px bg-[#fce7f3] flex-1"></span>
            </div>

            <div class="grid grid-cols-1 gap-2">
              ${item.agenda.map(ag => `
                <div class="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#fff8f6] border border-[#fce7f3]">
                  <span class="px-2.5 py-1 bg-white border border-[#fce7f3] text-[#d83b7d] font-bold rounded-lg sm:rounded-xl text-[11px] sm:text-xs tabular shadow-2xs flex-shrink-0">
                    ${ag.time}
                  </span>
                  <div>
                    <div class="font-bold text-[#3b2216] text-xs sm:text-sm">${ag.title}</div>
                    <p class="text-[#765039] text-xs mt-0.5 leading-relaxed">${ag.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Amalan Sunnah & Dress Code -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#fff0f5] border border-[#fce7f3] space-y-1">
              <strong class="text-[#d83b7d] text-xs flex items-center gap-1.5 font-bold">
                <i data-lucide="book-open" class="w-3.5 h-3.5 stroke-[2]"></i>
                <span>Amalan Sunnah & Doa:</span>
              </strong>
              <p class="text-[#4a2e22] text-xs leading-relaxed">${item.sunnahAmalan}</p>
            </div>
            
            <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#f7f1ed] border border-[#765039]/20 space-y-1">
              <strong class="text-[#765039] text-xs flex items-center gap-1.5 font-bold">
                <i data-lucide="shirt" class="w-3.5 h-3.5 stroke-[2]"></i>
                <span>Anjuran Pakaian / Dress Code:</span>
              </strong>
              <p class="text-[#4a2e22] text-xs leading-relaxed">${item.dressCode}</p>
            </div>
          </div>

        </div>

      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Toggle Single Day Accordion on Dedicated Page
window.toggleDedicatedDayAccordion = function(dayNum) {
  const body = document.getElementById(`day-body-${dayNum}`);
  const card = document.querySelector(`.day-accordion-card[data-day="${dayNum}"]`);
  const chevron = card?.querySelector('.day-chevron-icon');

  if (!body) return;
  const isHidden = body.classList.contains('hidden');
  if (isHidden) {
    body.classList.remove('hidden');
    chevron?.classList.add('rotate-180', 'bg-[#fff0f5]');
  } else {
    body.classList.add('hidden');
    chevron?.classList.remove('rotate-180', 'bg-[#fff0f5]');
  }
};

// Expand All / Collapse All Days
window.toggleAllDedicatedDays = function() {
  const cards = document.querySelectorAll('.day-accordion-card');
  const anyHidden = Array.from(cards).some(c => c.querySelector('[id^="day-body-"]')?.classList.contains('hidden'));

  cards.forEach(c => {
    const dayId = c.getAttribute('data-day');
    const body = document.getElementById(`day-body-${dayId}`);
    const chevron = c.querySelector('.day-chevron-icon');
    if (body) {
      if (anyHidden) {
        body.classList.remove('hidden');
        chevron?.classList.add('rotate-180', 'bg-[#fff0f5]');
      } else {
        body.classList.add('hidden');
        chevron?.classList.remove('rotate-180', 'bg-[#fff0f5]');
      }
    }
  });

  const btn = document.getElementById('btn-toggle-all-dedicated');
  if (btn) {
    btn.innerHTML = anyHidden ? `<span>🔼</span> Tutup Semua Hari` : `<span>🔽</span> Buka Semua Hari`;
  }
};

// Switch Tabs in the Saudi Living & Travel Guide Section
function setupSaudiTabs() {
  const tabs = document.querySelectorAll('.saudi-tab-btn');
  const panels = document.querySelectorAll('.saudi-tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active-saudi-tab', 'bg-[#d83b7d]', 'text-white');
        t.classList.add('bg-white', 'text-[#3b2216]');
      });
      tab.classList.add('active-saudi-tab', 'bg-[#d83b7d]', 'text-white');
      tab.classList.remove('bg-white', 'text-[#3b2216]');

      const targetId = tab.getAttribute('data-saudi-target');
      panels.forEach(p => {
        if (p.id === targetId) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });
}



// WhatsApp Consultation Button (No price mentioned, 100% schedule & seat focus)
function setupBookingFormWA() {
  const btnBookingWA = document.querySelectorAll('.btn-booking-package-wa');
  btnBookingWA.forEach(btn => {
    btn.addEventListener('click', () => {
      const pkg = activePackage;
      const text = encodeURIComponent(
        `Assalamu'alaikum Warahmatullahi Wabarakatuh,\n\nSaya ingin konsultasi rincian jadwal & itinerary untuk *${pkg.title}*:\n- Jadwal: ${pkg.departureDate}\n- Durasi: ${pkg.duration}\n- Rute: ${pkg.flightRoute}\n- Maskapai: ${pkg.airline}\n\nMohon info ketersediaan seat dan prosedur pendaftarannya. Terima kasih!`
      );
      window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    });
  });
}

// Interactive Checklist Storage
function setupChecklistPersistence() {
  const savedChecklist = JSON.parse(localStorage.getItem('elm_umrah_checklist') || '{}');
  document.querySelectorAll('.pkg-checklist-item input[type="checkbox"]').forEach(chk => {
    const key = chk.getAttribute('id');
    if (savedChecklist[key]) {
      chk.checked = true;
    }
    chk.addEventListener('change', () => {
      savedChecklist[key] = chk.checked;
      localStorage.setItem('elm_umrah_checklist', JSON.stringify(savedChecklist));
    });
  });
}
