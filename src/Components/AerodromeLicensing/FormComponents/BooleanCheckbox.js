import React, { Component } from 'react'

export class BooleanCheckbox extends Component {
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
                        id={this.props.id1}
                        type="checkbox"
                        value={true}
                        checked={this.props.check === true}
                        onChange={this.props.handleChange}
                    />
                    <label class="custom-control-label" for={this.props.id1}>Yes</label>
                </div>
                <div class="custom-control custom-checkbox mb-3">
                    <input
                        class="custom-control-input" 
                        id={this.props.id2}
                        type="checkbox"
                        value={false}
                        checked={this.props.check === false}
                        onChange={this.props.handleChange}
                    />
                    <label class="custom-control-label" for={this.props.id2}>No</label>
                </div>
            </form>
        );
    }
}

export default BooleanCheckbox