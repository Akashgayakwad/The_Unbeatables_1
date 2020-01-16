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
                                            Show Error
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
                                <div class="col col-lg-12">
                                    <input 
                                        type="text" 
                                        class="form-control is-valid" 
                                        onChange={this.handleChange('value',i)}
                                        value={this.state.List[i].value} 
                                        id={"exampleFormControlInput"+i}
                                        disabled></input>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        )
    }
}

export default DefectForm