import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const Card = () =>{
    return(
        <div class="card card-nav-tabs">
        <div class="card-header card-header-warning">
            Licence Approved
        </div>
        <div class="card-body">
            <h4 class="card-title">ProjectNumber:Airport Name</h4>
            <p class="card-text">Status:license has been issued for this Project</p>
            <Link to="/details/1" class="btn btn-primary">View Details</Link>
        </div>
        </div>
    )
}

export default Card;