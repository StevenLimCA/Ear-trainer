import React, { useState } from "react";
import "./Octave.scss";
import { sampler } from "../../Utilz/Tone";
// import Wad from "web-audio-daw";

export default function Octave(props) {
  const [noteActive, setNoteActive] = useState();

  // const synth = new Tone.Synth().toDestination();
  const playKey = (note) => {
    setNoteActive(note + props.octaveNum);
    props.setNote(note + props.octaveNum ?? "");

    sampler.triggerAttack(note + props.octaveNum ?? "");
    // synth.triggerAttack(`${note}${props.octaveNum}`, clickCount);
  };
  const releaseKey = (note) => {
    // console.log(note + props.octaveNum ?? "");
    // synth.triggerRelease("1");
    sampler.triggerRelease("0");
  };

  const playKeyHandler = (e) => {
    playKey(e.target.classList[1].slice(0, -1));
  };

  const releaseKeyHandler = (e) => {
    releaseKey(e.target.classList[1].slice(0, -1));
  };

  // screen entry
  /*  useEffect(() => {
    setNoteActive(() => noteActive);
  }, [noteActive]);*/

  return (
    <>
      <div
        className={
          noteActive?.slice(0, -1) === "C"
            ? `octave__whiteNote C${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote C${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        x
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={`octave__blackNote Db${props.octaveNum}`}
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive
            ? `octave__whiteNote D${props.octaveNum} octave__whiteNote--active`
            : `octave__whiteNote D${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={`octave__blackNote Eb${props.octaveNum}`}
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={`octave__whiteNote E${props.octaveNum}`}
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
      <div
        className={`octave__whiteNote F${props.octaveNum}`}
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={`octave__blackNote Gb${props.octaveNum}`}
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={`octave__whiteNote G${props.octaveNum}`}
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={`octave__blackNote Ab${props.octaveNum}`}
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={`octave__whiteNote A${props.octaveNum}`}
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={`octave__blackNote Bb${props.octaveNum}`}
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={`octave__whiteNote B${props.octaveNum}`}
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
    </>
  );
}
