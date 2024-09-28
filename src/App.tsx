import { useEffect, useState } from 'react';
import './App.css';
import '@fontsource-variable/roboto-mono';
import '@fontsource/roboto';
import Content from './components/Content/Content';
import Settings from './components/Settings/Settings';
import backgroundApplicator from './utils/backgroundApplicator';
import Themes from './enums/Themes';

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<Record<string, any>>();
  const [theme] = useState<Themes>(Themes.Mowgli);
  const [location, setLocation] = useState<string>(() => {
    if (navigator.geolocation) {
      // If GPS Available, set initial GPS Render to users location
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude},${longitude}`);
      });
    }
    return '';
  });

  // Set background image on first render, or theme change
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundApplicator(theme)})`;
  }, [theme]);

  useEffect(() => {
    (async () => {
      if (!location) {
        return;
      }
      try {
        await fetch('https://localnewstv-todo.onrender.com/api/weather', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ location }),
        })
          .then((response) => response.json())
          .then((r) => setWeather(r));
      } catch (e) {
        console.error(e);
      }
    })();
  }, [location]);
  return (
    <>
      <Settings setLocation={setLocation} />
      {weather && <Content weather={weather} />}
    </>
  );
};

export default App;
