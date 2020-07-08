import React, {useState} from 'react';
import MyPage from './MyPage';

// UI로 보여줄 요소
// 비, 눈, 맑음, 

const Weather = () => {
  const [weatherIcons, setWeatherIcons] = useState({

  })
  return (
    <React.Fragment>
      <MyPage />
      <div className="weatherWrap">

      </div>
    </React.Fragment>
    
  );
};

export default Weather;

// 브랜치 만들어야함