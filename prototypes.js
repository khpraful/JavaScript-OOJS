function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`
}

Book.prototype.getAge = function(){
    const bookAge = new Date().getFullYear() - this.year;
    return `${this.title} was published ${bookAge} years ago`
}

Book.prototype.edit = function(newYear){
    this.year = newYear;
    this.revisedEdition = true;
}

const book1 = new Book("Fantastic Four", "Rudolf", "2013");
console.log(book1);
book1.edit('2018');
console.log(book1);