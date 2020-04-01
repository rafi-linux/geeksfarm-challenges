a = [21, 16, 3, 9, 11, 81, 6, 36, 4, 6];
for (i = 0; i <= a.length; i++) {
    if (Math.sqrt(a[i]) % 2 == 0 || (Math.sqrt(a[i]) + 1) % 2 == 0) {
        console.log(a[i])
    }
}