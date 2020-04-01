alert('Persegi')
class Persegi {
    constructor(s) {
        this.sisi = s;
    }

    get luas() {
        return this.sisi * this.sisi;
    }

    get keliling() {
        return this.sisi * 4;
    }
}
Persegi = new Persegi(2);
alert('Luas Persegi: ' + Persegi.luas);
alert('Keliling Persegi: ' + Persegi.keliling);


alert('Persegi Panjang');
class PersegiPanjang {
    constructor(p, l) {
        this.panjang = p;
        this.lebar = l;
    }

    get luas() {
        return this.panjang * this.lebar;
    }

    get keliling() {
        return 2 * (this.panjang + this.lebar);
    }
}
PersegiPanjang = new PersegiPanjang(2, 3);
alert('Luas Persegi Panjang: ' + PersegiPanjang.luas);
alert('Keliling Persegi Panjang: ' + PersegiPanjang.keliling);

alert('Lingkaran');
class Lingkaran {
    constructor(r) {
        this.jari_jari = r;
    }

    get luas() {
        return Math.PI * Math.pow(this.jari_jari, 2);
    }

    get keliling() {
        return 2 * Math.PI * this.jari_jari;
    }
}
Lingkaran = new Lingkaran(3);
alert('Luas Lingkaran: ' + Lingkaran.luas);
alert('Keliling Lingkaran: ' + Lingkaran.keliling);