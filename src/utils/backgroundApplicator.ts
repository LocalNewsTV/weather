import Mowgli from '../assets/photos/Mowgli';
import Weather from '../assets/photos/Weather';
import Themes from '../enums/Themes';
import weatherToEnum from './weatherToEnum';

const mainObject = { Mowgli, Weather };

enum Frame {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

/**
 * @desc Given the current screen being used, and selected theme, grabs a background image source
 * @returns Image Source
 */
const backgroundApplicator = (
  theme: Themes,
  weather: string = null,
): string => {
  if (theme === Themes.Weather && weather !== undefined) {
    const weatherEnum = weatherToEnum(weather);
    const weatherKeys = Object.keys(mainObject[theme][weatherEnum]);
    return mainObject[theme][weatherEnum][
      weatherKeys[(weatherKeys.length * Math.random()) << 0]
    ];
  } else {
    const { width, height } = screen;
    const frame: Frame = width > height ? Frame.Landscape : Frame.Portrait;
    const keys = Object.keys(mainObject[theme][frame]);
    return mainObject[theme][frame][keys[(keys.length * Math.random()) << 0]];
  }
};

export default backgroundApplicator;
