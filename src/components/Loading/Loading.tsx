import Spinner from '../../assets/spinner.svg';
import { Img } from './Loading.style';

const Loading = () => {
  return (
    <>
      <Img src={Spinner} />
      <p>Loading</p>
    </>
  );
};

export default Loading;
