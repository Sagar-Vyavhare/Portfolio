import React, { useState } from "react";
import Data from "./Data";

export default function DataProvider(props) {
  const [projects, setProjects] = useState();
  return (
    <Data.Provider value={{ projects, setProjects }}>
      {props.children}
    </Data.Provider>
  );
}
