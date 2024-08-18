// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// Function to simulate loading process
function simulateLoading() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // Simulate loading for 3 seconds
  });
}

// Run the loading simulation
simulateLoading().then(() => {
  // Hide the loading screen and show the main content
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
});

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};
// copy end

// waktu start

const countDownDate = new Date("Saturday, August 24, 2024 08:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end

// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "Guest";

// hover blur effect
$(".blur").mouseenter(function () {
  $(".blur").css("filter", "blur(5px)"); // Blurs each .blur div
  $(this).css("filter", "blur(0px)"); // Removes blur from the currently hovered .blur div
});
$(".blur").mouseleave(function () {
  $(".blur").css("filter", "blur(0px)"); // Removes blur from all when none are hovered
});

// undngan end
function openInvitation() {
  // Tambahkan kelas 'hidden' untuk memulai animasi fade-out
  const overlay = document.getElementById("overlay");
  overlay.classList.add("hidden");

  // Setelah animasi selesai, hapus overlay dan izinkan scroll
  setTimeout(() => {
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
  }, 500); // Waktu delay sama dengan durasi animasi
}

// Tampilkan overlay dan nonaktifkan scroll saat halaman dimuat
window.onload = function () {
  document.getElementById("overlay").style.display = "flex";
  document.body.classList.add("no-scroll");
};
// modal end

document.getElementById("openInvitation").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  const loadingModal = new bootstrap.Modal(document.getElementById("loadingModal"));

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loadingModal.show(); // Tampilkan modal loading

    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        alert("Berhasil mengisi Kehadiran");
        form.reset();
        loadingModal.hide(); // Sembunyikan modal loading

        // Tambahkan kode untuk mengunduh file
        fetch("img/vocher.png")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.blob();
          })
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = "vocher.png"; // hanya nama file
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => console.error("Download error:", error));
      })
      .catch((error) => {
        console.error("Submission error:", error);
        loadingModal.hide(); // Sembunyikan modal loading saat ada error
      });
  });
});
