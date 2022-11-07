import logo from './logo.svg';
import './App.css';
import {useState} from 'React';

const App = () => {
  const [number, setNumber] = useState(0);
  const onHandleClick = () => {
    setNumber(number => number + 1);
  }
  
  return (
    <div className="App">
      

    </div>
  );
}

const ChildA = () => {

};

export default App;
