import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
export default class FormCards extends Component {

    constructor(props) {
        super(props)
    }

    render() {

    const handleStatus = () => {
            console.log(this.props.status);
            switch(this.props.status) {
                case 0:
                    return (<span class="badge badge-secondary">Not applied</span>)
                case 1:
                    return (<span class="badge badge-warning">Under Process</span>)
                case 2:
                    return <span class="badge badge-danger">Rejected</span>
                case 3:
                    return <span class="badge badge-primary">Passed</span>
                default: 
                    return <div></div>    
            }
        }
        
        return (
            <div class="card card-nav-tabs">
                <div class="card-body">
                    <h4 class="card-title">{this.props.header}</h4>
                    {handleStatus()}
                    <p class="card-text">{this.props.details}</p>
                    {(this.props.buttonStatus) ? <Link to={this.props.link}><button type="button" class="btn btn-primary">{this.props.button}</button></Link> : <button type="button" href={this.props.link} class="btn btn-primary" disabled>{this.props.button}</button>}
                </div>
            </div>
        )
    }
}