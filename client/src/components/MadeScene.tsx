import React from "react";
import { useHistory } from "react-router";
require("dotenv").config();

interface MadeSceneProps {
  scene: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    image: string;
  };

  haveGallery: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    description_id: number;
    genre: string;
    image: string;
  }[];
}

const MadeScene: React.FC<MadeSceneProps> = ({ scene, haveGallery }) => {
  const history = useHistory();

  return (
    <div>
      <div className="result-scene-img">
        {/* TODO: 북마커 클릭 시 갤러리리스트에 추가 되어야 함 */}
        {/* <div className="bookmarker" onClick={() => setAddModal(true)}> */}
        <div
          className="bookmarker"
          onClick={() => history.push(`/post/${scene.id}`)}
        >
          <div id="addTogall">장면 보기</div>
        </div>

        <img
          src={`${process.env.REACT_APP_S3_URL_ImageUpload}/${scene.image}`}
          alt={scene.image}
          // onClick={() => history.push(`/post/${scene.id}`)}
        />
      </div>
    </div>
  );
};

export default MadeScene;
