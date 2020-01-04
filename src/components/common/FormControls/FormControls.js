import React from 'react'
import styles from './FormControls.module.css'
import { Field } from 'redux-form';




const FormConstructor = (props) => {
    const hasError = props.touched && props.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>
                {props.element}
            </div>
            {hasError && <span>{props.error}</span>}
        </div>
    )
}


export const Input = ({ input, meta, ...props }) => {
    const el = React.createElement('input', { ...input, ...props })
    return (
        <FormConstructor element={el} {...meta} />
    )
}



export const Textarea = ({ input, meta, ...props }) => {

    const el = React.createElement('textarea', { ...input, ...props })
    return (
        <FormConstructor element={el} {...meta} />
    )
}

export const createField = ( placeholder, name, validators, component,  label=false, text, props) => {
   return <div className={styles.formCustom}>
        
        <Field id={name} placeholder={placeholder} name={name} validate={validators}  component={component} {...props} />
        {label && <label htmlFor={name}>{text}</label>}
    </div>
}