import { useEffect, useState } from 'react';
import { Text } from './Clock.style';

type PropTypes = {
  tz_id: string;
};
const Clock = ({ tz_id }: PropTypes) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', { timeZone: tz_id }),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: tz_id,
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  });
  return <Text>{time}</Text>;
};

export default Clock;
