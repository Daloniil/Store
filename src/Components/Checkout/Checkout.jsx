import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCrater, nameCreate, required} from "../../Validators/validator"
import s from "./CheckoutStyle/Checkout.module.css";
import {Input} from "../FormsControl/FormContorl";
import {Redirect} from "react-router-dom";
import React from "react";


const maxLengh = maxLenghtCrater(10)


const ChekoutForm = (props) => {

    let cost = props.item.reduce(function (a, b) {
        return Math.round(a + b.cost);
    }, 0);

    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop()

    return (
        <div className={s.container}>
            <div className={s.form}>
                <span className={s.abz}>Оплата та доставка</span>
                <form onSubmit={props.handleSubmit} action="telegram.php" method="POST">
                    <div className={s.first}>
                        <div className={s.name}>
                            <span className={s.names}>Ім'я </span><span className={s.star}>*</span>
                            <Field placeholder={"Ім'я"} component={Input} validate={[required, nameCreate]}
                                   name={"name"} className={s.inputs}/>
                        </div>

                        <div className={s.phone}>
                            <span className={s.names}>Телефон<span className={s.star}>*</span></span>
                            <Field placeholder={"Телефон"} component={Input} validate={[required, maxLengh]}
                                   name={"phone"} className={s.inputs}/>
                        </div>
                    </div>

                    <div className={s.second}>
                        <span className={s.names}>Вулиця<span className={s.star}>*</span></span>
                        <Field placeholder={"Вулиця"} component={Input} validate={required}
                               name={"street"} className={s.inputs_street}/>
                    </div>

                    <div className={s.three}>
                        <div className={s.number_house}>
                            <span className={s.names}>Номер будинку<span className={s.star}>*</span></span>
                            <Field placeholder={"Номер будинку"} component={Input} validate={required}
                                   name={"number_house"} className={s.inputs}/>
                        </div>

                        <div className={s.pid}>
                            <span className={s.names}>Номер під'їзду <span className={s.star}>*</span></span>
                            <Field placeholder={"Номер під'їзду "} component={Input} validate={required}
                                   name={"pid"} className={s.inputs}/>
                        </div>

                    </div>

                    <div className={s.button}>
                        <button type="submit">Download Here</button>
                    </div>
                </form>
            </div>
            <div className={s.order}>
                <p className={s.order_header}>ВАШЕ ЗАМОВЛЕННЯ</p>
                <div className={s.order_info}>
                    <div className={s.information}>
                        <div className={s.tov}>ТОВАР</div>
                        <div className={s.tov_2}>ПРОМІЖНИЙ ПІДСУМОК</div>
                    </div>
                    <div className={s.full_order}>
                        {props.item.map(u => <div key={u._id}>
                            <div className={s.info}>

                                <div className={s.your_order}>
                                    <div className={s.container_name}>
                                        <span
                                            className={s.name}>{u.eat.name} {u.size > 0 ? "-" : ""} {u.size} {u.size > 0 ? "см" : ""} x
                                        </span>

                                        <span className={s.x}>
                                             {u.eat.amount}
                                        </span>
                                    </div>
                                    <div className={s.costs}>
                                      <span
                                          className={s.amount_cost}>{Math.round(u.eat.cost)} грн
                                      </span>
                                    </div>
                                </div>
                            </div>

                        </div>)}
                    </div>

                    <div className={s.not_all_cost}>
                        <div className={s.not_all}>Проміжний підсумок</div>
                        <div className={s.all_costs}>{cost} грн</div>
                    </div>

                    <div className={s.dostavka}>
                        <div className={s.name_dostavka}>Доставка</div>
                        <div className={s.cost_dostavka}>{cost >= 500 ? "Безкоштовна доставка" : "40 грн"}</div>
                    </div>

                    <div className={s.all_cost}>
                        <div className={s.all}>Загалом</div>
                        <div className={s.alls}>{cost >= 500 ? cost : cost + 40} грн</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

const ReduxChekoutForm = reduxForm({
    form: "chekout"
})(ChekoutForm)


const Chekout = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={s.content}>
            {props.lenght != null ? <ReduxChekoutForm onSubmit={onSubmit} item={props.item}/> :
                <Redirect to={"/buy"}/>}

        </div>
    )
}


let mapStateToprops = (state) => {

    return {
        item: state.BuyPage.item,
        lenght: state.BuyPage.lenght


    }


}
export default connect(mapStateToprops, {})(Chekout)
