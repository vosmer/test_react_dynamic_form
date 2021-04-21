import * as React from 'react';
import { useState } from 'react';
import Field from './Field';

export default function ViewFieldsForm ({fields}) {
    render: {
        return (
            <div class="form vertical view-fields">
                <h3>Форма просмотра полей:</h3>
                {
                    fields.map((fieldEl, index) => {
                        return (
                            <div class="field-container disabled">
                                <label>
                                    <span class="inp-label">{fieldEl.type}</span>
                                    <Field props={fieldEl} idx={index} isDisabled={true} />
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}