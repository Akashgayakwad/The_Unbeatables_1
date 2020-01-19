import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from './../../Components/Dashboard/Dashboard';
import Signpad from './../../Components/Signpad/Signpad';
import Mainform from '../../Components/AerodromeLicensing/Mainform';
import Detaillist from './../../Components/Details/Detaillist';
import HistoryList from './../../Components/History/Historylist';
import Form1 from '../../Components/AerodromeLicensing/Form1/Form1';
import Form2 from '../../Components/AerodromeLicensing/Form2/Form2';
import Form3 from '../../Components/AerodromeLicensing/Form3/Form3';
import Form5 from '../../Components/AerodromeLicensing/Form5/Form5';
import Form6 from '../../Components/AerodromeLicensing/Form6/Form6';
import Form8 from '../../Components/AerodromeLicensing/Form8/Form8';
import FormRenew from '../../Components/AerodromeLicensing/FormRenew/FormRenew';
import Form4 from '../../Components/AerodromeLicensing/Form4/Form4';
import Form7 from '../../Components/AerodromeLicensing/Form7/Form7';
import Form9 from '../../Components/AerodromeLicensing/Form9/Form9';
import TableForm from '../../Components/AerodromeLicensing/TableForm/TableForm.js';
import AuthCard from '../../Components/Authentication/AuthCard';
import Error404 from './../../Components/Extras/Error404';
import Requestform from './../../Components/RequestForm/Requestform';
import Loginsignup from './../../Components/Extras/Loginsignup';
import Faq from './../../Components/Extras/Faq';
import Home from  './../../Components/Extras/Home';
import DefectForm from '../../Components/AerodromeLicensing/DefectForm/DefectForm';
import DetailsForm from '../../Components/AerodromeLicensing/DetailsForm/DetailsForm';

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
                <div className="container" style={{height:"auto",marginTop:"100px",marginBottom:"50px", background:"/bg.jpg"}}>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route exact path='/license'>
                            <Mainform/>
                        </Route>
                        <Route exact path='/login'>
                            <Loginsignup/>
                        </Route>
                        <Route path='/redirect' component={() => { 
                            window.location.href = 'http://3653ec57.ngrok.io/auth/google'; 
                            return <Redirect to="/card"/>;
                        }}/>
                        <Route exact path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route exact path='/history'>
                            <HistoryList/>
                        </Route>
                        <Route exact path='/faq'>
                            <Faq/>
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
                        <Route exact path="/request" >
                            <Requestform/>
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
                        <Route exact path='/checklist/:id'>
                            <TableForm/>
                        </Route>
                        <Route exact path='/formrenew'>
                            <FormRenew/>
                        </Route>
                        <Route exact path='/defectform/:id'>
                            <DefectForm />
                        </Route>
                        <Route exact path='/detailsform/1'>
                            <DetailsForm/>
                        </Route>
                        <Route path='*'>
                            <Error404/>
                        </Route>
                    </Switch>   
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;