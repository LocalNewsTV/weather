import DataTab from "../DataTab/DataTab";
import { Main } from "./Content.style";

type PropTypes = {
  weather: Record<string, any> | null;
};

const Content = ({ weather }: PropTypes) => {
  enum Units {
    Metric,
    Imperial,
  }
  const unit = Units.Metric;
  const parsedWeather = {
    [Units.Metric]: {
      temp: `${weather?.current?.temp_c}C\u00b0`,
      feels: `Feels Like ${weather?.current?.feelslike_c}C\u00b0`,
      wind: `Wind: ${weather?.current?.wind_kph}KPH`,
    },
    [Units.Imperial]: {
      temp: `${weather?.current?.temp_f}F\u00b0`,
      feels: `Feels Like ${weather?.current?.feelslike_f}F\u00b0`,
      wind: `Wind: ${weather?.current?.wind_mph}MPH`,
    },
    humidity: `Humidity: ${weather?.current?.humidity}`,
  };

  return (
    <Main>
      <DataTab
        width={70}
        options={{
          imageSrc: "https:" + weather?.current?.condition?.icon,
          textRight: [
            `${weather?.location?.name}, ${weather?.location?.country}`,
          ],
        }}
      />
      <DataTab
        width={85}
        options={{
          textLeft: [parsedWeather[unit].temp, parsedWeather[unit].feels],
        }}
      />
      <DataTab
        width={100}
        options={{
          textLeft: [parsedWeather.humidity, parsedWeather[unit].wind],
        }}
      />
    </Main>
  );
};
export default Content;
