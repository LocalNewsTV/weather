import Spinner from '../../assets/spinner.svg';
import { Img } from './Loading.style';

const Loading = () => {
  const phrasing = [
    'Cleaning out the nooks and crannies...',
    'Transmitting to outer space...',
    'Coming back with milk...',
    'Aligning the stars for optimal performance...',
    'Activating turbo mode...',
    'Defragmenting the universe...',
    'Calculating weather patterns...',
    'Summoning meteorologists...',
    'Recharging the coffee supply...',
    'Turning off and on my sense of humour',
    'Applying a fresh coat of binary paint...',
    'Summoning a team of caffeinated squirrels...',
  ];

  return (
    <>
      <Img src={Spinner} />
      <p>Loading</p>
      <p>{phrasing[(phrasing.length * Math.random()) << 0]}</p>
    </>
  );
};

export default Loading;
