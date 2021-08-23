import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

export const ListItem = (props) => {
  return (
    <div className="list-item">
      <div className="list-item-title">
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
