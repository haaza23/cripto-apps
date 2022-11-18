import React, { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/inputs/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { Button, ButtonContainer, CustomForm, SignInContainer, TitleContainer, Box } from './styles';

const Login: FunctionComponent<any> = (props: any) => {
    const { onLoginClick, onClickGet2FA, twoFA } = props;
    return (
        <SignInContainer>
            <TitleContainer>
                <p>Sign in</p>
            </TitleContainer>
            <Form
                onSubmit={onLoginClick}
                initialValues={{}}
                render={({ handleSubmit }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <div>
                            <label>Email </label>
                            <Field
                                render={Input}
                                label="Email address"
                                name="username"
                                validate={requiredValidation}
                                type="email"
                            />
                        </div>
                        <div>
                            <label>Password </label>
                            <Field
                                render={Input}
                                label="Password"
                                name="password"
                                validate={requiredValidation}
                                type="password"
                            />
                        </div>
                        <ButtonContainer>
                            <Button type="submit">Sign in</Button>
                        </ButtonContainer>
                    </CustomForm>
                )}
            />
            <ButtonContainer>
                <Button onClick={() => onClickGet2FA()}>Get 2FA</Button>
            </ButtonContainer>
            <p style={{textAlign: 'center'}}>Insert your secret into your authentication app: <br /> {twoFA}</p>
        </SignInContainer>
    );
}

export default Login;
