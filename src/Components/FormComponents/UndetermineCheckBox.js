import React from 'react'
import {Checkbox, Label} from 'automize'

function UndetermineCheckBox(props) {
    return (
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox undetermine/> {props.name}
        </Label>
    )
}

export default UndetermineCheckBox
