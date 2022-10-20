import Boton from "./Boton"

const Header = ({titulo, fecha}) => {

  const agregar = () => {
      console.log('agregar')
  }

  const borrar = () => {
      console.log('borrar')
  }

  return (
    <header className="header">
        <h1>Tareas</h1>
        <Boton texto ="Agregar" color = "green" onClick={agregar} />
    </header>
  )
}
export default Header 