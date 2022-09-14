import Valores from "./Valores";
import CitySelector from "react-city-selector";
export default function Form() {
    return (
        <>
            <div class="form-group">
                <input type="text" class="form-control myinp" id="exampleFormControlInput1" placeholder="Ingrese la ciudad" />
            </div>
            <select class="custom-select myin">
                <option selected>Seleccione un pais</option>
                <Valores></Valores>
            </select>

            <button type="button" class="btn btn-success myi">Buscar pais</button>
        </>
    );
}