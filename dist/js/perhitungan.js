function hitungIPK() {
  const bahasaIndonesia = parseFloat(document.getElementById("bahasaIndonesia").value);
  const bahasaInggris = parseFloat(document.getElementById("bahasaInggris").value);
  const matematika = parseFloat(document.getElementById("matematika").value);
  const kompetensi = parseFloat(document.getElementById("kompetensi").value);

  if (isNaN(bahasaIndonesia) || isNaN(bahasaInggris) || isNaN(matematika) || isNaN(kompetensi)) {
    alert("Masukkan nilai valid untuk semua mata pelajaran.");
    return;
  }

  const totalNilai = bahasaIndonesia + bahasaInggris + matematika + kompetensi;
  const ipk = totalNilai / 4;

  document.getElementById("result").innerHTML = "IPK: " + ipk.toFixed(2);
}
function kembaliKeHalamanUtama() {
  window.location.href = "index.html";
}
