import React from "react";
import MiniOctaves from "../MiniOctaves/MiniOctaves";
import { v4 as uuidv4 } from "uuid";
import "./Controls.scss";
export default function Controls({ note, octaves, setOctaves }) {
  const totalOctaveArr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="controls">
      <div className="controls__octaves">
        {totalOctaveArr.map((octave) => (
          <MiniOctaves
            key={uuidv4()}
            note={note}
            setOctaves={setOctaves}
            activeOctaves={octaves}
            octave={octave}
          />
        ))}
      </div>
    </div>
  );
}
