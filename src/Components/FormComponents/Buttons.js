import React from 'react'
import { Button, Icon } from "atomize";

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false
        };
    }
    
    handleSubmit() {
        this.setState({
            isLoading: true
        })
        axios.post(this.props.link,this.props.data)
        .then(res => {
            auth.login(() => {
                this.props.history.push('/dashboard');
            })
        })
        .catch(error => {
            alert(error)
        })
    }

    render() {
        const { isLoading} = this.state;
        return (
            <Button
                onClick={this.handleSubmit}
                disabled={isLoading}
                w="100%"
                bg={this.props.color}
                hoverBg={this.props.color + 100}
                shadow="3"
                hoverShadow="4"
                m={{ r: "1rem" }}
            >
            {this.props.name}
            </Button>
        )
    }
}

export default Buttons



