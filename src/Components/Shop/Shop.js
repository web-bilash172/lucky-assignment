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
    const [cart, setCart] = useState([])
    const handleAddToCart = (book) => {
        const newCart = [...cart, book.title];
        setCart(newCart);
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
                    <p className='book-name'>Book Name:{cart}</p>
                    <button>Select one for me</button>
                    <button>choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;