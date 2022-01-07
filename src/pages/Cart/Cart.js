import React,{useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import Payment from '../Payment/Payment';
import CartItem from './CartItem';

const Cart = () => {
    const[myCart, setMyCart] = useState([]);
    const[reLoadPage, setReloadPage] = useState(false)
    const{user} = useAuth();
    const uri = `https://salty-lowlands-18785.herokuapp.com/order/${user.email}`
    
    // console.log(myCart)
    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(data =>{
            setMyCart(data)
        })
    },[user.email, reLoadPage]);

    
    return (
        <div className='container row'>
           <div className='col-md-12 row g-3 my-4'>
           {
                myCart.map(order => <CartItem key={order._id} order={order} setReloadPage={setReloadPage}></CartItem>)
            }
           </div>


        </div>
    );
};

export default Cart;