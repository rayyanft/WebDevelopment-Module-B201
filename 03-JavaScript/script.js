/* ==========================================
   JAVASCRIPT: MEMBUAT EFEK NAVBAR SAAT DI-SCROLL
========================================== */

// 1. Kita mencari elemen 'nav' (navbar) di dalam HTML dan menyimpannya di variabel 'navbar'
const navbar = document.getElementById('navbar');

// 2. Kita memerintahkan 'window' (jendela browser) untuk memperhatikan kejadian (Event) 'scroll'
window.addEventListener('scroll', function() {
    
    // 3. Logika: Jika halaman di-scroll ke bawah lebih dari 50 pixel...
    if (window.scrollY > 50) {
        
        // ...Maka ubah warna background navbar menjadi agak transparan
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)'; // Tambah bayangan
        
    } else {
        
        // 4. Jika user scroll kembali ke atas (kurang dari 50px), kembalikan ke warna aslinya (solid)
        navbar.style.backgroundColor = '#2c3e50';
        navbar.style.boxShadow = 'none'; // Hilangkan bayangan
        
    }
});

// Contoh JS sederhana lainnya: Memunculkan pesan di Console Browser
// (Cara lihatnya: Klik kanan di web -> Inspect -> Console)
console.log("Halo! Script JavaScript berhasil berjalan!");
