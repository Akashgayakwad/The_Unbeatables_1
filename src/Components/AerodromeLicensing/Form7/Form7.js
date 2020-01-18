import React, { Component } from 'react'
import TextArea from '../FormComponents/TextArea'
import CheckBox from '../FormComponents/CheckBox'
import Signpad from '../../Signpad/Signpad'

export class Form7 extends Component {
    
    state = {
        RelevantSubmissionTime:"",
        popup:false,
        ManualEnclosure:null,
        sign: null

    }

    handleChange = input => (e) => {
        let ab = e.target.value
        this.setState({
            [input] : e.target.value
        },() => {
            if(input === "ManualEnclosure"){
                console.log("hi",ab);
                if(ab === "Yes") {
                    this.setState({
                        popup:false
                    })
                }
                else if(ab === "No") {
                    this.setState({
                        popup:true
                    })
                }
            }
        })
    }

    handleSubmit = (e) => {
        const fields = {
            "manual": {
                "$class": "org.example.airportlicensing.AerodromeManual",
                "manualEnclosed": this.state.ManualEnclosure,
                "dateToBeSubmitted": this.state.RelevantSubmissionTime,
                "id": ""
            }
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

    handleChangeFile = input => (e) => {
        this.setState({
            [input] : e.target.file
        })
    }

    handlePopup = (value) => {
        return (value ? 
            (<div>
                <h6><strong>If no please indicate when this is likely to be submitted to DGCA.</strong></h6>
                <h6>An Aerodrome Licence will not be granted until an acceptable aerodrome Manual has been received by DGCA</h6>
                <TextArea name="Relevant Submission Time" onChange={this.handleChange('RelevantSubmissionTime')} placeholder="Relevant Submission Time"/>
            </div>) : null)
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
                <h2>
                AERODROME MANUAL
                </h2>
                <br/>
                <h6>(Ref Rule 81)</h6>
                <form>
                    <div class="custom-control custom-checkbox mb-3">
                    <h6><strong>Is an Aerodrome Manual enclosed with this application?</strong></h6>
                        <input
                            class="custom-control-input" 
                            id="customCheck3"
                            type="checkbox"
                            value={true}
                            checked={this.state.ManualEnclosure === true}
                            onChange={this.handleChange('ManualEnclosure')}
                        />
                        <label class="custom-control-label" for="customCheck3">Yes</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input
                            class="custom-control-input" 
                            id="customCheck4"
                            type="checkbox"
                            value={false}
                            checked={this.state.ManualEnclosure === false}
                            onChange={this.handleChange('ManualEnclosure')}
                        />
                        <label class="custom-control-label" for="customCheck4">No</label>
                    </div>
                </form>
                {this.handlePopup(this.state.popup)}
                <Signpad setImageURL={setImageURL}/>
            </div>
        )
}   }

export default Form7
