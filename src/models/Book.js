class Book {
    constructor({ volumeInfo, id }) {
        this.id = id;
        this.authors = volumeInfo.authors;
        this.title = volumeInfo.title;
        this.subtitle = volumeInfo.subtitle;
        this.averageRating = volumeInfo.averageRating;
        this.ratingsCount = volumeInfo.ratingsCount;
        this.categories = volumeInfo.categories;
        this.description = volumeInfo.description;
        this.photo = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : "";
        this.isbns = volumeInfo.industryIdentifiers;
        this.googleBooksLink = volumeInfo.infoLink;
        this.language = volumeInfo.language;
        this.pageCount = volumeInfo.pageCount;
        this.maturityRating = volumeInfo.maturityRating;
        this.publishedDate = volumeInfo.publishedDate;
        this.publisher = volumeInfo.publisher
    }
}

export default Book;