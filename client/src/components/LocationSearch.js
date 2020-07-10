/*global kakao*/ 
import React, { Component } from 'react'
import { kakaoMap_API_KEY } from "../API_KEY";
import './LocationSearch.css';
import { GoSearch } from "react-icons/go";
import MyPage from './MyPage';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import Logout from './Logout';
// latitude: 위도 , longitude: 경도

export default class LocationSearch extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    this.props.getUserInfo(cookie.load('userId'));
  }

  addScript = (locationValue, clicked) => {
    let location = {
      latitude: 0,
      longitude: 0
    };
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMap_API_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        // 지도를 표시할 tag
        let container = document.getElementById("map");
        let options = {
          // 지도의 중심좌표
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          // 지도의 확대 레벨
          level: 3,
        };
        // 지도를 생성합니다 
        const map = new window.kakao.maps.Map(container, options);
        // 주소-좌표 변환 객체를 생성합니다
        let geocoder = new kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(locationValue, function (result, status) {
          
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            // y : 경도 , x : 위도
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // 결과값으로 받은 위치를 마커로 표시합니다
            let marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            map.setCenter(coords);
          }
          if(clicked === true){
            let latitude = new kakao.maps.LatLng(result[0].y, result[0].x).Ha;
            let longitude = new kakao.maps.LatLng(result[0].y, result[0].x).Ga;
            this.setState({
              latitude,
              longitude,
            });
          }
        }.bind(this)); 
      });
    };
    return location;
  }
  
  componentDidMount(){
    this.addScript("중구 세종대로 110");  
  }

  locationSettingHandler = () => {
    let clicked = true;
    let locationValue = document.querySelector(".locationInput").value;
    this.setState({
      location: locationValue
    });
    this.addScript(locationValue, clicked);
  }
  
  render() {
    return (
      <React.Fragment>
        <MyPage userInfo={this.props.session.userInfo.username}/>
        <Logout/>
        <div className="locationSearch">
          <section className="searchSection">
            <input
              className="locationInput"
              type="text"
              placeholder="예) 중구 세종대로 110"
            />
            <button
              className="locationBtn"
              type="submit"
              onClick={() => this.locationSettingHandler()}
            >
              <GoSearch />
            </button>
          </section>
          <div id="map"></div>
          <Link to={{
            pathname : "/Weather",
            state : {
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              userName: this.props.session.userInfo
            }
          }}>
            <button type="button" className="successBtn">
              OK
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
// ${this.state.latitude}&${this.state.longitude}`