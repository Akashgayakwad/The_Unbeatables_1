import React, { Component } from 'react'
import axios, { post } from 'axios';
import { Redirect } from 'react-router';

export class AuthCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            card: null,
            name: "restadmin@airport-licensing",
            redirectToReferrer:false
        }
    }
    
    handleChange = (name) => (e) => {
        this.setState({
            [name] : e.target.file,
        })
    }

    handleSubmit(e) {
        const {name , card} = this.state
        fetch('https://a1d4d44f.ngrok.io/explorer/Wallet/Card_importCard', {
          // content-type header should not be specified!
            method: 'POST',
            body: {card,name},
        })
            .then(response => response.json())
            .then(success => {
                this.setState({
                    redirectToReferrer : true
                })
                console.log(success);
            })
            .catch(error => console.log(error)
        );
    }


    render() {
        if(this.state.redirectToReferrer) {
            return (<Redirect to="/dashboard"/>)
        }

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
                                    <input type="file" name="..." onClick={this.handleChange('card')}/>
                                </span>
                                <button type="button" onClick={(e) => {this.handleSubmit(e)}} class="btn btn-success btn-round fileinput-exists">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthCard
