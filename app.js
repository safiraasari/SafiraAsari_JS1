// If,Else, Nested If
var grade = 85;
// Equal to
if (grade >= 90) {
  console.log("Nilai Anda A, Sangat Baik");
} else if (grade >= 85) {
  console.log("Nilai Anda B, Baik");
} else if (grade >= 75) {
  console.log("Nilai Anda C, Cukup Baik");
} else if (grade >=65) {
  console.log("Nilai Anda D, Perbaiki");
} else {
  console.log("Nilai Anda E, Anda Harus Mengulang");
}

// Switch Case
var Hewan = "Harimau";
// Equal to
switch (Hewan) {
  case "Kambing":
  case "Kelinci":
  case "Jerapah":
    console.log("Ini Adalah Hewan Herbivora");
    break;
  case "Kucing":
  case "Harimau":
  case "Buaya":
    console.log("Ini Adalah Hewan Karnivora");
    break;
  case "Musang":
  case "Piranha":
  case "Tikus":
    console.log("Ini Adalah Hewan Omnivora");
    break;
  default:
    console.log("Tidak Ada Hewan Yang cocok.");
}

// For Statement
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Jumlahnya Adalah", sum);

// While
let i = 1;
while (i <= 5) {
  console.log("Nilai i: " + i);
  i++;
}
let x = 5;

// Do While
let counter = 1;
do {
  console.log("Peringkat Ke-" + counter);
  counter++;
} while (counter <= 3);

// Function
function tambah(a, b) {
  return a - b;
}
const hasil = tambah(500, 257);
console.log("Hasil Pengurangan:", hasil);


