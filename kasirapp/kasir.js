/* // barang = Bar
let produk, jumlahBar, totalHarga, inputKodeBar, jumlahBarang, totalSemua;

// object constructor dan method untuk menginput data barang
class Kasir {

  constructor(nama, kode, harga) {
    this.namaBarang = nama;
    this.kodeBarang = kode;
    this.hargaBarang = harga;
  }

  inputBarang() {
    jumlahBar = Number(prompt("mau berapa ?"));
    if (jumlahBar <= 0) {
      this.inputBarang
    }
  }

  total() {
    this.totalHarga = jumlahBar * this.hargaBarang;
    totalSemua += this.totalHarga;
    let x = confirm(`${totalHarga} tekan ok untuk membeli!`);
  }

  totalSemua(totalSemua) {
    confirm(`Total ${totalSemua}`);
  }

  uangKembalian(uang) {
    uang = prompt("masukkan uang");
    uang = Number(jumlahBar);

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



//input data barang ke kasir
const barg1 = new Kasir(`bembeng`, 0, 2500);
const barg2 = new Kasir(`paseo`, 1, 11000);
const barg3 = new Kasir(`pocky`, 2, 7500);
const barg4 = new Kasir(`mouse`, 3, 120000);
const barg5 = new Kasir(`keyboard`, 4, 200000);

// function saat tombol kasir ditekan
function beli() {
  kode1 = prompt("masukkan kode");
  kode1 = Number(kode1);
  if (inputKodeBar === barg1.kodeBarang) {
    barg1.pembayaran();
  } else if (inputKodeBar === barg2.kodeBarang) {
    barg2.pembayaran();
  } else if (inputKodeBar === barg3.kodeBarang) {
    barg3.pembayaran();
  } else if (inputKodeBar === barg4.kodeBarang) {
    barg4.pembayaran();
  } else if (inputKodeBar === barg5.kodeBarang) {
    barg5.pembayaran();
  } else if (inputKodeBar === barg3.kodeBarang) {
    barg6.pembayaran();
  } else if (inputKodeBar === barg3.kodeBarang) {
    barg7.pembayaran();
  } else {
    alert(`kode yang anda masukkan tidak terdaftar!`);
  }
  confirm
} */





/* let doll = document.querySelector("#inputKode").addEventListener("submit", past());
let x = document.querySelector("#liat");
const c = document.querySelector("#barCode")

function past() {
  let ini = c.value;
  document.querySelector("#liat").innerText = ini;

} */