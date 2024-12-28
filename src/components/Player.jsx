import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredEnteredPlayerName(event.target.value);
  }

  function handelClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"} </h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
