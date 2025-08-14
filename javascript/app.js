function hello() {
  alert("Hallo saya sedang belajar javascript");
}

// Variable
let mobil = "Honda Jazz";
mobil = "Panther";
console.log(mobil);

const lahir = "30 Februari 2001";
const Lahir = "20 Februari 2001";
console.log(Lahir);

// Tipe data
// Primitif
// 1. String

const rumah = "Kemannggisan";
let jalan = "Jalan Palmerah I";
let myHome = `Rumah saya berada di ${rumah}, nama jalannya adalah ${jalan}`;

console.log(
  "Saya punya rumah alamatnya di " + rumah + "Nama jalannya adalah " + jalan
);

console.log(`Rumah saya di ${rumah}, nama jalannya adalah ${jalan}`);
console.log(myHome);

const angka1 = 12345;
let dec = 0.3;
const sisi2 = 10;
let ten = "10";
console.log(sisi2 + sisi2);

let makan = true;
let nikah = false;
console.log(makan);

// undifined
let motor;
console.log(motor);

let minuman = null;
console.log(minuman);

// type of = mengetahui tipe data yang digunakan
console.log(typeof dec);

// tipe data non primitif
// object

let biodata = {
  nama_lengkap: "Fahmi Nuradi",
  asal: "Jakarta",
  umur: 21,
  alamat: "Jalan Anggrek Cendrawasih no 50 Jakbar",
  pendidikan: {
    sd: "SDN 1 Jakarta",
    smp: "SMPN 1 Jakarta",
  },
};

console.log(biodata);
// dot anotation
console.log(biodata.nama_lengkap);
console.log(biodata.pendidikan.smp + biodata.nama_lengkap);
console.log(biodata["asal"]);
console.log(
  `Hallo nama saya ${biodata.nama_lengkap}, saya berumur ${biodata.umur}`
);

// array
let buah = ["nanas", "apel", "mangga", "rambutan", "durian"];

// menambahkan data,
buah.push("leci"); //menambahkan di akhir index
console.log(buah);

buah.unshift("alpukat"); //menambah data di awal index
console.log(buah);

// menghapus data
buah.pop(); //index terakhir akan dihapus
console.log(buah);

buah.shift(); //index awal akan dihapus
console.log(buah);

console.log(buah.length);

let a = 10;
let b = 5;
a += 30; //40
a -= 30; //10
a *= 40; //400
a /= 2; //200
a %= 7;

console.log("hasil penjumlahan adalah : ", a + b);
console.log("hasil pengurangan adalah : ", a - b);
console.log("hasil perkalian adalah : ", a * b);
console.log("hasil pembagian adalah : ", a / b);
console.log("hasil modulus adalah : ", a % b);
console.log("hasil pangkat adalah : ", a ** b);

console.log(a);

let x = "10"; //string
let y = 15; //integer
let c = 10;

console.log("Sama dengan nilai", x == y);
console.log("Sama dengan nilai dan tipe data", x === y);

console.log("tidak sama dengan nilai", x != y);
console.log("tidak sama dengan nilai dan tipe data", x !== y);

console.log("lebih kecil", x < c);
console.log("lebih Besar", x > y);
console.log("lebih kecil / sama dengan", x <= y);
console.log("lebih kecil / sama dengan", x >= c);

let gaji = true;
let bonus = true;
let libur = false;

// logika AND
console.log("Gimana gaji sama bonus kamu?", gaji && bonus);
console.log("Gaji gede, liburan bisa?", gaji && libur);

// logika OR
console.log("Gaji atau bonus aman?", gaji || bonus);
console.log("Bonus dapat? bisa liburan?", bonus || libur);

// Logika NOT
console.log("Dapet bonus gak?", !bonus);
console.log("Bisa liburan gak?", !libur && !gaji);

// Operator Ternerary
let umur = 22;
let menikah = umur >= 21 ? "boleh menikah" : "Belum cocok menikah";
console.log(menikah);

let d = "20";
let e = 20;

console.log(Number(d));

console.log(Boolean(d));

let nilai = 60;

if (nilai >= 60 && nilai < 85) {
  console.log("nilai kamu kurang, silakan remedial");
} else if (nilai >= 85 && nilai < 90) {
  console.log("nilai kamu cukup, silakan tingkatkan");
} else if (nilai >= 90 && nilai <= 100) {
  console.log("Nilai kamu memuaskan");
} else if (nilai >= 1 && nilai <= 60) {
  console.log("Kamu gagal, Ulang semester");
  //   lanjutkan
} else {
  console.log("Input nilai salah.");
}

let hariIni = "Senin";

switch (hariIni) {
  case "Senin":
    console.log("Hari Mager Kerja");
    // lanjutkan
    break;
  case "Selasa":
    console.log("Masih Mager Kerja");
    // lanjutkan
    break;
  case "Rabu":
    console.log("Mulai semangat");
    break;
  case "Kamis":
    console.log("semangat lah");
    break;
  case "Jumat":
    console.log("Udah semangat banget karena mau libur");
    break;
  case "Sabtu":
    console.log("yeay libur");
    break;
  case "Minggu":
    console.log("yeay libur");
    break;
  default:
    console.log("Input salah.");
    break;
}

// Looping
// for loop
for (let i = 1; i <= 10; i++) {
  console.log("saya mengulang sebanyak", i);
}

buah.push("Leci");

for (let i = 0; i < buah.length; i++) {
  console.log("Kemarin saya beli buah ", buah[i]);
}

// while
let loncat = 0;
while (loncat <= 10) {
  console.log("Loncat terus sebanyak", loncat);
  loncat++;
}

// For Of
for (const item of buah) {
  console.log("Saya punya buah", item);
}

for (const properti in biodata) {
  console.log(properti, biodata[properti]);
}

// function biasa
function klik() {
  prompt("Hari ini mau belajar apa?");
}

// function expression
const contoh = function (parameter) {
  // blok kode yang akan digunakan.
};

const functionArrow = (parameter) => {
  // ini block code
};

function sapa(waktu, nama) {
  console.log(`Hallo, selamat ${waktu}, Mr/Mrs ${nama}`);
}

sapa("pagi", "Fahmi");

let persegi = function (sisi) {
  return sisi * sisi;
};

let angka = persegi(30);
console.log("Rumus Luas Persegi adalah : ", angka);

// simple kalkulator
function penjumlahan(angka1, angka2) {
  return Number(angka1) + Number(angka2);
}

function pengurangan(angka1, angka2) {
  return angka1 - angka2;
}

function perkalian(angka1, angka2) {
  return angka1 * angka2;
}

function pembagian(angka1, angka2) {
  if (angka2 === 0) {
    return "Ganti angke ke-2 nya";
  }
  return angka1 / angka2;
}

function jalankanKalkulator() {
  // menampilkan prompt

  let angka1 = prompt("Masukan angka pertama (Wajib Angka)");
  let angka2 = prompt("Masukan angka kedua (Wajib Angka)");

  // angka1 = parseFloat(angka1)

  // validasi wajib angka
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Masukan Angka!");
  }

  // operasinya
  let operasi = prompt("Masukan operasi : tambah, kurang, bagi, kali");

  let hasil;

  switch (operasi.toLowerCase()) {
    case "tambah":
      hasil = penjumlahan(angka1, angka2);
      break;
    case "kurang":
      hasil = pengurangan(angka1, angka2);
      break;
    case "kali":
      hasil = perkalian(angka1, angka2);
      break;
    case "bagi":
      hasil = pembagian(angka1, angka2);
      break;
    default:
      hasil = "Operasi tidak ada";
      break;
  }
  // menampilkan outputnya : 
  alert(`Hasil dari opersi ${operasi} adalah : ${hasil}`)
}
