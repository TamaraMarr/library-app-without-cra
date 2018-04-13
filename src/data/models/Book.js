class Book {
    constructor({ volumeInfo, id, accessInfo }) {
        this.id = id;
        this.authors = volumeInfo.authors;
        this.title = volumeInfo.title;
        this.subtitle = volumeInfo.subtitle;
        this.averageRating = volumeInfo.averageRating;
        this.ratingsCount = volumeInfo.ratingsCount;
        this.categories = volumeInfo.categories;
        this.description = volumeInfo.description;
        this.photo = this.getImage(volumeInfo.imageLinks);
        this.isbns = volumeInfo.industryIdentifiers;
        this.googleBooksLink = volumeInfo.infoLink;
        this.language = volumeInfo.language;
        this.pageCount = volumeInfo.pageCount;
        this.maturityRating = volumeInfo.maturityRating;
        this.publishedDate = volumeInfo.publishedDate;
        this.publisher = volumeInfo.publisher;
        this.epub = accessInfo.epub.acsTokenLink;
        this.pdf = accessInfo.pdf.acsTokenLink;
    }

    getImage(photos) {
        if (!photos) {
            return 'https://i.pinimg.com/originals/37/93/a0/3793a0d6a9c3ae6af7cabd9e85e595fb.jpg';
        }

        if (photos.large) {
            return photos.large;
        } else if (photos.medium) {
            return photos.medium;
        } else if (photos.small) {
            return photos.small
        } else if (photos.smallThumbnail) {
            return photos.smallThumbnail;
        } else {
            return photos.thumbnail;
        }
    }
}

export default Book;