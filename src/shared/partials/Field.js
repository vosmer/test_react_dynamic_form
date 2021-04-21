import * as React from 'react';
import { useState } from 'react';

export default function Field ({updateField, props, idx, isDisabled}) {
    let valueDefault = (props.value)? props.value: "";
    let type = (props.type)? props.type: "text";
    let inputAttributes = {};
    if (isDisabled) {
        inputAttributes.disabled = true;
    }
    const [value, setValue] = useState(valueDefault);
    const onChangeHandler = (evt, fieldId) => {
        props.value = evt.target.value;
        setValue(evt.target.value);
        updateField({'fieldObj': props, 'idx': fieldId});
    };
    let input = <input class="inp" {...inputAttributes} value={value} onChange={(e) => {onChangeHandler(e,idx);}} type={type} title={props.name} data-index={idx} />;
    if (type==='textarea') {
        input = <textarea class="inp" {...inputAttributes} value={value} onChange={(e) => {onChangeHandler(e,idx);}} title={props.name} data-index={idx}></textarea>;
    }
    return input;
}