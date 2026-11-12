const inputHargaSatuan = document.getElementById('hargaSatuan');
const inputJumlahBarang = document.getElementById('jumlahBarang');
const inputTotalHarga = document.getElementById('totalHarga');
const formBelanja = document.getElementById('formBelanja');
const tabelBelanja = document.getElementById('tabelBelanja');
const infoTotalSemua = document.getElementById('infoTotalSemua');

let grandTotal = 0; // Variabel untuk menyimpan akumulasi total belanja

function hitungOtomatis() {
let harga = parseFloat(inputHargaSatuan.value) || 0;
let jumlah = parselFloat(inputJumlahBarang) || 0;
let total = harga * jumlah;
 inputTotalHarga.value = total.toLocaleString("id-ID");

}

inputHargaSatuan.addEventListener('input', hitungOtomatis);
inputJumlahBarang.addEventListener('input', hitungOtomatis);
function (event) {
    event.preventDefault();
let nama =document.getElementById('namaBarang').value;
let harga = parseFloat(inputHargaSatuan.value);
let jumlah = parseInt(inputJumlahBarang.value);
let totalBaris = harga * jumlah;
grandTotal += totalBaris;
}


