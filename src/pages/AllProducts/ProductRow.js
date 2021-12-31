import React from 'react';

const ProductRow = ({item, sequenceNumber, setReloadPage}) => {
    const{product, price, _id} = item
    const uri = `https://salty-lowlands-18785.herokuapp.com/products/delete/${_id}`

    const handleDeleteProduct = e =>{
        fetch(uri, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert("Successfully deleted product!!")
                setReloadPage(data)
            }
        })
    }
    return (
        <tr>
                <th scope="row">{sequenceNumber+1}</th>
                <td>{product}</td>
                <td>{price}</td>
                <td><button onClick={handleDeleteProduct} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default ProductRow;