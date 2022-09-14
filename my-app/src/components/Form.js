import Valores from "./Valores";
import Clima from "./Clima";
import {useState} from "react"

export default function Form() {

    const handleChangePais = (e) => {
        setPais(e.target.value);
    };
    
    const handleChangeCiudad = (e) => {
        setCiudad(e.target.value);
    };

    const [pais,setPais] = useState("")
    const [ciudad,setCiudad] = useState("")


    function buscar(){
        <Clima pais={pais} ciudad={ciudad}></Clima>
    }

    return (
        <>
            <div class="form-group">
                <input type="text" name="pais" value={pais} onchange={handleChangePais} class="form-control myinp" id="exampleFormControlInput1" placeholder="Ingrese la ciudad" />
            </div>
            <select name="ciudad" value={ciudad} onchange={handleChangeCiudad}  class="custom-select myin" >
                <option selected>Seleccione un pais</option>
                <Valores></Valores>
            </select>

            <button type="button" class="btn btn-success myi" onclick={buscar}>Buscar pais</button>
        </>
    );
}