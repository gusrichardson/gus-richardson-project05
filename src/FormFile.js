import React, { Component } from 'react';

class FormFile extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} className="weatherInput">
                <label htmlFor="latitude">Enter latitude</label>
                <input type="text" id="latitude" name="latitude" placeholder="latitude" />
                <label htmlFor="longitude">Enter longitude</label>
                <input type="text" id="longitude" name="longitude" placeholder="longitude" />
                <button>See Forecast!</button>
            </form>
        )
    }

};

export default FormFile;