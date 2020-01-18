import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            redirectToReferrer:false
        }
    }

    render() {
        return (
            <div>
                <Link to="/redirect">
                    <a href="" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/64px-Google_%22G%22_Logo.svg.png" />
                        </span>
                    <span class="btn-inner--text">Google</span>
                    </a>
                </Link>
            </div>
        )
    }
}

export default Login
