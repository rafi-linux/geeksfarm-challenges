i = 0;
hasil = 0;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
        hasil += i;
    }
    i++;
}
console.log(hasil)