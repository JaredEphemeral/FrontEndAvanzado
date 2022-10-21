import { useState } from "react"

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState('');
    const [fecha, setFecha] = useState('');
    const [terminada, setTerminada] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!texto){
            alert('No ingreso la descripción')
            return
        }

        if(!fecha){
            alert('No ingreso la fecha')
            return
        }        
        const objt = {
            id: Math.floor(Math.random() * 100000),
            texto: texto,
            fecha: fecha,
            terminada: terminada
        }

        onAdd(objt)
    }

    return (
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label>Tarea:</label>
                <input 
                    type="text" placeholder="Descripción"
                    value={texto} 
                    onChange = { (e) => setTexto (e.target.value) }
                />
            </div>
            <div className="form-control">
                <label>Fecha:</label>
                <input 
                type="text" placeholder="Fecha" 
                value={fecha} 
                onChange = { (e) => setFecha (e.target.value) }
                />
            </div>
            <div className="form-control-check">
                <label>Terminada:</label>
                <input 
                    type="checkbox" 
                    checked = {terminada}
                    value = {terminada}
                    onChange = { (e) => setTerminada(e.currentTarget.checked) }
                />
            </div>
            <input type="submit" value="Agregar nueva tarea" className="btn btn-block" />
        </form>
    )
}

export default AddTarea