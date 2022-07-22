import {PublicRouteLayout} from '../../components/PublicRouteLayout/PublicRouteLayout';
// import {PrivateRoute} from '../../components/PrivateRoute/PrivateRoute';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import {AccesRestricted} from '../../components/AccesRestricted/AccesRestricted';

export default function Balti() {

    return(
        // <PrivateRoute permision={true} restriction={<AccesRestricted/>}>
            <PublicRouteLayout>
                <WeatherCard url='Balti'/>
            </PublicRouteLayout>
        // </PrivateRoute>
    )
}