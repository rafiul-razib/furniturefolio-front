import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [reloadPage, setReloadPage] = useState(false)
 

    useEffect(()=>{
        fetch('https://salty-lowlands-18785.herokuapp.com/all-products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[reloadPage])
    return (
        <div>
            <h1>All products</h1>
            <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, index) =><ProductRow key={item._id} item={item} sequenceNumber={index} setReloadPage={setReloadPage}></ProductRow>)
                }
            </tbody>
            </table>
        </div>
    );
};

export default AllProducts;