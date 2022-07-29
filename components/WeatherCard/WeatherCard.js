import Image from 'next/image'

import humidityImg from '../../images/img/humidity.png';
import barometerImg from '../../images/img/barometer.png';
import windImg from '../../images/img/wind.png';


const WeatherCard = ({data: {humidity, pressure, temp, weather, main, wind, name}}) => {

    if(name) {
        return (
            <div className="weatherBg">
                 <div className="weatherCard">
                     <h1>{name}</h1>
                     <div className="mainWeather">
                         <Image src={weather} alt="wheather" width={150} height={150}/>
                         <p>{temp} °C</p>
                     </div>
                     <div className="info">
                         <p><Image src={humidityImg} alt="" width={50} height={50}/>{humidity} %</p>
                         <p><Image src={windImg} alt="" width={50} height={50}/>{wind} m/s</p>
                         <p><Image src={barometerImg} alt="" width={50} height={50}/>{pressure} hPa</p>
                     </div>
                 </div>
            </div>
        );
    }
    return(
        <div>No content</div>
    );
}



export default WeatherCard;