import './App.css';
import React, { useState, useContext } from 'react';

import { Title } from './components/blocks/Title';
import { ControlBox } from './components/blocks/ControlBox';
import { TableBox } from './components/blocks/TableBox';
import { ListContext } from './components/providers/ListProvider';

const App = React.memo(() => {
  const { setList } = useContext(ListContext);

  const [data, setData] = useState({
    item: '',
    price: '',
    amount: '',
  });

  const handleChange = (event) => {
    setData((data) => ({
      ...data,
      [event.target.id]: event.target.value,
    }));
  };

  const handleClick = (event) => {
    setList((list) => list.concat(data));

    setData({
      item: '',
      price: '',
      amount: '',
    });
  };

  return (
    <div className="App">
      <Title>ショッピングリスト</Title>
      <ControlBox
        handleChange={handleChange}
        handleClick={handleClick}
        data={data}
      />
      <TableBox />
    </div>
  );
});

export default App;
