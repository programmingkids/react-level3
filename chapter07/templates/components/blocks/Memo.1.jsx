import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DispatchContext } from './../providers/DispatchContext';

export const Memo = ({ id, body, completed }) => {
  return (
    <div className="memo">
      <div className="card">
        <h3 className="content1">{body}</h3>
        <div className="content2">
          ステータス：{completed ? '完了済み' : '未完了'}
        </div>
      </div>
    </div>
  );
};
