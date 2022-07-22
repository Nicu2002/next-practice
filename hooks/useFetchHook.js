import { useState, useEffect } from "react";

const initialState = {
  main: {
    humidity: null,
    pressure: null,
    temp: null
  },
  weather: [{icon: null, main: null}],
  wind: {speed: null}
}

const useFetch = (url) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  let {humidity, pressure, temp} = data.main;
  temp = Math.round(temp);
  const weather = data.weather[0].icon ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`: null;
  const main = data.weather[0].main;
  const wind = data.wind.speed;
  const name = data.name;

  return {humidity, pressure, temp, weather, wind, name, main, loading};
};

export default useFetch;