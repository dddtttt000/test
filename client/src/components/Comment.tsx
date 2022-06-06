import React, { useState } from "react";
import Jake from "../img/UserImage-Jake.png";
import Meg from "../img/UserImage-Meg.png";
import Mili from "../img/UserImage-Mili.png";
import Steven from "../img/UserImage-Steven.png";
import "../pages/Post.scss";

type comments = {
  User: {
    nickname: string;
    image: string;
  };
  comment: string;
  createdAt: string;
  id: number;
  singlepost_id: number;
  updatedAt: string;
};
interface CommentProps {
  comments: comments;
  userInfo: any;
  deleteComment: Function;
}

const Comment: React.FC<CommentProps> = ({
  comments,
  userInfo,
  deleteComment,
}) => {
  const [isUser] = useState(userInfo);
  // const imgId = { 0: Jake, 1: Meg, 2: Mili, 3: Steven };
  const imgId = [Jake, Meg, Mili, Steven];
  const numberImg = Number(comments.User.image);
  const [userImg] = useState(imgId[numberImg]);

  return (
    <>
      <div className="post-mycomment">
        <div className="post-mycomment-group1">
          <img
            className="post-mycomment-group1-logo"
            src={userImg}
            alt="userImg"
          ></img>
        </div>
        <div className="post-mycomment-group2">
          <div className="post-mycomment-group2-nickname">
            {comments.User.nickname}
            {isUser === null ? null : userInfo.nickname ===
              comments.User.nickname ? (
              <div
                onClick={() => deleteComment}
                id={comments.id.toString()}
                className="post-mycomment-group2-delete"
              ></div>
            ) : null}
          </div>
          <div className="post-mycomment-group2-comment">
            {comments.comment}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
