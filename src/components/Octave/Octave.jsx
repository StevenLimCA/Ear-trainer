import React from "react";
import "./Octave.scss";

export default function Octave({ note, octaveNum, playKey, releaseKey }) {
  const playKeyHandler = (e) => {
    playKey(e.target.classList[1]);

    console.log(e.type + ": ");
    // for (let i = 0; i < e.touches.length; i++) console.log(e.touches.item(i));
  };

  const releaseKeyHandler = (e) => {
    e.preventDefault();
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
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        {" "}
        C{octaveNum}
        <div
          className={
            note === `Db${octaveNum}`
              ? `octave__blackNote Db${octaveNum} ${note}--active`
              : `octave__blackNote Db${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
          // onTouchStart={playKeyHandler}
          // onTouchEnd={releaseKeyHandler}
        >
          Db{octaveNum}
        </div>
      </div>
      <div
        className={
          note === `D${octaveNum}`
            ? `octave__whiteNote D${octaveNum} ${note}--active`
            : `octave__whiteNote D${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        {" "}
        D{octaveNum}
        <div
          className={
            note === `Eb${octaveNum}`
              ? `octave__blackNote Eb${octaveNum} ${note}--active`
              : `octave__blackNote Eb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
          // onTouchStart={playKeyHandler}
          // onTouchEnd={releaseKeyHandler}
        >
          Eb{octaveNum}
        </div>
      </div>
      <div
        className={
          note === `E${octaveNum}`
            ? `octave__whiteNote E${octaveNum} ${note}--active`
            : `octave__whiteNote E${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        E{octaveNum}
      </div>
      <div
        className={
          note === `F${octaveNum}`
            ? `octave__whiteNote F${octaveNum} ${note}--active`
            : `octave__whiteNote F${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        {" "}
        F{octaveNum}
        <div
          className={
            note === `Gb${octaveNum}`
              ? `octave__blackNote Gb${octaveNum} ${note}--active`
              : `octave__blackNote Gb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
          // onTouchStart={playKeyHandler}
          // onTouchEnd={releaseKeyHandler}
        >
          Gb{octaveNum}
        </div>
      </div>
      <div
        className={
          note === `G${octaveNum}`
            ? `octave__whiteNote G${octaveNum} ${note}--active`
            : `octave__whiteNote G${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        G{octaveNum}
        <div
          className={
            note === `Ab${octaveNum}`
              ? `octave__blackNote Ab${octaveNum} ${note}--active`
              : `octave__blackNote Ab${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
          // onTouchStart={playKeyHandler}
          // onTouchEnd={releaseKeyHandler}
        >
          Ab{octaveNum}
        </div>
      </div>
      <div
        className={
          note === `A${octaveNum}`
            ? `octave__whiteNote A${octaveNum} ${note}--active`
            : `octave__whiteNote A${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        {" "}
        A{octaveNum}
        <div
          className={
            note === `Bb${octaveNum}`
              ? `octave__blackNote Bb${octaveNum} ${note}--active`
              : `octave__blackNote Bb${octaveNum}`
          }
          onMouseDown={playKeyHandler}
          onMouseUp={releaseKeyHandler}
          // onTouchStart={playKeyHandler}
          // onTouchEnd={releaseKeyHandler}
        >
          {" "}
          Bb{octaveNum}
        </div>
      </div>
      <div
        className={
          note === `B${octaveNum}`
            ? `octave__whiteNote B${octaveNum} ${note}--active`
            : `octave__whiteNote B${octaveNum}`
        }
        onMouseDown={playKeyHandler}
        onMouseUp={releaseKeyHandler}
        // onTouchStart={playKeyHandler}
        // onTouchEnd={releaseKeyHandler}
      >
        B{octaveNum}
      </div>
    </>
  );
}
