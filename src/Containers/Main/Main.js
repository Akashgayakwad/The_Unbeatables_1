import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
// import Dashboard from './../../Components/Dashboard/Dashboard';
class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="container" style={{height:"500px"}}>
                    {/* <Route exact path="/dashboard/" Component={Dashboard}></Route> */}
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;