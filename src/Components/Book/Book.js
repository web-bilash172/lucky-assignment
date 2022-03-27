// book component 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Book.css';
import '../Cart/Cart';
const Book = (props) => {
    const { book, handleAddToCart } = props;
    const { author, title, language, price, imageLink } = book;
    return (
        <div className='book'>
            <img src={imageLink} alt="" />
            <div className='book-info'>
                <h5 className='book-name'>Title:{title}</h5>
                <p>Author:{author}</p>
                <p>Language:{language}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(book)} className='button-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>


            </button>
        </div>
    );
};

export default Book;