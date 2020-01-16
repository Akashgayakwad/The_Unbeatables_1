import React, { Component } from 'react'

export class CheckBoxOther extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <form>
                <div class="custom-control custom-checkbox mb-3">
                    <h6>{this.props.name}</h6>
                    <input
                        class="custom-control-input" 
                        id={this.props.value3}
                        type="checkbox"
                        value={this.props.value3}
                        checked={this.props.check === this.props.value3}
                        onChange={this.props.handleChange}
                    />
                    <label class="custom-control-label" for={this.props.value3}>{this.props.value3}</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                    <input
                        class="custom-control-input" 
                        id={this.props.value4}
                        type="checkbox"
                        value={this.props.value4}
                        checked={this.props.check === this.props.value4}
                        onChange={this.props.handleChange}
                    />
                    <label class="custom-control-label" for={this.props.value4}>{this.props.value4}</label>
                </div>
            </form>
        );
    }
}

export default CheckBoxOther
