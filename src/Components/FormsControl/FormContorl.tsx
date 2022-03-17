import s from "./StyleFormsControl/FormControl.module.css";
import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type FromControlType = {
  meta: WrappedFieldMetaProps;
  children: React.ReactNode;
};

const FromControl: React.FC<FromControlType> = ({
  meta: { touched, error },
  children,
}) => {
  let showing;
  if (touched && error) {
    showing = s.error;
  } else if (touched) {
    showing = s.touch;
  } else if (error) {
    showing = s.error;
  } else {
    showing = s.standart;
  }

  return (
    <div className={s.formControl + " " + showing}>
      <div>{children}</div>
    </div>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  const showError = props.meta.touched && props.meta.error;

  return (
    <FromControl {...props}>
      <input {...props.input} {...restProps} />
      {showError && <div className={s.errormessageinput}>{meta.error}</div>}
    </FromControl>
  );
};
