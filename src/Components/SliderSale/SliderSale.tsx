import s from "./SliderSale.module.css";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../../Assets/Slider/Slider_Happy_new_pizza_F2F0EA.webp";
import second from "../../Assets/Slider/Slider_Party_for_bd_new_pizza.webp";
import three from "../../Assets/Slider/Slider_4pizzas_new_pizza.webp";

export default class SliderSale extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };
    return (
      <div className={s.header_bottom}>
        <Slider {...settings}>
          <div>
            <img
              className={s.header_bottom_photo}
              src={first}
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              className={s.header_bottom_photo}
              src={second}
              alt=""
              width="100%"
            />
          </div>
          <div>
            <img
              className={s.header_bottom_photo}
              src={three}
              alt=""
              width="100%"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
