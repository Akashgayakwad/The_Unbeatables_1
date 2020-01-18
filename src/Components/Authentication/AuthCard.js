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

    componentDidMount() {
        axios.get(`https://airport-licensing-server.shri99.now.sh/token`)
        .then(res => {
            const auth = res.data; 
            const {_id} = auth;
            console.log(_id);
            sessionStorage.setItem('token',_id)
        })
        .catch(error => {
            console.log(error);
        })
    }


    // fetch('https://example.com/profile', {
    //     method: 'GET', 
    //     headers: {
    //         "X-Access-Token":access_token,
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    // fetch('http://3653ec57.ngrok.io/api/system/ping', {
    //                     method: 'GET', 
    //                     headers: {
    //                         "X-Access-Token":access_token,
    //                         "Access-Control-Allow-origin" : "*"
    //                     },
    //                 })
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     console.log('Success:', data);
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error:', error);
    //                 });

    handleSubmit(e) {
        var data = new FormData();
data.append("name", "restadmin@airport-licensing");
data.append("card", "/home/kaushik/SIH/restadmin.card");

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://3653ec57.ngrok.io/api/wallet/import");
xhr.setRequestHeader("X-Access-Token", "yLHaWGB2HGtXihgoTcPnKsx3cKzf3CwQVl6KFZ1ZXnTKGdaprbsD3Tkwu2BZLJcs");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "902b7db3-e7f1-47e3-ad29-bc1bdbd7945b");

xhr.send(data);
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
