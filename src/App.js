import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import Weather from './Weather';
import FormFile from './FormFile';
import Suitcase from './Suitcase';
import MediaQueries from './MediaQueries.css';


const key = '0eb7bbceb524f6b41c9a80030c913889';
const proxy = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {

  state = {
    daily: ""
  }


  getWeather = async (e) => {
    e.preventDefault();
    const lat = e.target.elements.latitude.value;
    const long = e.target.elements.longitude.value;
    const apiCall = await fetch(`${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`);
    const data = await apiCall.json();
    const daily = data.daily.data;

    this.setState({
      daily: daily
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <FormFile getWeather={this.getWeather} />
        <Weather
          daily={this.state.daily}
          high={this.state.high}
          low={this.state.low}
          summary={this.state.summary}
        />
        <Suitcase />


      </div>

    );
  }
}

export default App;
