import React from "react";

import 'Components/BookItem.css';

const BookItem = (props) => {
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={props.bookData.photo ? props.bookData.photo : "https://i.pinimg.com/originals/37/93/a0/3793a0d6a9c3ae6af7cabd9e85e595fb.jpg"} alt="bookPhoto" className="BookItem_bookCover" />
                <span className="title">{props.bookData.title}</span>
                <p>{props.bookData.author}<br />
                    {props.bookData.description}
                </p>
                <a className="secondary-content">Average rating: {props.bookData.averageRating ? props.bookData.averageRating : "n/a"}</a>
            </li>
        </ul>
    )
}

export default BookItem;