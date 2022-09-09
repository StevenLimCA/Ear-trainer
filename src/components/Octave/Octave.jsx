import React, { useState, useEffect } from "react";
import "./Octave.scss";
import { sampler } from "../../Utilz/Tone";
// import Wad from "web-audio-daw";

export default function Octave(props) {
  const [noteActive, setNoteActive] = useState("");

  // const synth = new Tone.Synth().toDestination();
  const playKey = (note) => {
    props.setNote(note + props.octaveNum);
    sampler.triggerAttack(note + props.octaveNum ?? "");
    // synth.triggerAttack(`${note}${props.octaveNum}`, clickCount);
  };
  const releaseKey = (note) => {
    setNoteActive(note + props.octaveNum);
    // synth.triggerRelease("1");
    sampler.triggerRelease("0.5");
  };

  const playKeyHandler = (e) => {
    e.stopPropagation();
    playKey(e.target.classList[1].slice(0, -1));
  };

  const releaseKeyHandler = (e) => {
    releaseKey(e.target.classList[1].slice(0, -1));
  };

  // screen entry
  useEffect(() => {
    setNoteActive(() => noteActive);
  }, [noteActive]);

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
          className={
            noteActive?.slice(0, -1) === "Db"
              ? `octave__blackNote Db${props.octaveNum} ${noteActive}--active`
              : `octave__blackNote Db${props.octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive?.slice(0, -1) === "D"
            ? `octave__whiteNote D${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote D${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive?.slice(0, -1) === "Eb"
              ? `octave__blackNote Eb${props.octaveNum} ${noteActive}--active`
              : `octave__blackNote Eb${props.octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive?.slice(0, -1) === "E"
            ? `octave__whiteNote E${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote E${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
      <div
        className={
          noteActive?.slice(0, -1) === "F"
            ? `octave__whiteNote F${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote F${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive?.slice(0, -1) === "Gb"
              ? `octave__blackNote Gb${props.octaveNum} ${noteActive}--active`
              : `octave__blackNote Gb${props.octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive?.slice(0, -1) === "G"
            ? `octave__whiteNote G${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote G${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive?.slice(0, -1) === "Ab"
              ? `octave__blackNote Ab${props.octaveNum} ${noteActive}--active`
              : `octave__blackNote Ab${props.octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive?.slice(0, -1) === "A"
            ? `octave__whiteNote A${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote A${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive?.slice(0, -1) === "Bb"
              ? `octave__blackNote Bb${props.octaveNum} ${noteActive}--active`
              : `octave__blackNote Bb${props.octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive?.slice(0, -1) === "B"
            ? `octave__whiteNote B${props.octaveNum} ${noteActive}--active`
            : `octave__whiteNote B${props.octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
    </>
  );
}
