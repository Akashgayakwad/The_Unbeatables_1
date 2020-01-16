import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './../../Components/Dashboard/Dashboard';
import Signpad from './../../Components/Signpad/Signpad';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
import Details from './../../Components/Details/Details';
import Form1 from '../../Components/AerodromeLicensing/Form1/Form1';
import Form2 from '../../Components/AerodromeLicensing/Form2/Form2';
import Form5 from '../../Components/AerodromeLicensing/Form5/Form5';
import Form6 from '../../Components/AerodromeLicensing/Form6/Form6';
import Form8 from '../../Components/AerodromeLicensing/Form8/Form8';
import TestForm from '../../Components/AerodromeLicensing/TestForm/TestForm';
import Login from '../../Components/Authentication/Login';
import AuthCard from '../../Components/Authentication/AuthCard';

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
                        <Route exact path='/login'>
                            <Login/>
                        </Route>
                        <Route exact path='/card'>
                            <AuthCard/>
                        </Route>
                        <Route exact path="/sign">
                            <Signpad/>
                        </Route>
                        <Route exact path="/details/:id" component={Details}>
                            <Details/>
                        </Route>
                        <Route exact path='/form1'>
                            <Form1/>
                        </Route>
                        <Route exact path='/form2'>
                            <Form2/>
                        </Route>
                        <Route exact path='/form5'>
                            <Form5/>
                        </Route>
                        <Route exact path='/form6'>
                            <Form6/>
                        </Route>
                        <Route exact path='/form8'>
                            <Form8/>
                        </Route>
                        <Route exact path='/testform'>
                            <TestForm/>
                        </Route>
                    </Switch>   
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;