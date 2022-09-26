import Valores from "./Valores";
import ValoresCiudad from "./ValoresCiudad";
import React, {useState } from "react";
const axios = require('axios');

export default function Form() {

    const [pais, setPais] = useState("Argentina")
    const [ciudad, setCiudad] = useState("")

    function Buscar(props) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=467eb2e2a1738c82e813a30610d7c354`)
            .then(function (response) {
                props.setTemp(response.data.main.temp-273.15)
                props.setMaxTemp(response.data.main.temp_max-273.15)
                props.MinsetTemp(response.data.main.temp_min-273.15)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log("Finally:")
            })
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
            <button type="button" class="btn btn-success myi" onClick={Buscar}>Buscar pais</button>
        </>
    );
}