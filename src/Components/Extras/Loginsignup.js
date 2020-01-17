import React from 'react';
import Login from './../Authentication/Login';
const Loginsignup = () =>{
    return(
        <div class="card card-nav-tabs text-center">
            <div class="card-header card-header-primary">
                Authetication Portal
            </div>
            <div class="card-body">
                <h4 class="card-title">Special title treatment</h4>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Login/>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
            </div>
    )
}
export default  Loginsignup;