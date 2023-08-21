import { Button } from "./components/Button";

export function App() {
  return (
    <>
      <Button 
        action={'enviar'}
        backgroundColor="black"
        color='white'
      />
      <Button 
        action={'enviar'}
        backgroundColor='white'
        color='black'
      />
      <Button 
        action={'enviar'}        
        color='black'
      />
    </>
  )
}