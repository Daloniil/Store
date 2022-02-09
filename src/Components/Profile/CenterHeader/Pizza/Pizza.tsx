import s from "./StylePizza/pizza.module.css";

import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { ReducerType } from "../../../../Types/Type";
import { useDispatch, useSelector } from "react-redux";
import { getpizza } from "../../../../Selectors/Menus-selector";
import { actions } from "../../../../Redux/buy-item-reducer";

export const Pizza: React.FC = () => {
  let BuyItem;

  const [pageActive, setPageActive] = useState(1);

  const pizza = useSelector(getpizza);
  const dispatch = useDispatch();

  const buys = (info: ReducerType, cost: number, size: number) => {
    dispatch(actions.buy(info, cost, size));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(pizza.length / 10); i++) {
    pages.push(i);
  }
  return (
    <div className={s.pizza}>
      <div className={s.pizza_con}>
        {pizza.slice(pageActive * 10 - 10, pageActive * 10).map((u) => (
          <div key={u.id}>
            <NavLink to={"/items/" + u.id} className={s.pizza_nav}>
              <div className={s.pizza_container}>
                <div className={s.pizza_all}>
                  <div className={s.pizza_all_photo}>
                    <img src={u.photoURL} className={s.img} />
                  </div>

                  <div className={s.pizza_all_name}>
                    <div className={s.name}>{u.name}</div>
                  </div>

                  <div className={s.pizza_all_cost}>
                    <div className={s.cost}>{u.cost} грн</div>
                  </div>

                  <div className={s.pizza_all_structure}>
                    <div className={s.structure}>{u.structure}</div>
                  </div>

                  <div className={s.pizza_all_bottom}>
                    <div className={s.pizza_all_bottom_button}>
                      <span className={s.button}>
                        <NavLink
                          className={s.your_buy}
                          to={"/buy"}
                          onClick={
                            (BuyItem = () => {
                              buys(
                                pizza[u.id - pizza[0].id],
                                pizza[u.id - pizza[0].id].cost,
                                0
                              );
                            })
                          }
                        >
                          Замовити
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <p className={s.pages}>
        {pages.map((page, i) => {
          return (
            <span
              key={i}
              onClick={() => {
                setPageActive(page);
              }}
              className={pageActive === i + 1 ? s.active_page : s.page}
            >
              {page}
            </span>
          );
        })}
      </p>
    </div>
  );
};
