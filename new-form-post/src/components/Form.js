import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const PostContainer = styled.div`
    border: dodgerblue;
    border-radius: 5px;
    width: 30%;
    background: dodgerblue;
    margin: 2% 0;
    color: #FFF;
`

const Form = (props) => {
    console.log(props)

    return (
        <div>
            <PostWrapper>
                {props.forms.map(form => (
                    <PostContainer key={form.id}>
                        <p>ID: {form.id}</p>
                        <p>First name: {form.firstname}</p>
                        <p>Last name: {form.lastname}</p>
                        <p>Email: {form.email}</p>
                        <p>Age: {form.age}</p>
                    </PostContainer>
                ))}
            </PostWrapper>
        </div>
    )
}

export default Form;