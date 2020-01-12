import React from 'react'
import { Input, Div, Button, Modal, Icon, Text, Anchor } from "atomize";
import axios from 'axios'

const AlignCenterModal = ({ isOpen, onClose, handleSubmit, email, password, showPassword, isLoading }) => {
return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
        <Div d="flex" m={{ b: "4rem" }}>
            <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="header" textAlign="center">
                Login
            </Text>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                Email
                <Input
                    placeholder="Email"
                    value={email}
                    p={{ x: "2.5rem" }}
                    prefix={
                        <Icon
                            name="UserSolid"
                            color="warning800"
                            size="16px"
                            cursor="pointer"
                            pos="absolute"
                            top="50%"
                            left="0.75rem"
                            transform="translateY(-50%)"
                        />
                    }
                />
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                Email
                <Input
                    placeholder="Password"
                    value={password}
                    type={showPassword ? "text" : "password"}
                    suffix={
                        <Button
                            pos="absolute"
                            onClick={() => this.setState({ showPassword: !showPassword })}
                            bg="transparent"
                            w="3rem"
                            top="0"
                            right="0"
                            rounded={{ r: "md" }}
                        >
                    <Icon
                        name={showPassword ? "EyeSolid" : "Eye"}
                        color={showPassword ? "danger800" : "success800"}
                        size="16px"
                    />
                    </Button>
                }
            />
            </Label>
            
            <Div m={{ t: "3rem" }} textAlign="center">
                <Anchor href="#" d="block">
                    Need help?{" "}
                </Anchor>
                <Anchor href="#" d="block" m=".2rem">
                    Create an account{" "}
                </Anchor>
            </Div>
        </Div>
        <Div d="flex" justify="flex-end">
            <Button
                onClick={onClose}
                bg="gray200"
                textColor="medium"
                m={{ r: "1rem" }}
            >
                Cancel
            </Button>
            <Button disabled={isLoading} onClick={handleSubmit} bg="info700">
                Login
            </Button>
        </Div>
    </Modal>
);
}



class AlignedModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            showModal: false,
            showPassword: false,
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const auth = {
            email: this.props.email,
            password: this.props.password
        }
        this.setState({
            isLoading: true
        })
        axios.post("",auth)
        .then(res => {
            this.props.history.push('/');
        })
        .catch(error => {
            alert(error)
        })
    }

    render() {
        const { showModal } = this.state;
        return (
            <div>
                <Button
                    bg="info700"
                    hoverBg="info600"
                    m={{ b: "1rem" }}
                    onClick={() => this.setState({ showModal: true })}
                >
                    Login
                </Button>
                <AlignCenterModal
                    isOpen={showModal}
                    onClose={() => this.setState({ showModal: false })}
                    email={this.state.email}
                    password={this.state.password}
                    showPassword={this.state.showPassword}
                    isLoading={this.state.isLoading}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default AlignedModal;