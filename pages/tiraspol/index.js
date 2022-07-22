import {PublicRouteLayout} from '../../components/PublicRouteLayout/PublicRouteLayout';
import WeatherCard from '../../components/WeatherCard/WeatherCard';


export default function Tiraspol() {

    return(
        <PublicRouteLayout>
            <WeatherCard url='Tiraspol'/>
        </PublicRouteLayout>
    )
}