import React, { Component } from 'react'
import { Redirect } from 'react-router';
import axios from "axios"

export class AuthCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            card: null,
            name: "restadmin@airport-licensing",
            redirectToReferrer:false,
            participant:"",
            identity:"",
            version:"",
        }
    }
    
    handleChange = (name) => (e) => {
        this.setState({
            [name] : e.target.file,
        })
    }

    handleSubmit(e) {
        const {name , card} = this.state;
        const access_token = sessionStorage.getItem('token');
        console.log(access_token);
        fetch('https://a1d4d44f.ngrok.io/api/wallet/import', {
            headers: {
                    "X-Access-Token":access_token,
                },
            method: 'POST',
            body: {
                "card":card,
                "name":name}
            })
            .then(response => response.json())
            .then(success => {
                console.log('sucess');
                axios.get(`https://a1d4d44f.ngrok.io/api/system/ping`)
                    .then(res => {
                    const {participant,identity,version} = res.data; 
                    this.setState({ participant,identity,version}, 
                        this.setState({
                            redirectToReferrer : true
                        }));
                    })
                    .catch(error => {
                        console.log(error);
                    })
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
