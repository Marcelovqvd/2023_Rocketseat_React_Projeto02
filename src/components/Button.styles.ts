import styled from "styled-components";

export type backgroundColorTypes = 'black' | 'white';
export type colorTypes = 'black' | 'white'

interface ButtonStylesProps {
    backgroundColor?: backgroundColorTypes,
    color: colorTypes
}

export const ButtonContainer = styled.button<ButtonStylesProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;

    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'yellow'};
    color: ${(props) => props.color};
`