import s from "./StyleNewSnekContainer/NewSnek.module.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getnewsneks } from "../../../../../Selectors/Menus-selector";

const NewSnek: React.FC = () => {
  const newsnek = useSelector(getnewsneks);

  return (
    <li className={s.snek}>
      {newsnek.map((u) => (
        <div key={u.id}>
          <NavLink className={s.snek_container} to={"/items/" + u.id}>
            <div className={s.photo}>
              <img src={u.photoURL} alt="" />
            </div>
            <div className={s.snek_name}>
              <span>{u.name}</span>
              <p>{u.cost} грн</p>
            </div>
          </NavLink>
        </div>
      ))}
    </li>
  );
};
export default NewSnek;
