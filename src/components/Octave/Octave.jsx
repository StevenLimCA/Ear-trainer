import React from "react";
import "./Octave.scss";
import * as Tone from "tone";
// import SampleLibrary from "../../global/Tonejs-Instruments";

export default function Octave({ octaveNum }) {
  // const piano = Tone.SampleLibrary.load({ instruments: "piano" });
  const C = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`C${octaveNum}`, "8n");
  };
  const Db = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`C#${octaveNum}`, "8n");
  };
  const D = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`D${octaveNum}`, "8n");
  };
  const E = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`E${octaveNum}`, "8n");
  };
  const Eb = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`D#${octaveNum}`, "8n");
  };
  const F = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`F${octaveNum}`, "8n");
  };
  const Gb = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`F#${octaveNum}`, "8n");
  };
  const G = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`G${octaveNum}`, "8n");
  };
  const Ab = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`G#${octaveNum}`, "8n");
  };
  const A = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`A${octaveNum}`, "8n");
  };
  const Bb = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`A#${octaveNum}`, "8n");
  };
  const B = (e) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(`B${octaveNum}`, "8n");
  };

  return (
    <>
      <div className={`octave__whiteNote C${octaveNum}`} onClick={C}>
        <div className={`octave__blackNote Db${octaveNum}`} onClick={Db}></div>
      </div>
      <div className={`octave__whiteNote D${octaveNum}`} onClick={D}>
        <div className={`octave__blackNote Eb${octaveNum}`} onClick={Eb}></div>
      </div>
      <div className={`octave__whiteNote E${octaveNum}`} onClick={E}></div>
      <div className={`octave__whiteNote F${octaveNum}`} onClick={F}>
        <div className={`octave__blackNote Gb${octaveNum}`} onClick={Gb}></div>
      </div>
      <div className={`octave__whiteNote G${octaveNum}`} onClick={G}>
        <div className={`octave__blackNote Ab${octaveNum}`} onClick={Ab}></div>
      </div>
      <div className={`octave__whiteNote A${octaveNum}`} onClick={A}>
        <div className={`octave__blackNote Ab${octaveNum}`} onClick={Bb}></div>
      </div>
      <div className={`octave__whiteNote B${octaveNum}`} onClick={B}></div>
    </>
  );
}
