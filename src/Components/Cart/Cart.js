// cart component 

import React, { useState } from 'react';
import '../Book/Book';
import Book from '../Book/Book';
import './Cart.css';
// cart 
const Cart = ({ cart, selection }) => {


    const { title } = cart;
    return (

        <div className='cart'>


            <div >

                <h4 className='selected-book'>
                    {title}
                </h4>


            </div>
            <h3>{selection}</h3>
        </div>

    );

};

export default Cart;