
const useFetch = (url) => {

  const response = fetch(url);
  const json = JSON.stringify(response);


  // let {humidity, pressure, temp} = data.main;
  // temp = Math.round(temp);
  // const weather = data.weather[0].icon ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`: null;
  // const main = data.weather[0].main;
  // const wind = data.wind.speed;
  // const name = data.name;

  return json;
};

export default useFetch;