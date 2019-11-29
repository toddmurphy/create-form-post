import React from 'react';
import styled from 'styled-components';
import FormSetup from './FormSetup';

const Form = (props) => {

    console.log(props)
    return (
        <div>
            <h2>Form output component</h2>
            {props.forms.map(form => (
                <div key={form.id}>
                    <p>{form.id}</p>
                    <p>{form.firstname}</p>
                    <p>{form.lastname}</p>
                    <p>{form.email}</p>
                    <p>{form.age}</p>
                </div>
            ))}
        </div>
    )
}

export default Form;