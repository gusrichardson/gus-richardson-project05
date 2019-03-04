import React, { Component } from 'react';
// import "./Weather.css";
import "./App.css";
import partly_cloudy_day from './partly_cloudy_day.jpg';


class Weather extends Component {

    render() {
        return (
            <div className="weatherContainer" >
                {this.props.daily && this.props.daily.splice(0, 7).map((result) => {
                    console.log(result.temperatureHigh, "this is the high result");
                    return <div className="dayForecast">

                        {/* <img src={result.icon.replace(/-/gi, "_").concat(".jpg")} alt={result.icon.replace(/-/gi, " ")} /> */}
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