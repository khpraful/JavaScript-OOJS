class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
    getAge() {
        const bookAge = new Date().getFullYear() - this.year;
        return `${this.title} was published ${bookAge} years ago`
    }
    edit(newYear) {
        this.year = newYear;
        this.revisedEdition = true;
        return `Revised`
    }
    static topRatedBook(){
        return 'Silent whispers'
    }
}
const book1 = new Book("Lost files", "Willy", '2018');
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.edit('2019'));
console.log(book1);
console.log(Book.topRatedBook());

