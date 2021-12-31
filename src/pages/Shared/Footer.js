import React from 'react';
import map from '../../images/map/Screenshot (54).png';
import './footer.css';

const Footer = () => {
    return (
        <div className= "container-fluid footer pt-5">
        <hr  style={{color:"white"}}/>
        <div className='row mx-auto my-4'>

            <div className="col-md-4">
            <div className="card-transparent text-white border-0" style={{width:"100%"}}>
            <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <hr  style={{color:"white"}}/>
                <p className="card-text">FurnitureFolio is considered to be the ‘game-changer’ in Bangladesh’s furniture industry. Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made FurnitureFolio a beloved brand at home and abroad.</p>
            </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card-transparent text-white border-0" style={{width:"100%"}}>
            <div className="card-body">
                <h5 className="card-title">Head Office</h5>
                <hr  style={{color:"white"}}/>
                <h5>House: 13/A/1</h5>
                <h5>Street: Boro Bazar</h5>
                <h5>Mymensingh, Bangladesh</h5>
                <div className="icons d-flex">
                    
                </div>
            </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card-transparent text-white border-0" style={{width:"100%"}}>
            <div className="card-body">
                <h5 className="card-title">Our Store locations</h5>
                <hr  style={{color:"white"}}/>
                <div>
                    <img src={map} className="img-fluid p-3 w-75" alt="" />
                </div>
            </div>
            </div>
            </div>
  
        </div>

            <p className='text-light text-center mb-0 pb-3'>All rights reserved by rafiul-razib @ 2021</p>
    </div>
    );
};

export default Footer;