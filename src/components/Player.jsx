import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredEnteredPlayerName] = useState("");

  function handelClick() {
    setEnteredEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
