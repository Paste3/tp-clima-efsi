import Valores from "./Valores";
import { useState } from "react"

export default function Form() {

    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")


    function buscar() {

    }

    return (
        <>
            <div class="form-group">
                <input name="pais" type="text" value={pais} onChange={(e) => setPais(e.target.value)} class="form-control myinp" id="exampleFormControlInput1" placeholder="Ingrese la ciudad" />
            </div>
            <select name="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} class="custom-select myin" >
                <option selected>Seleccione un pais</option>
                <Valores></Valores>
            </select>

            <button type="button" class="btn btn-success myi" onClick={buscar}>Buscar pais</button>
        </>
    );
}