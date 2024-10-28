import { ChangeEvent } from 'react';
import Themes from '../../enums/Themes';
import {
  Button,
  Content,
  Footer,
  Header,
  ModalContainer,
} from './SettingsModal.style';
import UserSettings from '../../utils/UserSettings';

type PropTypes = {
  display: boolean;
  handleClose: () => void;
  theme: Themes;
  setTheme: (val: Themes) => void;
};
const SettingsModal = ({
  display,
  theme,
  setTheme,
  handleClose,
}: PropTypes) => {
  const handleThemeChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTheme(evt.target.value as Themes);
    UserSettings.setTheme(evt.target.value as Themes);
  };
  return (
    <ModalContainer showModal={display}>
      <Header>
        <h2>Settings</h2>
      </Header>
      <Content>
        <ul>
          <li>
            <label htmlFor="app-theme">App Theme</label>
            <select id="app-theme" value={theme} onChange={handleThemeChange}>
              {Object.keys(Themes).map((item) => (
                <option key={item} value={Themes[item]}>
                  {item}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </Content>
      <Footer>
        <Button onClick={handleClose}>Close</Button>
      </Footer>
    </ModalContainer>
  );
};

export default SettingsModal;
