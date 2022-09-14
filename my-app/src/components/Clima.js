import React, { useEffect, useState } from "react";
const axios = require('axios');
const Clima = (props) => {
    const [TempValue, setTemp] = useState([]);
    const [MaxTempValue, setMaxTemp] = useState([]);
    const [MinTempValue, MinsetTemp] = useState([]);

    let datos = {
        temperatura: TempValue,
        maxtemp: MaxTempValue,
        mintemp: MinTempValue,
    }

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.ciudad},${props.pais}&APPID=467eb2e2a1738c82e813a30610d7c354`)
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
        <>
        <div id="weather_wrapper">
            <div class="weatherCard">
                <div class="currentTemp">
                    <span class="temp">{TempValue}&deg;</span>
                    <span class="location">{props.ciudad}</span>
                </div>
                <div class="currentWeather">
                    <span class="conditions">&#xf00d;</span>
                    <div class="info">
                        <span class="rain">max {MaxTempValue}</span>
                        <span class="wind">min {MinTempValue}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Clima