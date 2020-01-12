import React from 'react'
import { Input } from "atomize";

function BasicInput(props) {
    return (
        <Input name={props.name} placeholder={props.placeholder} />
    )
}

export default BasicInput
