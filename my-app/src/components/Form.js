import Valores from "./Valores";
import { useState } from "react"
import ValoresCiudad from "./ValoresCiudad";

export default function Form() {

    const [pais, setPais] = useState("")
    const [ciudad, setCiudad] = useState("")


    function buscar() {
        setCiudad(ciudad)
        setPais(pais)
    }

    return (
        <>
            <select name="pais" value={pais} onChange={(e) => setPais(e.target.value)} class="custom-select myin" >
                <option selected>Seleccione un pais</option>
                <Valores></Valores>
            </select>
            <select name="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} class="custom-select myin" >
                <option selected>Seleccione una ciudad</option>
                <ValoresCiudad pais={pais}></ValoresCiudad>
            </select>
            <button type="button" class="btn btn-success myi" onClick={buscar}>Buscar pais</button>
        </>
    );
}