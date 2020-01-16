import React, { Component } from 'react';
import Detail from './Detail';
import {Link} from 'react-router-dom';

class Detaillist extends Component{
    
    constructor(props){
        super(props);
    }

    state={
        details : [
            {
                'No':1,
                'Particular':'Name of Applicant',
                'Value':'Utkarsh Choubey',
                'Defect': true,
                'Reason': 'Walid jo the abba humare...',
            },
            {
                'No':2,
                'Particular':'Address of Applicant',
                'Value':'Bhoot Bangla,Andher Nagri,Shamshan ke Piche',
                'Defect': false,
                'Reason': '',
            }
        ]
    }
    render(){

        const checkChange = (index,event) =>{
            let currentdetails = this.state.details;
            currentdetails[index].Defect = !currentdetails[index].Defect;
            this.setState({details:currentdetails});
            console.log("check state",this.state);
        }

        const changeReason = (index,event) =>{
            let currentdetails = this.state.details;
            currentdetails[index].Reason = event.target.value;
            this.setState({details:currentdetails});
            console.log("change state",this.state);
        }

        const allDetails = this.state.details.map((item,index) =>{
            return(
                <Detail
                 No={index}
                 Particular={item.Particular}
                 Value = {item.Value}
                 Defect={item.Defect}
                 Reason = {item.Reason}
                 changeReason ={(event)=>changeReason(index,event)}
                 checkChange = {()=>checkChange(index)}
                 />
            )
        });

             return (
                        <div>
                            <Link to="/dashboard" className="btn btn-info mb-3">Back</Link>
                            <Link to="/sign" className="btn btn-primary mb-3 float-right">Edit</Link>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className="text-center">S.No.</th>
                                        <th>Particulars</th>
                                        <th>Value</th>
                                        <th className="text-left">Defect</th>
                                        <th className="text-center">Reason</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allDetails}
                                </tbody>
                            </table>
                        </div>
                )
    }

}

export default Detaillist;