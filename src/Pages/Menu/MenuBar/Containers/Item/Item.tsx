import s from "./item.module.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { actions } from "../../../../../Redux/buy-item-reducer";
import { Item, ReducerType } from "../../../../../Types/Type";

export const Pizza: React.FC<Item> = ({ item }) => {
  let BuyItem;

  const [pageActive, setPageActive] = useState(1);

  const dispatch = useDispatch();

  const buys = (info: ReducerType, cost: number, size: number) => {
    dispatch(actions.buy(info, cost, size));
  };
  let Scroll = require("react-scroll");
  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();
  const pages = [];
  for (let i = 1; i <= Math.ceil(item.length / 10); i++) {
    pages.push(i);
  }
  return (
    <div className={s.pizza}>
      <div className={s.pizza_con}>
        {item.slice(pageActive * 10 - 10, pageActive * 10).map((u) => (
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
                                item[u.id - item[0].id],
                                item[u.id - item[0].id].cost,
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
