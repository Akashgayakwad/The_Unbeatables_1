import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './../../Components/Dashboard/Dashboard';
import Signpad from './../../Components/Signpad/Signpad';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
import Form1 from '../../Components/AerodromeLicensing/Form1.js/Form1';
class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="container" style={{height:"auto",marginTop:"150px"}}>
                    <Switch>
                        <Route exact path='/license'>
                            <Mainform/>
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route exact path="/sign">
                            <Signpad/>
                        </Route>
                        <Route exact path='/form1'>
                            <Form1/>
                        </Route>
                    </Switch>   
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;