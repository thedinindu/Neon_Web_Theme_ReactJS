import React from 'react'
import Aux from '../../hoc/Aux'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElement'

const Signin = () => {
    return (
        <Aux>
            <Container>
                <FormWrap>
                    <Icon to='/'>Neon</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In To Your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </Aux>
    )
}

export default Signin
