import React, { Component } from 'react'

export class AuthCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            card: null,
            popup: false
        }
    }
    
    handleChange = (name) => (e) => {
        this.setState({
            [name] : e.target.file,
        }, () => {
            this.setState({
                popup:true
            })
        })
    }

    handlePopup = (value) => {
        return (value ? (<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
        ) : null);
    }


    render() {
        return (
            <div>
                <div class="info">
                    <div class="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                        <i class="ni ni-key-25"></i>
                    </div>
                    <h6 class="info-title text-uppercase text-primary">Card Login</h6>
                    <p class="description opacity-8">To ensure better security we use card login. If you have the acess card please upload it to login.</p>
                    <div class="text-primary"> 
                        <div class="fileinput fileinput-new text-center" data-provides="fileinput">
                                <div class="fileinput-new thumbnail img-raised"></div>
                            <div>
                                <span class="btn btn-raised btn-round btn-primary btn-simple btn-file">
                                    <span class="fileinput-new">Select File</span>
                                    <span class="fileinput-exists">Change</span>
                                    <input type="file" name="..." onChange={this.handleChange('card')}/>
                                </span>
                                    <a href="javascript:;" class="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput">
                                    <i class="fa fa-times"></i>Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
                {this.handlePopup(this.state.popup)}
            </div>
        )
    }
}

export default AuthCard
