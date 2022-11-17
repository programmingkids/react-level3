import { useContext } from 'react';
import { Link } from "react-router-dom";
import { DispatchContext } from './../providers/DispatchContext';

export const Memo = ({ id, body, completed }) => {
  const dispatch = useContext(DispatchContext);
  
  const handleClickDelete = (e) => {
    dispatch({
      type : 'delete',
      payload: { id },
    });
  };
  
  const handleClickComplete = (e) => {
    dispatch({
      type : 'complete',
      payload: { id, completed },
    });
  };
  
  return (
    <div className="memo">
      <div className="card">
        <h3 className="content1">{body}</h3>
        <div className="content2">ステータス：{completed ? '完了済み' : '未完了'}</div>
        <div className="content3">
          id: {id} | <Link to={`/edit/${id}`}>編集</Link>
        </div>
        <div className="content4">
          <button onClick={handleClickDelete} className="primary">削除</button>
          <button onClick={handleClickComplete} className="primary">{completed ? '未完了' : '完了'}</button>
        </div>
      </div>
    </div>
  );
};
