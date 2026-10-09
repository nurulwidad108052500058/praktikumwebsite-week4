const form = document.getElementById("kalkulator");
const angkaPertama = document.getElementById("a");
const angkaKedua = document.getElementById("b");
const operasi = document.getElementById("op");
const hasilTeks = document.getElementById("hasil");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const a = Number(angkaPertama.value);
  const b = Number(angkaKedua.value);
  const op = operasi.value;
  let hasil;

  switch (op) {
    case "+":
      hasil = a + b;
      break;
    case "-":
      hasil = a - b;
      break;
    case "*":
      hasil = a * b;
      break;
    case "/":
      if (b === 0) {
        hasilTeks.textContent = "Angka tidak bisa dibagi dengan 0.";
        return;
      }
      hasil = a / b;
      break;
    default:
      hasilTeks.textContent = "Pilih operasi hitung terlebih dahulu.";
      return;
  }

  hasilTeks.textContent = "Hasil: " + new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 8
  }).format(hasil);
});
