import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({furniture}) => {
    const{img, product, price, _id} = furniture;
    
    return (
        <div className='col-md-3'>
            <div className="card h-100" style={{width: "100%"}}>
            <img src={img} style={{height:"200px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div style={{height:"50px"}}>
                <h5 className="card-title">{product}</h5>
                </div>
                <h5 className="card-text">Tk. {price}</h5>
                <Link to={`/details/${_id}`}>
                <button className="btn btn-danger">Details</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;