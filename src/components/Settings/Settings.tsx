import { useState } from "react";
import { Boundary, Button, Container, Img } from "./Settings.style";
import settings from "/gear-fill.svg";

const Settings = () => {
  const BASE_TOGGLE = 77;
  const [transform, setTransform] = useState<number>(BASE_TOGGLE);
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <Boundary>
      <Container
        transform={transform}
        onClick={() => {
          setToggle((toggle) => !toggle);
          setTransform(toggle ? BASE_TOGGLE : 0);
        }}
        onMouseEnter={() => setTransform(toggle ? 3 : BASE_TOGGLE - 3)}
        onMouseLeave={() => setTransform(toggle ? 0 : BASE_TOGGLE)}
      >
        <Button>
          <Img src={settings} />
        </Button>
      </Container>
    </Boundary>
  );
};

export default Settings;
