import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  Boundary,
  Container,
  Gear,
  InputDiv,
  InputTrigger,
  StyledInput,
} from "./Settings.style";
import gear from "../../assets/gear-fill.svg";
import search from "../../assets/search.svg";

type PropTypes = {
  setLocation: (val: string) => void;
};
const Settings = ({ setLocation }: PropTypes) => {
  const BASE_TOGGLE = 77;
  const [transform, setTransform] = useState<number>(BASE_TOGGLE);
  const [searchString, setSearchString] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const updateLocation = () => setLocation(searchString);
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setSearchString(evt.target.value);
  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    console.log(evt.key);
    if (evt.key === "Enter") {
      evt.preventDefault();
      updateLocation();
    }
  };

  return (
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
            placeholder={"Change Locale"}
            value={searchString ?? ""}
          />
          <InputTrigger onClick={updateLocation}>
            <img src={search} />
          </InputTrigger>
        </InputDiv>
      </Container>
    </Boundary>
  );
};

export default Settings;
