import React, { Component } from 'react';
import "./Weather.css";
import clear_day from './clear_day.png';


class Weather extends Component {

    render() {
        return (
            <div className="weatherContainer" >
                {this.props.daily && this.props.daily.splice(0, 7).map((result) => {
                    console.log(result.temperatureHigh, "this is the high result");
                    return <div className="dayForecast">

                        <img src={result.icon.replace(/-/gi, "_").concat(".jpg")} alt={result.icon.replace(/-/gi, " ")} />
                        <p>Weather Forecast: "{result.summary}"</p>
                        <p>High: {result.temperatureHigh} F</p>
                        <p>Low: {result.temperatureLow} F</p>

                    </div>
                })}
            </div>
        )
    }
}

export default Weather;


