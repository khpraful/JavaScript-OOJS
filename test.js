// const s1 = "hello";
// console.log(s1.toUpperCase());
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log("Object: ", s2);
// console.log("Value: ", s2.valueOf());
// console.log("Second letter: ", s2[1]);
// console.log(typeof s2);

// console.log(window.alert("Hello!"));
// console.log(navigator.appVersion);

const book1 = {
    title: "Cool dudes",
    author: "Raymond",
    year: "2013",
    getSummary: function () {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
}
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book1.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));

