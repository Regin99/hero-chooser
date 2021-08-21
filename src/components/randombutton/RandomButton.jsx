import React, { useState } from "react";
import { useSelector } from "react-redux";
export const RandomButton = () => {
  const [randomHero, setRandomHero] = useState("");
  const list = useSelector((state) => state);

  return (
    <div>
      <button
        onClick={() => {
          setRandomHero(list[Math.floor(Math.random() * list.length)]);
        }}
      >
        Random Button
      </button>
      <p>random hero: {randomHero.name}</p>
    </div>
  );
};
