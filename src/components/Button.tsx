import {
  ButtonContainer,
  backgroundColorTypes,
  colorTypes,
} from './Button.styles'

interface ButtonProps {
  action: 'salvar' | 'enviar'
  backgroundColor?: backgroundColorTypes
  color: colorTypes
}

export function Button({ action, backgroundColor, color }: ButtonProps) {
  return (
    <ButtonContainer backgroundColor={backgroundColor} color={color}>
      {action}
    </ButtonContainer>
  )
}
