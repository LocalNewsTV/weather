import { ChangeEvent } from 'react';
import Themes from '../../enums/Themes';
import { Content, Footer, Header, ModalContainer } from './SettingsModal.style';
import UserSettings from '../../utils/UserSettings';

type PropTypes = {
  display: boolean;
  theme: Themes;
  setTheme: (val: Themes) => void;
};
const SettingsModal = ({ display, theme, setTheme }: PropTypes) => {
  const handleThemeChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTheme(evt.target.value as Themes);
    UserSettings.setTheme(evt.target.value as Themes);
  };
  return (
    <ModalContainer display={display}>
      <Header>
        <h2>Settings</h2>
      </Header>
      <Content>
        <select value={theme} onChange={handleThemeChange}>
          {Object.keys(Themes).map((item) => (
            <option value={Themes[item]}>{item}</option>
          ))}
        </select>
      </Content>
      <Footer></Footer>
    </ModalContainer>
  );
};

export default SettingsModal;
