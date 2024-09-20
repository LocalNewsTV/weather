import Clock from "../Clock/Clock";
import DataTab from "../DataTab/DataTab";
import { DataImg, SourcedImage, StyledP } from "../DataTab/DataTab.style";
import { Main } from "./Content.style";
import thermometer from "../../assets/thermometer-half.svg";
import fingerprint from "../../assets/fingerprint.svg";
import clock from "../../assets/clock.svg";
import moisture from "../../assets/moisture.svg";
import wind from "../../assets/wind.svg";

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
    weatherImg: "https:" + weather?.current?.condition?.icon,
  };

  return (
    <Main>
      <DataTab width={70}>
        <SourcedImage src={parsedWeather.weatherImg} />
        <StyledP>{parsedWeather.location}</StyledP>
      </DataTab>
      <DataTab width={85}>
        <DataImg src={thermometer} />
        <StyledP>{parsedWeather[unit].temp}</StyledP>
        <DataImg src={fingerprint} />
        <StyledP>{parsedWeather[unit].feels}</StyledP>
      </DataTab>
      <DataTab width={100}>
        <DataImg src={clock} />
        <StyledP>
          <Clock tz_id={parsedWeather.timeZone} />
        </StyledP>
        <DataImg src={moisture} />
        <StyledP>{parsedWeather.humidity}</StyledP>
        <DataImg src={wind} />
        <StyledP>{parsedWeather[unit].wind}</StyledP>
      </DataTab>
    </Main>
  );
};
export default Content;
