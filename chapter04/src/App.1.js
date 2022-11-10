import './App.css';
import {useReducer} from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        カウント：{state.count}
      </div>
      <div>
        <button onClick={() => dispatch({type: 'decrement'})}>カウントダウン</button>
        <button onClick={() => dispatch({type: 'increment'})}>カウントアップ</button>
      </div>
    </>
  );
};

export default App;
