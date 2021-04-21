import * as React from 'react';
import "../assets/main.css";
import AddFieldsForm from './partials/AddFieldsForm';


export default function App (props) {
    return (
    <div class="root">
        <AddFieldsForm repos={props.data} />
    </div>
    );
}