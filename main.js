// Fungsi untuk membuat card layanan
function createServiceCards(services, elementId, startIconIndex = 0) {
    const container = document.getElementById(elementId);
    if (!container) return;

    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card animate';
        
        const iconIndex = (startIconIndex + index) % websiteData.icons.length;
        const icon = websiteData.icons[iconIndex];
        
        let description = "Layanan profesional & terpercaya untuk kebutuhan bisnis Anda.";
        if (service.includes("ISO")) description = "Sertifikasi sistem manajemen internasional.";
        else if (service.includes("K3")) description = "Keselamatan dan kesehatan kerja.";
        else if (service.includes("Amdal")) description = "Analisis dampak lingkungan.";
        else if (service.includes("NIB")) description = "Nomor Induk Berusaha (NIB) cepat.";
        else if (service.includes("SNI")) description = "Standar Nasional Indonesia.";
        else if (service.includes("PT")) description = "Pendirian dan perubahan PT, CV, dll.";
        else if (service.includes("Kapal")) description = "Pengurusan dokumen kapal lengkap.";
        
        card.innerHTML = `
            <div class="service-icon"><i class="fas ${icon}"></i></div>
            <h3>${service}</h3>
            <p>${description}</p>
        `;
        
        container.appendChild(card);
    });
}

// Fungsi untuk membuat testimonial
function createTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;

    websiteData.testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card animate';
        card.innerHTML = `
            <div class="testimonial-text">"${t.text}"</div>
            <div class="testimonial-author">
                <div class="author-avatar">${t.initial}</div>
                <div class="author-info">
                    <h4>${t.author}</h4>
                    <p>${t.position}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Fungsi untuk membuat FAQ
function createFAQ() {
    const container = document.getElementById('faq');
    if (!container) return;

    websiteData.faqs.forEach((faq) => {
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.innerHTML = `
            <div class="faq-question">
                ${faq.question}
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                ${faq.answer}
            </div>
        `;
        
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
        
        container.appendChild(item);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Mobile dropdown toggle
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render semua komponen
    createServiceCards(websiteData.mainServices, 'mainServices', 0);
    createServiceCards(websiteData.additionalServices, 'additionalServices', 13);
    createTestimonials();
    createFAQ();
    
    // Inisialisasi mobile menu
    initMobileMenu();
    
    // Inisialisasi chat
    initChat();
});