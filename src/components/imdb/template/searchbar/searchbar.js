import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-antd';
import { Input, Form, Button } from 'antd';

function SearchBar(props) {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                style={{ margin: '16px 24px 16px 0', width: '30%' }}
                name="filter"
                component={TextField}
                type="text"
                placeholder="Escribe algo.."
            />
        </form>
    );
}

export default reduxForm({
    form: 'searchbar', // a unique identifier for this form
})(SearchBar);