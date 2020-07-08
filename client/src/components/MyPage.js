import React, { useState } from "react";
import "./MyPage.css";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from 'react-icons/gr';
import { AiOutlineComment } from 'react-icons/ai';
import CommentList from './CommentList';

const MyPage = () => {

  const [toggle, setToggle] = useState(false);
  const [listClickToggle, setListToggle] = useState(false);

  const SideMenuEvent = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const commentToggleHandler = () => {
    listClickToggle ? setListToggle(false) : setListToggle(true);
  }

  return (
    <nav className={toggle ? "sideMenu active" : "sideMenu"}>
      <div
        className={toggle ? "menu-btn nav-open" : "menu-btn"}
        onClick={() => SideMenuEvent()}
      >
        <div
          className={toggle ? "line line--1 line-cross" : "line line--1"}
        ></div>
        <div
          className={toggle ? "line line--2 line-fade-out" : "line line--2"}
        ></div>
        <div
          className={toggle ? "line line--3 line-cross" : "line line--3"}
        ></div>
      </div>
      <div className={toggle ? "nav-links fade-in" : "nav-links"}>
        <section className="pageContent">
          <div className="userInfo">
            <FaUserCircle />
            <span className="userName">Leehyojin</span>
          </div>
          <div className="locationInfo">
            <strong className="infoContent">중구 세종대로 110</strong>
            <GrLocation />
          </div>
          <div className="commentList" onClick={() => commentToggleHandler()}>
            <strong className="infoContent">내 댓글 보기</strong>
            <AiOutlineComment />
          </div>
        </section>
      </div>
      <CommentList listClickToggle={listClickToggle} commentToggleHandler={commentToggleHandler}/>
    </nav>
  );
};

export default MyPage;
