class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.info = function () {
            return (
                title + " by " + author + ", " + pages + " pages, " + (read ? "read" : "not read yet") + "."
            )
        }
    }
}

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(hobbit.info());