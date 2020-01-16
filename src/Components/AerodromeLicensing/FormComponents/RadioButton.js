import React, { Component } from 'react'

export class RadioButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <form>
                <div class="custom-control custom-radio mb-3">
                    <h6>{this.props.name}</h6>
                    <input
                        class="custom-control-input" 
                        id="id1"
                        type="radio"
                        value={this.props.value1}
                        checked={this.props.check === this.props.value1}
                        onChange={this.props.handleChange}
                    />
                    <label class="custom-control-label" for="id1">{this.props.value1}</label>
                </div>
                <div class="custom-control custom-radio mb-3">
                    <input
                        class="custom-control-input" 
                        id="id2"
                        type="radio"
                        value={this.props.value2}
                        checked={this.props.check === this.props.value2}
                        onChange={this.props.handleChange}
                    />
                    <label class="custom-control-label" for="id2">{this.props.value2}</label>
                </div>
            </form>
        );
    }
}

export default RadioButton
