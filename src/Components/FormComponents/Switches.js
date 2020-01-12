import React from 'react'
import { Switch, Label } from "atomize";

class Switches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSwitchValue1: false
    };
  }
  
  render() {
    const { selectedSwitchValue1 } = this.state;
    return (
      <Label
        onClick={() =>
          this.setState({ selectedSwitchValue1: !selectedSwitchValue1 })
        }
        align="center"
        textWeight="600"
        m={{ b: "1rem" }}
        >
          <Switch
            checked={selectedSwitchValue1}
          />
          {this.props.name}
      </Label>
    );
  }
}

export default Switches
