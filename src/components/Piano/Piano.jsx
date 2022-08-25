import React from "react";
import Octave from "../Octave/Octave";
import "./Piano.scss";

export default function Piano() {
  const octaveArr = [0, 1, 2];

  return (
    <div className="piano">
      {octaveArr.map((octave) => (
        <Octave octaveNum={octave} />
      ))}
    </div>
  );
}
