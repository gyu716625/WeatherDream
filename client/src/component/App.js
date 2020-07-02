import React, { Component } from 'react';
import "./App.css";



// 카카오 지도 api 연동
// openWeather api 연동 (key 발급)

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props.weather_API_KEY);
  }

  render() {
    return (
      <div>
        hyoin
      </div>
    )
  }
}

export default App;
