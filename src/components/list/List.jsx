import React from "react";
import { ListItem } from "../listItem/ListItem";
import { InputHero } from "../inputhero/InputHero";
import { RandomButton } from "../randombutton/RandomButton";
import { useSelector } from "react-redux";
import { store } from "../../store/store";
import "./styles.css";

export const List = () => {
  const list = useSelector((state) => state);

  store.subscribe(() => {
    localStorage.setItem("list", JSON.stringify(store.getState()));
  });

  return (
    <div className="app">
      <RandomButton />
      <ul className="list">
        {list.map((item, index) => {
          return (
            <ListItem
              key={index}
              onDeleteHero={(index) => {
                const deleteHeroAction = {
                  type: "DELETE_HERO",
                  payload: index,
                };
                store.dispatch(deleteHeroAction);
              }}
              index={index}
            />
          );
        })}
      </ul>
      <InputHero
        onAddHero={(hero) => {
          const addHeroAction = {
            type: "ADD_HERO",
            payload: hero,
          };
          store.dispatch(addHeroAction);
        }}
      />
    </div>
  );
};
