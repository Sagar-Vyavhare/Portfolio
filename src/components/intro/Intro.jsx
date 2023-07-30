import React from "react";
import "./Intro.scss";
import {ArrowBackIosRounded} from '@material-ui/icons'
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image_container">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sagar Vyavhare</h1>
          <h3>Developer</h3>
        </div>
        <a href="#portfolio">
          <ArrowBackIosRounded className="arrow_icon" />
        </a>
      </div>
    </div>
  
  );
}
