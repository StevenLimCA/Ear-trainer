import React from "react";
import Piano from "../Piano/Piano";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <main className="main__header">
        <img src="./logo.svg" alt="ear-training" className="main__logo" />
      </main>
      <Piano />
    </div>
  );
}
