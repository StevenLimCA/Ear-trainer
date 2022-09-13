import React from "react";
import "./MiniOctaves.scss";
export default function MiniOctaves({
  note,
  octave,
  activeOctaves,
  setOctaves,
}) {
  const handleOctaveSelect = (e) => {
    let newOctave = [];
    for (let i = octave; i < octave + activeOctaves.length; i++) {
      newOctave.push(i);
      setOctaves(newOctave);
    }
  };

  return (
    <div
      className={`octave-mini ${octave} ${
        activeOctaves.includes(octave) ? `octave-mini--active` : `octave-mini`
      }
      `}
      onClick={handleOctaveSelect}
    >
      <div
        className={
          note === `C${octave}`
            ? `octave-mini__whiteNote C${octave} ${note}--active`
            : `octave-mini__whiteNote C${octave}`
        }
      >
        <div
          className={
            note === `Db${octave}`
              ? `octave-mini__blackNote Db${octave} ${note}--active`
              : `octave-mini__blackNote Db${octave}`
          }
        ></div>
      </div>
      <div
        className={
          note === `D${octave}`
            ? `octave-mini__whiteNote D${octave} ${note}--active`
            : `octave-mini__whiteNote D${octave}`
        }
      >
        <div
          className={
            note === `Eb${octave}`
              ? `octave-mini__blackNote Eb${octave} ${note}--active`
              : `octave-mini__blackNote Eb${octave}`
          }
        ></div>
      </div>
      <div
        className={
          note === `E${octave}`
            ? `octave-mini__whiteNote E${octave} ${note}--active`
            : `octave-mini__whiteNote E${octave}`
        }
      ></div>
      <div
        className={
          note === `F${octave}`
            ? `octave-mini__whiteNote F${octave} ${note}--active`
            : `octave-mini__whiteNote F${octave}`
        }
      >
        <div
          className={
            note === `Gb${octave}`
              ? `octave-mini__blackNote Gb${octave} ${note}--active`
              : `octave-mini__blackNote Gb${octave}`
          }
        ></div>
      </div>
      <div
        className={
          note === `G${octave}`
            ? `octave-mini__whiteNote G${octave} ${note}--active`
            : `octave-mini__whiteNote G${octave}`
        }
      >
        <div
          className={
            note === `Ab${octave}`
              ? `octave-mini__blackNote Ab${octave} ${note}--active`
              : `octave-mini__blackNote Ab${octave}`
          }
        ></div>
      </div>
      <div
        className={
          note === `A${octave}`
            ? `octave-mini__whiteNote A${octave} ${note}--active`
            : `octave-mini__whiteNote A${octave}`
        }
      >
        <div
          className={
            note === `Bb${octave}`
              ? `octave-mini__blackNote Bb${octave} ${note}--active`
              : `octave-mini__blackNote Bb${octave}`
          }
        ></div>
      </div>
      <div
        className={
          note === `B${octave}`
            ? `octave-mini__whiteNote B${octave} ${note}--active`
            : `octave-mini__whiteNote B${octave}`
        }
      ></div>
    </div>
  );
}
