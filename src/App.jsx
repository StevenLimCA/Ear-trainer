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
  const [keyNote, setKeyNote] = useState();
  const [note, setNote] = useState("");
  const playKey = (note) => {
    // sampler.triggerAttack(note);
    setKeyNote(note + octaves);
    sampler.triggerAttack(note);
    // synth.triggerAttack(`${note}${props.octaveNum}`, clickCount);
  };
  // const synth = new Tone.Synth().toDestination();

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
      case "1":
        return setKeyNoteOctave(1);
      case "2":
        return setKeyNoteOctave(2);
      case "3":
        return setKeyNoteOctave(3);
      case "4":
        return setKeyNoteOctave(4);
      case "5":
        return setKeyNoteOctave(5);
      case "6":
        return setKeyNoteOctave(6);
      case "7":
        return setKeyNoteOctave(7);
      case "8":
        return setKeyNoteOctave(8);
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
      <Notation note={note} />
      <Piano
        octaves={octaves}
        setOctaves={setNumOfOctaves}
        keyNote={keyNote}
        useKey={setKeyNote}
        playKey={playKey}
        setNote={setNote}
      />
      <Footer />
    </div>
  );
}

export default App;
