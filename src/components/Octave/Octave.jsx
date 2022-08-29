import React from "react";
import "./Octave.scss";
import * as Tone from "tone";
// import SampleLibrary from "../../global/Tonejs-Instruments";

export default function Octave(props) {
  // const piano = Tone.SampleLibrary.load({ instruments: "piano" });
  const C = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`C${props.octaveNum}`, "8n");
    props.setNote("C" + props.octaveNum);
  };
  const Db = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`C#${props.octaveNum}`, "8n");
    props.setNote("C#" + props.octaveNum);
  };
  const D = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`D${props.octaveNum}`, "8n");
    props.setNote("D" + props.octaveNum);
  };
  const Eb = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`D#${props.octaveNum}`, "8n");
    props.setNote("D#" + props.octaveNum);
  };
  const E = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`E${props.octaveNum}`, "8n");
    props.setNote("E" + props.octaveNum);
  };

  const F = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`F${props.octaveNum}`, "8n");
    props.setNote("F" + props.octaveNum);
  };
  const Gb = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`F#${props.octaveNum}`, "8n");
    props.setNote("F#" + props.octaveNum);
  };
  const G = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`G${props.octaveNum}`, "8n");
    props.setNote("G" + props.octaveNum);
  };
  const Ab = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`G#${props.octaveNum}`, "8n");
    props.setNote("G#" + props.octaveNum);
  };
  const A = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`A${props.octaveNum}`, "8n");
    props.setNote("A" + props.octaveNum);
  };
  const Bb = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`A#${props.octaveNum}`, "8n");
    props.setNote("A#" + props.octaveNum);
  };
  const B = (e) => {
    e.stopPropagation();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`B${props.octaveNum}`, "8n");
    props.setNote("B" + props.octaveNum);
  };

  return (
    <>
      <div className={`octave__whiteNote C${props.octaveNum}`} onClick={C}>
        <div
          className={`octave__blackNote Db${props.octaveNum}`}
          onClick={Db}
        ></div>
      </div>
      <div className={`octave__whiteNote D${props.octaveNum}`} onClick={D}>
        <div
          className={`octave__blackNote Eb${props.octaveNum}`}
          onClick={Eb}
        ></div>
      </div>
      <div
        className={`octave__whiteNote E${props.octaveNum}`}
        onClick={E}
      ></div>
      <div className={`octave__whiteNote F${props.octaveNum}`} onClick={F}>
        <div
          className={`octave__blackNote Gb${props.octaveNum}`}
          onClick={Gb}
        ></div>
      </div>
      <div className={`octave__whiteNote G${props.octaveNum}`} onClick={G}>
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onClick={Ab}
        ></div>
      </div>
      <div className={`octave__whiteNote A${props.octaveNum}`} onClick={A}>
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onClick={Bb}
        ></div>
      </div>
      <div
        className={`octave__whiteNote B${props.octaveNum}`}
        onClick={B}
      ></div>
    </>
  );
}
