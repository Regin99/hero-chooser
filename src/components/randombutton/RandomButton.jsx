import React, { useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
export const RandomButton = () => {
  const [randomHero, setRandomHero] = useState("");
  const list = useSelector((state) => state);

  return (
    <div className="random-container">
      <p>random hero: {randomHero.name}</p>
      <button
        onClick={() => {
          setRandomHero(list[Math.floor(Math.random() * list.length)]);
        }}
      >
        Random Button
      </button>
    </div>
  );
};
