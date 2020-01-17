import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div class="container-fluid footer fixed-bottom mt-10" style={{backgroundColor:'#23374d',height:"30px"}}>

                <p class="text-center" style={{color:'white'}}>All right reserved &copy; The Unbeatables</p>
            </div>
        )
    }
}
export default Footer;