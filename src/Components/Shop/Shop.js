import React, { useEffect, useState } from 'react';
import '../../../public/data.json'
const Shop = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => console.log(data));

    }, []);
    return (
        <div>

        </div>
    );
};

export default Shop;