import React from 'react'

function Labels(props) {
    return (
        <div class="container">
            <h3>
            {props.head}<br/>
            <small class="text-muted">{props.faded}</small>
            </h3>
        </div>
    )
}

export default Labels
