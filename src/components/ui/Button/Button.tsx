import React from 'react';
import {ButtonText, Container} from "./Button.styled";

interface ButtonProps {
    text: string;
    onClick: () => void;
    bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({onClick, text, bgColor}) => {
    return (
        <Container bgColor={bgColor} onClick={onClick}>
            <ButtonText dangerouslySetInnerHTML={{__html: text}} />
        </Container>
    );
}

export default Button;