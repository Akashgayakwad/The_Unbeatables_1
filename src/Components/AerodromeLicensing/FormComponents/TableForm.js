import React, { Component } from 'react'

export class TableForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            List:[
                {
                    name:"Initial briefing with operator to review requirements for licensing.",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                },
                {
                    name:"Initial briefing with operator to review requirements for licensing.",
                    activitycs:"",
                    activityoi:"",
                    activitys:""
                }
            ]
        }
    }

    handleChange = (name,i) => (e) => {
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
    
    render() {
        return (
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
                                <input type="text" placeholder="Enter Reason" onChange={this.handleChange('activitycs',i)} class="form-control"/>
                            </div>
                        </td>
                        <td>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Reason" onChange={this.handleChange('activityoi',i)} class="form-control"/>
                            </div>
                        </td>
                        <td class="text-right">
                            <div class="form-group">
                                <input type="text" placeholder="Enter Reason" onChange={this.handleChange('activitys',i)}  class="form-control"/>
                            </div>
                        </td>
                    </tr>)})
                }
                </tbody>
            </table>
    )
    }
}

export default TableForm