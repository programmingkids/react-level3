import React from "react";

export const TableBox = React.memo(({ list }) => (
  <table className="my-table">
    <TableHeader />
    <TableBody list={list} />
  </table>
));

export const TableHeader = React.memo(() => (
  <thead>
    <tr>
      <th>商品</th>
      <th>金額</th>
      <th>個数</th>
      <th>小計</th>
    </tr>
  </thead>
));

const TableBody = React.memo(({ list }) => (
  <tbody>
    <TableRow list={list} />
  </tbody>
));

export const TableRow = React.memo(({ list }) => {
  return (
    <>
      {list.map(({ item, price, amount }, index) => (
        <tr key={index}>
          <td>{item}</td>
          <td>{price}</td>
          <td>{amount}</td>
          <td>{price * amount}</td>
        </tr>
      ))}
    </>
  );
});
