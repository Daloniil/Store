import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";
import s from "./SliderItem.module.css"

export default class SliderItem extends Component {


    prov

    render() {
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
                        dots: false
                    }
                },
                {
                    breakpoint: 1092,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: false,
                    }
                }
            ]

        }


        {
            this.props.number < 14 || this.props.number >= 41 && this.props.number < 45 ? this.prov = this.props.pizza :
                this.props.number >= 14 && this.props.number < 20 || this.props.number >= 49 && this.props.number < 53 ? this.prov = this.props.drink :
                    this.props.number >= 20 && this.props.number < 33 || this.props.number >= 45 && this.props.number < 49 ? this.prov = this.props.sneks :
                        this.props.number >= 33 && this.props.number < 41 ? this.prov = this.props.sous : this.prov = ""
        }


        return (

            <div className={s.content}>
                <span className={s.about_slider} >Схожі товари</span>

                <Slider {...settings} className={s.slider}>

                    {this.prov.map(u => <div className={s.item} key={u.id}>
                        <NavLink to={"/items/" + u.id} className={s.link}>

                            <div>
                                <img className={s.photo} src={u.photoURL} alt="" height="75" width="75"/>
                            </div>
                            <div className={s.text}>
                                <div className={s.name}>{u.name}</div>
                                <div className={s.cost}>Від {u.cost} грн</div>
                            </div>
                        </NavLink>


                    </div>)}

                </Slider>

            </div>
        )

    }
}
