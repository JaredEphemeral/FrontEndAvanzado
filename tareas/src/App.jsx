import Header from "./components/Header";
import Tareas from "./components/Tareas";
import {useState} from 'react';

function App() {

  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminada: true,
    },
    {
      id: 2,
      texto: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminada: false,
    },
    {
      id: 3,
      texto: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminada: false,
    }
  ])

  //Eliminar una tarea
  const borrarTarea = (id) =>{
    //console.log( 'borrar ', id);
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  //Marcar o desmarcar una tarea como terminada
  const toggleTarea = (id) => {
    setTareas( tareas.map( (tarea) => tarea.id === id ? { ...tarea, terminada:!tarea.terminada} : tarea  ) )
  }

  return (
    <div className="container">
      <Header />
     {tareas.length > 0 ? <Tareas tareas={tareas} onDelete ={borrarTarea} onToggle = {toggleTarea} /> : 'No hay tareas para mostrar'}
    </div>
  )
}

export default App
