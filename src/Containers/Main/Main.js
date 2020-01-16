import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './../../Components/Dashboard/Dashboard';
import Signpad from './../../Components/Signpad/Signpad';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
import Detaillist from './../../Components/Details/Detaillist';
import Form1 from '../../Components/AerodromeLicensing/Form1/Form1';
import Form2 from '../../Components/AerodromeLicensing/Form2/Form2';
import Form5 from '../../Components/AerodromeLicensing/Form5/Form5';
import Form6 from '../../Components/AerodromeLicensing/Form6/Form6';
import Form8 from '../../Components/AerodromeLicensing/Form8/Form8';
import TestForm from '../../Components/AerodromeLicensing/TestForm/TestForm';

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