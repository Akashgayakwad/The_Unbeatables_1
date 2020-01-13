import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
// import Dashboard from './../../Components/Dashboard/Dashboard';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
// import {BrowserRouter,Route,Link} from 'react-router-dom';
class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="container" style={{height:"auto",marginTop:"150px"}}>
                    <Switch>
                        <Route exact path='/license'>
                            <Mainform/>
                        </Route>
                        {/* <Route exact path="/dashboard/" Component={Dashboard}></Route> */}
                    </Switch>   
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;