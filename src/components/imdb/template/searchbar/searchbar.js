import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField, SelectField } from 'redux-form-antd';
import { Input, Form, Button } from 'antd';

function SearchBar(props) {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <b>Texto:</b>
            </label>
            <Field
                name="filter"
                component={TextField}
                type="text"
                placeholder="Escribe algo.."
            />

            <label>
                <b>Tipo de contenido:</b>
            </label>
            <Field
                name="type"
                component={SelectField}
                options={[
                    {
                      "label": "Serie",
                      "value": "tv"
                    },
                    {
                      "label": "Película",
                      "value": "movie"
                    }
                  ]}
            />
        <Button type="default" htmlType="submit" disabled={pristine || submitting}>Buscar</Button>

        </form>
    );
}

export default reduxForm({
    form: 'searchbar', // a unique identifier for this form
})(SearchBar);