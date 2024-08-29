import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { Tweet } from './Tweet';

export const Tweets = () => {
  const { tweets } = useContext(StateContext);
  return (
    <>
      {tweets
        .slice()
        .reverse()
        .map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
    </>
  );
};
