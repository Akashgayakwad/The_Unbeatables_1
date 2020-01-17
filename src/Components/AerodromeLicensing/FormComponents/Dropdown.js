import React, { Component } from 'react'

export class Dropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            List:{
                'delhi': [],
                'kolkata':[],
                'chennai':[],
                'mumbai':[]
            }
        }
    }
    
    render() {
        return (
            <div>
                <div class="dropdown">
                    <button class="btn btn-primary btn-block" type="button" id="multiDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Click here
                    <div class="ripple-container"></div></button>
                    <div class="dropdown-menu" aria-labelledby="multiDropdownMenu">
                        <a class="dropdown-item dropdown-toggle" href="#pablo">Submenu 1</a>
                        <div class="dropdown-menu">
                            <button class="dropdown-item" href="#pablo">Submenu action 1</button>
                            <button class="dropdown-item" href="#pablo">Submenu action 2</button>
                        </div>
                        <a class="dropdown-item dropdown-toggle" href="#pablo">Submenu 2</a>
                        <div class="dropdown-menu">
                            <button class="dropdown-item" href="#pablo">SubSubmenu action 1</button>
                            <button class="dropdown-item" href="#pablo">SubSubmenu action 2</button>
                        </div>
                        <a class="dropdown-item dropdown-toggle" href="#pablo">Submenu 3</a>
                        <div class="dropdown-menu">
                            <button class="dropdown-item" href="#pablo">SubSubSubmenu action 1</button>
                            <button class="dropdown-item" href="#pablo">SubSubSubmenu action 2</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown
