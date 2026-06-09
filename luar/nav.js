const contentDiv = document.getElementById('content');
const btnthesis = document.getElementById('btn-thesis');
const btntg1 = document.getElementById('btn-tg1');

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

// Event tombol
btnthesis.addEventListener('click', () => {
    loadContent('thesis.html');
    btnthesis.classList.add('text-white',);
    btnthesis.classList.remove('text-black',);
    btntg1.classList.remove('text-white',);
    btntg1.classList.add('border-0', 'text-black');
});

btntg1.addEventListener('click', () => {
    loadContent('tugas1.html');
    btntg1.classList.add('text-white',);
    btntg1.classList.remove('text-black',);
    btnthesis.classList.remove('text-white',);
    btnthesis.classList.add('border-0', 'text-black');
});

// Tampilkan project pertama kali
loadContent('thesis.html');
btnthesis.classList.add('text-white',);