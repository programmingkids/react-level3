import './App.css';
import React, {useState} from 'react';

import {Title} from './components/blocks/Title';
import {ControlBox} from './components/blocks/ControlBox';
import {TableBox} from './components/blocks/TableBox';

const App = React.memo(() => {
  const [data, setData] = useState({
    item : '',
    price : '',
    amount : '',
  });
  
  const [list, setList] = useState([]);
  
  const handleChange = (event) => {
    const newData = {...data};
    newData[event.target.id] = event.target.value;
    setData(prevData => newData);
  };
  
  const handleClick = (event) => {
    setList(list => list.concat(data));
    
    setData({
      item : '',
      price : '',
      amount : '',
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
      <TableBox list={list} />
    </div>
  );
});

export default App;
