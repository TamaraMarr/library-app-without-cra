import React from "react";
import { Link } from 'react-router-dom';

import styles from './BookItem.css';

const BookItem = (props) => {
    const bookData = props.bookData;
    
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardBox}>
                <Link to={`/book/${bookData.id}`}><h4 className={styles.title}>{bookData.title ? bookData.title : "No Title Available"}</h4></Link>
                <h5 className={styles.subtitle}>{bookData.subtitle && bookData.subtitle}</h5>
                <img src={bookData.photo} alt="bookPhoto" className={`${styles.cover} col s12 m6 l3`} />
                <p className={styles.author}><span className={styles.authorTag}>Authors: </span>{bookData.author ? bookData.author : "n/a"}</p>
                <p className={styles.description}>{bookData.description}</p>
            </div>
            <div className={styles.avgRatingDiv}>
                <span>Average rating: {bookData.averageRating ? bookData.averageRating : "n/a"}</span>
            </div>
        </div>
    )
}

export default BookItem;
