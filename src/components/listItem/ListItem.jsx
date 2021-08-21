import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

export const ListItem = (props) => {
  return (
    <div className="list-item">
      <div style={{ marginRight: "50px" }}>
        {useSelector((state) => state[props.index].name)}
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.onDeleteHero(props.index);
        }}
      >
        X
      </button>
    </div>
  );
};
