import WeatherTypes from '../enums/WeatherTypes';

const weatherToEnum = (weather: string): WeatherTypes => {
  const currHour = new Date().getHours();
  const isNighttime = currHour < 7 || 18 < currHour;

  if (isNighttime) {
    switch (weather) {
      case 'Overcast':
      case 'Cloudy':
        return WeatherTypes.CloudyNight;
      case 'Partly cloudy':
        return WeatherTypes.NightPartly;
      case 'clear':
        return WeatherTypes.NightClear;
      default:
        return WeatherTypes.NightClear;
    }
  }
  switch (true) {
    case weather === 'Overcast':
    case weather === 'Cloudy':
      return WeatherTypes.Cloudy;
    case weather === 'Partly cloudy':
      return WeatherTypes.Partly;
    case weather.includes('rain') || weather.includes('hail'):
      return WeatherTypes.Rainy;
    case weather.toLowerCase().includes('fog'):
      return WeatherTypes.Foggy;
    case weather.includes('snow'):
      return WeatherTypes.Snow;
    case weather === 'Sunny':
    default:
      return WeatherTypes.Clear;
  }
};

export default weatherToEnum;
