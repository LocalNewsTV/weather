import { BUCKET_ROOT } from '../constants/consts';
import Themes from '../enums/Themes';
import weatherToEnum from './weatherToEnum';

enum Frame {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

/**
 * @desc Given the current screen being used, and selected theme, grabs a background image source
 * @returns Image Source
 */

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
