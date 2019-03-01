import React, { Component } from 'react';

class FormFile extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" id="latitude" name="latitude" placeholder="latitude" />
                <input type="text" id="longitude" name="longitude" placeholder="longitude" />
                <button>Weekly Forecast</button>
            </form>
        )
    }

};

export default FormFile;