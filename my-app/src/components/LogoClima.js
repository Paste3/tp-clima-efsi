export default function LogoClima() {
    return (
        <>
            <div id="weather_wrapper">
                <div class="weatherCard">
                    <div class="currentTemp">
                        <span class="temp">23&deg;</span>
                        <span class="location">Brussels</span>
                    </div>
                    <div class="currentWeather">
                        <span class="conditions">&#xf00d;</span>
                        <div class="info">
                            <span class="rain">1.3 MM</span>
                            <span class="wind">10 MPH</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}