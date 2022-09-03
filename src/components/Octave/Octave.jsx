import React, { useEffect, useState, useRef } from "react";
import "./Octave.scss";
import { Tone, sampler } from "../../Utilz/Tone";
import Wad from "web-audio-daw";

export default function Octave(props) {
  // Keyboard entry
  useEffect(() => {
    document.body.addEventListener("keydown", detectKeyDown, false);
    // document.addEventListener("keyup", detectKeyUp, false);
    return () => {
      document.body.removeEventListener("keydown", detectKeyDown);
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
  // const detectKeyUp = (note) => {
  // sampler.triggerRelease(`${note}${props.octaveNum}`);
  // e.stopPropagation();
  // };
  const clickIntervalRef = useRef(null);
  const [clickCount, setClickCount] = useState(1);
  const synth = new Tone.Synth().toDestination();
  const playKey = (note) => {
    // let sine = new Wad({ source: "sine" });
    // let square = new Wad({ source: "square" });
    // let triangle = new Wad({ source: "triangle" });
    // let tripleOscillator = new Wad.poly();
    // tripleOscillator.add(sine).add(square).add(triangle);
    // tripleOscillator.play({ pitch: `${note + props.octaveNum}` });

    sampler.triggerAttack(note + props.octaveNum ?? "");
    // synth.triggerAttack(`${note}${props.octaveNum}`, clickCount);
  };
  const releaseKey = (note) => {
    console.log(note + props.octaveNum ?? "");
    // synth.triggerRelease("1");
    sampler.triggerRelease("1");
  };
  // screen entry
  const C = async (e) => {
    console.log(e);
    e.preventDefault();
    playKey("C");
  };
  const Cr = async (e) => {
    releaseKey("C");
  };
  const Db = async (e) => {
    e.stopPropagation();
    playKey("C#");
  };
  const Dbr = async (e) => {
    e.stopPropagation();
    releaseKey("C#");
  };
  const D = async (e) => {
    playKey("D");
  };
  const Dr = async (e) => {
    releaseKey("D");
  };
  const Eb = async (e) => {
    e.stopPropagation();
    playKey("D#");
  };
  const Ebr = async (e) => {
    releaseKey("D#");
  };
  const E = async (e) => {
    playKey("E");
  };
  const Er = async (e) => {
    releaseKey("E");
  };
  const F = async (e) => {
    playKey("F");
  };
  const Fr = async (e) => {
    releaseKey("F");
  };
  const Gb = async (e) => {
    e.stopPropagation();
    playKey("F#");
  };

  const Gbr = async (e) => {
    releaseKey("F#");
  };
  const G = async (e) => {
    playKey("G");
  };

  const Gr = async (e) => {
    releaseKey("G");
  };
  const Ab = async (e) => {
    e.stopPropagation();
    playKey("G#");
  };
  const Abr = async (e) => {
    releaseKey("G#");
  };
  const A = async (e) => {
    playKey("A");
  };
  const Ar = async (e) => {
    releaseKey("A");
  };
  const Bb = async (e) => {
    e.stopPropagation();
    playKey("A#");
  };
  const Bbr = async (e) => {
    releaseKey("A#");
  };
  const B = async (e) => {
    playKey("B");
  };
  const Br = async (e) => {
    releaseKey("B");
  };

  return (
    <>
      <div
        className={`octave__whiteNote C${props.octaveNum}`}
        onMouseDown={C}
        onMouseUp={Cr}
        onKeyDown={C}
      >
        <div
          className={`octave__blackNote Db${props.octaveNum}`}
          onMouseDown={Db}
          onMouseUp={Dbr}
        ></div>
      </div>
      <div
        className={` octave__whiteNote D${props.octaveNum}`}
        onMouseDown={D}
        onMouseUp={Dr}
      >
        <div
          className={`octave__blackNote Eb${props.octaveNum}`}
          onMouseDown={Eb}
          onMouseUp={Ebr}
        ></div>
      </div>
      <div
        className={`octave__whiteNote E${props.octaveNum}`}
        onMouseDown={E}
        onMouseUp={Er}
      ></div>
      <div
        className={`octave__whiteNote F${props.octaveNum}`}
        onMouseDown={F}
        onMouseUp={Fr}
      >
        <div
          className={`octave__blackNote Gb${props.octaveNum}`}
          onMouseDown={Gb}
          onMouseUp={Gbr}
        ></div>
      </div>
      <div
        className={`octave__whiteNote G${props.octaveNum}`}
        onMouseDown={G}
        onMouseUp={Gr}
      >
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onMouseDown={Ab}
          onMouseUp={Abr}
        ></div>
      </div>
      <div
        className={`octave__whiteNote A${props.octaveNum}`}
        onMouseDown={A}
        onMouseUp={Ar}
      >
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onMouseDown={Bb}
          onMouseUp={Bbr}
        ></div>
      </div>
      <div
        className={`octave__whiteNote B${props.octaveNum}`}
        onMouseDown={B}
        onMouseUp={Br}
      ></div>
    </>
  );
}
