import React, { Component } from 'react'
import RadioButton from '../FormComponents/RadioButton'
import CheckBox from '../FormComponents/CheckBox'
import ImageUpload from '../FormComponents/ImageUpload'

class TestForm extends Component {
    
    state = {
        nameofApplicant:"",
        checkBox:"",
        file:null
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
                <ImageUpload handleChange={this.handleChangeFile('file')}/>
            </div>
        )
    }
}

export default TestForm
