
// function copyCode() {
//     const code = document.getElementById("myCode").innerText;
//     navigator.clipboard.writeText(code);

//     alert("Code berhasil dicopy!");
// }
function copyCode(button) {
    const pre = button.parentElement.querySelector('pre');
    navigator.clipboard.writeText(pre.innerText);
    alert("Code berhasil dicopy!");
}


function showPage(pageId) {
    // Sembunyikan semua halaman
    document.getElementById('home').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');

    // Tampilkan halaman aktif
    document.getElementById(pageId).classList.remove('hidden');

    const btnHome = document.getElementById('btn-home');
    const btnAbout = document.getElementById('btn-about');

    if (pageId === 'home') {
        btnHome.classList.remove('bg-[#DFFBFC]', );
        btnHome.classList.add('bg-[#FAD06C]', );

        btnAbout.classList.remove('bg-[#FAD06C]', );
        btnAbout.classList.add('bg-[#DFFBFC]', );
    } else {
        btnAbout.classList.remove('bg-[#DFFBFC]', );
        btnAbout.classList.add('bg-[#FAD06C]', );

        btnHome.classList.remove('bg-[#FAD06C]', );
        btnHome.classList.add('bg-[#DFFBFC]', );
    }
}