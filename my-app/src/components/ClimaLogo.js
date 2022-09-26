
export default function ClimaLogo(props) {

    return (
        <>
            <div id="weather_wrapper">
                <div class="weatherCard">
                    <div class="currentTemp">
                        <span class="temp">{props.temp}&deg;</span>
                    </div>
                    <div class="currentWeather">
                        <span class="conditions">&#xf00d;</span>
                        <div class="info">
                            <span class="rain">max {props.maxtemp}</span>
                            <span class="wind">min {props.mintemp}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}