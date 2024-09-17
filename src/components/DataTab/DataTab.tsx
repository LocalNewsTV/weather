import { useEffect, useState } from "react";
import { Button, Container, Img } from "./DataTab.style";
import chevronRight from "/chevron-compact-right.svg";

type PropTypes = {
  width: number;
};
const DataTab = ({ width }: PropTypes) => {
  const BASE_TOGGLE = -90;
  const [stateWidth, setStateWidth] = useState<number>(0);
  const [transform, setTransform] = useState<number>(-100);
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    setStateWidth(width);
    setTransform(0);
  }, [width]);
  return (
    <Container
      width={stateWidth}
      transform={transform}
      onClick={() => {
        setToggle((toggle) => !toggle);
        setTransform(toggle ? BASE_TOGGLE : 0);
      }}
      onMouseEnter={() => setTransform(toggle ? BASE_TOGGLE + 3 : -3)}
      onMouseLeave={() => setTransform(toggle ? BASE_TOGGLE : 0)}
    >
      <Button visible={toggle}>
        <Img src={chevronRight} />
      </Button>
    </Container>
  );
};

export default DataTab;
