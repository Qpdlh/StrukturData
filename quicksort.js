function quickSort(arr) {
    // Jika array memiliki 0 atau 1 elemen, sudah terurut
    if (arr.length <= 1) {
        return arr;
    }

    // Memilih pivot (di sini kita memilih elemen terakhir sebagai pivot)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Memisahkan elemen ke dalam dua array: yang lebih kecil dari pivot dan yang lebih besar
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Menggabungkan hasil: quickSort pada left, pivot, dan quickSort pada right
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Contoh penggunaan
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]