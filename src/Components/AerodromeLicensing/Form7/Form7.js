import React, { Component } from 'react'

import Labels from '../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'
import CheckBox from '../FormComponents/CheckBox'


export class Form7 extends Component {
    
    state = {
        
        RelevantSubmissionTime:"",
        ManualEnclosure:""
        
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
        return (
            <div>
               <h2>
               AERODROME MANUAL
               </h2>
               <Labels head="Is an Aerodrome Manual enclosed with this application?" faded="(Ref Rule 81)"/>
                
               <CheckBox name="Manual Enclosure" value1="Yes" value2= "No" handleChange={this.handleChange('ManualEnclosure')} check={this.state.ManualEnclosure}/>

                <Labels head="If no please indicate when this is likely to be submitted to DGCA." faded="An Aerodrome Licence will not be granted until an acceptable aerodrome Manual has been received by DGCA"/>
                <TextArea name="Relevant Submission Time" onChange={this.handleChange('RelevantSubmissionTime')} placeholder="Relevant Submission Time"/>
                  
            </div>
        )
}   }

export default Form7
