import React, { Component } from 'react'
import InputForm from '../../FormComponents/InputForm'
import Labels from '../../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'


export class Form5 extends Component {
    
    state = {
        
        otherinfo:"",
        Date:"",
        Name:"",
        PositionHeld:"",

        
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
                <Labels head="Any Other Information" faded="The information may include details in annex 1, 2 and 3"/>
                <TextArea name="Other Information" onChange={this.handleChange('otherinfo')} placeholder="Any other information"/>
                <InputForm type={0} name="Date" onChange={this.handleChange('Date')} placeholder="Reference of Approval" />
                <InputForm type={0} name="Name" onChange={this.handleChange('Name')} placeholder="Reference of Approval" />
                <Labels head="Position Held" faded="With Official seal"/>
                <ImageUpload handleChange={this.handleChangeFile('file')}/>
                {
                  //Signature and seal to be added
                  //<InputForm type={0} name="Position held" onChange={this.handleChange('PositionHeld')} placeholder="Reference of Approval" />
              
              }  
            </div>
        )
}   }