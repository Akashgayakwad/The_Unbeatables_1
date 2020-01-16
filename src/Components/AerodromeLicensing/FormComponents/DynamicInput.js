import React, { Component } from 'react'

export class DynamicInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            runways: [{name : ""}]
        }
    }

    handleRunwayChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleRunwayNameChange = idx => evt => {
        const newRunways = this.state.runways.map((runway, sidx) => {
            if (idx !== sidx) return runway;
            return { ...runway, name: evt.target.value };
        });
    
        this.setState({ runways: newRunways });
    };
    
    handleAddRunway = () => {
        this.setState({
            runways: this.state.runways.concat([{ name: "" }])
        });
    };

    handleRemoveRunway = idx => () => {
        this.setState({
            runways: this.state.runways.filter((s, sidx) => idx !== sidx)
        });
    };
    

    render() {
        return (
            <div>
            {this.state.runways.map((runway, idx) => (
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col col-lg-8">
                                <div class="form-group" >
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder={`Runway ${idx + 1}`}
                                        value={runway.name}
                                        onChange={this.handleRunwayNameChange(idx)}
                                    />
                                </div>
                                </div>
                                <div class="col col-lg-4">                                
                                    <button 
                                        class="btn btn-primary" 
                                        onClick={this.handleRemoveRunway(idx)} 
                                        type="button">
                                        Remove
                                    </button>
                                </div>
                        </div>
                    </div>
                ))}
                <button class="btn btn-primary" onClick={this.handleAddRunway} type="button">Add Runway</button>
            </div>
        )
    }
}

export default DynamicInput
