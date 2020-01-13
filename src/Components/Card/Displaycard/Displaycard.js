import React,{Component} from 'react';

const Card = () =>{
    return(
        <div class="card card-nav-tabs">
        <div class="card-header card-header-warning">
            Featured
        </div>
        <div class="card-body">
            <h4 class="card-title">ProjectNumber:Airport Name</h4>
            <p class="card-text">Status:license has been issued for this Project</p>
            <a href="javascript:;" class="btn btn-primary">View Details</a>
        </div>
        </div>
    )
}

export default Card;