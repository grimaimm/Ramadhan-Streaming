function tampilkanWaktu() {
  var sekarang = new Date();
  var hari = sekarang.getDate();
  var bulan = sekarang.getMonth() + 1;
  var tahun = sekarang.getFullYear();
  var jam = sekarang.getHours();
  var menit = sekarang.getMinutes();
  var detik = sekarang.getSeconds();
  
  // Konversi bulan menjadi nama bulan
  var namaBulan;
  switch (bulan) {
    case 1:
      namaBulan = "Januari";
      break;
    case 2:
      namaBulan = "Februari";
      break;
    case 3:
      namaBulan = "Maret";
      break;
    case 4:
      namaBulan = "April";
      break;
    case 5:
      namaBulan = "Mei";
      break;
    case 6:
      namaBulan = "Juni";
      break;
    case 7:
      namaBulan = "Juli";
      break;
    case 8:
      namaBulan = "Agustus";
      break;
    case 9:
      namaBulan = "September";
      break;
    case 10:
      namaBulan = "Oktober";
      break;
    case 11:
      namaBulan = "November";
      break;
    case 12:
      namaBulan = "Desember";
      break;
    default:
      namaBulan = "";
  }
  
  // Menambahkan nol di depan angka tunggal
  if (hari < 10) {
    hari = '0' + hari;
  }
  if (bulan < 10) {
    bulan = '0' + bulan;
  }
  if (jam < 10) {
    jam = '0' + jam;
  }
  if (menit < 10) {
    menit = '0' + menit;
  }
  if (detik < 10) {
    detik = '0' + detik;
  }
  
  var waktu = hari + ' ' + namaBulan + ' ' + tahun + ', ' + jam + ':' + menit + ':' + detik;
  
  document.getElementById('waktu').innerHTML = waktu;
}

// Panggil fungsi tampilkanWaktu setiap detik
setInterval(tampilkanWaktu, 1000);