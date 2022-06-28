import s from "./item.module.css";

import { NavLink } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { actions } from "../../../../../Redux/buy-item-reducer";
import { Item, ReducerType } from "../../../../../Types/Type";

export const Pizza: React.FC<Item> = ({ item }) => {
  let BuyItem;

  const [pageActive, setPageActive] = useState(1);
  const [menuItems, setMenu] = useState([] as ReducerType[]);
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  const [, updateState] = useState();
  //@ts-ignore
  const forceUpdate = useCallback(() => updateState({}), []);

  const dispatch = useDispatch();

  const buys = (info: ReducerType, cost: number, size: number) => {
    dispatch(actions.buy(info, cost, size));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(menuItems.length / 10); i++) {
    pages.push(i);
  }

  const handleChangeSelect = (event: string) => {
    setSelect(event);
  };

  const handleSearch = (event: string) => {
    setSearch(event.toLowerCase());
  };

  useEffect(() => {
    setMenu(Array.from(item));
  }, []);

  useEffect(() => {
    const menu: ReducerType[] = [];

    if (search) {
      forceUpdate();
      menuItems
        .filter((word) => {
          return word.name.toLowerCase().includes(search);
        })
        .forEach((e) => {
          menu.push(e);
        });
      setMenu(menu);
    } else {
      const addArray: ReducerType[] = Array.from(item);

      if (select === "expensive") {
        forceUpdate();
        setMenu(Array.from(addArray.sort((a, b) => b.cost - a.cost)));
      } else if (select === "cheap") {
        forceUpdate();
        setMenu(Array.from(addArray.sort((a, b) => a.cost - b.cost)));
      } else if (menuItems.length > 0) {
        forceUpdate();
        setMenu(Array.from(addArray));
      }
    }
  }, [search]);

  useEffect(() => {
    if (select === "expensive") {
      forceUpdate();
      setMenu(menuItems.sort((a, b) => b.cost - a.cost));
    } else if (select === "cheap") {
      forceUpdate();
      menuItems.sort((a, b) => a.cost - b.cost);
    } else if (menuItems.length > 0) {
      forceUpdate();
      setMenu(menuItems.sort((a, b) => a.id - b.id));
    }
  }, [select]);

  return (
    <div className={s.pizza}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          onChange={(e) => handleChangeSelect(e.target.value)}
          style={{
            width: "150px",
            minWidth: "15ch",
            maxWidth: "30ch",
            border: " 1px solid var(--select-border)",
            borderRadius: " 0.25em",
            padding: "0.25em 0.5em",
            fontSize: " 17px",
            cursor: "pointer",
            margin: "0 12.5px 0 12.5px",
            lineHeight: " 1.1",
            backgroundColor: " #fff",
            backgroundImage: "linear-gradient(to top, #f9f9f9, #fff 33%)",
          }}
        >
          <option value="">Нічого</option>
          <option value="cheap">Від дешевого до дорожчого</option>
          <option value="expensive">Від дорожчого до дешевого</option>
        </select>

        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: "100px",
            padding: "12px 20px",
            margin: "0 12.5px 0 12.5px",
            fontSize: "17px",
          }}
          placeholder="Шукати..."
        />
      </div>
      <div className={s.pizza_con}>
        {menuItems.length > 0 ? (
          menuItems.slice(pageActive * 10 - 10, pageActive * 10).map((u) => (
            <div key={u.id} onClick={() => console.log(u)}>
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
                                  menuItems[u.id - menuItems[0].id],
                                  menuItems[u.id - menuItems[0].id].cost,
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
          ))
        ) : (
          <div>Товар не знайдено</div>
        )}
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
