import React, { useEffect, useState } from "react";
const axios = require('axios');

const Valores = (props) => {
    const [datos, setDatos] = useState([]);
    console.log(props.id)
    let ghostList = [];
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/all`)
        .then(function (response) {
            console.log(response.data.name);
            ghostList=(response.data)
        })
        .catch(function (error) {
            console.log("No se han traido los datos de :( " + props.name)
            console.log(error);
        })
        .then(function () {
            console.log("Finally:")
            console.log(ghostList)
            setDatos(ghostList);
        })
    }, [props.id])
    return (
        <>
            {
                datos.map(
                    (i) => (
                        <>
                            <option value={i.translations.cym.official}>{i.translations.spa.official}</option>
                        </>
                    )
                )
            }
        </>
    );
}

export default Valores;