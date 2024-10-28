import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  Boundary,
  Container,
  Gear,
  InputDiv,
  InputTrigger,
  More,
  StyledInput,
} from './Settings.style';
import gear from '../../assets/gear-fill.svg';
import search from '../../assets/search.svg';
import more from '../../assets/list.svg';
import Themes from '../../enums/Themes';
import SettingsModal from '../SettingsModal/SettingsModal';

type PropTypes = {
  setLocation: (val: string) => void;
  setTheme: (val: Themes) => void;
  theme: Themes;
};
const Settings = ({ setLocation, theme, setTheme }: PropTypes) => {
  const BASE_TOGGLE = 77;
  const [transform, setTransform] = useState<number>(BASE_TOGGLE);
  const [searchString, setSearchString] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const updateLocation = () => setLocation(searchString);
  const closeModal = () => setShowModal(false);
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setSearchString(evt.target.value);
  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      updateLocation();
    }
  };

  return (
    <>
      <Boundary>
        <Container
          transform={transform}
          onMouseEnter={() => setTransform(toggle ? 3 : BASE_TOGGLE - 3)}
          onMouseLeave={() => setTransform(toggle ? 0 : BASE_TOGGLE)}
        >
          <Gear
            onClick={() => {
              setToggle((toggle) => !toggle);
              setTransform(toggle ? BASE_TOGGLE : 0);
            }}
          >
            <img src={gear} />
          </Gear>
          <InputDiv>
            <StyledInput
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={'Change Locale'}
              value={searchString ?? ''}
            />
            <InputTrigger onClick={updateLocation}>
              <img src={search} />
            </InputTrigger>
          </InputDiv>
          <More onClick={() => setShowModal((prev) => !prev)}>
            <img src={more} />
          </More>
        </Container>
      </Boundary>
      <SettingsModal
        display={showModal}
        theme={theme}
        handleClose={closeModal}
        setTheme={setTheme}
      />
    </>
  );
};

export default Settings;
