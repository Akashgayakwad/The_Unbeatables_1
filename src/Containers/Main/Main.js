import React, { Component } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Mainform from '../../Components/AerodromeLicensing/Mainform'
class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="container">
                    <Route exact path to='./license'>
                        <Mainform/>
                    </Route>
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;