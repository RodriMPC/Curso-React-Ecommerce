
import Button from "./components/Button/Button"
import ItemCount from "./components/ItemCount/ItemCount"
import Escudo from "./components/Escudo/Escudo"

function App() {
  

  return (
    <>
    <Escudo/>
    <Button label={'Hola'} handleClick={() => console.log('Hola')}/>
    <Button label={'Loco'} handleClick={() => console.log('Loco')}/>
    <Button label={'Todo bien?'} handleClick={() => console.log('Todo bien?')}/>
    <ItemCount/>
    
    </>
  )
}

export default App
