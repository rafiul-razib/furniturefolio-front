import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    
    const {id} = useParams()
    const [order, setOrder] = useState({});
    console.log(id)
    
    
    const uri = `https://salty-lowlands-18785.herokuapp.com/orders/${id}`;
    console.log(uri)
    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setOrder(data)
        })
 
    },[id])



    const purchase = () =>{
        const info = {
            name : order?.name,
            email: order?.email,
            phone: order?.phone,
            item: order?.item,
            quantity: order?.quantity,
            price: order?.totalPrice

        }

        console.log(info)

        fetch(`https://salty-lowlands-18785.herokuapp.com/init`,{
            method: 'POST',
            headers:{
                "content-type" :"application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.replace(data)
        })
        
        
    }

    

    return (
        <div>
            <h1>Pay buy clicking following button...</h1>
            <p>Order id:{id}</p>
            <button onClick={purchase} className='btn btn-danger'>Purchase</button>
        </div>
    );
};

export default Payment;