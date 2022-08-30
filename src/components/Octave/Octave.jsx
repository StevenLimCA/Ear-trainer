import React, { useState } from "react";
import "./Octave.scss";
import * as Tone from "tone";
// import SampleLibrary from "../../global/Tonejs-Instruments";

export default function Octave(props) {
  const [isActive, setIsActive] = useState();

  // const piano = Tone.SampleLibrary.load({ instruments: "piano" });
  const playKey = async (note) => {
    setIsActive(`${note}${props.octaveNum}`);
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    await synth.triggerAttackRelease(`${note}${props.octaveNum}`, "4n");
    props.setNote(`${note}` + props.octaveNum);
  };

  const C = async (e) => {
    e.stopPropagation();
    playKey("C");
  };
  const Db = async (e) => {
    e.stopPropagation();
    playKey("C#");
  };
  const D = async (e) => {
    e.stopPropagation();
    playKey("D");
  };
  const Eb = async (e) => {
    e.stopPropagation();
    playKey("D#");
  };
  const E = async (e) => {
    e.stopPropagation();
    playKey("E");
  };
  const F = async (e) => {
    e.stopPropagation();
    playKey("F");
  };
  const Gb = async (e) => {
    e.stopPropagation();
    playKey("F#");
  };
  const G = async (e) => {
    e.stopPropagation();
    playKey("G");
  };
  const Ab = async (e) => {
    e.stopPropagation();
    playKey("G#");
  };
  const A = async (e) => {
    e.stopPropagation();
    playKey("A");
  };
  const Bb = async (e) => {
    e.stopPropagation();
    playKey("A#");
  };
  const B = async (e) => {
    e.stopPropagation();
    playKey("B");
  };

  return (
    <>
      <div className={`octave__whiteNote C${props.octaveNum}`} onMouseDown={C}>
        <div
          className={`octave__blackNote Db${props.octaveNum}`}
          onMouseDown={Db}
        ></div>
      </div>
      <div className={` octave__whiteNote D${props.octaveNum}`} onMouseDown={D}>
        <div
          className={`octave__blackNote Eb${props.octaveNum}`}
          onMouseDown={Eb}
        ></div>
      </div>
      <div
        className={`octave__whiteNote E${props.octaveNum}`}
        onMouseDown={E}
      ></div>
      <div className={`octave__whiteNote F${props.octaveNum}`} onMouseDown={F}>
        <div
          className={`octave__blackNote Gb${props.octaveNum}`}
          onMouseDown={Gb}
        ></div>
      </div>
      <div className={`octave__whiteNote G${props.octaveNum}`} onMouseDown={G}>
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onMouseDown={Ab}
        ></div>
      </div>
      <div className={`octave__whiteNote A${props.octaveNum}`} onMouseDown={A}>
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onMouseDown={Bb}
        ></div>
      </div>
      <div
        className={`octave__whiteNote B${props.octaveNum}`}
        onMouseDown={B}
      ></div>
    </>
  );
}
