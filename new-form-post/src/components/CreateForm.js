import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    padding: 3% 0;
    margin: auto;
`

const FormContainer = styled.div`
    margin: 2% 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const TextInput = styled.input`
    margin: 0 3%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`

const CreateButton = styled.button`
    width: 80%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #36AB80;
    color: #FFF;
`

const CreateForm = (props) => {
    //Set up useState state structure to make a post using properties from FormSetup --> firstname, lastname, email, age
    //Set up as object
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        age: Number
    })

    //setup 'handleChanges' event to watch for changes in input values (event.target.value) --> link to 'name' property of each input
    const handleChanges = event => {
        //Computed properties
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(event.target.value)
    }

    //setup 'submitForm' function to submit a form
    const submitForm = event => {
        event.preventDefault();
        props.addNewPost(form)
        //resets our form and body back to emtpy strings and clear out the text
        setForm({
            firstname: '',
            lastname: '',
            email: '',
            age: ''
        })
    }

    const { firstname, lastname, email, age } = props;
    return (
        <form onSubmit={submitForm}>
            <FormWrapper>
                <FormContainer>
                    <TextInput
                        name='firstname'
                        type='text'
                        placeholder='First name'
                        onChange={handleChanges}
                        value={firstname}
                    />
                </FormContainer>
                <FormContainer>
                    <TextInput
                        name='lastname'
                        type='text'
                        placeholder='Last name'
                        onChange={handleChanges}
                        value={lastname}
                    />
                </FormContainer>
                <FormContainer>
                    <TextInput
                        name='email'
                        type='text'
                        placeholder='Email'
                        onChange={handleChanges}
                        value={email}
                    />
                </FormContainer>
                <FormContainer>
                    <TextInput
                        name="age"
                        type='number'
                        placeholder='Age'
                        onChange={handleChanges}
                        value={age}
                    />
                </FormContainer>
                <FormContainer>
                    <CreateButton type='submit'>Submit form</CreateButton>
                </FormContainer>
            </FormWrapper>
        </form>
    )
}

export default CreateForm;