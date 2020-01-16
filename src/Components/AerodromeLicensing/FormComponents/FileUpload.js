import React, { Component } from 'react'
import fileuploadimage from './download.png'

export default class FileUpload extends Component {

    constructor(props) {
        super(props)
    
    }
    
    render() {
        return (
            <div>
                <div class="fileinput fileinput-new text-center mr-5" data-provides="fileinput">
                    <div class="fileinput-new thumbnail img-raised">
                        <img src={fileuploadimage} alt="Rounded image" class="img-fluid rounded shadow"/>
                    </div>
                        <div class="fileinput-new thumbnail img-raised"></div>
                    <div>
                        <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                            <span class="fileinput-new">Select File</span>
                            <span class="fileinput-exists">Change</span>
                            <input type="file" name="..." onChange={this.props.handleChange}/>
                        </span>
                            <a href="javascript:;" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput">
                            <i class="fa fa-times"></i>Remove</a>
                    </div>
                </div>
            </div>
        )
    }
}