import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import Checkbox from '../FormComponents/Checkbox'

export class Form1 extends Component {
    
    state = {
        nameofApplicant:"",
        number:""
    }

// 0 for normal input Form
// 1 form under evaluation but needs any change
// 2 for sucessful Form only readme 
// 3 for incorrect form needs change with the error
// 4 for incorect and rejected so diabled with the error

    handleChange = input => (e) => {
        this.setState({
            [input] : e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <InputForm type={0} name="Full name of applicant" onChange={this.handleChange('nameofApplicant')} placeholder="Name" />
            </div>
        )
    }
}

export default Form1
