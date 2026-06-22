const contentDiv = document.getElementById('content');
const btnHm = document.getElementById('btn-hm');
const btdata = document.getElementById('btn-tpdata');
const btsek = document.getElementById('btn-sek');
const btnthesis = document.getElementById('btn-thesis');
const btntg1 = document.getElementById('btn-tg1');
const btntg2 = document.getElementById('btn-tg2');

// Fungsi untuk load isi dari file luar
async function loadContent(file) {
    contentDiv.classList.remove('show');
    try {
        const res = await fetch(file);
        const html = await res.text();
        setTimeout(() => {
            contentDiv.innerHTML = html;
            Prism.highlightAll();
            contentDiv.classList.add('show');
        }, 300);
    } catch (err) {
        contentDiv.innerHTML = `<p class="text-red-600">Gagal memuat konten: ${file}</p>`;
    }
}
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {

        // Load halaman
        loadContent(btn.dataset.page);

        // Hapus status aktif dari semua tombol
        document.querySelectorAll('.nav-btn').forEach(item => {
            item.classList.remove('text-white');
            item.classList.add('text-black');
        });

        // Aktifkan tombol yang diklik
        btn.classList.remove('text-black');
        btn.classList.add('text-white');
    });
});

// Tampilkan project pertama kali
loadContent('home.html');

document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.dataset.page === 'home.html') {
        btn.classList.remove('text-black');
        btn.classList.add('text-white');
    }
});



const barBtn = document.getElementById('bar-btn');
const closeBtn = document.getElementById('close-bar');
const sidebar = document.getElementById('sidebar');

barBtn.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });
});