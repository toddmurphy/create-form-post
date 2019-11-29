import React, { useState } from 'react';
import CreateForm from './CreateForm';
import Form from './Form';

const FormSetup = () => {
    //Create initial form structure for properties and their respective values -> firstname, lastname, email, age
    //Setup initial state with useState with an array of objects and fake data to export to 'Form' to display.
    const [forms, setForms] = useState([
        {
            id: 1,
            firstname: 'Todd',
            lastname: 'Murphy',
            email: 'toddmurphy93@gmail.com',
            age: 43
        },
        {
            id: 2,
            firstname: 'Liam',
            lastname: 'Murphy',
            email: 'liammurphy@gmail.com',
            age: 44
        },
        {
            id: 3,
            firstname: 'Don',
            lastname: 'Murphy',
            email: 'donmurphy@gmail.com',
            age: 76
        }
    ]);

    //Create a function 'addNewPost' to add functionality to 'create' or add a new post
    const addNewPost = (props) => {
        const newPost = {
            id: Date.now(),
            firstname: props.firstname,
            lastname: props.lastname,
            email: props.email,
            age: props.age
        };
        setForms([...forms, newPost])
    };


    return (
        <div>
            <h3>Initital form setup/ state- Form setup component</h3>
            <CreateForm addNewPost={addNewPost} />
            <Form forms={forms} />
        </div>
    )
}

export default FormSetup;