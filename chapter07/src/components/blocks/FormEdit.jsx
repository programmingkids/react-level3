import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { DispatchContext } from './../providers/DispatchContext';
import { StateContext } from './../providers/StateContext';

export const FormEdit = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { memos } = useContext(StateContext);
  const {id} = useParams();
  
  // パラメータに基づいて、メモのデータを抽出
  const memo = memos.find(m => m.id === parseInt(id));
  const [ body, setBody ] = useState(memo.body);
  
  const handleChangeBody = (e) => {
    setBody(body => e.target.value);
  };
  
  const handleClickEditMemo = (e) => {
    dispatch({
      type: 'edit',
      payload : {
        id : memo.id,
        body : body,
      }
    });
    setBody('');
    navigate('/');
  };
  
  return (
    <div className="memoForm">
      <div className="memoBody">
        メモ：<input type="text" onChange={handleChangeBody} value={body} />
      </div>
      <div>
        <div className="body">ステータス：{memo.completed ? '完了済み' : '未完了'}</div>
      </div>
      <div className="memoAddButton">
        <button onClick={handleClickEditMemo} className="primary">メモ修正登録</button>
      </div>
    </div>
  );
};
