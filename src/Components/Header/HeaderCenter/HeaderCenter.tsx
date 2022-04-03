import { NavLink } from "react-router-dom";
import React from "react";
import "./HeaderCenter.css";
import { useSelector } from "react-redux";
import { getamoun, getlenght } from "../../../Selectors/buy-item-selector";
import logo from "../../../Assets/Logo/4thfebruary-bladi-one-slab-4f-removebg-preview.webp";

export const HeaderCenter: React.FC = () => {
  const lenght = useSelector(getlenght);
  const amoun = useSelector(getamoun);

  let header_center_container: any = React.createRef();

  let myClick = () => {
    header_center_container.current.classList.toggle("_active");
  };
  let Blure = () => {
    header_center_container.current.classList.toggle("_active");
  };

  let buy;

  if (lenght != null) {
    {
      amoun == 0
        ? (buy = "")
        : (buy = <span className="amount_buy"> {amoun}</span>);
    }
  } else {
    buy = "";
  }
  return (
    <div className="header_center">
      <div className="header_center_header">
        <div className="header_center_menu_icon" onClick={myClick}>
          <span></span>
        </div>
        <div className="header_center_header_logo">
          <img className="logo" src={logo} alt="" />
        </div>
      </div>

      <div
        className="header_center_container"
        onClick={Blure}
        ref={header_center_container}
      >
        <div className="header_center_left">
          <div className="header_center_left_logo">
            <img className="header_center_left_logo_img" src={logo} alt="" />
          </div>
          <div className="header_center_left_menu">
            <NavLink to="/profile/pizza" className="pizza" activeClassName="ac">
              Меню
            </NavLink>
          </div>
          <div className="header_center_left_about">
            <NavLink to="/about" className="about" activeClassName="ac">
              Про нас
            </NavLink>
          </div>

          <div className="header_center_container_infromation">
            <NavLink
              to="/information"
              className="information"
              activeClassName="ac"
            >
              Інформація і доставка
            </NavLink>
          </div>
          <div className="header_center_container_contact">
            <NavLink to="/contacs" className="contacs" activeClassName="ac">
              Контакти
            </NavLink>
          </div>
        </div>

        <div className="header_center_right">
          <div className="header_center_container_order">
            <span>
              Замовлення: <a href="#">(096) 777 777 7</a>
            </span>
          </div>
        </div>
      </div>
      <div className="header_center_container_bill">
        <span>
          {" "}
          {buy}{" "}
          <NavLink to={"/buy"} className="buy">
            🛒
          </NavLink>{" "}
        </span>
      </div>
    </div>
  );
};
