import React, {useEffect, useState} from 'react';
import SingleProduct from './SingleProduct';


const Products = () => {
    const [products, setProducts] = useState([]);
    const displayProducts = products.slice(0,8)

    useEffect(()=>{
        fetch('https://salty-lowlands-18785.herokuapp.com/all-products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    return (
        <div className='container text-center my-5'>
            <h2 className='mb-5'>Latest Collections</h2>
            <div className='row g-4'>
            {
                displayProducts.map(furniture => <SingleProduct key={furniture._id} furniture={furniture}></SingleProduct>)
            }
            </div>
        </div>
    );
};

export default Products;