import React from "react";

import 'Components/BookItem.css';

const BookItem = (props) => {
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={props.bookData.photo} alt="bookPhoto" className="BookItem_bookCover" />
                <span className="title">{props.bookData.title ? props.bookData.title : "No Title Available"}</span>
                <p>{props.bookData.author}<br />
                    {props.bookData.description}
                </p>
                <div className="BookItem_linksDiv">
                    {props.bookData.pdf ? <a className="BookItem_bookLink1" href={props.bookData.pdf}>PDF sample</a> : ""}
                    {props.bookData.epub ? <a className="BookItem_bookLink2" href={props.bookData.epub}>EPUB sample</a> : ""}
                    <a>Average rating: {props.bookData.averageRating ? props.bookData.averageRating : "n/a"}</a>
                </div>
            </li>
        </ul>
    )
}

export default BookItem;