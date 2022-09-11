import React from "react";
import "./Octave.scss";

export default function Octave({ note, octaveNum, playKey, releaseKey }) {
  const playKeyHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    playKey(e.target.classList[1]);
  };

  const releaseKeyHandler = (e) => {
    releaseKey(e.target.classList[1]);
  };

  return (
    <>
      <div
        className={
          note === `C${octaveNum}`
            ? `octave__whiteNote C${octaveNum} ${note}--active`
            : `octave__whiteNote C${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        x
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            note === `Db${octaveNum}`
              ? `octave__blackNote Db${octaveNum} ${note}--active`
              : `octave__blackNote Db${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          note === `D${octaveNum}`
            ? `octave__whiteNote D${octaveNum} ${note}--active`
            : `octave__whiteNote D${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            note === `Eb${octaveNum}`
              ? `octave__blackNote Eb${octaveNum} ${note}--active`
              : `octave__blackNote Eb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          note === `E${octaveNum}`
            ? `octave__whiteNote E${octaveNum} ${note}--active`
            : `octave__whiteNote E${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
      <div
        className={
          note === `F${octaveNum}`
            ? `octave__whiteNote F${octaveNum} ${note}--active`
            : `octave__whiteNote F${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            note === `Gb${octaveNum}`
              ? `octave__blackNote Gb${octaveNum} ${note}--active`
              : `octave__blackNote Gb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          note === `G${octaveNum}`
            ? `octave__whiteNote G${octaveNum} ${note}--active`
            : `octave__whiteNote G${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            note === `Ab${octaveNum}`
              ? `octave__blackNote Ab${octaveNum} ${note}--active`
              : `octave__blackNote Ab${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          note === `A${octaveNum}`
            ? `octave__whiteNote A${octaveNum} ${note}--active`
            : `octave__whiteNote A${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      >
        <div
          className={
            note === `Bb${octaveNum}`
              ? `octave__blackNote Bb${octaveNum} ${note}--active`
              : `octave__blackNote Bb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
        ></div>
      </div>
      <div
        className={
          note === `B${octaveNum}`
            ? `octave__whiteNote B${octaveNum} ${note}--active`
            : `octave__whiteNote B${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
      ></div>
    </>
  );
}
