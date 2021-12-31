import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Details = () => {
    const{id} = useParams();
    const{user} = useAuth()
    // const{setIsLoading} = useAuth();
    const url = `https://salty-lowlands-18785.herokuapp.com/details/${id}`

    const [item, setItem] = useState({});
    useEffect(()=>{
        // setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setItem(data)
        })
        // .finally(setIsLoading(false))
    },[id]);
    const{product, intro, description, img, img1, img2, img3, price} = item;
    const newItem ={}

    const[quantity, setQuantity] = useState();
    const totalPrice = price * quantity
    const[furniturePrice, setFurniturePrice] = useState();
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] =useState("");
    const[address, setAddress] = useState("");
    const[postCode, setPostCode] = useState("")

        newItem.quantity = quantity;
        newItem.totalPrice = totalPrice;
        newItem.name = user.displayName;
        newItem.email = user.email;
        newItem.phone = phone;
        newItem.address = address;
        newItem.postCode = postCode;
        newItem.item = item;

        console.log(newItem)

    const handleAddToCart = e =>{
        // const formData = new FormData();

        // formData.append("product", product);
        // formData.append("quantity", quantity);
        // formData.append("price", totalPrice);
        // formData.append("name", name);
        // formData.append("email", email);
        // formData.append("phone", phone);
        // formData.append("address", address);
        // formData.append("postCode", postCode);
      
        // console.log(formData)

        

        fetch("https://salty-lowlands-18785.herokuapp.com/order", {
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert("Added to cart successfully!!!")
            }
        })

        e.preventDefault()

    }
    
    return (
        <div className='container'>
            <div><h3 className='my-3'>{product}</h3></div>
            <div className='container'>
            <h4>1 set includes:</h4>
            <div className="row my-3 mx-auto">
                <div className="col-md-4">
                    <img src={img1} className='img-fluid' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={img2} className='img-fluid' alt="" />
                </div>
                <div className="col-md-4">
                    <img src={img3} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                <div dangerouslySetInnerHTML={{__html: description}}></div>
                </div>
                <div className="col-md-8">
                <form onSubmit={handleAddToCart}>
                <div className='d-flex'>
                <div className='form-control m-2'>
                <label>Item</label>
                <input id="Item" type="text" value={product} className='form-control'/>
                <label >Quantity (Set)</label>
                <input id="Quantity" type="number" defaultValue="1" min="1" max="10" onChange={e => setQuantity(e.target.value)} className='form-control'/>
                <label>Price (Taka)</label>
                <input id="Price" type="number" defaultValue={totalPrice} value={totalPrice} className='form-control' onChange={e => setFurniturePrice(e.target.value)}/>
                </div>

                <div className='form-control m-2'>
                <label>Your Name</label>
                <input id="name" type="text" defaultValue={user.displayName} onChange={e => setName(e.target.value)} className='form-control'/>
                <label >Your Email</label>
                <input id="email" type="email" defaultValue={user.email}  onBlur={e => setEmail(e.target.value)} className='form-control'/>
                <label>Phone Number</label>
                <input id="phone" type="text" className='form-control' onChange={e => setPhone(e.target.value)}/> 
                <label>Address</label>
                <input id="address" type="text" className='form-control' onChange={e => setAddress(e.target.value)}/> 
                <label>Post Code</label>
                <input id="postCode" type="text" className='form-control' onChange={e => setPostCode(e.target.value)}/>
                <button className='btn btn-danger my-3'>Add to cart</button>
                </div>
                </div>
            </form>
                   
                </div>

            </div>
            <hr></hr>
            <div className="card border-0" style={{width:"100%"}}>
            
            <img src={img} className="card-img-top w-50 m-auto" alt="..."/>
            <div className="card-body">
            <div dangerouslySetInnerHTML={{__html: intro}}></div>
            </div>
            </div>
            
            
        </div>
    );
};

export default Details;