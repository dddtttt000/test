import React from "react";
import { useHistory } from "react-router";
import { Interface } from "readline";
require("dotenv").config();

interface Props {
  value: any;
  onClick: Function;
}

const GenreScene: React.FC<Props> = ({ value, onClick }) => {
  const history = useHistory();
  return (
    <div>
      <div
        className="genre-img"
        onClick={() => {
          history.push(`/post/${value.id}`);
        }}
      >
        <img
          src={`${process.env.REACT_APP_S3_URL_ImageUpload}/${value.image}`}
          alt={value.title}
        />
      </div>
    </div>
  );
};

export default GenreScene;
