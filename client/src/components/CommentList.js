import React, { useState } from 'react';
import './CommentList.css';
import CommentTemplate from './CommentTemplate';
import { uuid } from "uuidv4";
import { MdExitToApp } from "react-icons/md";

const CommentList = ({ listClickToggle, commentToggleHandler }) => {

  const [commentList, setCommentList] = useState([
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
  ]);

  return listClickToggle ? (
    <React.Fragment>
      <div className={listClickToggle ? "commentWrap activeComment" : "commentWrap"}>
        <span className="closeBtn" onClick={() => commentToggleHandler()}><MdExitToApp /></span>
        {commentList.map((el) => (
          <CommentTemplate key={uuid()} commentList={el} />
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
};

export default CommentList;