import './App.css';
import React, { useState } from 'react';

/*
App
 ChildA
  ChildB
   ChildC
 ChildD
  ChildE
*/

const App = React.memo(() => {
  console.log('this is App');

  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div className="App">
      <div>App</div>
      <div>number : {number}</div>
      <div>
        <button onClick={handleClick}>カウントアップ</button>
      </div>
      <ChildA number={number} />
      <ChildD />
    </div>
  );
});

const ChildA = React.memo(({ number }) => {
  console.log('this is ChildA');

  return (
    <div className="childA">
      <div>ChildA</div>
      <div>number : {number}</div>
      <ChildB />
    </div>
  );
});

const ChildB = React.memo(() => {
  console.log('this is ChildB');

  return (
    <div className="childB">
      <div>ChildB</div>
      <ChildC />
    </div>
  );
});

const ChildC = React.memo(() => {
  console.log('this is ChildC');

  return <div className="childC">ChildC</div>;
});

const ChildD = React.memo(() => {
  console.log('this is ChildD');

  return (
    <div className="childD">
      <div>ChildD</div>
      <ChildE />
    </div>
  );
});

const ChildE = React.memo(() => {
  console.log('this is ChildE');

  return <div className="childE">ChildE</div>;
});

export default App;
