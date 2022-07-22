import {PublicRouteLayout} from '../components/PublicRouteLayout/PublicRouteLayout';

import WeatherCard from '../components/WeatherCard/WeatherCard';

export default function Home() {
    return (
      <PublicRouteLayout>
          <WeatherCard url='Chisinau'/>
      </PublicRouteLayout>
    )
}
