import React from 'react';
import {useContext} from 'react';

import {MyContext} from './../providers/MyProvider';

export const TableBox = React.memo(() => (
  <table className="my-table">
    <TableHeader />
    <TableBody />
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

const TableBody = React.memo(() => {
  return (
    <tbody>
      <TableRow />
    </tbody>
  );
});

export const TableRow = React.memo(() => {
  const {list} = useContext(MyContext);
  return (
    <>
      {list.map(({item,price,amount}, index) => 
        <tr key={index}>
          <td>{item}</td>
          <td>{price}</td>
          <td>{amount}</td>
          <td>{price * amount}</td>
        </tr>      
      )}
    </>
  );
});
