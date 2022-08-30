import React from "react";
import "./Octave.scss";
import * as Tone from "tone";
// import SampleLibrary from "../../global/Tonejs-Instruments";

export default function Octave(props) {
  // const piano = Tone.SampleLibrary.load({ instruments: "piano" });
  const C = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`C${props.octaveNum}`, "4n");
    props.setNote("C" + props.octaveNum);
  };
  const Db = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`C#${props.octaveNum}`, "4n");
    props.setNote("C#" + props.octaveNum);
  };
  const D = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`D${props.octaveNum}`, "4n");
    props.setNote("D" + props.octaveNum);
  };
  const Eb = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`D#${props.octaveNum}`, "4n");
    props.setNote("D#" + props.octaveNum);
  };
  const E = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`E${props.octaveNum}`, "4n");
    props.setNote("E" + props.octaveNum);
  };

  const F = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`F${props.octaveNum}`, "4n");
    props.setNote("F" + props.octaveNum);
  };
  const Gb = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`F#${props.octaveNum}`, "4n");
    props.setNote("F#" + props.octaveNum);
  };
  const G = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`G${props.octaveNum}`, "4n");
    props.setNote("G" + props.octaveNum);
  };
  const Ab = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`G#${props.octaveNum}`, "4n");
    props.setNote("G#" + props.octaveNum);
  };
  const A = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`A${props.octaveNum}`, "4n");
    props.setNote("A" + props.octaveNum);
  };
  const Bb = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`A#${props.octaveNum}`, "4n");
    props.setNote("A#" + props.octaveNum);
  };
  const B = async (e) => {
    e.stopPropagation();
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`B${props.octaveNum}`, "4n");
    props.setNote("B" + props.octaveNum);
  };

  return (
    <>
      <div className={`octave__whiteNote C${props.octaveNum}`} onMouseDown={C}>
        <div
          className={`octave__blackNote Db${props.octaveNum}`}
          onMouseDown={Db}
        ></div>
      </div>
      <div className={`octave__whiteNote D${props.octaveNum}`} onMouseDown={D}>
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
