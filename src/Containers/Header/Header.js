import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{fontSize:"20px"}}>
                        <img src="/logo.png" alt="brand-logo"/>
                        <span style={{lineHeight:'20px',alignItems:'center',marginLeft:'10px'}}>Airport Authority of India</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-default">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="index.html">
                                        <img src="/logo-blue.png" style={{height:"50px",width:"auto"}}/>
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="/">
                                    <i className="ni ni-shop"></i>
                                    <span className="nav-link-inner--text">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="/faq">
                                    <i className="ni ni-collection"></i>
                                    <span className="nav-link-inner--text">Faq</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="/history">
                                    <i className="ni ni-collection"></i>
                                    <span className="nav-link-inner--text">History</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-icon" href="/dashboard">
                                    <i className="ni ni-world-2"></i>
                                    <span className="nav-link-inner--text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ni ni-lock-circle-open"></i>
                                    <span className="nav-link-inner--text">Login &#x2BC6;</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                                    <a className="dropdown-item" href="/login">Login</a>
                                    <a className="dropdown-item" href="/request">Network Access Request</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/logout">Log Out</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Reset Password</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        
        )
    }
}

export default Header;