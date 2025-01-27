class Stack {
    constructor() {
        this.items = [];
    }

    // Menambahkan elemen ke tumpukan
    push(element) {
        this.items.push(element);
    }

    // Menghapus elemen dari tumpukan
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        } 
        return this.items.pop();
    }

    // Memeriksa elemen teratas
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Memeriksa apakah tumpukan kosong
    isEmpty() {
        return this.items.length === 0;
    }

    // Mendapatkan ukuran tumpukan
    size() {
        return this.items.length;
    }

    // Menampilkan semua elemen dalam tumpukan
    print() {
        console.log(this.items.toString());
    }
}

// Contoh penggunaan Stack
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Elemen teratas:", stack.peek()); // Output: Elemen teratas: 30
console.log("Ukuran tumpukan:", stack.size()); // Output: Ukuran tumpukan: 3

stack.print(); // Output: 10,20,30

console.log("Menghapus elemen:", stack.pop()); // Output: Menghapus elemen: 30
console.log("Elemen teratas setelah pop:", stack.peek()); // Output: Elemen teratas setelah pop: 20

stack.print(); // Output: 10,20