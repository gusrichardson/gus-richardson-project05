import React, { Component } from 'react';
import "./Weather.css";
// import FormFile from './FormFile';


// import axios from 'axios';


// let lat;
// let long;

// const key = '0eb7bbceb524f6b41c9a80030c913889';
// const proxy = 'https://cors-anywhere.herokuapp.com/';
// const url = `${proxy}https://api.darksky.net/forecast/${key}/42.3601,-71.0589`



class Weather extends Component {


    render() {
        return (
            <div className="weatherContainer" >
                <h2>This is the Weather Container</h2>
                <p>{this.props.summary}</p>

            </div>
        )
    }
}

export default Weather;


