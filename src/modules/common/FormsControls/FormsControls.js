import React from "react";
import s from "./FormsControls.css"

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + " " + (meta.touched && meta.error ? s.error : "")}>
            <textarea className={s.formControl} {...input} {...props}  />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + " " + (meta.touched && meta.error ? s.error : "")}>
            <input className={s.formControl} {...input} {...props}  />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}