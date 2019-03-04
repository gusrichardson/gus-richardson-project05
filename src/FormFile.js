import React, { Component } from 'react';

class FormFile extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} className="weatherInput">
                <label htmlFor="latitude">Enter latitude</label>
                <span className="inputMobile"><input type="text" id="latitude" name="latitude" placeholder="latitude" /></span>
                <label htmlFor="longitude" id="longLabel">Enter longitude</label>
                <span className="inputMobile"> <input type="text" id="longitude" name="longitude" placeholder="longitude" /></span>
                <button id="forecastButton">See Forecast!</button>
            </form>
        )
    }

};

export default FormFile;