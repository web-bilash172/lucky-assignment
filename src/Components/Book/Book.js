import React from 'react';
import './Book.css'
const Book = (props) => {
    const { handleAddToCart } = props;
    const { author, title, language, price, imageLink } = props.book;
    return (
        <div className='book'>
            <img src={imageLink} alt="" />
            <div className='book-info'>
                <h5 className='book-name'>Title:{title}</h5>
                <p>Author:{author}</p>
                <p>Language:{language}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={handleAddToCart(props.book)} className='button-cart'>
                <p className='btn-text'>Add to Cart</p>

            </button>
        </div>
    );
};

export default Book;