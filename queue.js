class Queue {
    constructor() {
        this.items = [];
    }

    // Menambahkan elemen ke antrian
    enqueue(element) {
        this.items.push(element);
    }

    // Menghapus elemen dari antrian
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Memeriksa elemen terdepan
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Memeriksa apakah antrian kosong
    isEmpty() {
        return this.items.length === 0;
    }

    // Mendapatkan ukuran antrian
    size() {
        return this.items.length;
    }

    // Menampilkan semua elemen dalam antrian
    print() {
        console.log(this.items.toString());
    }
}

// Contoh penggunaan Queue
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Elemen terdepan:", queue.front()); // Output: Elemen terdepan: 10
console.log("Ukuran antrian:", queue.size()); // Output: Ukuran antrian: 3

queue.print(); // Output: 10,20,30

console.log("Menghapus elemen:", queue.dequeue()); // Output: Menghapus elemen: 10
console.log("Elemen terdepan setelah dequeue:", queue.front()); // Output: Elemen terdepan setelah dequeue: 20

queue.print(); // Output: 20,30