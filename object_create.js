const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },
    getAge: function () {
        const bookAge = new Date().getFullYear() - this.year;
        return `${this.title} was published ${bookAge} years ago`;
    }

}

const book1 = Object.create(bookProtos);
book1.title = 'Funny tales';
book1.author = "Louis";
book1.year = '2009'

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());