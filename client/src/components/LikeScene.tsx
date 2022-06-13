import React from "react";
import { useHistory } from "react-router";
import "./BestGallery.scss";
require("dotenv").config();

type likeSceneType = {
  likeScene: {
    id: number;
    user_id: number;
    title: string;
    genre: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    image: string;
    description_id: number | null;
  };
};

const LikeScene: React.FC<likeSceneType> = ({ likeScene }) => {
  const history = useHistory();
  return (
    <div id="like-scene-page">
      <div
        className="result-scene-img"
        onClick={() => history.push(`/post/${likeScene.id}`)}
      >
        <img
          src={`${process.env.REACT_APP_S3_URL_ImageUpload}/${likeScene.image}`}
          alt={likeScene.image}
        />
      </div>
    </div>
  );
};

export default LikeScene;
