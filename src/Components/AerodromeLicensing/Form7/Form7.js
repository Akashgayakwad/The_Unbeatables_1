import React, { Component } from 'react'
import InputForm from '../../FormComponents/InputForm'
import Labels from '../../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'


export class Form5 extends Component {
    
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
               <Labels head="Is an Aerodrome Manual enclosed with this application?" faded="(Ref Rule 81)"/>
                
               <CheckBox name="Manual Enclosure" value1="Yes" value2= "No" handleChange={this.handleChange('ManualEnclosure')} check={this.state.ManualEnclosure}/>

                <Labels head="If no please indicate when this is likely to be submitted to DGCA." faded="An Aerodrome Licence will not be granted until an acceptable aerodrome Manual has been received by DGCA"/>
                <TextArea name="Relevant Submission Time" onChange={this.handleChange('RelevantSubmissionTime')} placeholder="Relevant Submission Time"/>
                  
            </div>
        )
}   }
