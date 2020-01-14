import React, { Component } from 'react'
import RadioButton from '../FormComponents/RadioButton'
import CheckBox from '../FormComponents/CheckBox'

class TestForm extends Component {
    
    state = {
        nameofApplicant:"",
        checkBox:""
    }

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <RadioButton name="jahdbajsd" value1="Yes" value2="No" handleChange={this.handleChange('nameofApplicant')} check={this.state.nameofApplicant}/>
                <CheckBox name="jahdbajsd" value1="Yes" value2="No" handleChange={this.handleChange('checkBox')} check={this.state.checkBox}/>
            </div>
        )
    }
}

export default TestForm
