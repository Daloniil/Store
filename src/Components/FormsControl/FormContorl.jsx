import s from './StyleFormsControl/FormControl.module.css';
import React from "react";


const FromControl = ({input, meta, ...props}) => {

    let showing
    {meta.touched && meta.error ? showing = s.error : meta.touched ? showing = s.touch : props.error ? showing = s.error : showing = s.standart}

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

