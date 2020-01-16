import React, { Component } from 'react'
import TextArea from '../FormComponents/TextArea'
import CheckBox from '../FormComponents/CheckBox'


export class Form7 extends Component {
    
    state = {
        RelevantSubmissionTime:"",
        popup:false,
        ManualEnclosure:""
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
                <TextArea name="Details of the rights you hold over the land" onChange={this.handleChange('YourRights')} placeholder="Details of the rights you hold over the land"/>
            </div>) : null)
    }
    
    render() {
        return (
            <div>
                <h2>
                AERODROME MANUAL
                </h2>
                <br/>
                <h6><strong>Is an Aerodrome Manual enclosed with this application?</strong></h6>
                <h6>(Ref Rule 81)</h6>
                <CheckBox name="Manual Enclosure" value1="Yes" id1="Yes" value2= "No" id2= "No" handleChange={this.handleChange('ManualEnclosure')} check={this.state.ManualEnclosure}/>
                {this.handlePopup(this.state.popup)}
                <TextArea name="Relevant Submission Time" onChange={this.handleChange('RelevantSubmissionTime')} placeholder="Relevant Submission Time"/>
            </div>
        )
}   }

export default Form7
