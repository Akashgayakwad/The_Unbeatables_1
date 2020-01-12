import React from 'react'
import { Checkbox, Label } from "atomize";

class NormalCheckBox extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            checkedManagingWithState: false
        };
    
        this.toggleState = this.toggleState.bind(this);
    }
    
    toggleState(e) {
        this.setState({
            checkedManagingWithState: e.target.checked
        });
    }
    render() {
        const { checkedManagingWithState } = this.state;
        return (
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Checkbox
                    onChange={this.toggleState}
                    checked={checkedManagingWithState}
                />
                {this.props.name}
            </Label>
        );
    }
}

export default NormalCheckBox
