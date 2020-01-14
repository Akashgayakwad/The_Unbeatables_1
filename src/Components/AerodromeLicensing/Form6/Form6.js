import React, { Component } from 'react'
import InputForm from '../../FormComponents/InputForm'
import Labels from '../../FormComponents/Labels'

export class Form6 extends Component {
    
    state = {
        nameofApplicant:"",
        nameofIncharge:"",
        nameAerodromeSafety:"",
        nameMETS:"",
        nameATM:"",
        nameCNS:"",
        nameRFF:"",
        anmeMET:"",
        addressMETS:"",
        numberBoardMenber:"",
        numberIncharge:"",
        numberAerodromeSafety:"",
        numberATM:"",
        numberCNS:"",
        numberRFF:"",
        numberMET:"",
        statusBoardMember:"",
        statusIncharge:"",
        statusAerodromeSafety:"",
        statusATM:"",
        statusCNS:"",
        statusRFF:"",
        statusMET:"",
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
                <Labels head="Board Member/ Managing Director or person having specific responsibility for safety." faded="(To be completed only where the applicant is a company/ corporate/society)" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameofApplicant')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusBoardMember')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberBoardMember')} placeholder="Telephone Number" />

                <Labels head="The person in charge of day to day operation of aerodrome." faded="(Please enclose a current Curriculum Vitae [CV])" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameofIncharge')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusIncharge')} placeholder="Status/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberIncharge')} placeholder="Telephone Number" />
                {// create checkbox to aprrove if 6.2 is same or not
                }
                <Labels head="The person responsible for Aerodrome Safety." faded="(Please enclose a current Curriculum Vitae [CV])" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameAerodromeSafety')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusAerodromeSafety')} placeholder="Status/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberAerodromeSafety')} placeholder="Telephone Number" />
                
                <Labels head="Provider of the CNS - ATM" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameMETS')} placeholder="Name" />
                <InputForm type={0} name="Address" onChange={this.handleChange('addressMETS')} placeholder="Address" />
                
                <Labels head="Provider of the MET services" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameATM')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusATM')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberATM')} placeholder="Telephone Number" />

                <Labels head="The person responsible for overseeing the day to day provisions of the Air Traffic Management" />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameCNS')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusCNS')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberCNS')} placeholder="Telephone Number" />
                
                <Labels head="The person responsible for overseeing the day to day provisions of CNS" />                
                <InputForm type={0} name="Name" onChange={this.handleChange('nameRFF')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusRFF')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberRFF')} placeholder="Telephone Number" />

                <Labels head="The person responsible for overseeing the day to day provisions of RFF"  />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameMET')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusMET')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberMET')} placeholder="Telephone Number" />

                <Labels head="The person responsible for overseeing the day to day provisions of MET services"  />
                <InputForm type={0} name="Name" onChange={this.handleChange('nameMET')} placeholder="Name" />
                <InputForm type={0} name="Status/Designation" onChange={this.handleChange('statusMET')} placeholder="Satus/Designation" />
                <InputForm type={0} name="Telephone Number" onChange={this.handleChange('numberMET')} placeholder="Telephone Number" />

            </div>
        )
    }
}

export default Form6
