import { NAME } from 'configs/configs';
import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useSelector } from 'react-redux';
import Input from '../../components/inputs/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { Button, ButtonContainer, CustomForm, SignInContainer, TitleContainer, Box } from './styles';

const Validate: FunctionComponent<any> = (props: any) => {
    const { onValidateClick } = props;
    const [isPressed, setIsPressed] = useState(false);
    const { validate, error } = useSelector((state: any) => state.user);

    const onSubmit = (values: any) => {
        onValidateClick(values);
        setIsPressed(true);
    }
    return (
        <SignInContainer>
            <TitleContainer>
                <p>Validate - {NAME}</p>
            </TitleContainer>
            <Form
                onSubmit={onSubmit}
                initialValues={{}}
                render={({ handleSubmit, }) => (
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
                            <Button
                                type="submit"
                                style={{ pointerEvents: error && error.status === 403 ? 'none' : 'auto',
                                         backgroundColor: error && error.status === 403 ? '#bdbdbd' : '#23ab23',
                                }}
                            >
                                Validate
                            </Button>
                        </ButtonContainer>
                    </CustomForm>
                )}
            />
            {isPressed && validate && <Box style={{ background: '#56e864' }}>Success</Box>}
            {isPressed && !validate && <Box style={{ background: '#e85656' }}>Failed</Box>}
            {error && error.status === 403 &&
                <Box style={{ background: '#e85656', marginTop: 50 }}>{error.data.error}</Box>
            }
        </SignInContainer>
    );
}

export default Validate;
