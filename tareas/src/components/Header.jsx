import Boton from "./Boton"

const Header = ({onAdd, mostrarForm}) => {

  return (
    <header className="header">
        <h1>Tareas</h1>
        <Boton texto = { mostrarForm ? 'Cerrar': 'Agregar' } color = { mostrarForm ? 'red': 'green' } onClick={onAdd} />
    </header>
  )
}
export default Header 