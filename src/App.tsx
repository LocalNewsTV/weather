import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Settings from "./components/Settings/Settings";
import Mowgli from "./assets/Mowgli1.jpg";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<Record<string, any>>();
  const [location, setLocation] = useState<string>("Richmond BC");
  document.body.style.backgroundImage = `url(${Mowgli})`;

  useEffect(() => {
    (async () => {
      try {
        await fetch("https://localnewstv-todo.onrender.com/api/weather", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
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
