import React, { Component } from 'react'

export class DefectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            List:[
                {
                    particulars: "bsjhabsd",
                    value:"aoubfiuasfb",
                    defect:true,
                    reason:"kjajskdbajksd"
                },
                {
                    particulars: "abnsabsdsbdn",
                    value:"ajsbnjkasbn",
                    defect:false,
                    reason:""
                },
                {
                    particulars: "bsjhabsd",
                    value:"aoubfiuasfb",
                    defect:true,
                    reason:"lorem ipsum"
                },
                {
                    particulars: "abnsabsdsbdn",
                    value:"ajsbnjkasbn",
                    defect:false,
                    reason:""
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (name,i) => (e) => {
        let List = this.state.List
        if(name === "value") {
            List[i].value = e.target.value
            this.setState({
                List : List
            })
        }
    }

    
    render() {
        return (
            <div>
            <div class="nav-wrapper">
                <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0 active" 
                            id="tabs-icons-text-1-tab" 
                            data-toggle="tab" 
                            href="#tabs-icons-text-1" 
                            role="tab" 
                            aria-controls="tabs-icons-text-1" 
                            aria-selected="true"
                            >
                            <i class="ni ni-bullet-list-67 mr-2"></i>Full Status</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0" 
                            id="tabs-icons-text-2-tab" 
                            data-toggle="tab" 
                            href="#tabs-icons-text-2" 
                            role="tab" 
                            aria-controls="tabs-icons-text-2" 
                            aria-selected="false">
                            <i class="ni ni-fat-remove mr-2"></i>Problem</a>
                    </li>
                </ul>
            </div>
                <div class="card shadow">
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                            {this.state.List.map((element,i) => {
                                return(element.defect ? 
                                    <div class="form-group">
                                            <h6>{element.particulars}</h6>
                                            <div class="row justify-content-md-center">
                                                <div class="col col-lg-10">
                                                    <input 
                                                        type="text" 
                                                        class="form-control is-invalid" 
                                                        onChange={this.handleChange('value',i)}
                                                        value={this.state.List[i].value} 
                                                        id={"exampleFormControlInput"+i} 
                                                        ></input>
                                                </div>
                                                <div class="col col-lg-2">
                                                    <button type="button" class="btn btn-icon btn-2 btn-danger" data-container="body" data-toggle="popover" data-placement="top" data-content={element.reason}>
                                                        Problem
                                                    </button>
                                                </div>
                                                <div class="collapse" id={"collapseExample"+i}>
                                                    <div class="card card-body">
                                                        {element.reason}
                                                    </div>
                                                </div>
                                            </div>
                                    </div> : 
                                    <div class="form-group">
                                        <h6>{element.particulars}</h6>
                                        <div class="row justify-content-md-center">
                                            <div class="col col-lg-10">
                                                <input 
                                                    type="text" 
                                                    class="form-control is-valid" 
                                                    onChange={this.handleChange('value',i)}
                                                    value={this.state.List[i].value} 
                                                    id={"exampleFormControlInput"+i}
                                                    disabled></input>
                                            </div>
                                            <div class="col col-lg-2">
                                                <button type="button" class="btn btn-icon btn-2 btn-success" data-container="body" data-toggle="popover" data-placement="top" data-content="Verified">
                                                    Success
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                            </div>
                            <div class="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                            {this.state.List.map((element,i) => {
                                return(element.defect ? 
                                    <div class="form-group">
                                            <h6>{element.particulars}</h6>
                                            <div class="row justify-content-md-center">
                                                <div class="col col-lg-10">
                                                    <input 
                                                        type="text" 
                                                        class="form-control is-invalid" 
                                                        onChange={this.handleChange('value',i)}
                                                        value={this.state.List[i].value} 
                                                        id={"exampleFormControlInput"+i} 
                                                        ></input>
                                                </div>
                                                <div class="col col-lg-2">
                                                    <button type="button" class="btn btn-icon btn-2 btn-danger" data-container="body" data-toggle="popover" data-placement="top" data-content={element.reason}>
                                                        Error
                                                    </button>
                                                </div>
                                                <div class="collapse" id={"collapseExample"+i}>
                                                    <div class="card card-body">
                                                        {element.reason}
                                                    </div>
                                                </div>
                                            </div>
                                    </div> : 
                                    null )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DefectForm