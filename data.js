// Data untuk website
const websiteData = {
    mainServices: [
        "Pendirian dan Perubahan Badan Usaha",
        "Contractor Safety Management System (CSMS)",
        "SK Pengangkutan Limbah B3 49432 / Kimia",
        "Kartu Pengawasan",
        "Izin Niaga Umum (INU)",
        "Penyimpanan Migas (SKUP)",
        "Standar Nasional Indonesia (SNI)",
        "Nomor Induk Berusaha (NIB)",
        "PKKPR",
        "Penambahan KBLI, SPPL, Sertifikat Standard OSS",
        "IUJP, IUP, IUP OPK",
        "Kartu Pengawasan",
        "Laporan Pajak & Keuangan"
    ],

    additionalServices: [
        "Pelatihan Sertifikasi Driver, Tenaga Ahli K3, dan sertifikasi lainnya",
        "Penyelenggara Perjalanan Ibadah Umrah (PPIU)",
        "SIUPMSE, STP, SIUP3A, STP, SPBU, Ekspor Impor",
        "Amdal – UKL UPL",
        "Sertifikat Badan Usaha (SBU)",
        "Surat Izin Usaha Jasa Pengurusan Transportasi (SIUJPT)",
        "International Organization for Standardization (ISO)",
        "Pengurusan Dokumen Kapal (SIUPAL, RPT, dll)",
        "Persetujuan Layak Operasi (PLO)",
        "Sertifikat Laik Fungsi (SLF)",
        "Badan Pengawas Obat dan Makanan (BPOM)"
    ],

    testimonials: [
        {
            text: "Pelayanan sangat profesional dan cepat. Tim LegalinBossID membantu pengurusan NIB dan izin usaha saya dalam waktu 3 hari. Sangat direkomendasikan!",
            author: "Budi Santoso",
            position: "CEO, PT Maju Jaya",
            initial: "BS"
        },
        {
            text: "Konsultan yang berpengalaman dan responsif. Membantu pengurusan sertifikasi K3 perusahaan kami dengan baik. Terima kasih LegalinBossID!",
            author: "Siti Rahma",
            position: "HRD, CV Karya Mandiri",
            initial: "SR"
        },
        {
            text: "Proses pengurusan izin ekspor impor jadi lebih mudah dengan bantuan tim LegalinBossID. Komunikatif dan harga terjangkau.",
            author: "Ahmad Hidayat",
            position: "Direktur, UD Berkah",
            initial: "AH"
        }
    ],

    faqs: [
        {
            question: "Berapa lama proses pengurusan NIB?",
            answer: "Proses pengurusan NIB biasanya selesai dalam 1-3 hari kerja setelah dokumen persyaratan lengkap."
        },
        {
            question: "Apa saja dokumen yang diperlukan untuk pendirian PT?",
            answer: "Dokumen yang diperlukan: KTP dan NPWP para pendiri, akta notaris, dan domisili perusahaan. Tim kami akan membantu lengkap."
        },
        {
            question: "Apakah konsultasi awal dikenakan biaya?",
            answer: "Tidak, konsultasi awal GRATIS. Kami akan membantu menganalisis kebutuhan legalitas bisnis Anda tanpa biaya."
        },
        {
            question: "Bagaimana cara menghubungi tim LegalinBossID?",
            answer: "Anda dapat menghubungi kami via telepon 0877 1537 3601, WhatsApp, atau email ke info@legalinbosid.com."
        }
    ],

    icons: [
        "fa-building", "fa-hard-hat", "fa-truck", "fa-id-card", "fa-store", 
        "fa-oil-can", "fa-certificate", "fa-fingerprint", "fa-map-marked-alt",
        "fa-plus-circle", "fa-hard-hat", "fa-id-card", "fa-file-invoice-dollar",
        "fa-chalkboard-teacher", "fa-kaaba", "fa-laptop", "fa-leaf", "fa-briefcase",
        "fa-ship", "fa-globe", "fa-ship", "fa-check-double", "fa-clipboard-check",
        "fa-capsules"
    ],

    // Konteks untuk AI Legal
    legalContext: {
        companyName: "LegalinBossID",
        description: "Konsultan legal dan perizinan bisnis profesional di Indonesia",
        expertise: [
            "Pendirian PT, CV, Yayasan, dan badan usaha lainnya",
            "Pembuatan dan review dokumen legal (kontrak, MoU, perjanjian)",
            "Pengurusan NIB, SIUP, TDP, dan perizinan OSS",
            "Sertifikasi K3, SMK3, CSMS",
            "Izin khusus: Migas, Limbah B3, Ekspor Impor",
            "Pengurusan ISO, SNI, SBU",
            "Legalitas perusahaan dan dokumen kapal",
            "Konsultasi hukum bisnis"
        ],
        services: [
            "Pendirian dan Perubahan Badan Usaha",
            "Contractor Safety Management System (CSMS)",
            "SK Pengangkutan Limbah B3",
            "Izin Niaga Umum (INU)",
            "Penyimpanan Migas (SKUP)",
            "Standar Nasional Indonesia (SNI)",
            "Nomor Induk Berusaha (NIB)",
            "Sertifikasi K3 dan Tenaga Ahli",
            "SIUPMSE, STP, SIUP3A",
            "Amdal – UKL UPL",
            "Sertifikat Badan Usaha (SBU)",
            "Dokumen Kapal (SIUPAL, RPT)",
            "ISO dan Sertifikasi Lainnya"
        ],
        advantages: [
            "Tim ahli legal berpengalaman 15+ tahun",
            "Proses cepat dan transparan",
            "Konsultasi gratis",
            "Dokumen legal terjamin",
            "Harga kompetitif"
        ],
        contact: {
            phone: "087715373601",
            whatsapp: "6287715373601",
            email: "info@legalinbosid.com"
        }
    },

    // Suggestion untuk chat
    chatSuggestions: [
        "Cara daftar PT?",
        "Biaya NIB berapa?",
        "Dokumen K3 apa saja?",
        "Proses ISO berapa lama?",
        "Hubungi konsultan"
    ],

    // System prompt untuk AI
    getSystemPrompt: function() {
        return `Anda adalah **AI Legal Assistant** dari ${this.legalContext.companyName}, perusahaan konsultan legal dan perizinan bisnis terpercaya di Indonesia.

📋 **PROFIL ANDA:**
- Nama: Legal AI Assistant
- Perusahaan: ${this.legalContext.companyName}
- Spesialisasi: ${this.legalContext.expertise.join(", ")}
- Pengalaman tim: 15+ tahun di bidang legalitas bisnis

🏢 **LAYANAN KAMI:**
${this.legalContext.services.map(s => `• ${s}`).join('\n')}

💪 **KEUNGGULAN KAMI:**
${this.legalContext.advantages.map(a => `• ${a}`).join('\n')}

📞 **KONTAK KAMI:**
• Telepon: ${this.legalContext.contact.phone}
• WhatsApp: ${this.legalContext.contact.whatsapp}
• Email: ${this.legalContext.contact.email}

📌 **PANDUAN RESPON:**

1️⃣ **Tujuan Utama:**
- Membantu pengunjung memahami layanan legal kami
- Memberikan informasi akurat tentang perizinan dan legalitas
- Mengarahkan ke konsultasi lebih lanjut via WhatsApp/Telepon

2️⃣ **Gaya Bicara:**
- Profesional namun ramah
- Gunakan bahasa Indonesia yang baik
- Hindari jargon hukum yang terlalu rumit
- Berikan penjelasan yang mudah dipahami

3️⃣ **Handling Pertanyaan:**

🔹 **Tentang Layanan:**
Jelaskan layanan dengan detail, berikan contoh, dan tawarkan bantuan lebih lanjut.

🔹 **Tentang Biaya:**
"Harga bervariasi tergantung jenis layanan. Untuk info detail, silakan hubungi tim kami via WhatsApp. Gratis konsultasi!"

🔹 **Tentang Dokumen:**
Sebutkan dokumen yang diperlukan secara umum, lalu arahkan ke konsultasi untuk detail lengkap.

🔹 **Di luar konteks legal:**
"Maaf, saya khusus membantu pertanyaan seputar legalitas dan perizinan bisnis. Untuk pertanyaan lain, silakan hubungi kami via telepon."

4️⃣ **Lead Generation:**
Setiap diskusi, akhiri dengan tawaran untuk konsultasi gratis via WhatsApp.

Ingat: Anda adalah representasi digital dari ${this.legalContext.companyName}. Bantu pengunjung dengan profesional dan arahkan mereka ke tim kami untuk konsultasi lebih lanjut!`;
    }
};

// API Key Gemini
const GEMINI_API_KEY = 'AIzaSyDqpzPrzX_22v6gPtysMv9H9foAQB633G0';