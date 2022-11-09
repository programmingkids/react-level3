import './App.css';
import React, {useState, useContext} from 'react';

import {Title} from './components/blocks/Title';
import {ControlBox} from './components/blocks/ControlBox';
import {TableBox} from './components/blocks/TableBox';
import {MyContext} from './components/providers/MyProvider';

const App = React.memo(() => {
  const {setList} = useContext(MyContext);
  
  const [data, setData] = useState({
    item : '',
    price : '',
    amount : '',
  });
  
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
      <TableBox />
    </div>
  );
});

export default App;
