interface LibraryItem {
    title: string;
    author: string;
    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    private pages: number;
    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow(): void {
        console.log(`Borrowing book: ${this.title} by ${this.author}`);
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    private date: string;
    constructor(title: string, author: string, date: string) {
        this.title = title;
        this.author = author;
        this.date = date;
    }
    borrow(): void {
        console.log(`Borrowing magazine: ${this.title} by ${this.author}, published on ${this.date}`);
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    private duration: number;
    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    borrow(): void {
        console.log(`Borrowing DVD: ${this.title} by ${this.author}, duration: ${this.duration} minutes`);
    }
}

class Library {
    private collection: LibraryItem[] = [];
    public addItem(item: LibraryItem): void {
        this.collection.push(item);
        console.log(`Added item: ${item.title} by ${item.author}`);
    }
    public findItemByTitle(title: string): LibraryItem | undefined {
        return this.collection.find(item => item.title === title);
    }
    public showCollection(): void {
        console.log("Library Collection:");
        this.collection.forEach(item => {
            console.log(`- ${item.title} by ${item.author}`);
        });
    }
}

let library = new Library();
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
let magazine1 = new Magazine("National Geographic", "Various Authors", "March 2023");
let dvd1 = new DVD("Inception", "Christopher Nolan", 148);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

library.findItemByTitle("The Great Gatsby")?.borrow();
library.showCollection();