import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Labels from '../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'
import Date from '../FormComponents/Date'
import ImageUpload from '../FormComponents/ImageUpload'
import Signpad from '../../Signpad/Signpad'

export class Form9 extends Component {
    
    state = {
        
        otherinfo:"",
        Date: new Date(),
        Name:"",
        sign:null
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

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    handleChangeFile = input => (e) => {
        this.setState({
            [input] : e.target.file
        })
    }
    
    render() {
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
                <Labels head="Any Other Information" faded="The information may include details in annex 1, 2 and 3"/>
                <TextArea name="Other Information" onChange={this.handleChange('otherinfo')} placeholder="Any other information"/>
                <Date name="Date " handleChange={this.handleChange('Date')} placeholder="Date"/>
                <InputForm type={0} name="Name" onChange={this.handleChange('Name')} placeholder="Reference of Approval" />
                <Labels head="Position Held" faded="With Official seal"/>
                <ImageUpload handleChange={this.handleChangeFile('file')}/>
                {
                  //Signature and seal to be added
                  //<InputForm type={0} name="Position held" onChange={this.handleChange('PositionHeld')} placeholder="Reference of Approval" />
                }  
                <Signpad setImageURL={setImageURL}/>
            </div>
        )
}   }
export default Form9
