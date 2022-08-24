import React from "react";
import "./Octave.scss";

export default function Octave() {
  return (
    <>
      <div className="octave__whiteNote">
        <div className="octave__blackNote"></div>
      </div>
      <div className="octave__whiteNote">
        <div className="octave__blackNote"></div>
      </div>
      <div className="octave__whiteNote"></div>
      <div className="octave__whiteNote">
        <div className="octave__blackNote"></div>
      </div>
      <div className="octave__whiteNote">
        <div className="octave__blackNote"></div>
      </div>
      <div className="octave__whiteNote">
        <div className="octave__blackNote"></div>
      </div>
      <div className="octave__whiteNote"></div>
    </>
  );
}
