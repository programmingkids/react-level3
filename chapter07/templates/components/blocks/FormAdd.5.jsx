import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DispatchContext } from './../providers/DispatchContext';

export const FormAdd = () => {
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const [body, setBody] = useState('');

  const handleChangeBody = (e) => {
    setBody((body) => e.target.value);
  };

  const handleClickAddMemo = (e) => {
    dispatch({
      type: 'add',
      payload: {
        body: body,
      },
    });
    setBody('');
    navigate('/');
  };

  return (
    <div className="memoForm">
      <div className="memoBody">
        メモ：
        <input type="text" onChange={handleChangeBody} value={body} />
      </div>
      <div className="memoAddButton">
        <button onClick={handleClickAddMemo} className="primary">
          メモ追加
        </button>
      </div>
    </div>
  );
};
