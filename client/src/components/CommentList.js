import React, { Component } from "react";
import './CommentList.css';
import CommentTemplate from './CommentTemplate';
import { uuid } from "uuidv4";
import { MdExitToApp } from "react-icons/md";

// 로그인 기능이 다 구현되면 app에 있는 userId props로 받아와서 해당 아이디로 fetch요청

class CommentList extends Component {

  constructor(props){
    super(props);
    this.state = {
      commentLists: [
        {
          id: "1",
          context:
            "오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요",
          country: "jeju-do",
          chat_like: 1,
          chat_unlike: 3,
          weather: "맑음",
          createdAt: "2020-07-07",
        },
        {
          id: "2",
          context: "오늘 비가 내려요",
          country: "jeju-do",
          chat_like: 4,
          chat_unlike: 6,
          weather: "비",
          createdAt: "2020-07-08",
        },
        {
          id: "3",
          context: "오늘 비가 내려요",
          country: "jeju-do",
          chat_like: 6,
          chat_unlike: 0,
          weather: "흐림",
          createdAt: "2020-07-08",
        },
        {
          id: "1",
          context:
            "오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요",
          country: "jeju-do",
          chat_like: 1,
          chat_unlike: 3,
          weather: "맑음",
          createdAt: "2020-07-07",
        },
        {
          id: "1",
          context:
            "오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요오늘 날씨가 맑아요",
          country: "jeju-do",
          chat_like: 1,
          chat_unlike: 3,
          weather: "맑음",
          createdAt: "2020-07-07",
        },
      ],
    };
  }

  componentDidMount(){
    
  }

  render() {
    console.log(this.props.comment)
    return this.props.listClickToggle ? (
      <React.Fragment>
        <div className={this.props.listClickToggle ? "commentWrap activeComment" : "commentWrap"}>
          <span className="closeBtn" onClick={() => this.props.commentToggleHandler()}>
            <MdExitToApp />
          </span>
          {this.props.comment.map((el) => (
            <CommentTemplate key={uuid()} commentList={el} username={this.props.username} />
          ))}
        </div>
        <div className="wrapBg activeBg"></div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div className="commentWrap"></div>
        <div className="wrapBg"></div>
      </React.Fragment>
    );
  }
}

export default CommentList;

// { username: 'root',
//   password: 'weatherdream',
//   database: 'weatherdream',
//   host: 'first-project.cjp4wts07bvp.us-east-2.rds.amazonaws.com',
//   port: 13306,
//   dialect: 'mysql',
//   logging: false 
// }