import React, { Component } from 'react';
import "./App.css";



class Weather extends Component {

    render() {
        return (
            <div className="weatherContainer" >
                {this.props.daily && this.props.daily.splice(0, 7).map((result) => {
                    return <div className="dayForecast">
                        <p><b>Forecast:</b> "{result.summary}"</p>
                        <p><b>High:</b> {result.temperatureHigh} F <span id="low">
                            <b>Low:</b> {result.temperatureLow} F</span></p>

                    </div>
                })}
            </div>
        )
    }
}

export default Weather;