import {PublicRouteLayout} from '../components/PublicRouteLayout/PublicRouteLayout';
// // import {PrivateRoute} from '../../components/PrivateRoute/PrivateRoute';
import WeatherCard from '../components/WeatherCard/WeatherCard';
// import {AccesRestricted} from '../../components/AccesRestricted/AccesRestricted';


export default function City(props) {
    return(
        // <PrivateRoute permision={true} restriction={<AccesRestricted/>}>
            <PublicRouteLayout title={props.name}>
                <WeatherCard data={props}/>
            </PublicRouteLayout>
        // </PrivateRoute>
    )
}

export async function getServerSideProps({query, res}) {

    const urlToFetch = `https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=867439c00cda10c9f4437ec8d89635f6&units=metric`;
    const result = await fetch(urlToFetch)
    const data = await result.json()
    
    if(data.name) {
        let {humidity, pressure, temp} = data.main;
        temp = Math.round(temp);
        const weather = data.weather[0].icon ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`: null;
        const main = data.weather[0].main;
        const wind = data.wind.speed;
        const name = data.name;
        return {
            props: {humidity, pressure, temp, weather, main, wind, name}
        }
    }

    return {
      props: {humidity: null, pressure: null, temp: null, weather: null, main: null, wind: null, name: null}
    }
}