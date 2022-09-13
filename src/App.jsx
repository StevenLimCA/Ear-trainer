import Background from "./components/Background/Background";
import Piano from "./components/Piano/Piano";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react";
import { sampler } from "./Utilz/Tone";
import Notation from "./components/Notation/Notation";
import Controls from "./components/Controls/Controls";

function App() {
  const [octaves, setNumOfOctaves] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [keyNoteOctave, setKeyNoteOctave] = useState(3);
  const [note, setNote] = useState("");
  // const [second, setTime] = useState(0);

  const playKey = (note) => {
    setNote(note);
    sampler.triggerAttack(note);
  };
  const releaseKey = (note) => {
    // synth.triggerRelease("1");
    sampler.triggerRelease(note, 500);
  };

  const keySwitchBoard = (e) => {
    switch (e) {
      case "z":
        return `A${keyNoteOctave - 1}`;
      case "a":
        return "Db" + keyNoteOctave;
      case "x":
        return `B${keyNoteOctave - 1}`;
      case "s":
        return "Eb" + keyNoteOctave;
      case "c":
        return "C" + keyNoteOctave;
      case "v":
        return "D" + keyNoteOctave;
      case "b":
        return "E" + keyNoteOctave;
      case "d":
        return "Gb" + keyNoteOctave;
      case "n":
        return "F" + keyNoteOctave;
      case "f":
        return "Ab" + keyNoteOctave;
      case "g":
        return "Bb" + keyNoteOctave;
      case "m":
        return "G" + keyNoteOctave;
      case ",":
        return `A${keyNoteOctave}`;
      case ".":
        return `B${keyNoteOctave}`;
      case "/":
        return `C${keyNoteOctave + 1}`;
      case "1":
        setKeyNoteOctave(1);
        return "C";
      case "2":
        setKeyNoteOctave(2);
        return "C";
      case "3":
        setKeyNoteOctave(3);
        return "C";
      case "4":
        setKeyNoteOctave(4);
        return "C";
      case "5":
        setKeyNoteOctave(5);
        return "C";
      case "6":
        setKeyNoteOctave(6);
        return "C";
      case "7":
        setKeyNoteOctave(7);
        return "C";

      case "8":
        setKeyNoteOctave(8);
        return "C";
      default:
        return "";
    }
  };

  const DetectKeyDown = (e) => {
    if (e.repeat === true) {
      return;
    }
    // console.log(e.repeat);

    playKey(keySwitchBoard(e.key));
  };
  const DetectKeyUp = (e) => {
    // console.log(e.repeat);
    releaseKey(keySwitchBoard(e.key) + keyNoteOctave);
  };

  return (
    <div
      className="App"
      tabIndex="0"
      onKeyDown={DetectKeyDown}
      onKeyUp={DetectKeyUp}
    >
      <Background />
      <Notation note={note} />
      <Piano
        note={note}
        octaves={octaves}
        setOctaves={setNumOfOctaves}
        playKey={playKey}
        releaseKey={releaseKey}
        setNote={setNote}
      />
      <Controls note={note} setOctaves={setNumOfOctaves} octaves={octaves} />
      <Footer />
    </div>
  );
}

export default App;
