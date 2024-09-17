import DataTab from "../DataTab/DataTab";
import { Main } from "./Content.style";

const Content = () => {
  return (
    <Main>
      <DataTab width={70} />
      <DataTab width={85} />
      <DataTab width={100} />
    </Main>
  );
};
export default Content;
