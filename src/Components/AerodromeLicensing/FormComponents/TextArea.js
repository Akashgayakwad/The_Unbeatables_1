import React, { Component } from 'react'

export class TextArea extends Component {
    render() {
        return (
            <div>
                <h6>{this.props.name}</h6>
                <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    onChange={this.props.handleChange}  
                    placeholder={this.props.placeholder}>
                </textarea>
            </div>
        )
    }
}

export default TextArea