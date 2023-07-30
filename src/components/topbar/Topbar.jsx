import React from "react";
import "./Topbar.scss";
import { Person,Mail } from '@material-ui/icons';
export default function Topbar({ openMenu, setOpenMenu }) {
  return (
    <div className={"top_bar " + (openMenu && "active")}>
      <div className="wrapper ">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio
          </a>
          <div className="items_container">
            <a href="tel:+918766581455" className="item">
              <Person className="icon" />
              <span>+91 8766851455</span>
            </a>
            <a className="item" href="mailto:sagarvyavhare@gmail.com">
              <Mail className="icon" />
              <span>sagarvyavhare@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
