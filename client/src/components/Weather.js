import MyPage from './MyPage';
import { weather_API_KEY } from "../API_KEY";
import './Weather.css';

// UI로 보여줄 요소
// 비, 눈, 맑음, 
import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.location.state.latitude,
      longitude: this.props.location.state.longitude,
      location: "",
      weatherIcon: "",
      weatherTemp: "",
    };
  }
  
  componentDidMount(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${weather_API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setWeatherInfo(data);
      })
  }

  setWeatherInfo = (weather) => {
    this.setState({
      location: weather.name,
      weatherIcon: weather.weather[0].icon,
      weatherTemp: Math.round(weather.main.temp - 273.15),
      weatherTempMax: Math.round(weather.main.temp_max - 273.15),
      weatherTempMin: Math.round(weather.main.temp_min - 273.15),
    });
  }

  render() {
    return (
      <React.Fragment>
        <MyPage />
        <div className="weatherWrap">
          <section className="weatherInner">
            <div className="location">{this.state.location.toUpperCase()}</div>
            <img
              className="weatherIcon"
              src={`http://openweathermap.org/img/wn/${this.state.weatherIcon}@2x.png`}
            />
            <div className="weatherTemp">{`${this.state.weatherTemp} °C`}</div>
            <div className="highAndLowTemp">{`최고 ${this.state.weatherTempMax} °C / 최저 ${this.state.weatherTempMin} °C`}</div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
// weather.icon Weather icon id
export default Weather;