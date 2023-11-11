import React from 'react';
import {Container, InputInput} from "./Input.styled";

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({onChange, placeholder}) => {
    return (
        <Container>
            <InputInput placeholder={placeholder} onChange={onChange} />
        </Container>
    );
}

export default Input;