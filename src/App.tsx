import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Settings from "./components/Settings/Settings";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<Record<string, any>>();
  document.body.style.backgroundImage = `url('/Mowgli1.jpg')`;

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          "https://localnewstv-todo.onrender.com/api/weather",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ location: "Richmond BC" }),
          }
        );
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
      <Settings />
      <Content />
    </>
  );
};

export default App;
