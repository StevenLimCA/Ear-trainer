import React, { useState, useEffect } from "react";
import "./Octave.scss";
import { sampler } from "../../Utilz/Tone";
// import Wad from "web-audio-daw";

export default function Octave({
  note,
  setNote,
  octaveNum,
  noteActive,
  setNoteActive,
  playKey,
}) {
  const releaseKey = (note) => {
    setNoteActive(note + octaveNum);
    // synth.triggerRelease("1");
    sampler.triggerRelease("0");
  };

  const playKeyHandler = (e) => {
    e.stopPropagation();
    playKey(e.target.classList[1]);
  };

  const releaseKeyHandler = (e) => {
    releaseKey(e.target.classList[1].slice(0, -1));
  };

  useEffect(() => {
    setNoteActive(() => noteActive);
  }, [noteActive]);

  return (
    <>
      <div
        className={
          noteActive === `C${octaveNum}`
            ? `octave__whiteNote C${octaveNum} ${noteActive}--active`
            : `octave__whiteNote C${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        x
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive === `Db${octaveNum}`
              ? `octave__blackNote Db${octaveNum} ${noteActive}--active`
              : `octave__blackNote Db${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive === `D${octaveNum}`
            ? `octave__whiteNote D${octaveNum} ${noteActive}--active`
            : `octave__whiteNote D${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive === `Eb${octaveNum}`
              ? `octave__blackNote Eb${octaveNum} ${noteActive}--active`
              : `octave__blackNote Eb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive === `E${octaveNum}`
            ? `octave__whiteNote E${octaveNum} ${noteActive}--active`
            : `octave__whiteNote E${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
      <div
        className={
          noteActive === `F${octaveNum}`
            ? `octave__whiteNote F${octaveNum} ${noteActive}--active`
            : `octave__whiteNote F${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive === `Gb${octaveNum}`
              ? `octave__blackNote Gb${octaveNum} ${noteActive}--active`
              : `octave__blackNote Gb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive === `G${octaveNum}`
            ? `octave__whiteNote G${octaveNum} ${noteActive}--active`
            : `octave__whiteNote G${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive === `Ab${octaveNum}`
              ? `octave__blackNote Ab${octaveNum} ${noteActive}--active`
              : `octave__blackNote Ab${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive === `A${octaveNum}`
            ? `octave__whiteNote A${octaveNum} ${noteActive}--active`
            : `octave__whiteNote A${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            noteActive === `Bb${octaveNum}`
              ? `octave__blackNote Bb${octaveNum} ${noteActive}--active`
              : `octave__blackNote Bb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          noteActive === `B${octaveNum}`
            ? `octave__whiteNote B${octaveNum} ${noteActive}--active`
            : `octave__whiteNote B${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
    </>
  );
}
