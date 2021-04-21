import * as React from 'react';
import { useState } from 'react';
import BtnAddField from './BtnAddField';
import Field from './Field';
import PublishField from './BtnPublishField';
import BtnDeleteField from './BtnDeleteField';
import ViewFieldsForm from './ViewFieldsForm';

export default function AddFieldsForm ({repos}) {
    var [fieldsList, mutateFieldsList] = useState([]);
    const createField = (fieldProps) => {
        let newList = [...fieldsList];
            newList.push({name: ('field-'+newList.length), value: fieldProps.value, type: fieldProps.type});
        mutateFieldsList(newList);
    }
    const publishField = (fieldProps) => {
        console.warn('publishField ► fieldProps',fieldProps);
        let newList = [...fieldsList];
            //TODO find item and add class published
        mutateFieldsList(newList);
    }
    const updateField = (fieldProps) => {
        let newList = [...fieldsList];
        if (fieldProps && fieldProps.idx && newList[fieldProps.idx]) {
            newList[fieldProps.idx] = fieldProps.fieldObj;
            mutateFieldsList(newList);
        }
    }
    const deleteField = (fieldProps) => {
        let newList = [...fieldsList];
            newList.splice(fieldProps.idx, 1);
        mutateFieldsList(newList);
    }
    render: {
        return (
            <>
            <div class="form vertical add-fields">
                <h1>Форма добавления полей:</h1>
                <BtnAddField createField={createField} fieldType="text" />
                <BtnAddField createField={createField} fieldType="date" />
                <BtnAddField createField={createField} fieldType="textarea" />
                {
                    fieldsList.map((fieldEl, index) => {
                        return (
                            <div class="field-container">
                                <label>
                                    <span class="inp-label">{fieldEl.type}</span>
                                    <Field updateField={updateField} props={fieldEl} idx={index} />
                                </label>
                                <BtnDeleteField deleteField={deleteField} fieldData={fieldEl} fieldIdx={index} />
                            </div>
                        )
                    })
                }
            </div>

            {(fieldsList.length>0) ? <h3>Форма просмотра полей:</h3>:""}
            {
                fieldsList.map((fieldEl, index) => {
                    return (
                        <div class="field-container disabled">
                            <label>
                                <span class="inp-label">{fieldEl.type}</span>
                                {fieldEl.value}
                            </label>
                        </div>
                    )
                })
            }

            </>
        );
    }
}