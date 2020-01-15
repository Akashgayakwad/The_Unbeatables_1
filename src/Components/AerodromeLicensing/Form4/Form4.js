import React, { Component } from 'react'
import InputForm from '../../FormComponents/InputForm'
import Labels from '../../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'
import Date from '../FormComponents/Date'


export class Form5 extends Component {
    
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
                <Labels head="Are you owner of the Aerodrome?" faded=""/>
                <CheckBox name="Ownership" value1="Yes" value2= "No" handleChange={this.handleChange('Ownership')} check={this.state.Ownership}/>

                
                <Labels head="If NO, Please State" faded=""/>
                <TextArea name="Details of the rights you hold over the land" onChange={this.handleChange('YourRights')} placeholder="Details of the rights you hold over the land"/>
                <Labels head="The period you hold these rights" faded=""/>
                
                <Date name="From" handleChange={this.handleChange('FromDate')} placeholder="From"/>
                <Date name="To" handleChange={this.handleChange('ToDate')} placeholder="To"/>
                <Date name="Termination" handleChange={this.handleChange('Termination')} placeholder="Termination"/>
                
                 
            </div>
        )
}   }
