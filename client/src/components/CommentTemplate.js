import React from 'react';
import { RiUserHeartLine } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import './CommentTemplate.css';

const CommentTemplate = ({ commentList }) => {
  return (
    <div className="listEntry">
      <section className="mainContent">
        <RiUserHeartLine />
        <strong className="userName_CT">Leehyojin</strong>
        <strong className="location_CT">{commentList.country}</strong>
        <strong className="weather_CT">{commentList.weather}</strong>
        <p className="context_CT">{commentList.context}</p>
      </section>
      <section className="optionItems">
        <strong className="chat_like">
          <AiOutlineLike />
          {commentList.chat_like}
        </strong>
        <strong className="chat_unlike">
          <AiOutlineDislike />
          {commentList.chat_unlike}
        </strong>
        <strong className="create_at">{commentList.createdAt}</strong>
      </section>
    </div>
  );
};

export default CommentTemplate;