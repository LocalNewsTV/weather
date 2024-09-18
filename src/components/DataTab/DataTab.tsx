import { useEffect, useState } from "react";
import { Button, Container, Img, SourcedImage, StyledP } from "./DataTab.style";
import chevronRight from "/chevron-compact-right.svg";

type PropTypes = {
  width: number;
  options?: {
    imageSrc?: string;
    textLeft?: string[];
    textRight?: string[];
  };
};
const DataTab = ({ width, options }: PropTypes) => {
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
      onMouseEnter={() => setTransform(toggle ? BASE_TOGGLE + 3 : -3)}
      onMouseLeave={() => setTransform(toggle ? BASE_TOGGLE : 0)}
    >
      {options?.textLeft && <StyledP>{options.textLeft.join(", ")}</StyledP>}
      {options?.imageSrc && <SourcedImage src={options.imageSrc} />}
      {options?.textRight && <StyledP>{options.textRight.join(", ")}</StyledP>}
      <Button
        visible={toggle}
        onClick={() => {
          setToggle((toggle) => !toggle);
          setTransform(toggle ? BASE_TOGGLE : 0);
        }}
      >
        <Img src={chevronRight} />
      </Button>
    </Container>
  );
};

export default DataTab;
