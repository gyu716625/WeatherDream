/*global kakao*/ 
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import { weather_API_KEY,  kakaoMap_API_KEY } from "../API_KEY";
import LocationSearch from './LocationSearch';
import Weather from './Weather';
import MyPage from './MyPage';

// 카카오 지도 api 연동  - 참고링크 : https://velog.io/@bearsjelly/React-kakao-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-2-%EC%95%B1%ED%82%A4%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0
// openWeather api 연동 (key 발급) - 연동 완료

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a : 'ss'
    }
  }


  render() {
    return (
      <div className="APP">
        <Switch>
          <Route path="/LocationSearch" component={LocationSearch} />
          <Route path="/Weather" component={Weather}/>
        </Switch>
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <MyPage /> */}
      </div>
    )
  }
}

export default App;

