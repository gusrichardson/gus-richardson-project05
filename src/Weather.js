import React, { Component } from 'react';
import "./Weather.css";
import clear_day from './clear_day.jpg';


class Weather extends Component {

    render() {
        return (
            <div className="weatherContainer" >
                {this.props.daily && this.props.daily.splice(0, 7).map((result) => {
                    return <div className="dayForecast">

                        <img src={result.icon.replace(/-/gi, "_").concat(".jpg")} />
                        <br></br>
                        <br></br>
                        <p>{result.icon}</p>
                    </div>
                })}
            </div>
        )
    }
}

export default Weather;


