import React from 'react';
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
    background: #2196f3;
    color: #FFF;
`

const CreateForm = () => {
    return (
        <form>
            <FormWrapper>
                <FormContainer>
                    <TextInput
                        name='firstname'
                        type='text'
                        placeholder='First name'
                    />
                </FormContainer>
                <FormContainer>
                    <TextInput
                        name='lastname'
                        type='text'
                        placeholder='Last name'
                    />
                </FormContainer>
                <FormContainer>
                    <TextInput
                        name='email'
                        type='text'
                        placeholder='Email'
                    />
                </FormContainer>
                <FormContainer>
                    <TextInput
                        name="age"
                        type='number'
                        placeholder='Age'
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