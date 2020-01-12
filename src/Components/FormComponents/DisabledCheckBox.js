import React from 'react'
import {Checkbox, Label} from 'automize'

function DisabledCheckBox(props) {
    return (
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox disabled/> {props.name}
        </Label>
    )
}

export default DisabledCheckBox
