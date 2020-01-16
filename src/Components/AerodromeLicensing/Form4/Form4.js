import React, { Component } from 'react'

import Labels from '../FormComponents/Labels'
import TextArea from '../FormComponents/TextArea'
import Date from '../FormComponents/Date'
import CheckBox from '../FormComponents/CheckBox'


export class Form4 extends Component {
    
    state = {
        Ownership:"",
        popup:false,
        YourRights:"",
        FromDate: new Date(),
        ToDate: new Date(),
        Termination:new Date(),
    }

    handleChange = input => (e) => {
        const ab = e.target.value
        this.setState({
            [input] : e.target.value
        },() => {
            if(input === "Ownership"){
                console.log("hi",ab);
                if(ab === "Yes") {
                    this.setState({
                        popup:false
                    },() => {
                        console.log(this.state.popup);
                    })
                }
                else if(ab === "No") {
                    this.setState({
                        popup:true
                    },() => {
                        console.log(this.state.popup);
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
                <h6><strong>IF NO – Please state:</strong></h6>
                <TextArea name="Details of the rights you hold over the land" onChange={this.handleChange('YourRights')} placeholder="Details of the rights you hold over the land"/>
            </div>) : null)
    }
    
    render() {
        return (
            <div>
                <Labels head="CONTROL OF THE AERODROME" faded=""/>
                <CheckBox name="Are you owner of the Aerodrome?" id1="Yes" id2="No" value1="Yes" value2= "No" handleChange={this.handleChange('Ownership')} check={this.state.Ownership}/>
                {this.handlePopup(this.state.popup)}
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

