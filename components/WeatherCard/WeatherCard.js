import Image from 'next/image'
import useFetch from '../../hooks/useFetchHook.js';
// import './WeatherCard.module.scss';

import humidityImg from '../../static/img/humidity.png';
import barometerImg from '../../static/img/barometer.png';
import windImg from '../../static/img/wind.png';

import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const WeatherCard = ({url}) => {

    const urlToFetch = `https://api.openweathermap.org/data/2.5/weather?q=${url}&appid=867439c00cda10c9f4437ec8d89635f6&units=metric`;
    const {humidity, pressure, temp, weather, wind, name, main, loading} = useFetch(urlToFetch);

    if(loading == true) {
        return <LoadingOutlined spin/>;
    }
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



export default WeatherCard;