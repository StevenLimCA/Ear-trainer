import React, { useState, useEffect } from "react";
import Octave from "../Octave/Octave";
import "./Piano.scss";

import { v4 as uuidv4 } from "uuid";

export default function Piano({ octaves, setOctaves, setNote, keyNote }) {
  // const [octaves, setOctaves] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(
    (props) => {
      if (windowDimension.winWidth < 768) {
        setOctaves([3, 4]);
      } else if (windowDimension.winWidth < 1280) {
        setOctaves([3, 4, 5]);
      } else {
        setOctaves([2, 3, 4, 5, 6, 7]);
      }

      // document.addEventListener("keydown", detectKeyDown, false);
      window.addEventListener("resize", detectSize);
      return () => {
        window.removeEventListener("resize", detectSize);
      };
    },
    [windowDimension]
  );

  return (
    <div className="piano">
      {octaves.map((octave) => (
        <Octave
          setNote={setNote}
          octaveNum={octave}
          key={uuidv4()}
          keyNote={keyNote}
        />
      ))}
    </div>
  );
}
