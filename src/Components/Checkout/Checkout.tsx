import { useDispatch, useSelector } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLenghtCrater, required } from "../../Validators/validator";
import s from "./CheckoutStyle/Checkout.module.css";
import { Input } from "../FormsControl/FormContorl";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { getitem, getlenght } from "../../Selectors/buy-item-selector";
import { ReducerType } from "../../Types/Type";
import { actions } from "../../Redux/buy-item-reducer";

const maxLengh = maxLenghtCrater(10);

type PropsType = {};

const ChekoutForm: React.FC<
  InjectedFormProps<Chekout, PropsType> & PropsType
> = (props) => {
  const item = useSelector(getitem);

  let cost = item.reduce(function (a, b) {
    return Math.round(a + b.cost);
  }, 0);

  return (
    <div className={s.container}>
      <div className={s.order}>
        <p className={s.order_header}>ВАШЕ ЗАМОВЛЕННЯ</p>
        <div className={s.order_info}>
          <div className={s.information}>
            <div className={s.tov}>ТОВАР</div>
            <div className={s.tov_2}>ПРОМІЖНИЙ ПІДСУМОК</div>
          </div>
          <div className={s.full_order}>
            {item.map((u) => (
              <div key={u._id}>
                <div className={s.info}>
                  <div className={s.your_order}>
                    <div className={s.container_name}>
                      <span className={s.name}>
                        {u.eat.name} {u.size > 0 ? "-" : ""} x
                      </span>

                      <span className={s.x}>{u.eat.amount}</span>
                    </div>
                    <div className={s.costs}>
                      <span className={s.amount_cost}>
                        {Math.round(u.eat.cost)} грн
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={s.not_all_cost}>
            <div className={s.not_all}>Проміжний підсумок</div>
            <div className={s.all_costs}>{cost} грн</div>
          </div>

          <div className={s.dostavka}>
            <div className={s.name_dostavka}>Доставка</div>
            <div className={s.cost_dostavka}>
              {cost >= 300 ? "Безкоштовна доставка" : "40 грн"}
            </div>
          </div>

          <div className={s.all_cost}>
            <div className={s.all}>Загалом</div>
            <div className={s.alls}>{cost >= 300 ? cost : cost + 40} грн</div>
          </div>
        </div>
      </div>
      <div className={s.form}>
        <span className={s.abz}>Оплата та доставка</span>
        <form
          onSubmit={props.handleSubmit}
          action="/telegram.php"
          method="POST"
        >
          <div className={s.first}>
            <div className={s.name}>
              <span className={s.names}>Ім'я </span>
              <span className={s.star}>*</span>
              <Field
                placeholder={"Ім'я"}
                component={Input}
                validate={[required]}
                name={"name"}
                className={s.inputs}
              />
            </div>

            <div className={s.phone}>
              <span className={s.names}>
                Телефон<span className={s.star}>*</span>
              </span>
              <Field
                placeholder={"Телефон"}
                component={Input}
                validate={[required, maxLengh]}
                name={"phone"}
                className={s.inputs}
              />
            </div>
          </div>

          <div className={s.second}>
            <span className={s.names}>
              Вулиця<span className={s.star}>*</span>
            </span>
            <Field
              placeholder={"Вулиця"}
              component={Input}
              validate={required}
              name={"street"}
              className={s.inputs_street}
            />
          </div>

          <div className={s.three}>
            <div className={s.number_house}>
              <span className={s.names}>
                Номер будинку<span className={s.star}>*</span>
              </span>
              <Field
                placeholder={"Номер будинку"}
                component={Input}
                validate={required}
                name={"number_house"}
                className={s.inputs}
              />
            </div>

            <div className={s.pid}>
              <span className={s.names}>
                Номер під'їзду <span className={s.star}>*</span>
              </span>
              <Field
                placeholder={"Номер під'їзду "}
                component={Input}
                validate={required}
                name={"pid"}
                className={s.inputs}
              />
            </div>
          </div>

          <div className={s.button}>
            <button type="submit">Оформити</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ReduxChekoutForm = reduxForm<Chekout, PropsType>({
  form: "chekout",
})(ChekoutForm);

export type Chekout = {
  formData: Array<string>;
};

export const Chekout: React.FC = () => {
  let history = useHistory();
  const lenght = useSelector(getlenght);
  const dispatch = useDispatch();

  const daletArray = () => {
    dispatch(actions.daletArray());
  };

  let Scroll = require("react-scroll");
  let scroll = Scroll.animateScroll;
  scroll.scrollToTop();

  const onSubmit = async (formData: Chekout) => {
    daletArray();
    history.push("/finallyorder");
    console.log(formData);
  };

  return (
    <div className={s.content}>
      <div className={s.about_header}>
        <div className={s.about_header_container}>
          <div className={s.about_header_text}>
            <h2>Оформлення</h2>
          </div>
        </div>
      </div>
      {lenght != null ? (
        <ReduxChekoutForm onSubmit={onSubmit} />
      ) : (
        <Redirect to={"/buy"} />
      )}
    </div>
  );
};
