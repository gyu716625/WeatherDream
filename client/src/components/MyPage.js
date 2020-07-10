import React, { useState } from "react";
import "./MyPage.css";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from 'react-icons/gr';
import { AiOutlineComment } from 'react-icons/ai';
import CommentList from './CommentList';
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

const MyPage = (props) => {
  const [toggle, setToggle] = useState(false);
  const [listClickToggle, setListToggle] = useState(false);
  const [comment, setComment] = useState([]);

  const SideMenuEvent = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const commentToggleHandler = () => {
    listClickToggle ? setListToggle(false) : setListToggle(true);
  }

  const getDiarydata = (id) => {
    fetch(`http://14.50.138.127:3001/user/mypage/diary/${id}`)
      .then(data => {
        console.log(data)
        if(data.status === 200) {
          return data.json();
        }
      })
      .then(json => {
        console.log('json.data',json.data);
        setComment(json.data);
        //comment.push(json.data);
      })
      .catch(err => console.log(err))

      //console.log('comment',comment);
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
            <span className="userName">{props.userInfo.username}</span>
          </div>
          <div className="locationInfo">
            <Link to={"/LocationSearch"} className="linkTag">
              <strong className="infoContent">중구 세종대로 110</strong>
              <GrLocation />
            </Link>
          </div>
          <div className="commentList" onClick={() => {
            console.log('test');
            getDiarydata(cookie.load('userId'));
            return commentToggleHandler()}}>
            <strong className="infoContent">내 댓글 보기</strong>
            <AiOutlineComment />
          </div>
        </section>
      </div>
      <CommentList
        username = {props.userInfo.username}
        comment = {comment}
        listClickToggle={listClickToggle}
        commentToggleHandler={commentToggleHandler}
      />
    </nav>
  );
};

export default MyPage;
