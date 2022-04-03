import s from "./NewDrink.module.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getnewdrink } from "../../../../../Selectors/Menu-selector";

const NewDrink: React.FC = () => {
  const newdrink = useSelector(getnewdrink);

  return (
    <li className={s.drink}>
      {newdrink.map((u) => (
        <div key={u.id}>
          <NavLink className={s.drink_container} to={"/items/" + u.id}>
            <div className={s.photo}>
              <img src={u.photoURL} alt="" />
            </div>
            <div className={s.drink_name}>
              <span>{u.name}</span>
              <p>{u.cost} грн</p>
            </div>
          </NavLink>
        </div>
      ))}
    </li>
  );
};
export default NewDrink;
