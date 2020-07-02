import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { WEATHER_API_KEY } from "../config/openWeather";
 
ReactDOM.render(
  <App WEATHER_API_KEY={WEATHER_API_KEY} />,
  document.getElementById("root")
);

