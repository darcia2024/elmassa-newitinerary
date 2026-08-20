'use client';

import React, { useState, useMemo } from 'react';

const ITINERARY_DATA = [
  {
    day: 1,
    city: "madinah",
    cityName: "Madinah Al-Munawwarah",
    tag: "Keberangkatan & Kedatangan",
    title: "Jakarta (CGK) Menuju Madinah (MED)",
    subtitle: "Pemberangkatan Jamaah, Penerbangan Direct & Check-in Hotel Madinah",
    highlight: "Temu Jamaah di Executive Lounge Terminal 3 & Istirahat di Hotel Bintang 5 Dekat Masjid Nabawi",
    schedule: [
      { time: "07:30 WIB", activity: "Berkumpul di Bandara Internasional Soekarno-Hatta (Terminal 3)", desc: "Proses penyerahan paspor & boarding pass, briefing terakhir oleh Tour Leader, doa safar bersama di Executive Lounge El Massa." },
      { time: "11:30 WIB", activity: "Penerbangan Direct Menuju Bandara Madinah (MED)", desc: "Terbang dengan maskapai premium Saudia Airlines / Garuda Indonesia. Jamaah menikmati hidangan in-flight meals dan istirahat." },
      { time: "17:30 AST", activity: "Tiba di Bandara Prince Mohammad Bin Abdulaziz Madinah", desc: "Proses imigrasi bandara cepat dengan fast-track handling El Massa, penyambutan oleh Muthawwif lokal." },
      { time: "19:00 AST", activity: "Transfer ke Hotel Bintang 5 di Madinah & Makan Malam", desc: "Perjalanan bus VIP ber-AC menuju hotel (hanya 50m dari pelataran Masjid Nabawi). Check-in & makan malam buffet menu Indonesia." }
    ],
    facilities: ["Executive Lounge CGK", "Direct Flight", "Bus AC VIP", "Hotel Bintang 5 Madinah", "Makan Malam Buffet Indo"],
    dressCode: "Batik Resmi El Massa saat berangkat, jaket untuk di pesawat.",
    sunnahAmalan: "Membaca doa safar, memperbanyak sholawat atas Nabi SAW.",
    tips: "Atur jam tangan ke waktu Arab Saudi (mundur 4 jam dari WIB)."
  },
  {
    day: 2,
    city: "madinah",
    cityName: "Madinah Al-Munawwarah",
    tag: "Ibadah Inti & Ziarah Raudhah",
    title: "Ziarah Makam Rasulullah SAW & Masuk Raudhah",
    subtitle: "Menikmati Keindahan Masjid Nabawi & Taman Surga (Raudhah Asy-Syarifah)",
    highlight: "Tasreh Resmi Nusuk Masuk Raudhah, Salam kepada Rasulullah SAW, Abu Bakar & Umar RA",
    schedule: [
      { time: "03:30 AST", activity: "Qiyamul Lail & Sholat Subuh Berjamaah di Masjid Nabawi", desc: "Sholat sunnah tahajud, hajat, witir, dan dzikir menjelang adzan Subuh." },
      { time: "07:30 AST", activity: "Ziarah Dalam Masjid Nabawi: Makam Rasulullah SAW", desc: "Muthawwif membimbing jamaah mengucapkan salam dengan penuh adab di hadapan makam baginda Nabi SAW." },
      { time: "10:00 AST", activity: "Masuk Raudhah Asy-Syarifah (Taman Surga)", desc: "Masuk ke Raudhah sesuai jadwal Tasreh Nusuk resmi. Sholat sunnah & bermunajat di tempat mustajab." },
      { time: "16:00 AST", activity: "Kajian Sore & Tausiyah Pemantapan Rukun Umrah", desc: "Kajian fiqih umrah & sunnah ihram oleh Ustadz Pembimbing di meeting room hotel." }
    ],
    facilities: ["Tasreh Resmi Nusuk", "Audio Receiver Guide", "Fullboard Meals 3x", "Mutawwifah Khusus Wanita"],
    dressCode: "Gamis / Pakaian Putih Bersih, kaos kaki nyaman.",
    sunnahAmalan: "Memperbanyak doa kebaikan dunia akhirat di Raudhah, sujud syukur.",
    tips: "Bawa kantong sandal kain serut saat masuk masjid agar selalu aman."
  },
  {
    day: 3,
    city: "madinah",
    cityName: "Madinah Al-Munawwarah",
    tag: "City Tour & Napak Tilas",
    title: "City Tour Bersejarah Kota Madinah",
    subtitle: "Masjid Quba, Jabal Uhud, Kebun Kurma & Masjid Qiblatain",
    highlight: "Sholat Sunnah di Masjid Quba (Pahala Setara Umrah) & Tadabbur Syuhada Uhud",
    schedule: [
      { time: "07:00 AST", activity: "Ziarah Luar Menuju Masjid Quba", desc: "Mengambil wudhu dari kamar hotel, menuju Masjid Quba untuk sholat sunnah 2 rakaat (meraih pahala setara 1 umrah sempurna)." },
      { time: "09:00 AST", activity: "Napak Tilas Jabal Uhud & Makam Syuhada Uhud", desc: "Ziarah ke makam Sayyidina Hamzah RA dan mendengarkan kisah heroik perang Uhud." },
      { time: "10:30 AST", activity: "Kunjungan ke Kebun Kurma Al-Madinah", desc: "Membeli aneka varian kurma asli Madinah (Kurma Ajwa Nabi, Sukari, Safawi)." }
    ],
    facilities: ["Bus Eksekutif AC", "Snack & Air Mineral", "Makan Siang Buffet"],
    dressCode: "Pakaian santun & kacamata hitam untuk kenyamanan di luar ruangan.",
    sunnahAmalan: "Menjaga wudhu sejak dari hotel hingga tiba di Masjid Quba.",
    tips: "Siapkan uang riyal pecahan kecil (5, 10, 20 SAR) untuk oleh-oleh."
  },
  {
    day: 4,
    city: "perjalanan",
    cityName: "Madinah ➔ Makkah",
    tag: "Miqat & Kereta Cepat Haramain",
    title: "Menuju Makkah Al-Mukarramah & Umrah I",
    subtitle: "Ambil Miqat di Masjid Bir Ali, Naik Kereta Cepat 300 km/jam, dan Ibadah Umrah Wajib",
    highlight: "Perjalanan Mewah 2 Jam Kereta Cepat Haramain & Thawaf, Sa'i, Tahallul di Depan Ka'bah",
    schedule: [
      { time: "09:00 AST", activity: "Mandi Sunnah Ihram & Memakai Pakaian Ihram di Hotel", desc: "Koper besar diangkut porter El Massa langsung ke hotel Makkah." },
      { time: "13:30 AST", activity: "Menuju Masjid Dzulhulaifah (Bir Ali) untuk Miqat", desc: "Sholat sunnah ihram 2 rakaat di Masjid Bir Ali dan berniat umrah bersama dibimbing Ustadz." },
      { time: "15:00 AST", activity: "Perjalanan Kereta Cepat Haramain Express ke Makkah", desc: "Pengalaman perjalanan modern secepat 300 km/jam! Hanya butuh waktu 2 jam 15 menit." },
      { time: "20:30 AST", activity: "Pelaksanaan Rangkaian Umrah Pertama (Wajib)", desc: "Bersama Muthawwif masuk Masjidil Haram melaksanakan Thawaf, sholat di Maqam Ibrahim, Sa'i Shafa-Marwah, dan Tahallul." }
    ],
    facilities: ["Tiket Kereta Cepat Haramain HSR", "Porter Koper Door-to-Door", "Hotel Bintang 5 Makkah Ring-1", "Bimbingan Muthawwif Personal"],
    dressCode: "Kain Ihram 2 lembar (Laki-laki) / Pakaian Syar'i (Perempuan).",
    sunnahAmalan: "Membaca Talbiyah 'Labbaikallahumma Labbaik' selama safar menuju Makkah.",
    tips: "Gunakan sabun non-parfum dan bawa gunting kecil untuk tahallul."
  },
  {
    day: 5,
    city: "makkah",
    cityName: "Makkah Al-Mukarramah",
    tag: "Ibadah Mandiri & Tadabbur",
    title: "Memperbanyak Ibadah di Masjidil Haram",
    subtitle: "Meraih Pahala 100.000 Kali Lipat, Thawaf Sunnah & Istirahat",
    highlight: "Hari Penuh Keberkahan: Sholat 5 Waktu di Pelataran Ka'bah & I'tikaf",
    schedule: [
      { time: "03:00 AST", activity: "Qiyamul Lail & Sholat Subuh di Pelataran Ka'bah", desc: "Keleluasaan waktu i'tikaf dan sholat berjamaah di depan Ka'bah." },
      { time: "11:30 AST", activity: "Sholat Dzuhur Berjamaah & Thawaf Sunnah", desc: "Muthawwif membimbing jamaah yang ingin thawaf sunnah di mataf dasar." },
      { time: "16:30 AST", activity: "Kajian Rohani: Mengoptimalkan Doa di Multazam & Hijir Ismail", desc: "Tausiyah di lounge hotel mengupas tempat-tempat mustajab di Masjidil Haram." }
    ],
    facilities: ["Hotel Super Dekat (0-50m ke Haram)", "Fullboard Meals 3x Sehari", "Kajian Rohani Eksklusif"],
    dressCode: "Pakaian muslim/muslimah rapi dan nyaman.",
    sunnahAmalan: "Memperbanyak thawaf sunnah & minum air zamzam.",
    tips: "Manfaatkan waktu antara adzan dan iqamah untuk memanjatkan hajat khusus."
  },
  {
    day: 6,
    city: "makkah",
    cityName: "Makkah Al-Mukarramah",
    tag: "City Tour Makkah & Umrah II",
    title: "Ziarah Kota Makkah & Miqat Ji'ranah",
    subtitle: "Napak Tilas Haji: Arafah, Jabal Rahmah, Mina & Kesempatan Umrah ke-2",
    highlight: "Ziarah Tempat Bersejarah Haji & Mengambil Miqat Ji'ranah bagi yang Ingin Umrah ke-2",
    schedule: [
      { time: "07:00 AST", activity: "City Tour Napak Tilas Rangkaian Haji", desc: "Kunjungan ke Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, dan Mina." },
      { time: "10:30 AST", activity: "Singgah di Masjid Ji'ranah untuk Mengambil Miqat", desc: "Bagi jamaah yang berniat Umrah ke-2 / Badal Umrah mengambil miqat & niat." },
      { time: "14:00 AST", activity: "Pelaksanaan Umrah ke-2 Didampingi Muthawwif", desc: "Thawaf, Sa'i, dan Tahallul untuk umrah kedua berjalan lancar." }
    ],
    facilities: ["Bus AC Pariwisata", "Air Zamzam & Snack", "Bimbingan Umrah Badal"],
    dressCode: "Pakaian Ihram bagi yang berniat umrah kedua.",
    sunnahAmalan: "Memanjatkan doa untuk orang tua di Jabal Rahmah & Arafah.",
    tips: "Gunakan alas kaki nyaman dan bawa botol spray penyegar wajah."
  },
  {
    day: 7,
    city: "makkah",
    cityName: "Makkah Al-Mukarramah",
    tag: "Museum & Wisata Religi",
    title: "Tadabbur Wahyu di Gua Hira & Free Program",
    subtitle: "Kunjungan Hira Cultural District & Waktu Luang Berbelanja",
    highlight: "Menyaksikan Replika Sejarah Turunnya Wahyu Pertama & Belanja Oleh-Oleh",
    schedule: [
      { time: "07:30 AST", activity: "Kunjungan ke Hira Cultural District (Kaki Jabal Nur)", desc: "Menikmati museum modern Revelation Exhibition tentang sejarah nuzulul Qur'an." },
      { time: "10:30 AST", activity: "Waktu Luang Berbelanja Oleh-Oleh", desc: "Berbelanja sajadah, abaya saudi, parfum oud di Clock Tower Mall." },
      { time: "20:00 AST", activity: "Qiyamul Lail & Khataman di Masjidil Haram", desc: "Menghabiskan malam penuh kekhusyukan di depan Ka'bah." }
    ],
    facilities: ["Tiket Masuk Exhibition Hira", "Bus AC VIP", "Makan 3x Sehari"],
    dressCode: "Pakaian santai sopan.",
    sunnahAmalan: "Membaca Al-Qur'an & berdzikir pagi petang.",
    tips: "Tukar uang di money changer resmi yang tersedia di hotel."
  },
  {
    day: 8,
    city: "makkah",
    cityName: "Makkah Al-Mukarramah",
    tag: "Thawaf Wada' & Packing",
    title: "Thawaf Wada' (Perpisahan) & Persiapan Pulang",
    subtitle: "Momen Haru Thawaf Perpisahan di Ka'bah & Penimbangan Bagasi",
    highlight: "Thawaf Wada' Bersama & Pembagian Air Zamzam 5 Liter Resmi Kemenag",
    schedule: [
      { time: "03:30 AST", activity: "Sholat Subuh & Thawaf Wada' (Perpisahan)", desc: "Melaksanakan Thawaf Wada' 7 putaran penuh haru sebelum meninggalkan Baitullah." },
      { time: "10:00 AST", activity: "Packing Koper & Penimbangan Bagasi", desc: "Tim handling membantu menimbang koper dan memasang tag jamaah." }
    ],
    facilities: ["Handling Koper Lengkap", "Air Zamzam 5 Liter Resmi", "Makan Siang & Snack"],
    dressCode: "Pakaian bersih siap perjalanan.",
    sunnahAmalan: "Menatap Ka'bah dengan penuh cinta dan doa agar ibadah diterima.",
    tips: "Pastikan cairan dan parfum dimasukkan ke bagasi koper besar."
  },
  {
    day: 9,
    city: "jeddah",
    cityName: "Jeddah ➔ Jakarta",
    tag: "City Tour Jeddah & Penerbangan",
    title: "City Tour Jeddah & Terbang ke Tanah Air",
    subtitle: "Masjid Terapung Al-Rahmah, Corniche & Bandara King Abdulaziz",
    highlight: "Pesona Laut Merah Jeddah & Penerbangan Direct Malam Menuju Jakarta",
    schedule: [
      { time: "09:00 AST", activity: "Check-out Menuju Kota Pesisir Jeddah", desc: "Perjalanan bus 1.5 jam menuju kota pelabuhan modern Jeddah." },
      { time: "11:00 AST", activity: "City Tour Jeddah: Masjid Terapung & Corniche", desc: "Melihat keindahan Masjid Al-Rahmah di atas Laut Merah & santap siang Arabian Seafood." },
      { time: "19:30 AST", activity: "Take-Off Penerbangan Direct ke Jakarta (CGK)", desc: "Penerbangan malam direct yang nyaman menuju tanah air." }
    ],
    facilities: ["Bus VIP Makkah-Jeddah-Bandara", "Makan Siang Arabian", "Tiket Return Flight"],
    dressCode: "Batik El Massa / Jaket hangat di kabin.",
    sunnahAmalan: "Membaca doa safar kembali ke tanah air.",
    tips: "Siapkan paspor di dompet paspor El Massa agar mudah dijangkau."
  },
  {
    day: 10,
    city: "jakarta",
    cityName: "Jakarta (CGK)",
    tag: "Tiba di Tanah Air",
    title: "Tiba di Jakarta - Umrah Mabrurah & Maqbullah",
    subtitle: "Mendarat di Terminal 3 Bandara Soekarno-Hatta & Pembagian Air Zamzam",
    highlight: "Penyambutan Hangat Keluarga & Penyerahan Koper Serta Air Zamzam 5L",
    schedule: [
      { time: "09:30 WIB", activity: "Mendarat di Bandara Soekarno-Hatta (CGK)", desc: "Alhamdulillah rombongan jamaah tiba kembali di tanah air dengan selamat." },
      { time: "10:30 WIB", activity: "Pengambilan Seluruh Koper & Galon Air Zamzam 5L", desc: "Tim porter El Massa membagikan koper dan air zamzam resmi 5 Liter per jamaah." },
      { time: "11:30 WIB", activity: "Foto Bersama, Doa Penutup & Bertemu Keluarga", desc: "Pelepasan jamaah oleh jajaran manajemen El Massa Tour." }
    ],
    facilities: ["Airport Handling Kedatangan T3", "Air Zamzam 5L Resmi", "Dokumentasi Cloud"],
    dressCode: "Pakaian bebas rapi.",
    sunnahAmalan: "Sujud syukur setibanya di tanah air.",
    tips: "Bagikan air zamzam dan kurma kepada keluarga yang menyambut di rumah."
  }
];

export default function ItinerarySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDays, setExpandedDays] = useState({ 1: true });

  const filteredData = useMemo(() => {
    return ITINERARY_DATA.filter((item) => {
      if (activeFilter === 'madinah' && item.city !== 'madinah') return false;
      if (activeFilter === 'makkah' && item.city !== 'makkah') return false;
      if (activeFilter === 'perjalanan' && item.city !== 'perjalanan') return false;
      if (activeFilter === 'jeddah' && item.city !== 'jeddah' && item.city !== 'jakarta') return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q) ||
        item.cityName.toLowerCase().includes(q) ||
        item.schedule.some((s) => s.activity.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, searchQuery]);

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const toggleAllDays = () => {
    const isAnyCollapsed = filteredData.some((d) => !expandedDays[d.day]);
    const newState = {};
    filteredData.forEach((d) => {
      newState[d.day] = isAnyCollapsed;
    });
    setExpandedDays(newState);
  };

  return (
    <section id="itinerary-section" className="relative py-16 bg-[#fff8f5] text-[#3c2920] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2f8] text-[#d83b7d] border border-[#d83b7d]/30 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>✨</span> Program Resmi Umrah 1446H / 1447H
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3c2920] tracking-tight leading-tight">
            Rangkaian Jadwal Perjalanan <br />
            <span className="text-[#d83b7d] font-serif italic">Ibadah Umrah El Massa</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#765039] mt-3 leading-relaxed">
            Fasilitas Hotel Bintang 5 Ring-1, Kereta Cepat Haramain Express, dan bimbingan ibadah terpercaya sesuai sunnah.
          </p>
        </div>

        {/* Route Flow Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          <button onClick={() => setActiveFilter('all')} className="p-3.5 rounded-2xl bg-white border border-[#d83b7d]/15 text-left hover:border-[#d83b7d] transition-all">
            <div className="text-[11px] font-bold text-[#765039]">HARI 01</div>
            <div className="text-xs sm:text-sm font-bold text-[#3c2920]">Jakarta (CGK)</div>
            <p className="text-[11px] text-[#765039]">Terminal 3 Lounge</p>
          </button>
          <button onClick={() => setActiveFilter('madinah')} className={`p-3.5 rounded-2xl border text-left transition-all ${activeFilter === 'madinah' ? 'bg-[#fdf2f8] border-[#d83b7d]' : 'bg-white border-[#d83b7d]/15'}`}>
            <div className="text-[11px] font-bold text-[#d83b7d]">HARI 01-03</div>
            <div className="text-xs sm:text-sm font-bold text-[#3c2920]">Madinah Munawwarah</div>
            <p className="text-[11px] text-[#765039]">Raudhah & Ziarah</p>
          </button>
          <button onClick={() => setActiveFilter('perjalanan')} className={`p-3.5 rounded-2xl border text-left transition-all ${activeFilter === 'perjalanan' ? 'bg-[#f7f1ed] border-[#765039]' : 'bg-white border-[#d83b7d]/15'}`}>
            <div className="text-[11px] font-bold text-[#765039]">HARI 04</div>
            <div className="text-xs sm:text-sm font-bold text-[#3c2920]">Miqat & Kereta Cepat</div>
            <p className="text-[11px] text-[#765039]">Haramain HSR 300 km/j</p>
          </button>
          <button onClick={() => setActiveFilter('makkah')} className={`p-3.5 rounded-2xl border text-left transition-all ${activeFilter === 'makkah' ? 'bg-[#fdf2f8] border-[#d83b7d]' : 'bg-white border-[#d83b7d]/15'}`}>
            <div className="text-[11px] font-bold text-[#d83b7d]">HARI 05-08</div>
            <div className="text-xs sm:text-sm font-bold text-[#3c2920]">Makkah Mukarramah</div>
            <p className="text-[11px] text-[#765039]">Umrah & Ibadah Haram</p>
          </button>
          <button onClick={() => setActiveFilter('jeddah')} className={`p-3.5 rounded-2xl border text-left transition-all col-span-2 sm:col-span-1 ${activeFilter === 'jeddah' ? 'bg-[#fff8f5] border-[#d83b7d]' : 'bg-white border-[#d83b7d]/15'}`}>
            <div className="text-[11px] font-bold text-[#765039]">HARI 09-10</div>
            <div className="text-xs sm:text-sm font-bold text-[#3c2920]">Jeddah ➔ Jakarta</div>
            <p className="text-[11px] text-[#765039]">Kepulangan</p>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-[#d83b7d]/15 shadow-xs mb-8 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
            {[
              { id: 'all', label: 'Semua Hari (10)' },
              { id: 'madinah', label: '🕌 Madinah' },
              { id: 'perjalanan', label: '🚅 Kereta Cepat' },
              { id: 'makkah', label: '🕋 Makkah' },
              { id: 'jeddah', label: '✈️ Pulang' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex-shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#d83b7d] text-white border-[#d83b7d] shadow-xs'
                    : 'bg-white text-[#3c2920] border-[#d83b7d]/20 hover:border-[#d83b7d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Cari kegiatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 rounded-xl text-xs bg-[#fff8f5] border border-[#d83b7d]/20 focus:bg-white w-full sm:w-48 outline-none"
            />
            <button
              onClick={toggleAllDays}
              className="px-3 py-1.5 rounded-xl bg-[#fff8f5] text-xs font-bold text-[#3c2920] border border-[#d83b7d]/20 flex-shrink-0"
            >
              Toggle Buka/Tutup
            </button>
          </div>
        </div>

        {/* Day Cards Timeline */}
        <div className="space-y-6">
          {filteredData.map((item) => {
            const isExpanded = !!expandedDays[item.day];
            return (
              <div key={item.day} className="bg-white rounded-3xl border border-[#d83b7d]/15 shadow-sm overflow-hidden transition-all">
                {/* Header */}
                <div
                  onClick={() => toggleDay(item.day)}
                  className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 bg-[#fff8f5]/60 hover:bg-[#fdf2f8]/50 transition-colors select-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#d83b7d] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      H-{item.day}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#765039]">
                        <span>📍 {item.cityName}</span>
                        <span>·</span>
                        <span className="text-[#d83b7d] font-bold">{item.tag}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#3c2920] mt-0.5">{item.title}</h3>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#d83b7d]/20 flex items-center justify-center text-[#d83b7d]">
                    {isExpanded ? '▲' : '▼'}
                  </div>
                </div>

                {/* Body Content */}
                {isExpanded && (
                  <div className="p-5 sm:p-8 border-t border-[#d83b7d]/15 bg-white">
                    {/* Highlight */}
                    <div className="p-3.5 rounded-2xl bg-[#271912] text-white text-xs mb-6 flex items-center gap-2.5">
                      <span className="text-[#f472b6] text-base">⭐</span>
                      <span><strong>Highlight:</strong> {item.highlight}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Left: Schedule */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="text-xs uppercase tracking-wider font-bold text-[#765039]">⏰ Agenda Harian</div>
                        {item.schedule.map((sc, i) => (
                          <div key={i} className="p-3.5 rounded-2xl bg-[#fff8f5] border border-[#d83b7d]/15 flex items-start gap-3">
                            <span className="px-2 py-0.5 bg-white border border-[#d83b7d]/20 text-[11px] font-bold text-[#d83b7d] rounded-lg flex-shrink-0">
                              {sc.time}
                            </span>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-[#3c2920]">{sc.activity}</div>
                              <p className="text-xs text-[#765039] mt-0.5 leading-relaxed">{sc.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Info */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="p-4 rounded-2xl bg-[#fdf2f8] border border-[#d83b7d]/20">
                          <div className="text-xs uppercase tracking-wider font-bold text-[#d83b7d] mb-2">🎁 Fasilitas</div>
                          <ul className="space-y-1.5 text-xs text-[#3c2920]">
                            {item.facilities.map((f, fi) => (
                              <li key={fi} className="flex items-center gap-2">
                                <span className="text-[#d83b7d]">✓</span> {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#f7f1ed] border border-[#765039]/20 text-xs text-[#3c2920] space-y-2">
                          <div>
                            <strong className="text-[#3c2920] block mb-0.5">🕌 Amalan Sunnah:</strong>
                            <p>{item.sunnahAmalan}</p>
                          </div>
                          <div className="pt-2 border-t border-[#765039]/20">
                            <strong className="text-[#3c2920] block mb-0.5">👔 Anjuran Pakaian:</strong>
                            <p>{item.dressCode}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
