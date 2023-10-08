// Contoh if, else & nested if
function nilaiMahasiswa(nilai) {
  let huruf;

  if (nilai >= 82) {
      huruf = 'A';
  } else {
      if (nilai >= 72) {
          huruf = 'B';
      } else {
          if (nilai >= 62) {
              huruf = 'C';
          } else {
              huruf = 'D';
          }
      }
  }

  return huruf;
}

// Contoh penggunaannya
console.log('Huruf untuk nilai 83:', nilaiMahasiswa(83));
console.log('huruf untuk nilai 72:', nilaiMahasiswa(72));
console.log('Huruf untuk nilai 43:', nilaiMahasiswa(43));


// Contoh switch case
function dayOfWeek(hari) {
  let namaHari;

  switch (hari) {
      case 0:
          namaHari = 'Minggu';
          break;
      case 1:
          namaHari = 'Senin';
          break;
      case 2:
          namaHari = 'Sselasa';
          break;
      case 3:
          namaHari = 'Rabu';
          break;
      case 4:
          namaHari = 'Kamis';
          break;
      case 5:
          namaHari = 'Jum at';
          break;
      case 6:
          namaHari = 'Sabtu';
          break;
      default:
          namaHari = 'Hari Tidak ditemukan';
  }

  return namaHari;
}

// Contoh penggunaannya
console.log('Nama Hari :', dayOfWeek(4));


// Contoh for statement
function printNumbersUpTo(limit) {
  for (let i = 1; i <= limit; i++) {
      console.log(i);
  }
}

// Contoh penggunaan
printNumbersUpTo(7);


// Contoh while
function countDownFrom(num) {
  while (num >= 0) {
      console.log(num);
      num--;
  }
}

// Contoh do-while
function doWhileExample() {
  let i = 0;

  do {
      console.log('Nilai Dari i : ' + i);
      i++;
  } while (i < 5);
}

// Contoh penggunaan
countDownFrom(10);
doWhileExample();


// Contoh function
function show(name) {
  return 'Hello, ' + name + '!';
}

// Contoh penggunaannya
console.log(show('Alice'));