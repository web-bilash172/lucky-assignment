// shop component 

import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {
    // bboks useState 
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data));

    }, []);
    // cart useState 
    const [cart, setCart] = useState([])
    const handleAddToCart = (book) => {
        const newCart = [...cart, book];

        setCart(newCart);

    }

    // event handler for random selection 
    const handleRandomSelection = () => {
        if (cart.length === 0) {
            alert('please add some book to cart');
        }
        else {
            let randomSelection = [];
            const select = Math.floor(Math.random() * cart.length)
            randomSelection.push(cart[select]);
            setCart(randomSelection);
        }
    }
    // clear your choice 
    const choiceAgain = () => {
        setCart([]);

    }


    return (
        <div className='shop-container'>
            <div className="book-container">
                {
                    // book data passing
                    books.map(book => <Book
                        key={book.id}
                        book={book}
                        handleAddToCart={handleAddToCart}

                    ></Book>)

                }
            </div>
            {/* cart container  */}
            <div className='cart-container'>
                <div>

                    {
                        cart.map(cart => <Cart cart={cart}


                        ></Cart>)
                    }

                    {/* cart buttons */}
                    <div className='cart-btns'>
                        <button onClick={() => handleRandomSelection()} className='slected-btn'>Selected one for me</button>

                        <button onClick={choiceAgain} className='slected-btn'>Choose again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;

