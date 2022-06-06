/*eslint-disable*/
import "./App-mobile.css";
import "./App-pc.css";
import "./theme/global.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Userinfo from "./pages/Userinfo";
import Main from "./pages/Main";
import Search from "./pages/Search.js";
import Makegallery from "./pages/Makegallery.js";
import Makepost from "./pages/Makepost.js";
import Post from "./pages/Post";
import Gallery from "./pages/Gallery";
import Mygallery from "./pages/Mygallery.js";
import Landing from "./pages/Landing";
import AllScenes from "./pages/AllScenes";
import AllGallery from "./pages/AllGallery";

require("dotenv").config();

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/userinfo">
          <Userinfo />
        </Route>
        <Route path="/search/:searchWord">
          <Search />
        </Route>
        <Route path="/makegallery">
          <Makegallery />
        </Route>
        <Route path="/makepost">
          <Makepost />
        </Route>
        <Route path="/post/:postId">
          <Post />
        </Route>
        <Route path="/gallery/:galleryId">
          <Gallery />
        </Route>
        <Route path="/mygallery">
          <Mygallery />
        </Route>
        <Route path="/allscenes">
          <AllScenes />
        </Route>
        <Route path="/allgallery">
          <AllGallery />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
