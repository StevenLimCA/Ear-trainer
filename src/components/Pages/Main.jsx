import React, { useState } from "react";
import Notation from "../Notation/Notation";
import Piano from "../Piano/Piano";
import "./Main.scss";

export default function Main() {
  const [note, setNote] = useState();
  return (
    <div className="main">
      <main className="main__header">
        <img src="./logo.svg" alt="ear-training" className="main__logo" /> Web
        Piano
      </main>
      <Notation note={note} />
      <Piano setNote={setNote} />
    </div>
  );
}
