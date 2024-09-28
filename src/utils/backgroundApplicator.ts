import Mowgli from '../assets/photos/Mowgli';
import Themes from '../enums/Themes';

const mainObject = { Mowgli };

enum Frame {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

/**
 * @desc Given the current screen being used, and selected theme, grabs a background image source
 * @returns Image Source
 */
const backgroundApplicator = () => {
  const { width, height } = screen;
  const frame: Frame = width > height ? Frame.Landscape : Frame.Portrait;
  const theme = Themes.Mowgli; // TODO
  const keys = Object.keys(mainObject[theme][frame]);
  return mainObject[theme][frame][keys[(keys.length * Math.random()) << 0]];
};

export default backgroundApplicator;
