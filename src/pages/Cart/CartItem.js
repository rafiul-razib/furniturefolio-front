import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({order, setReloadPage}) => {
    const{quantity, totalPrice, _id} = order
    const{product, img, price} = order.item;
    const uri = `https://salty-lowlands-18785.herokuapp.com/order/delete/${_id}`
    // console.log(uri)
    const handleDelete = e =>{
        fetch(uri, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert("Order Successfully Cancelled!!")
                setReloadPage(data)
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <div className="card mb-3" style={{width:"60%"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} style={{height:"200px"}} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-4">
                <div className="card-body d-flex justify-content-between">
                   <div className='text-center'>
                   <h5 className="card-title">{product}</h5>
                    <p className="card-text">Set Price: Tk.{price} </p>
                    <p className="card-text">Set Ordered: {quantity} </p>
                    <p className="card-text">Total Price: Tk.{totalPrice} </p>
                   </div>
                </div>
                
                </div>
                <div className="col-md-4 card-body d-flex flex-column align-items-between justify-content-around">
                    {
                        order.payment ? 'Paid'
                        :
                        <Link to={`/payment/${_id}`}>
                        <button className='btn btn-success'>Proceed to Payment</button>
                        </Link>
                    }
                    <button onClick={handleDelete} className='btn btn-danger'>Cancel Order</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CartItem;