import { NavLink } from "react-router-dom";
import s from "./StyleBuy/Buy.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/buy-item-reducer";
import React from "react";
import {
  getitem,
  getlenght,
  getamoun,
} from "../../Selectors/buy-item-selector";

export const Buy = () => {
  let Scroll = require("react-scroll");
  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  let plus, minus, delet;

  const dispatch = useDispatch();

  let deleteLenght = (length: number | null) => {
    dispatch(actions.deleteLenght(Number(length)));
  };

  const amountLeghtminus = (number: number) => {
    dispatch(actions.amountLeghtminus(number));
  };

  const amountLeghtplus = () => {
    dispatch(actions.amountLeghtplus());
  };

  const item = useSelector(getitem);
  const lenght = useSelector(getlenght);
  const amoun = useSelector(getamoun);

  const [itemState, setItemState] = useState(() => item);

  useEffect(() => {
    setItemState(item);
  }, [amoun]);

  let view;

  let cost = item.reduce(function (a, b) {
    return Math.round(a + b.cost);
  }, 0);

  if (item.length == 0) {
    view = (
      <div className={s.container_no_buy}>
        <span>Ви ще не обрали замовлення</span>
        <NavLink to={"/profile/pizza"} className={s.p}>
          Перейти в меню
        </NavLink>
      </div>
    );
  } else {
    view = (
      <div className={s.container_buy}>
        <div className={s.order}>
          <span>Кошик</span>
        </div>
        {item.map((u) => (
          <div key={u._id}>
            <div className={s.info}>
              <div className={s.container_photo}>
                {<img src={u.eat.photoURL} alt="" height="75" width="75" />}
              </div>

              <div className={s.your_order}>
                <div className={s.container_name}>
                  {u.eat.name} {u.size > 0 ? "-" : ""}{" "}
                  {u.size > 0 ? u.size : ""} {u.size > 0 ? "см" : ""}
                </div>

                <div className={s.amount}>
                  <div className={s.border_minus}>
                    <p
                      className={s.minus}
                      onClick={
                        (minus = () => {
                          if (u.eat.amount > 1) {
                            amountLeghtminus(1);
                          }
                          u.eat.amount =
                            u.eat.amount > 1 ? u.eat.amount - 1 : u.eat.amount;
                          u.cost = u.eat.cost * u.eat.amount;
                        })
                      }
                    >
                      -
                    </p>
                  </div>
                  <p className={s.number_amount}>{u.eat.amount}</p>
                  <p
                    className={s.plus}
                    onClick={
                      (plus = () => {
                        u.eat.amount = u.eat.amount + 1;
                        u.cost = u.eat.cost * u.eat.amount;
                        amountLeghtplus();
                      })
                    }
                  >
                    +
                  </p>
                </div>

                <div className={s.costs}>
                  <span className={s.x}> {u.eat.amount} x</span>{" "}
                  <span className={s.amount_cost}>
                    {Math.round(u.eat.cost)} грн
                  </span>
                </div>
              </div>

              <span
                className={s.delete}
                onClick={
                  (delet = () => {
                    let searchindex = u._id;

                    amountLeghtminus(
                      itemState[
                        itemState.findIndex((el) => el._id === searchindex)
                      ].eat.amount
                    );

                    itemState[
                      itemState.findIndex((el) => el._id === searchindex)
                    ].eat.amount = 1;

                    itemState.splice(
                      itemState.findIndex((el) => el._id === searchindex),
                      1
                    );

                    deleteLenght(
                      Number(lenght) > 0 ? Number(lenght) - 1 : null
                    );
                  })
                }
              >
                x
              </span>
            </div>
          </div>
        ))}

        <div className={s.all}>
          <div className={s.all_cost_order}>
            <span className={s.text}>Разом:</span>{" "}
            <span className={s.all_cost}>{cost} грн</span>
          </div>
          <div className={s.button_order}>
            <NavLink to={"/checkout"} className={s.your_like}>
              Замовити
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return <div className={s.content}>{view}</div>;
};
