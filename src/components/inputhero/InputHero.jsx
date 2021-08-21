import React, { useState } from "react";
import "./styles.css";

export const InputHero = (props) => {
  const [input, setInput] = useState("");

  return (
    <form
      className="input-hero"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          props.onAddHero(input);
          setInput("");
        }}
      >
        Add
      </button>
    </form>
  );
};
