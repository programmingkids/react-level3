import { Outlet } from "react-router-dom";
import { Nav } from "./../blocks/Nav";
import { Title } from "./../blocks/Title";

export const Layout = () => {
  return (
    <div className="container">
      <Title>メモ帳アプリ</Title>
      <Nav />
      <Outlet />
    </div>
  );
};
