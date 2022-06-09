/*eslint-disable*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./BestGallery.scss";

type likeGalleryType = {
  likeGallery: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
};

type scenesType = {
  gallery: number;
  id: number;
  title: string;
  content: string;
  user_image: string;
  nickname: string;
  image: string;
  singlepost: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    genre: string;
    image: string;
    description_id: string | null;
  }[];
}[];

const LikeGallery: React.FC<likeGalleryType> = ({ likeGallery }) => {
  const history = useHistory();

  const [nickname, setNickname] = useState("");
  const [scenes, setScenes] = useState<scenesType>([]);

  const rendering = scenes.slice(0, 4);
  console.log("rendering ===>", rendering);

  console.log("scenes ===>", scenes);
  const handleLandingGalleryImage = () => {
    axios
      .get(`${process.env.REACT_APP_EC2_URL}/gallery/${likeGallery.id}`)
      .then((res) => {
        setNickname(res.data.nickname);
        setScenes(res.data.singlepost);
      });
  };

  useEffect(() => {
    handleLandingGalleryImage();
  }, []);

  return (
    <div className="like-gallery-page">
      <div className="RG-container">
        <div
          className="RG-title"
          onClick={() => {
            history.push(`/gallery/${likeGallery.id}`);
          }}
        >
          {nickname}님의 {likeGallery.title}
        </div>
        <div className="RG-img-wrap">
          {rendering.map((ele) => {
            return (
              <div className="RG-img" key={ele.id}>
                <img
                  src={`${process.env.REACT_APP_S3_URL_ImageUpload}/${ele.image}`}
                  alt={ele.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LikeGallery;
