import React, { Component } from 'react'

export class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:""
        }
    }

    setGender(event) {
        this.setState({
            value: event.target.value
        })
    }
    
    render() {
        
        return (
            <div>
                <div class="custom-control custom-checkbox mb-3">
                    <input name="checkbox" class="custom-control-input" onChange={this.setGender} value="Yes" id="customCheck1" type="checkbox"></input>
                    <label class="custom-control-label" for="customCheck1">{this.props.name1}</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                    <input name="checkbox" class="custom-control-input" onChange={this.setGender} value="No" id="customCheck1" type="checkbox">
                    <label class="custom-control-label" for="customCheck1">{this.props.name2}</label></input>
                </div>
            </div>
        )
    }
}

export default Checkbox
