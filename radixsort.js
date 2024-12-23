function getMax(arr) {
    return Math.max(...arr);
}

function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n); // Array output yang akan menyimpan hasil
    const count = new Array(10).fill(0); // Array untuk menghitung frekuensi digit

    // Hitung frekuensi kemunculan digit pada posisi tertentu
    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Ubah count[i] sehingga count[i] sekarang berisi posisi elemen dalam output
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Bangun array output
    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Salin array output ke arr, sehingga arr sekarang terurut berdasarkan digit saat ini
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    // Temukan nilai maksimum untuk menentukan jumlah digit
    const max = getMax(arr);

    // Lakukan counting sort untuk setiap digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
}

// Contoh penggunaan
const array = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(array);
console.log(array); // Output: [2, 24, 45, 66, 75, 90, 170, 802]