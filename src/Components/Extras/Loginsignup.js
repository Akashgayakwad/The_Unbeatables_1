import React from 'react';
import Login from './../Authentication/Login';
const Loginsignup = () =>{
    return(
        <div class="card card-nav-tabs text-center">
            <div class="card-header card-header-primary">
                Authentication Portal
            </div>
            <div class="card-body">
                <h4 class="card-title">Google Sign-in</h4>
                <p class="card-text">Please Click on the below button to Sign In</p>
                <Login/>
            </div>
            <div class="card-footer text-muted">
                Please wait for being redirected
            </div>
            </div>
    )
}
export default  Loginsignup;