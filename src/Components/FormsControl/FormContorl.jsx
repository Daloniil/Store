import s from './FormControl.module.css';
import React from "react";
import {Field} from "redux-form";


const FromControl = ({input, meta, ...props}) => {

    let showing
    if (meta.touched && meta.error) {
        showing = s.error
    } else if (meta.touched) {
        showing = s.touch
    } else if (props.error) {
        showing = s.error

    } else {
        showing = s.standart
    }

    return (

        <div className={s.formControl + " " + showing}>
            <div>

                {props.children}
            </div>

        </div>
    )

}


export const Input = (props) => {
    const {input, meta, element, ...restProps} = props
    const showError = props.meta.touched && props.meta.error

    return <FromControl {...props}> <input {...props.input} {...restProps}/>
        {showError && <div className={s.errormessageinput}>{meta.error}</div>}</FromControl>
}

