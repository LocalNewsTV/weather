import { useEffect, useState } from "react";
import { Button, Container } from "./DataTab.style";
import chevronRight from "../../assets/chevron-compact-right.svg";

type PropTypes = {
  children?: any;
  width: number;
};
const DataTab = ({ width, children }: PropTypes) => {
  const BASE_TOGGLE = -90;
  const [transform, setTransform] = useState<number>(-100);
  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    setTransform(open ? 0 : BASE_TOGGLE);
  }, [open, width]);
  return (
    <Container
      width={width}
      transform={transform}
      open={open}
      onClick={() => {
        setOpen((open) => !open);
        setTransform(open ? 0 : BASE_TOGGLE);
      }}
    >
      {children}
      <Button visible={!open}>
        <img src={chevronRight} />
      </Button>
    </Container>
  );
};

export default DataTab;
