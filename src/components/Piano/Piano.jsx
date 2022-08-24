import React from "react";
import Octave from "../Octave/Octave";
import "./Piano.scss";

export default function Piano() {
  return (
    <div className="piano">
      <Octave />
      <Octave />
    </div>
  );
}
