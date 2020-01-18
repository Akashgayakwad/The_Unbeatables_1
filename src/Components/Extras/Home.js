import React from 'react';
import {Link} from 'react-router-dom';
const Home = () =>{
    return(
        <div className="container">
            <div className="row mt-9">
                <div className="col-lg-6">
                    <img src="./logo-black.png" alt="hero image" width="490px"/>
                    <h3 className="ml-3">AIRPORT AUTHORITY OF INDIA</h3>
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center" style={{color:"black"}}>Welcome to AAI Web Portal</h2>
                    <h5 className="text-center">A Complete Platform for all the Airport license related process</h5>
                    <Link to="/login"><button type="button" class="btn btn-primary btn-round mx-auto d-block">Login</button></Link>
                    <h5 className="text-center mt-4">New to Portal?? Click below to request for network membership</h5>
                    <Link to="/request"><button type="button" class="btn btn-info btn-round mx-auto d-block">Request Membership</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home; 