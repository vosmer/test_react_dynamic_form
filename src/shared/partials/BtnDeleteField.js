import * as React from 'react';

export default function BtnDeleteField (props) {
    const handleClick = () => {
        props.deleteField({'idx': props.fieldIdx });
    };
    return (
        <div class="btn primary" onClick={handleClick}>X</div>
    );
}