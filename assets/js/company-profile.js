// Data Profil Perusahaan LegalinBossID
const companyProfile = {
    // Informasi Dasar
    basicInfo: {
        companyName: "PT LegalinBossID Konsultan Indonesia",
        brandName: "LegalinBossID",
        tagline: "Solusi Legalitas Bisnis Terpercaya • Melayani Seluruh Indonesia via Online",
        established: "2018",
        legalEntity: "Perseroan Terbatas (PT)",
        notaris: "Notaris Rina Wijaya, SH, M.Kn (Jakarta)",
        aktaPendirian: "AHU-0012345.AH.01.01.TAHUN 2018",
        pengesahan: "Kemenkumham RI No. AHU-0012345.AH.01.01.TAHUN 2018",
        npwp: "12.345.678.9-012.345",
        nib: "1234567890123",
        status: "Aktif",
        website: "www.legalinbosid.com",
        email: "info@legalinbosid.com",
        phone: "0877 1537 3601",
        whatsapp: "0877 1537 3601",
        layananOnline: "Seluruh Indonesia (via Zoom, Google Meet, WhatsApp, Email)"
    },

    // Visi Misi
    visionMission: {
        vision: "Menjadi mitra strategis terdepan dalam layanan legalitas dan perizinan bisnis di Indonesia yang dikenal karena integritas, profesionalisme, dan kemudahan akses online.",
        mission: [
            "Memberikan layanan legalitas dan perizinan yang cepat, tepat, dan terpercaya untuk seluruh wilayah Indonesia",
            "Menyediakan solusi bisnis komprehensif secara online tanpa batasan geografis",
            "Mengedepankan profesionalisme dan etika dalam setiap layanan jarak jauh",
            "Terus berinovasi dalam sistem pelayanan online yang efisien",
            "Membangun hubungan jangka panjang dengan klien dari berbagai daerah"
        ],
        values: [
            {
                name: "Integritas",
                description: "Menjunjung tinggi kejujuran dan etika profesional dalam layanan online"
            },
            {
                name: "Profesionalisme",
                description: "Layanan berkualitas dengan standar tertinggi, tetap terjaga meski jarak jauh"
            },
            {
                name: "Inovasi Digital",
                description: "Solusi kreatif berbasis teknologi untuk kemudahan akses legalitas"
            },
            {
                name: "Aksesibilitas",
                description: "Melayani klien dari Sabang sampai Merauke secara online"
            }
        ]
    },

    // Alamat Kantor (Hanya Jakarta, melayani online seluruh Indonesia)
    offices: {
        headOffice: {
            name: "Kantor Pusat Jakarta",
            address: "Menara Rajawali Lt. 15, Suite 1505",
            street: "Jalan Jenderal Sudirman Kav. 34-35",
            area: "Karet Tengsin, Tanah Abang",
            city: "Jakarta Pusat",
            province: "DKI Jakarta",
            postalCode: "10220",
            country: "Indonesia",
            phone: "(021) 1234 5678",
            fax: "(021) 1234 5679",
            email: "headoffice@legalinbosid.com",
            mapLink: "https://goo.gl/maps/example",
            coordinates: "-6.2088, 106.8224",
            landmark: "Sebelah Gedung BEI, dekat Stasiun MRT Bendungan Hilir"
        },
        // TIDAK ADA cabang lain - hanya Jakarta, layanan online untuk seluruh Indonesia
        branchOffices: [], // Array kosong karena tidak ada cabang
        
        layananOnline: {
            status: "Melayani Seluruh Indonesia via Online",
            metode: [
                "Video Conference (Zoom, Google Meet)",
                "WhatsApp Chat & Call",
                "Email & Dokumen Digital",
                "Telepon & SMS",
                "Aplikasi Meeting Lainnya (sesuai permintaan)"
            ],
            keunggulan: [
                "Tidak perlu datang ke kantor",
                "Proses cepat tanpa tatap muka",
                "Dokumen dikirim via email/courier",
                "Konsultasi dari mana saja",
                "Fleksibel waktu (termasuk malam & weekend)"
            ],
            jangkauan: [
                "Pulau Sumatera: Aceh, Medan, Padang, Palembang, Lampung, dll",
                "Pulau Jawa: Jakarta, Bandung, Semarang, Yogyakarta, Surabaya, dll",
                "Pulau Kalimantan: Pontianak, Balikpapan, Samarinda, Banjarmasin, dll",
                "Pulau Sulawesi: Makassar, Manado, Palu, Kendari, dll",
                "Bali & Nusa Tenggara: Denpasar, Mataram, Kupang, dll",
                "Maluku & Papua: Ambon, Jayapura, Sorong, dll"
            ]
        },

        operationalHours: {
            mondayFriday: "09.00 - 18.00 WIB (kantor fisik)",
            saturday: "09.00 - 14.00 WIB (konsultasi terbatas)",
            sunday: "Libur (kantor fisik)",
            onlineLayanan: "24/7 via WhatsApp & Email (respons maksimal 2 jam)",
            catatan: "Layanan online fleksibel di luar jam kantor dengan perjanjian"
        }
    },

    // Tim Manajemen
    management: {
        commissioners: [
            {
                name: "Prof. Dr. H. Bambang Wijaya, SH, MH",
                position: "Komisaris Utama",
                expertise: "Hukum Korporasi",
                experience: "25+ tahun praktisi hukum",
                education: "S3 Hukum Universitas Indonesia",
                location: "Jakarta",
                photo: "assets/images/team/bambang.jpg"
            },
            {
                name: "Dra. Sri Mulyani, MM",
                position: "Komisaris",
                expertise: "Manajemen Bisnis",
                experience: "20+ tahun manajemen korporasi",
                education: "S2 Manajemen UI",
                location: "Jakarta",
                photo: "assets/images/team/sri.jpg"
            }
        ],
        directors: [
            {
                name: "Ahmad Fauzi, SH, MH, M.Kn",
                position: "Direktur Utama",
                expertise: "Hukum Notaris & Legalitas",
                experience: "15+ tahun konsultan hukum",
                education: "S2 Kenotariatan UGM",
                location: "Jakarta",
                photo: "assets/images/team/ahmad.jpg"
            },
            {
                name: "Rina Wijayanti, SH, LLM",
                position: "Direktur Legal",
                expertise: "Hukum Internasional & Korporasi",
                experience: "12+ tahun legal consultant",
                education: "LLM University of Melbourne",
                location: "Jakarta",
                photo: "assets/images/team/rina.jpg"
            },
            {
                name: "Denny Setiawan, SE, Ak, CA",
                position: "Direktur Keuangan",
                expertise: "Akuntansi & Perpajakan",
                experience: "15+ tahun auditor & konsultan pajak",
                education: "S1 Akuntansi UI",
                location: "Jakarta",
                photo: "assets/images/team/denny.jpg"
            }
        ],
        teamLeads: [
            {
                name: "Dian Permatasari, SH",
                position: "Team Lead - Perizinan Usaha",
                expertise: "Perizinan & Legalitas Bisnis",
                experience: "10 tahun",
                location: "Jakarta"
            },
            {
                name: "Hendra Gunawan, ST, M.K3",
                position: "Team Lead - Sertifikasi K3",
                expertise: "Keselamatan & Kesehatan Kerja",
                experience: "12 tahun",
                location: "Jakarta"
            },
            {
                name: "Maya Sari, SH, MH",
                position: "Team Lead - Pendirian Perusahaan",
                expertise: "Hukum Korporasi",
                experience: "10 tahun",
                location: "Jakarta"
            }
        ],
        totalTim: "25+ staf profesional berbasis di Jakarta, melayani seluruh Indonesia"
    },

    // Bidang Keahlian
    expertise: [
        {
            category: "Pendirian & Perubahan Badan Usaha",
            services: ["PT", "CV", "Yayasan", "Firma", "Koperasi", "Perorangan"],
            online: true
        },
        {
            category: "Perizinan Usaha",
            services: ["NIB", "SIUP", "TDP", "IUI", "IUJK", "SIUJK", "Domisili"],
            online: true
        },
        {
            category: "Sertifikasi K3 & CSMS",
            services: ["CSMS", "SMK3", "AK3U", "K3 Migas", "K3 Umum"],
            online: true
        },
        {
            category: "Sertifikasi ISO",
            services: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001", "ISO 27001"],
            online: true
        },
        {
            category: "Izin Khusus",
            services: ["BPOM", "Halal", "SNI", "Izin Ekspor-Impor", "SIUPMSE"],
            online: true
        },
        {
            category: "Legalitas Perusahaan",
            services: ["Legal Drafting", "Kontrak Bisnis", "Due Diligence", "Merger & Akuisisi"],
            online: true
        }
    ],

    // Klien & Portofolio
    clients: {
        totalKlien: "500+ klien dari berbagai daerah",
        coverage: "24 provinsi di Indonesia",
        jenisKlien: [
            "Startup & UMKM",
            "Perusahaan Menengah",
            "Korporasi Besar",
            "BUMN & Pemerintah",
            "Perusahaan Asing (PMA)"
        ],
        daftarProvinsi: [
            "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau",
            "Jambi", "Sumatera Selatan", "Bangka Belitung", "Bengkulu", "Lampung",
            "DKI Jakarta", "Jawa Barat", "Banten", "Jawa Tengah", "DI Yogyakarta",
            "Jawa Timur", "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur",
            "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
            "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Sulawesi Barat",
            "Gorontalo", "Maluku", "Maluku Utara", "Papua", "Papua Barat"
        ],
        testimoni: [
            {
                nama: "Budi Santoso",
                perusahaan: "PT Maju Jaya",
                lokasi: "Medan, Sumatera Utara",
                pesan: "Proses pengurusan NIB via online sangat lancar. Tidak perlu ke Jakarta, semua urusan selesai via WA dan email.",
                rating: 5
            },
            {
                nama: "Siti Rahma",
                perusahaan: "CV Karya Mandiri",
                lokasi: "Makassar, Sulawesi Selatan",
                pesan: "Konsultasi via Zoom sangat membantu. Tim LegalinBossID profesional dan responsif meski jarak jauh.",
                rating: 5
            },
            {
                nama: "Ahmad Hidayat",
                perusahaan: "UD Berkah",
                lokasi: "Banjarmasin, Kalimantan Selatan",
                pesan: "Izin BPOM dan Halal beres dalam waktu singkat. Dokumen dikirim via JNE, terima kasih LegalinBossID!",
                rating: 5
            }
        ]
    },

    // Sertifikasi & Keanggotaan
    certifications: [
        {
            name: "Peradi",
            description: "Perhimpunan Advokat Indonesia"
        },
        {
            name: "INI",
            description: "Ikatan Notaris Indonesia"
        },
        {
            name: "AK3",
            description: "Ahli Keselamatan dan Kesehatan Kerja"
        },
        {
            name: "ISO 9001:2015",
            description: "Sistem Manajemen Mutu"
        },
        {
            name: "Kemenkumham",
            description: "Kementerian Hukum dan HAM RI"
        }
    ],

    // Media Sosial & Kontak
    socialMedia: {
        instagram: "@legalinbosid",
        facebook: "LegalinBossID",
        linkedin: "PT LegalinBossID Konsultan Indonesia",
        youtube: "LegalinBossID TV",
        tiktok: "@legalinbosid"
    },

    // Layanan Online Details
    onlineServices: {
        platform: [
            {
                nama: "Zoom Meeting",
                untuk: "Konsultasi tatap muka virtual, presentasi, meeting tim"
            },
            {
                nama: "Google Meet",
                untuk: "Alternatif meeting, konsultasi cepat"
            },
            {
                nama: "WhatsApp",
                untuk: "Chat, voice call, video call, sharing dokumen"
            },
            {
                nama: "Email",
                untuk: "Pengiriman dokumen resmi, draft legal, invoice"
            },
            {
                nama: "Google Drive / Dropbox",
                untuk: "Sharing file besar, kolaborasi dokumen"
            },
            {
                nama: "E-Signature",
                untuk: "Penandatanganan dokumen digital"
            }
        ],
        alurProses: [
            "Konsultasi awal via chat/telepon/video call (GRATIS)",
            "Analisis kebutuhan dan penyampaian proposal",
            "Kesepakatan kerjasama via dokumen digital",
            "Pembayaran via transfer bank",
            "Proses pengurusan dokumen",
            "Update progres via WhatsApp/Email",
            "Dokumen dikirim via email/courier",
            "Dukungan pasca layanan"
        ],
        dokumenDigital: [
            "Scan KTP, NPWP (format PDF/JPG)",
            "Foto selfie dengan KTP (verifikasi)",
            "Dokumen perusahaan (Akta, NIB, dll) dalam PDF",
            "Tanda tangan digital / materai elektronik",
            "Semua dokumen dikirim via email/WhatsApp"
        ]
    },

    // Keunggulan Layanan Online
    keunggulanOnline: [
        "Tidak perlu datang ke Jakarta",
        "Hemat biaya transportasi & akomodasi",
        "Proses lebih cepat (tanpa antri fisik)",
        "Fleksibel waktu (malam & weekend bisa dijadwalkan)",
        "Dokumen digital aman & terenkripsi",
        "Update progres real-time via WhatsApp",
        "Support 24/7 untuk pertanyaan darurat",
        "Garansi uang kembali jika tidak sesuai"
    ]
};

// Export untuk digunakan di halaman profil
export default companyProfile;
