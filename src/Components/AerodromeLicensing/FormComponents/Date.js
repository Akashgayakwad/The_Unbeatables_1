import React, { Component } from 'react'

export class DateSelect extends Component {
    render() {
        return (
            <div>
                <div class="form-group">
                <h6>{this.props.name}</h6>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                        </div>
                        <input class="flatpickr flatpickr-input form-control" value={this.props.value} onClick={this.props.handleChange} type="date" placeholder={this.props.placeholder}></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default DateSelect;
