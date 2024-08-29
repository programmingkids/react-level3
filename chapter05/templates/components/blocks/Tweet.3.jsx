import { useContext } from 'react';
import { DispatchContext } from './../providers/DispatchContext';

export const Tweet = ({ id, body, like }) => {
  const dispatch = useContext(DispatchContext);

  const handleClickLike = (e) => {
    dispatch({
      type: 'like',
      payload: { id },
    });
  };

  body = body.replaceAll('\n', '<br>');

  return (
    <div className="tweet">
      <div className="body" dangerouslySetInnerHTML={{ __html: body }}></div>
      <div className="likeBox">
        <div>Like: {like}</div>
        <button onClick={handleClickLike}>Like</button>
      </div>
    </div>
  );
};
