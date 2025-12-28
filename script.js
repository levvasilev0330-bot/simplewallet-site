// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

darkModeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle (optional - can be enhanced)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// APK file URL - единый источник правды
// APK скачивается из GitHub Releases (latest release asset)
// Формат: https://github.com/<OWNER>/<REPO>/releases/latest/download/<ASSET_NAME>.apk
// ⚠️ ВАЖНО: Замените <OWNER> и <REPO> на реальные значения вашего репозитория
const APK_URL = "https://github.com/levvasilev0330-bot/simplewallet-site/releases/latest/download/SimpleWallet-28122025.apk";

// Обновляем все ссылки скачивания на GitHub Releases URL
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.download-apk').forEach(button => {
        button.href = APK_URL;
        // Убираем атрибут download, так как файл на внешнем сервере
        button.removeAttribute('download');
    });
});

