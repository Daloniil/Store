import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useParams } from "react-router-dom";
import s from "./SliderItem.module.css";
import { useSelector } from "react-redux";
import {
  getdrinks,
  getnewdrink,
  getnewsneks,
  getnnewpizza,
  getpizza,
  getsneks,
  getsous,
} from "../../Selectors/Menu-selector";

type numberType = {
  id: any;
};

export const SliderItems = () => {
  const number: numberType = useParams();

  const pizza = useSelector(getpizza);
  const sneks = useSelector(getsneks);
  const drink = useSelector(getdrinks);
  const sous = useSelector(getsous);
  const npizza = useSelector(getnnewpizza);
  const nsnek = useSelector(getnewsneks);
  const ndrink = useSelector(getnewdrink);

  const pages = [pizza, sneks, drink, sous, npizza, nsnek, ndrink];

  const [prov, setProv] = useState(pizza);

  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].find((elem) => elem.id === Number(number.id))) {
        if (i === 4) {
          setProv(pages[0]);
        } else if (i === 5) {
          setProv(pages[1]);
        } else if (i === 6) {
          setProv(pages[2]);
        } else {
          setProv(pages[i]);
        }
      }
    }
  }, [number]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1092,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={s.content}>
      <span className={s.about_slider}>Схожі товари</span>

      <Slider {...settings} className={s.slider}>
        {prov.map((u) => (
          <div className={s.item} key={u.id}>
            <NavLink to={"/items/" + u.id} className={s.link}>
              <div>
                <img
                  className={s.photo}
                  src={u.photoURL}
                  alt=""
                  height="75"
                  width="75"
                />
              </div>
              <div className={s.text}>
                <div className={s.name}>{u.name}</div>
                <div className={s.cost}>Від {u.cost} грн</div>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};
