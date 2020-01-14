import React from 'react';
import {Link} from 'react-router-dom';

const Card = () =>{
    return(
        <div className="card card-nav-tabs">
        <div className="card-header card-header-warning">
            Licence Approved
        </div>
        <div className="card-body">
            <h4 className="card-title">ProjectNumber:Airport Name</h4>
            <p className="card-text">Status:license has been issued for this Project</p>
            <Link to="/details/1" className="btn btn-primary">View Details</Link>
        </div>
        </div>
    )
}

export default Card;