import React, { Component } from 'react'

export class DetailsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            List:[
                {
                    particulars: "bsjhabsd",
                    value:"aoubfiuasfb",
                    defect:false,
                    reason:""
                },
                {
                    particulars: "abnsabsdsbdn",
                    value:"ajsbnjkasbn",
                    defect:false,
                    reason:""
                }
            ]
        }
    }

    handleChange = (name,i) => (e) => {
        let List = this.state.List
        if(name === "defect") {
            List[i].defect = !List[i].defect
        }
        else if(name === "reason") {
            List[i].reason = e.target.value
        }

        this.setState({
            List : List
        }, () => {
            console.log(this.state.List[i].defect);
        })
    }

    handlePopup = (value,i) => {
        return (value ? (<input 
                            type="text" 
                            class="form-control" 
                            onChange={this.handleChange('reason',i)} 
                            id={"exampleFormControlInput"+i}                            
                            placeholder="Your Reason"
                            ></input>) : 
                        <input 
                            type="text" 
                            class="form-control" 
                            id={"exampleFormControlInput"+i} 
                            placeholder="Tick the Defect to type the reason"
                            disabled
                            ></input>);
    }
    
    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th class="text-center">S. No.</th>
                        <th class="text-center">Particulars</th>
                        <th class="text-center">Value</th>
                        <th class="text-center">Defect</th>
                        <th class="text-center">Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.List.map((item,i) => {return(<tr>
                        <td class="text-center">{i+1}</td>
                        <td class="text-center">{item.particulars}</td>
                        <td class="text-center">{item.value}</td>
                        <td class="text-center">
                            <div class="custom-control custom-checkbox mb-3">
                                <input 
                                    class="custom-control-input" 
                                    id={"customCheck"+i} 
                                    value={true} 
                                    onChange={this.handleChange('defect',i)} 
                                    checked={this.state.List[i].defect}
                                    type="checkbox"/>
                                <label class="custom-control-label" for={"customCheck"+i} ></label>
                            </div>
                        </td>
                        <td class="text-right">
                            <div class="form-group">
                                {this.handlePopup(this.state.List[i].defect,i)}
                            </div>
                        </td>
                    </tr>)})
                }
                </tbody>
            </table>
    )
    }
}

export default DetailsForm