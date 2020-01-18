import React, { Component } from 'react'
import RadioButton from '../FormComponents/RadioButton'
import CheckBox from '../FormComponents/CheckBox'
import ImageUpload from '../FormComponents/ImageUpload'
import Date from '../FormComponents/Date'   
import TableForm from '../TableForm/TableForm'
import FileUpload from '../FormComponents/FileUpload'
import TextArea from '../FormComponents/TextArea'
import DynamicInput from '../FormComponents/DynamicInput'
import DetailsForm from '../FormComponents/DetailsForms'
import DefectForm from '../FormComponents/DefectForm'
import Dropdown from '../FormComponents/Dropdown'

class TestForm extends Component {

    state = {
        nameofApplicant:"",
        checkBox:"",
        file:'',
        gender:"",
        typo:"",
        date: new Date(),
        popup:false,
    }

    handleChange = input => (e) => {
        let files = e.target.files
        let reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload=(e) => {
            console.warn(e.target.result)
        }
        this.setState({
            [input] : e.target.value
        })
    }

    handleChangeFile = input => (e) => {
        this.setState({
            [input] : e.target.files
        },() => {
            console.log(e.target.value);
        })
    }

    handlePopup = (value) => {
        return (value ? (<TextArea name="Full name of applicant" onChange={this.handleChange('nameofApplicant')} placeholder="Name" />) : null);
    }
    
    
    // <ImageUpload handleChange={this.handleChangeFile('file')}/>
    // <RadioButton name="Alphabets or number" value1="ABCD" value2= "1234" handleChange={this.handleChange('typo')} check={this.state.typo}/>
    // <Date name="Todays Date" handleChange={this.handleChange('date')} check={this.state.typo} placeholder="adn"/>
    // <TableForm />
    // <FileUpload handleChange={this.handleChangeFile('file')}/>
    // <CheckBox name="Alphabets or number" id1="ABCD" id2="123" value1= "ABCD" value2= "1234" handleChange={this.handleChange('typo')} check={this.state.typo}/>
                // {this.handlePopup(this.state.popup)}
    // <DetailsForm/>
    // <DefectForm/>

    // <CheckBox name="Alphabets or number" id1="ABCD" id2="123" value1= "ABCD" value2= "1234" handleChange={this.handleChange('typo')} check={this.state.typo}/>
                // {this.handlePopup(this.state.popup)}

    render() {
        return (
            <div>
                <FileUpload handleChange={this.handleChangeFile('file')}/>
            </div>
        )
    }
}

export default TestForm
