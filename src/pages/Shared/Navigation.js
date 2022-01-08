import React from 'react';
import useAuth from '../hooks/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();

    const handleSignOut = () =>{
        logOut();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Furniture Folio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/explore">Explore</a>
                    </li>
                    
                    <li className="nav-item">
                    {
                        user.email?
                        <button onClick={handleSignOut} className='btn btn-light'>Log Out</button>
                        :
                        <a className="nav-link" href="/login">Login</a>
                    }
                    </li>
                  
                    <li>
                        <a className="nav-link" href="/cart">Cart</a>
                    </li>
                   
                    <li>
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                    {
                        user.email && <span className='navbar-text'>Signed in from {user.email}</span> 
                    }
                </ul>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;