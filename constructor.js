function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}

const book1 = new Book("Cool dudes", "Raymond", "2016");
console.log(book1.getSummary());