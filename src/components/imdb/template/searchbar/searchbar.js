import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField, SelectField } from 'redux-form-antd';
import { Input, Form, Button } from 'antd';

const validate = values => {
    const errors = {}
    if (!values.filter) {
      errors.filter = 'Required'
    } 
    if (!values.filter) {
      errors.filter = 'Required'
    } else if (/[.*+?^${}()|$#[\]\\]/g.test(values.filter)) {
      errors.filter = 'Nombre inválido. No se aceptan caracteres extraños'
    }
    return errors
  }

function SearchBar(props) {

    
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <Input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>))}</div>
    </div>
  )

    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <b>Texto:</b>
            </label>
            <Field
                name="filter"
                component={renderField}
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
                        "label": "Película",
                        "value": "movie"
                    },  
                    {
                        "label": "Serie",
                        "value": "tv"
                    }
                ]}
            />
            <Button type="default" htmlType="submit" disabled={submitting}>Buscar</Button>

        </form>
    );
}

export default reduxForm({
    form: 'searchbar', validate // a unique identifier for this form
})(SearchBar);