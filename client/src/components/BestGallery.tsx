/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import galleryAPI from "../api/galleryAPI";
require("dotenv").config();
import "./BestGallery.scss";

type Gallery = {
  gallery: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    user_id: number;
    image: { image: string }[];
  };
};

type genreSceneType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  description_id: number;
  genre: string;
  image: string;
}[];

const BestGallery: React.FC<Gallery> = ({ gallery }) => {
  const history = useHistory();
  const [scenes, setScenes] = useState<genreSceneType>([]);

  const handleGetScenes = async () => {
    try {
      const result = await galleryAPI.getGalleryId(gallery.id.toString());

      setScenes(result.singlepost.slice(0, 4));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetScenes();
  }, [gallery]);

  return (
    <div id="best-gallery-page">
      <div className="BG-container">
        <div
          className="BG-title"
          onClick={() => {
            history.push(`/gallery/${gallery.id}`);
          }}
        >
          {gallery.title}
        </div>
        <div className="BG-img-wrap">
          {scenes.map((scene) => {
            return (
              <div className="BG-img" key={scene.id}>
                <img
                  src={`${process.env.REACT_APP_S3_URL_ImageUpload}/${scene.image}`}
                  alt={scene.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestGallery;
