import React, { useEffect, useState } from "react";
const axios = require('axios');
export default function Clima() {
    const [TempValue, setTemp] = useState([]);
    const [MaxTempValue, setMaxTemp] = useState([]);
    const [MinTempValue, MinsetTemp] = useState([]);

    let datos = {
        temperatura: TempValue,
        maxtemp: MaxTempValue,
        mintemp: MinTempValue,
    }

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,argentina&APPID=467eb2e2a1738c82e813a30610d7c354`)
            .then(function (response) {
                console.log(response.main.temp)
                setTemp(response.main.temp)
                console.log(response.main.temp_max)
                setMaxTemp(response.main.temp_max)
                console.log(response.main.temp_min)
                MinsetTemp(response.main.temp_min)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                console.log("Finally:")
                console.log(datos)
            })
    })
    return (
        {
            datos
        }
    );
}