let produk, jumlahBarang, totalHarga, kode1, jumlahBarang, totalSemua;

class Kasir {

  constructor(nama, kode, harga) {
    this.namaBarang = nama;
    this.kodeBarang = kode;
    this.hargaBarang = harga;
  }

  inputBarang() {
    jumlahBarang = Number(prompt("mau berapa ?"));
    if (jumlahBarang <= 0) {
      this.inputBarang
    }
  }

  total() {
    this.totalHarga = jumlahBarang * this.hargaBarang;
    totalSemua += this.totalHarga;
    let x = confirm(`${totalHarga} tekan ok untuk membeli!`);
    if
  }
  totalSemua(totalSemua) {
    confirm(`Total ${totalSemua}`);
  }

  uangKembalian(uang) {
    uang = prompt("masukkan uang");
    uang = Number(jumlahBarang);

    if (uang === String || uang === undefined || uang === false || uang <= 0) {
      this.uangKembalian();
    } else if (uang < totalHarga) {
      alert(`maaf uang anda tidak cukup`);
    } else {
      alert(
        `Silahkan ambil uang kembalian anda Rp.${uang - totalHarga}, 
      Terima kasih telah berbelanja di Toko kami `
      );
    }
  }

  pembayaran() {
    this.inputBarang();
    this.total();
    this.totalSemua()
    this.uangKembalian();
  }

}




const barg1 = new Kasir(`bembeng`, 0, 2500);
const barg2 = new Kasir(`paseo`, 1, 11000);
const barg3 = new Kasir(`pocky`, 2, 7500);
const barg4 = new Kasir(`mouse`, 3, 120000);
const barg5 = new Kasir(`keyboard`, 4, 200000);

function beli() {
  kode1 = prompt("masukkan kode");
  kode1 = Number(kode1);
  if (kode1 === barg1.kodeBarang) {
    barg1.pembayaran();
  } else if (kode1 === barg2.kodeBarang) {
    barg2.pembayaran();
  } else if (kode1 === barg3.kodeBarang) {
    barg3.pembayaran();
  } else if (kode1 === barg4.kodeBarang) {
    barg4.pembayaran();
  } else if (kode1 === barg5.kodeBarang) {
    barg5.pembayaran();
  } else if (kode1 === barg3.kodeBarang) {
    barg6.pembayaran();
  } else if (kode1 === barg3.kodeBarang) {
    barg7.pembayaran();
  } else {
    alert(`kode yang anda masukkan tidak terdaftar!`);
  }
  confirm
}