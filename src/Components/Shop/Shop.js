import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Shop.css'
const Shop = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));

    }, []);
    const handleAddToCart = () => {
        console.log();
    }
    return (
        <div className='shop-container'>
            <div className="book-container">
                {
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                        handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Books</h3>
                <div className='slected-btn'>
                    <button>Select one for me</button>
                    <button>choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;