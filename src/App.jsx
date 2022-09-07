import Background from "./components/Background/Background";
import Piano from "./components/Piano/Piano";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { sampler } from "./Utilz/Tone";
function App() {
  const playKey = (note) => {
    sampler.triggerAttack(note);
    // synth.triggerAttack(`${note}${props.octaveNum}`, clickCount);
  };
  // const synth = new Tone.Synth().toDestination();

  const [keyNote, setKeyNote] = useState();
  const [keyNoteOctave, setKeyNoteOctave] = useState(3);
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
        return "Ab";
      case "f":
        return "A";
      case "g":
        return "Bb";
      case "m":
        return "B";
      default:
        return "";
    }
  };

  const DetectKeyDown = (e) => {
    setKeyNote(keySwitchBoard(e.key));
    //console.log(keyNote);
    playKey(keySwitchBoard(e.key) + keyNoteOctave);
  };

  // useEffect(() => {
  //   if (
  //     keyNote !== undefined &&
  //     keyNote !== "" &&
  //     keyNoteOctave !== undefined
  //   ) {
  //     playKey(keyNote + keyNoteOctave);
  //   }
  // }, [keyNote, keyNoteOctave]);

  return (
    <div className="App" tabIndex="0" onKeyPress={DetectKeyDown}>
      <Background />
      <Piano keyNote={keyNote} useKey={setKeyNote} />
      <Footer />
    </div>
  );
}

export default App;
