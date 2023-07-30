import React from "react";
import "./Menu.scss";
export default function Menu({ openMenu, setOpenMenu }) {
  let arr = [
    { link: "#intro", name: "Intro" },
    { link: "#portfolio", name: "Portfolio" },
    { link: "#works", name: "Works" },
    { link: "#contact", name: "Contact" },
  ];
  return (
    <div className={"menu " + (openMenu && "active")} onClick={()=>setOpenMenu(!openMenu)}>
      <ul>
        {arr.map((data, key) => {
          // let [link, name] = data;
          return (
            <li key={key}>
              <a href={data.link} onClick={() => setOpenMenu(!openMenu)}>
                {data.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
