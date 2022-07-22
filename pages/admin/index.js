import {PublicRouteLayout} from '../../components/PublicRouteLayout/PublicRouteLayout';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import AdminPanel from '../../components/AdminPanel/AdminPanel';


export default function Admin() {

    return(
        <PublicRouteLayout>
            <AdminPanel/>
        </PublicRouteLayout>
    )
}