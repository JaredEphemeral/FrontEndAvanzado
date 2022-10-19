import Boton from "./Boton"

const Header = ({titulo, fecha}) => {

    const onClick =() =>{
        console.log('click');
    }
    

  return (
    <header className="header">
        <h1>Tareas</h1>
        <Boton texto ="Agregar" color = "green" />
    </header>
  )
}
export default Header 