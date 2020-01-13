import React, {useState} from 'react'
import { Div, Button, Modal, Icon, Text, Input, Label, Checkbox, Anchor } from "atomize";
import axios from 'axios'

const AlignCenterModal = ({ isOpen, onClose }) => {
    const [isPasswordVisible, togglePasswordVisibility] = useState(false);
    const [isLoading, toogleLoading] = useState(false);
    var [email, handleChangeEmail] = useState('');
    var [password, handleChangePassword] = useState('');
    
    function handleSubmit(e) {
        toogleLoading(!isLoading)
        axios.post('',{email,password})
        .then(res => {
            this.props.history.push('/');
        })
        .catch(error => {
            alert(error)
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
            <Icon
                name="Cross"
                pos="absolute"
                top="1rem"
                right="1rem"
                size="16px"
                onClick={onClose}
                cursor="pointer"
            />
            <Div>
                <Text
                    tag="h1"
                    textSize="heading"
                    m={{ t: "3rem" }}
                    textAlign="center"
                >
                    Sign in
                </Text>
                <Div d="flex" flexDir="column" align="center" w="80%" m="0 auto">
                    <form classsName="form-signin" style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <Input 
                            placeholder="Email"
                            required={true}
                            p={{ x: "2.5rem" }}
                            m={{ t: "1.5rem" }} 
                            onChange={(e) => handleChangeEmail(email=e.target.value)}
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
                        <Input
                            m={{ t: "1rem" }}
                            required={true}
                            placeholder="Password"
                            type={isPasswordVisible ? "text" : "password"}
                            onChange={(e) => handleChangePassword(password=e.target.value)}
                            suffix={
                                <Button
                                    type="button"
                                    pos="absolute"
                                    onClick={() => togglePasswordVisibility(!isPasswordVisible)}
                                    bg="transparent"
                                    w="3rem"
                                    top="0"
                                    right="0"
                                    rounded={{ r: "md" }}
                                >
                                    <Icon
                                        name={isPasswordVisible ? "EyeSolid" : "Eye"}
                                        color={isPasswordVisible ? "danger800" : "success800"}
                                        size="16px"
                                    />
                                </Button>
                            }
                        />    
                        <Div d="flex" align="center" m={{ t: "1rem" }}>
                            <Div d="flex" flexGrow="1">
                                <Button 
                                    bg="info700" 
                                    type="submit"
                                    disabled={isLoading}
                                    hoverBg="info700"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </Button>
                            </Div>
                            <Label align="center" textWeight="600">
                                <Checkbox
                                    checked={true}
                                    inactiveColor="success400"
                                    activeColor="success700"
                                    size="24px"
                                />
                                Remember Me
                            </Label>
                        </Div>
                    </form>
                    <Div m={{ t: "3rem" }} textAlign="center">
                        <Anchor href="#" d="block">
                            Need help?{" "}
                        </Anchor>
                        <Anchor href="#" d="block" m=".2rem">
                            Create an account{" "}
                        </Anchor>
                    </Div>
                </Div>
            </Div>
        </Modal>
    );
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showModal: false
        };
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
                />
            </div>
        );
    }
}   

export default Login;