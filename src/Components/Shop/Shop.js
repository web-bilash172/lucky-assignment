import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
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
        const newCart = [...cart, book];
        setCart(newCart);

    }
    const selectRandomItem = () => {

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
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;

