import Clock from "../Clock/Clock";
import DataTab from "../DataTab/DataTab";
import { DataImg, SourcedImage, StyledP } from "../DataTab/DataTab.style";
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
      feels: `${weather?.current?.feelslike_c}C\u00b0`,
      wind: `${weather?.current?.wind_kph}KPH`,
    },
    [Units.Imperial]: {
      temp: `${weather?.current?.temp_f}F\u00b0`,
      feels: `${weather?.current?.feelslike_f}F\u00b0`,
      wind: `${weather?.current?.wind_mph}MPH`,
    },
    location: `${weather?.location?.name}, ${weather?.location?.country}`,
    humidity: ` ${weather?.current?.humidity}%`,
    timeZone: weather?.location?.tz_id,
    weatherImg: "http:" + weather?.current?.condition?.icon,
  };

  return (
    <Main>
      <DataTab width={70}>
        <SourcedImage src={parsedWeather.weatherImg} />
        <StyledP>{parsedWeather.location}</StyledP>
      </DataTab>
      <DataTab width={85}>
        <DataImg src={"/thermometer-half.svg"} />
        <StyledP>{parsedWeather[unit].temp}</StyledP>
        <DataImg src={"/fingerprint.svg"} />
        <StyledP>{parsedWeather[unit].feels}</StyledP>
      </DataTab>
      <DataTab width={100}>
        <DataImg src={"/clock.svg"} />
        <StyledP>
          <Clock tz_id={parsedWeather.timeZone} />
        </StyledP>
        <DataImg src={"/moisture.svg"} />
        <StyledP>{parsedWeather.humidity}</StyledP>
        <DataImg src={"/wind.svg"} />
        <StyledP>{parsedWeather[unit].wind}</StyledP>
      </DataTab>
    </Main>
  );
};
export default Content;
