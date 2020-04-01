var tebak = confirm('mulai');
var hooman = prompt('tebak angka dari 1- 10');
var komputer = Math.floor(Math.random() * 10);

while (tebak == true) {
    if (hooman == komputer) {
        alert('angka anda ' + hooman + ' angka komputer ' + komputer + ' bener');
    } else if (hooman <= komputer) {
        alert('terlalu kecil');
        hooman = prompt('Tebak lagi');
    } else if (hooman >= komputer) {
        alert('terlalu besar');
        hooman = prompt('Tebak lagi');
    } else {
        alert('bukan angka');
        hooman = prompt('Tebak lagi');
    }
}