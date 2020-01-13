import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div class="container-fluid footer fixed-bottom" style={{backgroundColor:'#23374d',height:'50px'}}>
                <h3 class="text-center" style={{color:'white'}}>All right reserved &copy; The Unbeatables</h3>
            </div>
        )
    }
}
export default Footer;