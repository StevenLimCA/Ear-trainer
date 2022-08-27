import React, { useState, useEffect } from "react";
import Octave from "../Octave/Octave";
import "./Piano.scss";
import { v4 as uuidv4 } from "uuid";

export default function Piano() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (windowDimenion.winWidth < 768) {
      setOctaves([3]);
    } else if (windowDimenion.winWidth < 1280) {
      setOctaves([3, 4]);
    } else {
      setOctaves([1, 2, 3, 4, 5, 6]);
    }
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  const [octaves, setOctaves] = useState([0, 1, 2, 3, 4, 5, 6]);

  return (
    <div className="piano">
      {octaves.map((octave) => (
        <Octave octaveNum={octave} key={uuidv4()} />
      ))}
    </div>
  );
}
