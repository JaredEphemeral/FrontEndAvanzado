import Header from "./components/Header";
import Tareas from "./components/Tareas";

function App() {

  return (
    <div className="container">
      <Header titulo = "Jared" fecha = "18-10-2022" />
      <Tareas />
    </div>
  )
}

export default App
