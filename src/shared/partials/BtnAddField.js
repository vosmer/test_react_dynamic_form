import * as React from 'react';

export default function BtnAddFiled (props) {
    const handleClick = () => {
        props.createField({'type': props.fieldType, 'value': '' });
    };
    return (
        <div class="btn primary" onClick={handleClick}>Добавить поле {props.fieldType}</div>
    );
}