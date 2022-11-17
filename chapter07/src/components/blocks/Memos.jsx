import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { Memo } from './Memo';

export const Memos = ({completedFlag}) => {
  const { memos } = useContext(StateContext);
  return (
    <>
      {memos.map(m => {
        if( m.completed === completedFlag ) {
          return <Memo key={m.id} {...m} />;
        }
      })}
    </>
  );
};
