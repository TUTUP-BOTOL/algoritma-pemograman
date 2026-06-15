const profileBtn = document.getElementById("profileBtn");
const profileBox = document.getElementById("profileBox");
const closeProfile = document.getElementById("closeProfile");

// buka popup
profileBtn.addEventListener("click", () => {
    profileBox.classList.remove("hidden");
    profileBox.classList.add("flex");
});

// tutup popup
closeProfile.addEventListener("click", () => {
    profileBox.classList.add("hidden");
    profileBox.classList.remove("flex");
});





// function copyCode(button) {
//     const pre = button.parentElement.querySelector('pre');
//     navigator.clipboard.writeText(pre.innerText);
//     alert("Code berhasil dicopy!");
// }

function copyCode(button) {
    const pre = button.parentElement.querySelector('pre');
    navigator.clipboard.writeText(pre.innerText);

    const toast = document.createElement('div');

    toast.textContent = '✅ Code berhasil dicopy!';
    toast.className = `
        fixed bottom-5 left-1/2 -translate-x-1/2
        bg-black text-white
        px-4 py-2 rounded-lg
        z-50
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


window.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

function showPage(pageId) {
    // Sembunyikan semua halaman
    document.getElementById('home').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('run').classList.add('hidden');

    // Tampilkan halaman aktif
    document.getElementById(pageId).classList.remove('hidden');

    const btnHome = document.getElementById('btn-home');
    const btnAbout = document.getElementById('btn-about');
    const btnRun = document.getElementById('btn-run');

    if (pageId === 'home') {
        btnHome.classList.remove('bg-[#DFFBFC]',);
        btnHome.classList.add('bg-[#FAD06C]',);

        btnAbout.classList.remove('bg-[#FAD06C]',);
        btnAbout.classList.add('bg-[#DFFBFC]',);

        btnRun.classList.remove('bg-[#FAD06C]',);
        btnRun.classList.add('bg-[#DFFBFC]',);
    } else if (pageId === 'about') {
        btnAbout.classList.remove('bg-[#DFFBFC]',);
        btnAbout.classList.add('bg-[#FAD06C]',);

        btnHome.classList.remove('bg-[#FAD06C]',);
        btnHome.classList.add('bg-[#DFFBFC]',);

        btnRun.classList.remove('bg-[#FAD06C]',);
        btnRun.classList.add('bg-[#DFFBFC]',);
    } else if (pageId === 'run') {
        btnRun.classList.remove('bg-[#DFFBFC]',);
        btnRun.classList.add('bg-[#FAD06C]',);

        btnAbout.classList.remove('bg-[#FAD06C]',);
        btnAbout.classList.add('bg-[#DFFBFC]',);

        btnHome.classList.remove('bg-[#FAD06C]',);
        btnHome.classList.add('bg-[#DFFBFC]',);
    }
}




const track = document.getElementById('track');

// duplikasi otomatis
track.innerHTML += track.innerHTML;

let x = 0;

function animate() {
    x -= 1;

    const halfWidth = track.scrollWidth / 2;

    if (Math.abs(x) >= halfWidth) {
        x = 0;
    }

    track.style.transform = `translateX(${x}px)`;

    requestAnimationFrame(animate);
}

animate();