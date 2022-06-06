import React, { useContext } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../data/Store";
import "./TopButton.scss";

const TopButton: React.FC = () => {
  const { isLogin } = useContext(MyContext);

  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  const handleUserButton = () => {
    if (isLogin === false) {
      history.push("/login");
    } else {
      history.push("/mygallery");
    }
  };

  const handlePostButton = () => {
    if (isLogin === false) {
      history.push("/login");
    } else {
      history.push("/makepost");
    }
  };

  const history = useHistory();

  return (
    <div>
      <div className="backbutton" onClick={() => history.goBack()}>
        <div />
      </div>
      <div className="topbutton" onClick={moveToTop}>
        <div />
      </div>
      <div className="homebutton" onClick={() => history.push("/main")}>
        <div />
      </div>
      <div className="addbutton" onClick={() => handlePostButton()}>
        <div />
      </div>
      <div className="userbutton" onClick={() => handleUserButton()}>
        <div />
      </div>
    </div>
  );
};

export default TopButton;
