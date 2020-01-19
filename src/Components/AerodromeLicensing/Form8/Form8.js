import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Date from '../FormComponents/Date'
import Labels from '../FormComponents/Labels'
import Signpad from '../../Signpad/Signpad'
import {Redirect} from 'react-router'

export class Form8 extends Component {
    
    state = {
        challanno:"",
        amount:"",
        datedrawee: "",
        namedrawee:"",
        sign: null,
        redirect:false
    }

    handleSubmit = (e) => {
        const id = sessionStorage.getItem('id')
        const fields = {
            "feeDetails": {
                "$class": "org.example.airportlicensing.FeeDetails",
                "challanNo": this.state.challanno,
                "amount": this.state.amount,
                "dateOfFeeDeposit": this.state.datedrawee,
                "nameOfDraweeBank": this.state.namedrawee,
                "operator": {},
                "id": id
            },
        }

        const access_token = sessionStorage.getItem('token');
        fetch('http://3653ec57.ngrok.io/api/LisenceApplication/', {
            headers: {
                    "X-Access-Token":access_token,
                    "Content-Type":"application/json"
                },
            method: 'POST',
            body: JSON.stringify(fields)
            })
            .then(response => response.json())
            .then(success => {
                console.log('sucess');
                this.setState({
                    redirect:true
                })
            })
            .catch(error => console.log(error)
        );
    }

// 0 for normal input Form
// 1 form under evaluation but needs any change
// 2 for sucessful Form only readme 
// 3 for incorrect form needs change with the error
// 4 for incorect and rejected so diabled with the error

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    
    render() {
        if(this.state.redirect) {
            return (<Redirect to='/form9'/>)
        }

        const setImageURL = (imageURL) =>{
            const whiteURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
            if(imageURL!==whiteURL && imageURL!==this.state.sign)
            {
                this.setState({sign:imageURL},()=>{
                    console.log(this.state.sign);
                });    
            }
        };
        return (
            <div>
                <Labels head="Details of fees" faded=""/>
                <InputForm type={0} name="Challan No. for online deposit" onChange={this.handleChange('challanno')} placeholder="Challan No. for online deposit" />
                <InputForm type={0} name="Amount" onChange={this.handleChange('amount')} placeholder="Amount" />
                {
                    //Attach a sheet showing the calculation of amount as per runway length)
                }
                <div>
                    <div class="form-group">
                    <h6>Date of drawing the fees</h6>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="flatpickr flatpickr-input form-control" onChange={(e) => {
                                this.setState({
                                    datedrawee: e.target.value.toString()
                                })
                            }} type="date" placeholder="Date of drawing the fees"></input>
                        </div>
                    </div>
                </div>
                <InputForm type={0} name="Name of the drawee bank" onChange={this.handleChange('namedrawee')} placeholder="Name of the drawee bank" />
                <Signpad setImageURL={setImageURL}/>
                <button type="button" onClick={this.handleSubmit} class="btn btn-success">Success</button>
            </div>
        )
    }
}

export default Form8
