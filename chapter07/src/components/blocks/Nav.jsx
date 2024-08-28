import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">ホーム</Link>
      </li>
      <li>
        <Link to="/add">新規メモ作成</Link>
      </li>
      <li>
        <Link to="/completed">完了済みメモ一覧</Link>
      </li>
      <li>
        <Link to="/about">アプリについて</Link>
      </li>
    </ul>
  </nav>
);
