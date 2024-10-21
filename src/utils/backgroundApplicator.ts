import { BUCKET_ROOT } from '../constants/consts';
import Themes from '../enums/Themes';
import weatherToEnum from './weatherToEnum';

enum Frame {
  Portrait = 'portrait',
  Landscape = 'landscape',
}
//firebasestorage.googleapis.com/v0/b/localnews-weather-store.appspot.com/o/Bloedel%2Flandscape%2F1.webp?alt=media&token=9e741029-971c-4139-a67e-45ff1fd52646
/**
 * @desc Given the current screen being used, and selected theme, grabs a background image source
 * @returns Image Source
 */
// https: const backgroundApplicator = (
//   theme: Themes,
//   weather: string = null,
// ): string => {
//   if (theme === Themes.Weather && weather !== undefined) {
//     const weatherEnum = weatherToEnum(weather);
//     const weatherKeys = Object.keys(mainObject[theme][weatherEnum]);
//     return mainObject[theme][weatherEnum][
//       weatherKeys[(weatherKeys.length * Math.random()) << 0]
//     ];
//   } else {
//     const { width, height } = screen;
//     const frame: Frame = width > height ? Frame.Landscape : Frame.Portrait;
//     const keys = Object.keys(mainObject[theme][frame]);
//     return mainObject[theme][frame][keys[(keys.length * Math.random()) << 0]];
//   }
// };

const getItemsList = async (prefix: string): Promise<string> => {
  const response = await fetch(`${BUCKET_ROOT}?prefix=${prefix}/`);
  const data = await response.json();
  return `${BUCKET_ROOT}${encodeURIComponent(data.items[(data.items.length * Math.random()) << 0].name)}?alt=media`;
};

const backgroundApplicator = async (theme: Themes, weather: string = null) => {
  if (theme === Themes.Weather && weather !== undefined) {
    const weatherEnum = weatherToEnum(weather);
    return getItemsList(`${theme}/${weatherEnum}`);
  } else {
    const { width, height } = screen;
    const frame: Frame = width > height ? Frame.Landscape : Frame.Portrait;
    return getItemsList(`${theme}/${frame}`);
  }
};
export default backgroundApplicator;
