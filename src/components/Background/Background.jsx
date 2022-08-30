import React from "react";
import "./Background.scss";
import background from "../../background.svg";
import Main from "../Pages/Main";
export default function Background() {
  return (
    <div className="background" unselectable="on">
      <img src={background} className="piano-note" alt="logo" />
      <Main />
    </div>
  );
}
