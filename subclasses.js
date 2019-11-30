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
        return 'Silent whispers part 2'
    }
}

class Magazine extends Book{
    constructor(title, author,year,month){
        super(title, author, year);
        this.month=month;
    }
}

// const book1 = new Book("Lost files", "Willy", '2018');
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// console.log(book1.edit('2019'));
// console.log(book1);
// console.log(Book.topRatedBook());

const mag1 = new Magazine("Nightmare","Robin", '2019', "Jan");
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getAge());
console.log(mag1.edit('2019'));
console.log(mag1);
console.log(Magazine.topRatedBook());


