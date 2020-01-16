import React, { Component } from 'react'
import InputForm from '../FormComponents/InputForm'
import FileUpload from '../FormComponents/FileUpload'
import Date from '../FormComponents/Date'
export class renewForm  extends Components{
    state={
        aerodromeLicense:"",
        nameAerodrome:"",
        licenseOriginal:null,
        copySelfInspection:null,
        copyCalibration:null,
        latestFrictionTest:null,
        copyAM:null,
        trainingRecords:null,
        statusCM:"",
        temporaryExemption:"",
        permanentExemption:"",
        renewalFee:"",
        challanNum:"",
        Amount:"",       
        draweeBank:"",
        DateDraweeBank:"",
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

    render(){
        return(
            <div>
                <Labels head="Application for Renewal of Aerodrome License" />
                <InputForm 
                    type={0} 
                    name="Aerodrome License Number" 
                    onChange={this.handleChange('aerodromeLicense')} 
                    placeholder="Aerodrome License Number"/>
                <InputForm 
                    type={0} 
                    name="Name of the Aerodrome" 
                    onChange={this.handleChange('nameAerodrome')} 
                    placeholder="Name of the Aerodrome"/>
                <h6>Enclose the aerodrome license in original</h6>
                <FileUpload handleChange={this.handleChangeFile('licenseOriginal')} />
                <h6>Enclose copy of last self-inspection report</h6>
                <FileUpload handleChange={this.handleChangeFile('copySelfInspection')} />   
                <h6>Enclose copy of latest Nav-aids Calibration report</h6>
                <FileUpload handleChange={this.handleChangeFile('copyCalibration')} />
                <h6>Enclose the copy of latest friction test report along with corrective action taken if any</h6>
                <FileUpload handleChange={this.handleChangeFile('latestFrictionTest')} />
                <h6>Enclose the copy of updated Aerodrome Manual ( a soft copy also)</h6>
                <FileUpload handleChange={this.handleChangeFile('copyAM')} />
                <h6>Enclose the training records of all the operational staff (Carried out during the currency of aerodrome license along with annual training plan.)</h6>
                <FileUpload handleChange={this.handleChangeFile('trainingRecords')} />    
                <InputForm 
                    type={0} 
                    name="Status of Change Management ( use separate sheet for each project to include DGCA approval number, progress status with respect to approved timelines, delay, review of Hazlog as accepted etc.)" 
                    onChange={this.handleChange('statusCM')} 
                    placeholder="Status of Change Management"/>
                <InputForm 
                    type={0} 
                    name="Status of Temporary Exemptions
                    and review report of mitigation
                    measures (enclose report)" 
                    onChange={this.handleChange('temporaryExemption')} 
                    placeholder="Status of Temporary Exemption"/> 
                <InputForm 
                    type={0} 
                    name="Status of Permanent exemption w.r.t employed mitigation measures (enclose report) "
                    onChange={this.handleChange('permanentExemption')} 
                    placeholder="Status of Permanent Exemption"/> 
                <InputForm 
                    type={0} 
                    name="Details of license renewal fee "
                    onChange={this.handleChange('renewalFee')} 
                    placeholder="Details of license renewal fee"/> 
                <InputForm 
                    type={0} 
                    name="Details of license renewal fee "
                    onChange={this.handleChange('renewalFee')} 
                    placeholder="Details of license renewal fee"/>
                <InputForm 
                    type={0} 
                    name="Challan No. for online deposit"
                    onChange={this.handleChange('challanNum')} 
                    placeholder="Challan No. for online deposit"/>
                <InputForm 
                    type={0} 
                    name="Amount"
                    onChange={this.handleChange('Amount')} 
                    placeholder="Amount"/>
                <InputForm 
                    type={0} 
                    name="Name  of Drawee Bank."
                    onChange={this.handleChange('draweeBank')} 
                    placeholder="Name  of Drawee Bank."/>
                <Date 
                    name="Date"
                    handleChange={this.handleChange('DateDraweeBank')}
                    placeholder="Date" />
            </div>
        )
    }
}
export default formRenew
