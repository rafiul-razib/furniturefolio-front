import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const AddProduct = () => {
    const [product, setProduct]= useState("");
    const [intro, setIntro]= useState("");
    const [description, setDescription]= useState("");
    const [price, setPrice]= useState("");
    const [imageData3, setImageData3]= useState({});
    const [imageData2, setImageData2]= useState({});
    const [imageData1, setImageData1]= useState({});
    const [imageData, setImageData]= useState({});
    const [stock, setStock] = useState("");
    const [rating, setRating] = useState("");


    
    const imgUrl3 = imageData3?.data?.url
    const imgUrl2 = imageData2?.data?.url
    const imgUrl1 = imageData1?.data?.url
    const imgUrl = imageData?.data?.url
    

    


    const handleSubmit = e =>{
        e.preventDefault()
        const formData2 = new FormData();
        formData2.append("description", description);
        formData2.append("intro", intro);
        formData2.append("product", product);
        formData2.append("price", price);
        formData2.append("img3", imgUrl3);
        formData2.append("img2", imgUrl2);
        formData2.append("img1", imgUrl1);
        formData2.append("img", imgUrl);
        formData2.append("stock", stock);
        formData2.append("rating", rating);

        console.log(formData2)

        fetch("https://salty-lowlands-18785.herokuapp.com/add-product",{
            method: "POST",
            body: formData2
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Product saved successfully!!")
            }
        })
        
    }

    // Image Upload

    // Convert image to base64
         
    const [baseImage, setBaseImage] = useState("");
    const imgCode = baseImage.split("base64,")[1];
    
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
        });
    };


    // Submit Image
    const handleImgSubmit = e =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", imgCode)
        fetch('https://api.imgbb.com/1/upload?key=284310bb4846227945ad85b37c5aa5b4', {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setImageData(data)
        })
    }
    const handleImgSubmit1 = e =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", imgCode)
        fetch('https://api.imgbb.com/1/upload?key=284310bb4846227945ad85b37c5aa5b4', {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setImageData1(data)
        })
    }
    const handleImgSubmit2 = e =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", imgCode)
        fetch('https://api.imgbb.com/1/upload?key=284310bb4846227945ad85b37c5aa5b4', {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setImageData2(data)
        })
    }
    const handleImgSubmit3 = e =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", imgCode)
        fetch('https://api.imgbb.com/1/upload?key=284310bb4846227945ad85b37c5aa5b4', {
            method:"POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            setImageData3(data)
        })
    }

    
    return (
        <div className="container">
            <div className='imageUpload'>
                <form onSubmit={handleImgSubmit} className='pt-3 w-100 mx-auto'>
                    <input type= "file" onChange={(e) => {
                        uploadImage(e);
                        }}/>
                    <button className='btn btn-success mt-2 img-fluid'>Upload Image Primary</button>
                </form>
                <div className='pt-3 w-75 mx-auto'>
                    <img style={{width:"50%"}} src={imageData?.data?.url} alt="" />
                </div>
           </div>
            <div className='imageUpload'>
                <form onSubmit={handleImgSubmit1} className='pt-3 w-100 mx-auto'>
                    <input type= "file" onChange={(e) => {
                        uploadImage(e);
                        }}/>
                    <button className='btn btn-success mt-2 img-fluid'>Upload Image 1</button>
                </form>
                <div className='pt-3 w-75 mx-auto'>
                    <img style={{width:"50%"}} src={imageData1?.data?.url} alt="" />
                </div>
           </div>
            <div className='imageUpload'>
                <form onSubmit={handleImgSubmit2} className='pt-3 w-100 mx-auto'>
                    <input type= "file" onChange={(e) => {
                        uploadImage(e);
                        }}/>
                    <button className='btn btn-success mt-2 img-fluid'>Upload Image 2</button>
                </form>
                <div className='pt-3 w-75 mx-auto'>
                    <img style={{width:"50%"}} src={imageData2?.data?.url} alt="" />
                </div>
           </div>
            <div className='imageUpload'>
                <form onSubmit={handleImgSubmit3} className='pt-3 w-100 mx-auto'>
                    <input type= "file" onChange={(e) => {
                        uploadImage(e);
                        }}/>
                    <button className='btn btn-success mt-2 img-fluid'>Upload Image 3</button>
                </form>
                <div className='pt-3 w-75 mx-auto'>
                    <img style={{width:"50%"}} src={imageData3?.data?.url} alt="" />
                </div>
           </div>
            <form onSubmit={handleSubmit}>
            
            <label htmlFor="name" className="form-label">Product Name</label>
            <input id="name" type="text" className="p-2 form-control col w-75" onChange={e=>setProduct(e.target.value)}/>
            
            <label htmlFor="intro" className="form-label">intro</label>
            <ReactQuill theme="snow" className="w-75" onChange={setIntro}/>

            <label htmlFor="description" className="form-label">Description</label>
            <ReactQuill theme="snow" className="w-75" onChange={setDescription}/>

            <label htmlFor="price" className="form-label">Price</label>
            <input id="price" type="text" className="p-2 form-control col w-75" onChange={e=> setPrice(e.target.value)}/>

            <label htmlFor="stock" className="form-label">Stock</label>
            <input id="stock" type="text" className="p-2 form-control col w-75" onChange={e=> setStock(e.target.value)}/>

            <label htmlFor="rating" className="form-label">Rating (1-5)</label>
            <input id="rating" type="text" className="p-2 form-control col w-75" min="1" max="5" onChange={e=> setRating(e.target.value)}/>
            
            <input className="btn btn-success my-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;