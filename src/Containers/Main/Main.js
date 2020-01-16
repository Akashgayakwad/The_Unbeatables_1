import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './../../Components/Dashboard/Dashboard';
import Signpad from './../../Components/Signpad/Signpad';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
import Detaillist from './../../Components/Details/Detaillist';
import Form1 from '../../Components/AerodromeLicensing/Form1/Form1';
import Form2 from '../../Components/AerodromeLicensing/Form2/Form2';
import Form3 from '../../Components/AerodromeLicensing/Form3/Form3';
import Form5 from '../../Components/AerodromeLicensing/Form5/Form5';
import Form6 from '../../Components/AerodromeLicensing/Form6/Form6';
import Form8 from '../../Components/AerodromeLicensing/Form8/Form8';
import formRenew from '../../Components/AerodromeLicensing/formRenew/formRenew';
import Form4 from '../../Components/AerodromeLicensing/Form4/Form4';
import Form7 from '../../Components/AerodromeLicensing/Form7/Form7';
import Form9 from '../../Components/AerodromeLicensing/Form9/Form9';
import TestForm from '../../Components/AerodromeLicensing/TestForm/TestForm';
import TableForm from '../../Components/AerodromeLicensing/TableForm/TableForm.js';
import Login from '../../Components/Authentication/Login';
import AuthCard from '../../Components/Authentication/AuthCard';

class Main extends Component{

    state={
        image:null,
    }

    render(){

        const setImageURL = (imageURL) =>{
            const whiteURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
            if(imageURL!==whiteURL && imageURL!==this.state.image)
            {
                this.setState({image:imageURL},()=>{
                    console.log(this.state);
                });    
            }
        };

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
                            <Signpad setImageURL={setImageURL}/>
                        </Route>
                        <Route exact path="/details/:id" >
                            <Detaillist/>
                        </Route>
                        <Route exact path='/form1'>
                            <Form1/>
                        </Route>
                        <Route exact path='/form2'>
                            <Form2/>
                        </Route>
                        <Route exact path='/form3'>
                            <Form3/>
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
                        <Route exact path='/tableform'>
                            <TableForm/>
                        </Route>
                        <Route exact path='/testform'>
                            <TestForm/>
                        </Route>
                        <Route exact path='/testform'>
                            <formRenew/>
                        </Route>

                    </Switch>   
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;