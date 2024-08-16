document.getElementById("translateBtn").addEventListener("click", function () {
  document.getElementById("translateBtn").style.display = "none";
  document.getElementById("refreshBtn").style.display = "block";

  document.getElementById("tanggal").textContent = "How to order?";
  document.getElementById("tanggal2").textContent = "Saturday, 24-08-2024";
  document.getElementById("hari2").textContent = "Day";
  document.getElementById("jam2").textContent = "Hour";
  document.getElementById("menit2").textContent = "Minute";
  document.getElementById("detik2").textContent = "Second";
  document.getElementById("online-shop").textContent = "Online Shop";
  document.getElementById("top-seller").textContent = "Top Seller";
  document.getElementById("des-prod-1").textContent = `This set is made from fine and soft denim, the material is cool, comfortable to wear and
  It's not exposed so it's comfortable to wear. With long sleeves and full buttons. Suitable for use
  in various formal and casual events`;
  document.getElementById("des-prod-2").textContent = `This set is made from fine and soft denim, the material is cool, comfortable to wear and
  It's not exposed so it's comfortable to wear. With long sleeves and full buttons. Suitable for use
  in various formal and casual events`;
  document.getElementById("lokasi").textContent = "Location";
  document.getElementById("btn-gmap").textContent = "Open Google Maps";
  document.getElementById("confirm").textContent = "confirm your presence";
  document.getElementById("diskon").textContent = "Please confirm your presence to get a discount voucher for shopping at V&P by Florina.";
  document.getElementById("btn-diskon").textContent = "Get Discount!!";
  document.getElementById("hadir").textContent = "Present";
  document.getElementById("tidak").textContent = "not present";
  document.getElementById("send").textContent = "Send";
  document.getElementById("end").textContent = "We are looking forward to your presence";
});

document.getElementById("refreshBtn").addEventListener("click", function () {
  location.reload(); // Refresh halaman
});
