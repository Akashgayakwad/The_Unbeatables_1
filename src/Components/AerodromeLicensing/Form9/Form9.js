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
        Date: "",
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
                <TextArea name="Other Information" handleChange={this.handleChange('otherinfo')} placeholder="Any other information"/>
                <Date name="Date " handleChange={this.handleChange('Date')} placeholder="Date"/>
                <div>
                    <div class="form-group">
                    <h6>Date</h6>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="flatpickr flatpickr-input form-control" onChange={(e) => {
                                this.setState({
                                    Date: e.target.value.toString()
                                })
                            }} type="date" placeholder="Date"></input>
                        </div>
                    </div>
                </div>
                <InputForm type={0} name="Name" onChange={this.handleChange('Name')} placeholder="Reference of Approval" />
                <Labels head="Position Held" faded="With Official seal"/>
                <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                    <div class="fileinput-new thumbnail img-raised"></div>
                    <div>
                        <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                        <span class="fileinput-new">Select File</span>
                        <span class="fileinput-exists">Change</span>
                            <input type="file" name="file" value={this.state.file} onClick={(e) => {
                                const ab = e.target.files
                                console.log(ab);
                                this.setState({
                                    file: ab[0]
                            })
                            }}/>
                        </span>
                    </div>
                </div>
                {
                  //Signature and seal to be added
                  //<InputForm type={0} name="Position held" onChange={this.handleChange('PositionHeld')} placeholder="Reference of Approval" />
                }  
                <Signpad setImageURL={setImageURL}/>
            </div>
        )
}   }
export default Form9
