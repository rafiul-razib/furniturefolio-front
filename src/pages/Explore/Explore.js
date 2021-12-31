import React, {useEffect, useState} from 'react';
import SingleProduct from '../Home/SingleProduct';


const Explore = () => {
    const [products, setProducts] = useState([]);
 

    useEffect(()=>{
        fetch('https://salty-lowlands-18785.herokuapp.com/all-products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    return (
        <div className='container-fluid bg-light'>
            <div className='container text-center py-5'>
            <h2 className='mb-5'>Choose from Our Collections</h2>
            <div className='row g-4'>
            {
                products.map(furniture => <SingleProduct key={furniture._id} furniture={furniture}></SingleProduct>)
            }
            </div>
        </div>
        </div>
    );
};

export default Explore;