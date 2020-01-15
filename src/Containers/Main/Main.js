import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './../../Components/Dashboard/Dashboard';
import Signpad from './../../Components/Signpad/Signpad';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
import Form1 from '../../Components/AerodromeLicensing/Form1/Form1';
import Form2 from '../../Components/AerodromeLicensing/Form2/Form2';
import Form5 from '../../Components/AerodromeLicensing/Form5/Form5';
import Form6 from '../../Components/AerodromeLicensing/Form6/Form6';
import Form8 from '../../Components/AerodromeLicensing/Form8/Form8';
import Form4 from '../../Components/AerodromeLicensing/Form4/Form4';
import Form7 from '../../Components/AerodromeLicensing/Form7/Form7';
import Form9 from '../../Components/AerodromeLicensing/Form9/Form9';
import TestForm from '../../Components/AerodromeLicensing/TestForm/TestForm';
import TableForm from '../../Components/AerodromeLicensing/FormComponents/TableForm.js'

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
                        <Route exact path='/form4'>
                            <Form4/>
                        </Route>
                        <Route exact path='/form7'>
                            <Form7/>
                        </Route>
                        <Route exact path='/form9'>
                            <Form9/>
                        </Route>
                        <Route exact path='/TableForm'>
                            <TableForm/>
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