import React, { Component } from 'react'
import RadioButton from '../FormComponents/RadioButton'
import CheckBox from '../FormComponents/CheckBox'
import ImageUpload from '../FormComponents/ImageUpload'
import Date from '../FormComponents/Date'   
import TableForm from '../FormComponents/TableForm'

class TestForm extends Component {
    
    state = {
        nameofApplicant:"",
        checkBox:"",
        file:null,
        gender:"",
        typo:"",
        date: new Date(),
        a:'',
        b:'',
        c:'',
        d:'',
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

    
    
    // <ImageUpload handleChange={this.handleChangeFile('file')}/>
    // <CheckBox name="Gender" value1="Male" value2= "Female" handleChange={this.handleChange('gender')} check={this.state.gender}/>
    // <RadioButton name="Alphabets or number" value1="ABCD" value2= "1234" handleChange={this.handleChange('typo')} check={this.state.typo}/>
    // <Date name="Todays Date" handleChange={this.handleChange('date')} check={this.state.typo} placeholder="adn"/>

    render() {
        return (
            <div>
                <TableForm/>
            </div>
        )
    }
}

export default TestForm
