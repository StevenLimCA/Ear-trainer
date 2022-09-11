import Background from "./components/Background/Background";
import Piano from "./components/Piano/Piano";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react";
import { sampler } from "./Utilz/Tone";
import Notation from "./components/Notation/Notation";

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
    sampler.triggerRelease(note, 1000);
  };

  const keySwitchBoard = (e) => {
    switch (e) {
      case "z":
        return "C";
      case "a":
        return "Db";
      case "x":
        return "D";
      case "s":
        return "Eb";
      case "c":
        return "E";
      case "v":
        return "F";
      case "b":
        return "G";
      case "d":
        return "Gb";
      case "n":
        return "A";
      case "f":
        return "Ab";
      case "g":
        return "Bb";
      case "m":
        return "B";

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
    console.log(e.repeat);

    playKey(keySwitchBoard(e.key) + keyNoteOctave);
  };
  const DetectKeyUp = (e) => {
    console.log(e.repeat);
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
      <Footer />
    </div>
  );
}

export default App;
