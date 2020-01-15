import React, { Component } from 'react'

import Labels from '../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'
import Date from '../FormComponents/Date'
import CheckBox from '../FormComponents/CheckBox'


export class Form4 extends Component {
    
    state = {
        
        Ownership:"",
        YourRights:"",
        FromDate: new Date(),
        ToDate: new Date(),
        Termination:new Date(),

        
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
                <Labels head="CONTROL OF THE AERODROME" faded=""/>
                <CheckBox name="Are you owner of the Aerodrome?" value1="Yes" value2= "No" handleChange={this.handleChange('Ownership')} check={this.state.Ownership}/>
                <h6>
                    <strong>
                        If NO, Please State:
                    </strong>
                </h6>
                
                
                
                <TextArea name="Details of the rights you hold over the land" onChange={this.handleChange('YourRights')} placeholder="Details of the rights you hold over the land"/>
                <br/>
                <h6>
                The period you hold these rights
                </h6>
                <Date name="From" handleChange={this.handleChange('FromDate')} placeholder="From"/>
                <Date name="To" handleChange={this.handleChange('ToDate')} placeholder="To"/>
                <Date name="Termination" handleChange={this.handleChange('Termination')} placeholder="Termination"/>
                
                 
            </div>
        )
}   }

export default Form4

