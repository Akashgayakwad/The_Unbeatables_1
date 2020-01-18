import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Date from '../FormComponents/Date'
import Labels from '../FormComponents/Labels'

export class Form8 extends Component {
    
    state = {
        challanno:"",
        amount:"",
        datedrawee: new Date(),
        namedrawee:""
        
    }

    handleSubmit = (e) => {
        const fields = {
            "feeDetails": {
                "$class": "org.example.airportlicensing.FeeDetails",
                "challanNo": this.state.challanno,
                "amount": this.state.amount,
                "dateOfFeeDeposit": this.state.datedrawee,
                "nameOfDraweeBank": this.state.namedrawee,
                "operator": {},
                "id": ""
            },
        }

        const access_token = sessionStorage.getItem('token');
        fetch('', {
            headers: {
                    "X-Access-Token":access_token,
                },
            method: 'POST',
            body: {fields}
            })
            .then(response => response.json())
            .then(success => {
                console.log('sucess');
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
        return (
            <div>
                <Labels head="Details of fees" faded=""/>
                <InputForm type={0} name="Challan No. for online deposit" onChange={this.handleChange('challanno')} placeholder="Challan No. for online deposit" />
                <InputForm type={0} name="Amount" onChange={this.handleChange('amount')} placeholder="Amount" />
                {
                    //Attach a sheet showing the calculation of amount as per runway length)
                }
                <Date name="Date of drawing the fees" handleChange={this.handleChange('datedrawee')} placeholder="Date of drawing the fees"/>
                <InputForm type={0} name="Name of the drawee bank" onChange={this.handleChange('namedrawee')} placeholder="Name of the drawee bank" />
                
                
                

            </div>
        )
    }
}

export default Form8
