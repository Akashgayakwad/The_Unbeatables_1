import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            redirectToReferrer:false
        }

        this.login = this.login.bind(this)
    }

    login(res) {
        let postData = res.accessToken;
        localStorage.setItem("token",postData);
        this.setState({
            redirectToReferrer:true
        }, ()=>{
            console.log(localStorage.getItem("token"));
        })
    }

    render() {

        const responseGoogle = (response) => {
            this.login(response)
        }

        switch(this.state.redirectToReferrer) {
            case true : 
                return(<Redirect to='/card' />)
            case false :
                return (
                    <div>
                        <GoogleLogin
                            clientId="986425972874-05q35aimn5sfpfqbqeiof3qdu63ht3ug.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                )
        }
    }
}

export default Login
