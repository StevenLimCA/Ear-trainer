import React from "react";
import Octave from "../Octave/Octave";
import "./Piano.scss";

export default function Piano() {
  const octaveArr = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="piano">
      {octaveArr.map((octave) => (
        <Octave octaveNum={octave} />
      ))}
    </div>
  );
}
