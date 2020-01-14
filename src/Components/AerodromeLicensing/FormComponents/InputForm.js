import React, { Component } from 'react'

class InputForm extends Component {
    constructor(props) {
        super(props)
    }

// 0 for normal input Form
// 1 form under evaluation but needs any change
// 2 for sucessful Form only readme 
// 3 for incorrect form needs change with the error
// 4 for incorect and rejected so diabled with the error

    render() {
        const handleType = () => {
            switch(this.props.type) {
                case 0:
                    return (<div class="form-group">
                                <h6>{this.props.name}</h6>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    onChange={this.props.handleChange} 
                                    id="exampleFormControlInput1" 
                                    placeholder={this.props.placeholder} 
                                    ></input>
                            </div>)
                case 1:
                    return (<div class="form-group">
                                <h6>{this.props.name}</h6>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    onChange={this.props.handleChange} 
                                    value={this.props.value} 
                                    id="exampleFormControlInput1" 
                                    placeholder={this.props.placeholder} 
                                    ></input>
                            </div>)
                case 2:
                    return (<div class="form-group has-success">
                                <h6>{this.props.name}</h6>
                                <input 
                                    type="text" 
                                    value={this.props.value} 
                                    class="form-control form-control-alternative is-valid" 
                                    disabled
                                    ></input>
                            </div>)
                case 3:
                    return (<div class="form-group has-danger">
                                <h6>{this.props.name}</h6>
                                <input 
                                    type="text" 
                                    value={this.props.value} 
                                    onChange={this.props.handleChange} 
                                    placeholder="Error Input" 
                                    class="form-control form-control-alternative is-invalid" 
                                    ></input>
                            </div>)
                case 4:
                    return (<div class="form-group has-danger">
                                <h6>{this.props.name}</h6>
                                <input 
                                    type="text" 
                                    onChange={this.props.handleChange} 
                                    value={this.props.value} 
                                    placeholder="Error Input" 
                                    class="form-control form-control-alternative is-invalid" 
                                    diabled
                                ></input>
                            </div>)
            }
        }

        return (
            <div>
                {handleType()}
            </div>
        )
    }
}

export default InputForm;