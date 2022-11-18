import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import Input from '../../components/inputs/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { Button, ButtonContainer, CustomForm, SignInContainer, TitleContainer, Box } from './styles';

const Validate: FunctionComponent<any> = (props: any) => {
    const { onValidateClick } = props;
    const [isPressed, setIsPressed] = useState(false);
    const { validate } = useSelector((state: any) => state.user);

    const onSubmit = (values: any) => {
        onValidateClick(values);
        setIsPressed(true);
    }
    return (
        <SignInContainer>
            <TitleContainer>
                <p>Validate</p>
            </TitleContainer>
            <Form
                onSubmit={onSubmit}
                initialValues={{}}
                render={({ handleSubmit,  }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <div>
                            <label>Token </label>
                            <Field
                                render={Input}
                                label="Token"
                                name="token"
                                validate={requiredValidation}
                                type="number"
                            />
                        </div>
                        <ButtonContainer>
                            <Button type="submit">Validate</Button>
                        </ButtonContainer>
                    </CustomForm>
                )}
            />
            {isPressed && validate && <Box style={{ background: '#56e864' }}>Success</Box>}
            {isPressed && !validate && <Box style={{ background: '#e85656' }}>Failed</Box>}
        </SignInContainer>
    );
}

export default Validate;
