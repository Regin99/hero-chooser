import React from "react";
import { ListItem } from "../listItem/ListItem";
import { InputHero } from "../inputhero/InputHero";
import { RandomButton } from "../randombutton/RandomButton";
import { useSelector } from "react-redux";
import { store } from "../../store/store";

// const readList = () => {
//   return localStorage.getItem("list")
//     ? JSON.parse(localStorage.getItem("list"))
//     : [
//         {
//           id: 1,
//           name: "Pudge",
//         },
//         {
//           id: 2,
//           name: "Riki",
//         },
//         {
//           id: 3,
//           name: "Huskar",
//         },
//       ];
// };

export const List = () => {
  const list = useSelector((state) => state);

  const saveList = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  const addHero = (hero) => {
    const addHeroAction = {
      type: "ADD_HERO",
      payload: hero,
    };
    store.dispatch(addHeroAction);
  };

  // setList([...list, { id: list.length + 1, name: hero }]);

  const deleteHero = (index) => {
    const deleteHeroAction = {
      type: "DELETE_HERO",
      payload: index,
    };
    store.dispatch(deleteHeroAction);
  };

  saveList();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ul className="list">
        {list.map((item, index) => {
          return (
            <ListItem key={index} onDeleteHero={deleteHero} index={index} />
          );
        })}
      </ul>
      <InputHero onAddHero={addHero} />
      <RandomButton />
    </div>
  );
};
