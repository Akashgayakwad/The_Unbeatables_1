import React, { Component } from 'react'
import FormCards from './Cards/FormCards'

export default class Mainform extends Component {
    render() {
        return (
            <div>
                <FormCards header="DETAILS OF LICENCEE" status={0} details="as required to be shown on the license" link="/" buttonStatus={true} button="Fill up the form"  />
                <FormCards header="DETAILS OF AERODROME" status={0} details="as required to be shown on the license" link="/" buttonStatus={false} button="Fill up the form"  />
                <FormCards header="DETAILS OF AERODROME" status={0} details="as required to be shown on the license" link="/" buttonStatus={false} button="Fill up the form"  />
            </div>
        )
    }
}
