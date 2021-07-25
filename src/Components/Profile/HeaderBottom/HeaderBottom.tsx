import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import s from "./HeaderBottom.css"


export default class HeaderBottom extends Component {
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
                        <img className={s.header_bottom_photo}
                             src="https://pizzatime.com.ua/wp-content/uploads/2020/11/Slider_Happy_new_pizza_F2F0EA.jpg"
                             alt="" width="100%"/>
                    </div>
                    <div>
                        <img className={s.header_bottom_photo}
                             src="https://pizzatime.com.ua/wp-content/uploads/2020/11/Slider_Party_for_bd_new_pizza.jpg"
                             alt="" width="100%"/>
                    </div>
                    <div>
                        <img className={s.header_bottom_photo}
                             src="https://pizzatime.com.ua/wp-content/uploads/2020/11/Slider_4pizzas_new_pizza.jpg"
                             alt="" width="100%"/>
                    </div>

                </Slider>
            </div>
        )

    }
}