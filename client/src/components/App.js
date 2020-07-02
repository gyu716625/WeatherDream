import React, { Component } from 'react';
import "./App.css";
import { weather_API_KEY,  kakaoMap_API_KEY } from "../API_KEY";

// 카카오 지도 api 연동
// openWeather api 연동 (key 발급)

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(document.getElementById("map"));
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }

  

  render() {
    return <div id='map'></div>
  }
}

export default App;
