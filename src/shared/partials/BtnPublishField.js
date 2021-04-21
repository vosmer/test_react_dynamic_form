import * as React from 'react';

export default function PublishField (props) {
    const handleClick = () => {
        props.publishField({'idx': props.fieldIdx });
    };
    return (
        <div class="btn primary" onClick={handleClick}>Опубликовать поле {props.fieldIdx}</div>
    );
}