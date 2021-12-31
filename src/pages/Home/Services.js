import React from 'react';
import design from '../../images/services/design.png';
import warranty from '../../images/services/ribbon-badge.png';
import delivery from '../../images/services/express-delivery.png';
import eco from '../../images/services/sprout.png';
import './services.css'


const Services = () => {
    return (
        <div className="container-fluid text-center py-5 services text-white">
            <h2>KNOW ABOUT OUR SERVICES</h2>
            <h4>We believe in honest growth and your satisfaction is important to us!!!</h4>
            <div className="row">
            <div className="col-md-3 col-12">
                <div className="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={design} style={{width:"100px", height:"110px"}} className="card-img-top mx-auto p-2" alt="..."/>
                <div className="card-body" style={{height:"250px"}}>
                    <h5 className="card-title">World-class Design</h5>
                    <p className="card-text">When We Say We Make the Best Furniture in Bangladesh, We Actually Mean It. Let's Think Smart and Be the Trendsetter. Every Space Has Its Unique Needs. A pleasant ambiance.</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div className="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={eco} style={{width:"100px", height:"110px"}} className="card-img-top mx-auto p-2" alt="..."/>
                <div className="card-body" style={{height:"250px"}}>
                    <h5 className="card-title">Eco-Friendly Product</h5>
                    <p className="card-text">We are committed to reduce the environmental impact of our activities through intelligent design,conservation, and recycling. Each design is carefully considered for structure,strength, and durability.</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div className="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={delivery} style={{width:"100px", height:"110px"}} className="card-img-top mx-auto p-2" alt="..."/>
                <div className="card-body" style={{height:"250px"}}>
                    <h5 className="card-title">Exchange facility</h5>
                    <p className="card-text">Furniture can be exchanged in good condition within 3 days with 5% service charge. It is not applicable for customized, set broken and fabric product.</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 col-12">
                <div className="card-transparent  h-100 border-0 bg-trans mt-4" style={{width:"100%"}}>
                <img src={warranty} style={{width:"100px", height:"110px"}} className="card-img-top mx-auto p-2" alt="..."/>
                <div className="card-body" style={{height:"250px"}}>
                    <h5 className="card-title">1 year warranty Service</h5>
                    <p className="card-text">The product comes with a 12 months after sales service warranty (parts and labor) against any manufacturing defects and any other issues with the materials that have been used.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default Services;