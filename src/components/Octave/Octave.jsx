import React, { useEffect } from "react";
import "./Octave.scss";
import * as Tone from "tone";

// import SampleLibrary from "../../global/Tonejs-Instruments";

export default function Octave(props) {
  const sampler = new Tone.Sampler({
    urls: {
      A0: "A0.mp3",
      A1: "A1.mp3",
      A2: "A2.mp3",
      A3: "A3.mp3",
      A4: "A4.mp3",
      A5: "A5.mp3",
      A6: "A6.mp3",
      A7: "A7.mp3",
      "A#0": "Bb0.mp3",
      "A#1": "Bb1.mp3",
      "A#2": "Bb2.mp3",
      "A#3": "Bb3.mp3",
      "A#4": "Bb4.mp3",
      "A#5": "Bb5.mp3",
      "A#6": "Bb6.mp3",
      "A#7": "Bb7.mp3",
      B0: "B0.mp3",
      B1: "B1.mp3",
      B2: "B2.mp3",
      B3: "B3.mp3",
      B4: "B4.mp3",
      B5: "B5.mp3",
      B6: "B6.mp3",
      B7: "B7.mp3",
      C0: "C0.mp3",
      C1: "C1.mp3",
      C2: "C2.mp3",
      C3: "C3.mp3",
      C4: "C4.mp3",
      C5: "C5.mp3",
      C6: "C6.mp3",
      C7: "C7.mp3",
      "C#0": "Db0.mp3",
      "C#1": "Db1.mp3",
      "C#2": "Db2.mp3",
      "C#3": "Db3.mp3",
      "C#4": "Db4.mp3",
      "C#5": "Db5.mp3",
      "C#6": "Db6.mp3",
      "C#7": "Db7.mp3",
      D0: "D0.mp3",
      D1: "D1.mp3",
      D2: "D2.mp3",
      D3: "D3.mp3",
      D4: "D4.mp3",
      D5: "D5.mp3",
      D6: "D6.mp3",
      D7: "D7.mp3",
      "D#0": "Eb0.mp3",
      "D#1": "Eb1.mp3",
      "D#2": "Eb2.mp3",
      "D#3": "Eb3.mp3",
      "D#4": "Eb4.mp3",
      "D#5": "Eb5.mp3",
      "D#6": "Eb6.mp3",
      "D#7": "Eb7.mp3",
      E0: "E0.mp3",
      E1: "E1.mp3",
      E2: "E2.mp3",
      E3: "E3.mp3",
      E4: "E4.mp3",
      E5: "E5.mp3",
      E6: "E6.mp3",
      E7: "E7.mp3",
      F0: "F0.mp3",
      F1: "F1.mp3",
      F2: "F2.mp3",
      F3: "F3.mp3",
      F4: "F4.mp3",
      F5: "F5.mp3",
      F6: "F6.mp3",
      F7: "F7.mp3",
      "F#0": "Gb0.mp3",
      "F#1": "Gb1.mp3",
      "F#2": "Gb2.mp3",
      "F#3": "Gb3.mp3",
      "F#4": "Gb4.mp3",
      "F#5": "Gb5.mp3",
      "F#6": "Gb6.mp3",
      "F#7": "Gb7.mp3",
      G0: "G0.mp3",
      G1: "G1.mp3",
      G2: "G2.mp3",
      G3: "G3.mp3",
      G4: "G4.mp3",
      G5: "G5.mp3",
      G6: "G6.mp3",
      G7: "G7.mp3",
      "G#0": "Ab0.mp3",
      "G#1": "Ab1.mp3",
      "G#2": "Ab2.mp3",
      "G#3": "Ab3.mp3",
      "G#4": "Ab4.mp3",
      "G#5": "Ab5.mp3",
      "G#6": "Ab6.mp3",
      "G#7": "Ab7.mp3",
    },
    baseUrl: "audio/",
  }).toDestination();
  // Keyboard entry
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, false);
    document.addEventListener("keyup", detectKeyUp, false);
    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
  }, []);
  const detectKeyDown = (e) => {
    if (e.key === "z") {
      playKey("C");
    } else if (e.key === "s") {
      playKey("C#");
    } else if (e.key === "x") {
      playKey("D");
    } else if (e.key === "d") {
      playKey("D#");
    } else if (e.key === "c") {
      playKey("E");
    } else if (e.key === "v") {
      playKey("F");
    } else if (e.key === "f") {
      playKey("F#");
    } else if (e.key === "b") {
      playKey("G");
    } else if (e.key === "g") {
      playKey("G#");
    } else if (e.key === "b") {
      playKey("A");
    } else if (e.key === "n") {
      playKey("B");
    }
  };
  const detectKeyUp = (e) => {
    e.stopPropagation();
  };
  const playKey = async (note) => {
    sampler.triggerAttack(`${note}${props.octaveNum}`);
    // await Tone.start();
    // const synth = new Tone.Synth().toDestination();
    // await synth.triggerAttackRelease(`${note}${props.octaveNum}`, "4n");
  };
  // screen entry
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
