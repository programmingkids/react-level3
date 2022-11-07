import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback, useMemo} from 'react';

/*
App
 ChildA
  ChildB
   ChildC
 ChildD
  ChildE
*/

// 足し算の関数を定義
function add(a, b) {
  console.log("this is add");
  return a + b;
}

const App = React.memo(() => {
  console.log("this is App");
  
  const [number, setNumber] = useState(0);
  const handleClick = useCallback(() => {
    setNumber(number => number + 1);
  }, []);
  
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  const handleChangeNum1 = (e) => setNum1(parseInt(e.target.value));
  const handleChangeNum2 = (e) => setNum2(parseInt(e.target.value));
  
  //const result = add(num1, num2);
  const result = useMemo(() => add(num1, num2), [num1, num2]);
  
  return (
    <div className="App">
      <div>App</div>
      <div>number : {number}</div>
      <div>
        <button onClick={handleClick}>カウントアップ</button>
      </div>
      <div>
        <input type="text" size="3" onChange={handleChangeNum1} />
        +
        <input type="text" size="3" onChange={handleChangeNum2} />
        &nbsp;=&nbsp;
        {result}
      </div>
      
      <ChildA number={number} />
      <ChildD handleClick={handleClick} />
    </div>
  );
});

const ChildA = React.memo(({number}) => {
  console.log("this is ChildA");
  
  return (
    <div className="childA">
      <div>ChildA</div>
      <div>number : {number}</div>
      <ChildB />
    </div>
  );
});

const ChildB = React.memo(() => {
  console.log("this is ChildB");
  
  return (
    <div className="childB">
      <div>ChildB</div>
      <ChildC />
    </div>
  );
});

const ChildC = React.memo(() => {
  console.log("this is ChildC");
  
  return (
    <div className="childC">ChildC</div>
  );
});

const ChildD = React.memo(({handleClick}) => {
  console.log("this is ChildD");
  
  return (
    <div className="childD">
      <div>ChildD</div>
      <ChildE />
    </div>
  );
});

const ChildE = React.memo(() => {
  console.log("this is ChildE");
  
  return (
    <div className="childE">ChildE</div>
  );
});

export default App;
