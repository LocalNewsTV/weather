import storageKeys from '../constants/storageKeys';
import Themes from '../enums/Themes';

/**
 * @desc Helpers for LocalStorage behaviours;
 */
class UserSettings {
  static readonly getTheme = () => {
    return (localStorage.getItem(storageKeys.theme) as Themes) ?? Themes.Mowgli;
  };
  static readonly setTheme = (theme: Themes) => {
    localStorage.setItem(storageKeys.theme, theme);
  };
}

export default UserSettings;
