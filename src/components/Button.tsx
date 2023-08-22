import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  action: 'salvar' | 'enviar'
}

export function Button({ action }: ButtonProps) {
  return <ButtonContainer>{action}</ButtonContainer>
}
