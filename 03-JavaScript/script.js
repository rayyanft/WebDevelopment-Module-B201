// Contoh JS sederhana: Alert saat halaman dimuat
console.log("Selamat datang di Portofolio Saya!");

// Contoh interaksi: Mengubah warna navbar saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#111';
    } else {
        nav.style.backgroundColor = '#333';
    }
});
