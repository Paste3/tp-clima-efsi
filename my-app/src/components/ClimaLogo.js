import ClimaDatos from "./ClimaDatos";

export default function ClimaLogo(props) {
    
    let datos = ClimaDatos()

    return (
        <>
            <div id="weather_wrapper">
                <div class="weatherCard">
                    <div class="currentTemp">
                        <span class="temp">{datos.temperatura}&deg;</span>
                    </div>
                    <div class="currentWeather">
                        <span class="conditions">&#xf00d;</span>
                        <div class="info">
                            <span class="rain">max {datos.maxtemp}</span>
                            <span class="wind">min {datos.mintemp}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}