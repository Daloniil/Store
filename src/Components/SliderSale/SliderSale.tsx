import s from "./SliderSale.module.css";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../../Assets/Slider/imgonline-com-ua-Resize-JtXbvusMjvD.jpg";
import second from "../../Assets/Slider/imgonline-com-ua-Resize-LcPPgxG23pmmmD.jpg";
import three from "../../Assets/Slider/imgonline-com-ua-Resize-OoP4yQreUlrIXH.jpg";

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
