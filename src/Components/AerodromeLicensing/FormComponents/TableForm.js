import React, { Component } from 'react'
import Date from './Date'
import Labels from '../FormComponents/Labels'
import InputForm from '../FormComponents/InputForm'

export class TableForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"",
            List:[
                {
                    name:"Initial briefing with operator to review requirements for licensing.",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Identify key contact(s) with the operator",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Receipt of Application including relevant documents and fee",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Select key personnel to review application",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"COnduct initial assessments of documents",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"If assessment is not satisfactory, advise operator accordingly",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Ensure all documents are in compliance before moving to inspection phase",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Assessment of facilities and equipment",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Conduct on-site inspection including Operational procedures. ( complete checklist at appendix 15 Inspectors Manual)",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Assessment of process for evaluation of the competence and experience of the aerodrome operator’s personnel (complete checklist at Appendix 14 Inspectors Manual)",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Availability of BCAS clearance regarding security compliance of aerodrome and its facilities",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Availability of arrangement with AAI for coordination regarding local airspace, AIS and other relevant operational procedures ( e.g. MoU/ LoA)",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Record and brief operator regarding non- compliance by way of inspection report",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Receive corrective action plan",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Review status of corrective action plans",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Verify and document corrective action taken",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Ensure all open issues are resolved.",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Ensure all checklists have been completed",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Verify all items are closed or acceptable exemption has been granted. ( Checklist at Appendix 13 for Exemptions should be completed Inspectors Manual)",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Obtain DG approval for issuance of license",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Prepare Aerodrome License for issuance",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Determine Special Conditions",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Update License register",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Issue License",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Post / handover licence",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:" Notify AIS of aerodrome particulars",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Modify surveillance plan.",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                
                
                
            ],
            name:"",
            Date: new Date(),
            DateAssessment: new Date(),
            nameofAeroOp:"",
        }
    }

    handleChangeTable = (name,i) => (e) => {
        let List = this.state.List
        if(name === "activitycs") {
            List[i].activitycs = e.target.value
        }
        else if(name === "activityoi") {
            List[i].activityoi = e.target.value
        }
        else if(name === "activitys") {
            List[i].activitys = e.target.value
        }

        this.setState({
            List : List
        })
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
            <Labels head="Aerodrome License Issue Check sheet"/>
            <InputForm type={0} name="Name of Aerodrome Operator" onChange={this.handleChange('nameofAeroOp')} placeholder="Name of Aerodrome Operator" />
            <Date name="Date of Assessment " handleChange={this.handleChange('DateAssessment')} placeholder="Date of Assessment"/>  
            <table class="table">
                <thead>
                    <tr>
                        <th class="text-center">Phase</th>
                        <th class="text-center">Activity</th>
                        <th class="text-center">COMPLIANCE STATUS</th>
                        <th class="text-center">OUTSTANDING ISSUES</th>
                        <th class="text-center">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.List.map((item,i) => {return(<tr>
                        <td class="text-center">{i+1}</td>
                        <td>{item.name}</td>
                        <td>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Reason" onChange={this.handleChangeTable('activitycs',i)} class="form-control"/>
                            </div>
                        </td>
                        <td>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Reason" onChange={this.handleChangeTable('activityoi',i)} class="form-control"/>
                            </div>
                        </td>
                        <td class="text-right">
                            <div class="form-group">
                                <input type="text" placeholder="Enter Reason" onChange={this.handleChangeTable('activitys',i)}  class="form-control"/>
                            </div>
                        </td>
                    </tr>)})
                }
                </tbody>
            </table>
            
            <Date name="Date " handleChange={this.handleChange('Date')} placeholder="Date"/>
            {
                //Signature to be added
            }
                
            

            </div>
    )
    }
}

export default TableForm