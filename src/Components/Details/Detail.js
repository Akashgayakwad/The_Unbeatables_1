import React from 'react';
// onChange = {props.checkChange}
const Detail = (props) =>{
    return(
        <tr>
            <td className="text-center">{props.No}</td>
            <td>{props.Particular}</td>
            <td>{props.Value}</td>
            <td>
            <div className="custom-control custom-checkbox mb-3">
                <input className="custom-control-input" id={`customCheck`+props.No}  type="checkbox" checked =  {(props.Defect)? "checked" : ""}  />
                <label className="custom-control-label" for={`customCheck`+props.No} ></label>
            </div>
            </td>
            <td className="text-right">
                <div className="form-group">
                    <input type="text" placeholder = {(props.Defect)? props.Reason : ""} className="form-control" disabled =  {(!props.Defect)? "disabled" : ""} onChange ={props.changeReason}/>
                </div>
            </td>
        </tr>
    )
}
export default Detail;
